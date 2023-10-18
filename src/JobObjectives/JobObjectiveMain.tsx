import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { Target } from '../types/types';
import DataService from '../Services/DataService';
import Loader from '../Loader/Loader';
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setSectionCInfo } from '../store/actions/dataAction';
import InfoLabel from '../InstructionLabel/InfoLabel';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
    //   right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80vw'
    },
};



function JobObjectiveMain() {


  // let subtitle: any ="";
  const [targets, setTargets] = useState<Array<Target>>([])
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [newtarget, setNewTarget] = useState<string|number>("");
  const [weight_projected, setNewWeight] = useState<string|number>(0);
  const [total_weight_projected, setTotalprojectedWeight] = useState<string|number>(0);
  const [weight_obtained, setWeightObtained] = useState<any>(0);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>(0);
  const [resource, setResource] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate()
  const dispatch : AppDispatch = useDispatch();
  const appraiseeid = useSelector((state: RootState) => state.data.appraisee_id);
  const isHod = useSelector((state: RootState) => state.data.isHod);
  const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);


  useEffect(() => {
    loadPreviousSubmission();
  }, [])


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const loadPreviousSubmission = () => {
    DataService.loadSectionCInformation().then((response) => {
      setLoading(false);
        if(response.data.status == 'success'){
          if(response.data.data != null && Array.isArray(response.data.data)){
            setTargets(response.data.data);
            let theprevtargets = response.data.data;
            let totalweights = 0;
            for(var i=0; i<theprevtargets.length; i++){
              totalweights += parseFloat(theprevtargets[i].projected_weight.toString());
            }
            setTotalprojectedWeight(totalweights);
          }else{
            setTargets([]);
          }
            // setTargets(response.data.data);
        }else{
          console.log(response.data)
        }
    }).catch(error => {
      setLoading(false);
      console.log(error);
    })
  }


  const addToProjectedWeight = (operation: string, value: number, editval: number = 0) => {
    if(operation == "add"){
      let totpro = parseFloat(total_weight_projected.toString()) + value;
      setTotalprojectedWeight(totpro);
    }else if(operation == "subtract"){
      let totpro = parseFloat(total_weight_projected.toString()) - value;
      setTotalprojectedWeight(totpro);
    }else if(operation == "edit"){
      let totpro = parseFloat(total_weight_projected.toString()) - editval;
      totpro = totpro + value;
      setTotalprojectedWeight(totpro);
    }
    else{
      console.log("no operation specified");
    }
  }


  const saveNewTarget = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // alert(total_weight_projected)
        let totaltagwght = parseFloat(total_weight_projected.toString()) + parseFloat(weight_projected.toString());

        if(totaltagwght > 100 ){
          Swal.fire(
            'Error!',
            'Projected weight CANNOT be more than 100%',
            'error'
          )
          return;
        }
        else{
            addToProjectedWeight("add", parseFloat(weight_projected.toString()));
            let tempnewtarget : Target = {
                description: newtarget,
                projected_weight: weight_projected,
                obtained_weight: weight_obtained,
                resource: resource
            }
            if(!isEditting){
                setTargets([...targets, tempnewtarget])
            }else{
                let thetargets = targets.map((item:Target, index) => {
                    if (index == editIndex) {
                      return {...item, target: newtarget, projected_weight: weight_projected, obtained_weight: weight_obtained, resource: resource};
                    }
                    return item;
                })
                setTargets(thetargets);
                setIsEditting(false);
            }
            setNewTarget("");
            setNewWeight("");
            setResource("");
            setWeightObtained("");
            setIsOpen(false);
        } 
  }


  const removeTarget = (idx: number) => {
    let target = targets.find((_, index) => index == idx );
    if(target){
      addToProjectedWeight("substract",parseFloat(target.projected_weight.toString()));
    }
    
    setTargets((state) => state.filter((_, index) => index !== idx));

  }

  const editTarget = (idx: number) => {
    let target = targets.find((_, index) => index == idx );
    if(target != undefined){
       
        setNewTarget(target.description);
        // let prevProjWeight = parseFloat(total_weight_projected.toString()) - parseFloat(target.projected_weight.toString())
        // let totaltagwght = parseFloat(total_weight_projected.toString()) + parseFloat(weight_projected.toString());
        setNewWeight(target.projected_weight);
        setWeightObtained(target?.obtained_weight);
        setResource(target.resource)
    }
    setEditIndex(idx);
    setIsEditting(true);
    setIsOpen(true);
  }


  const saveInformation = () => {
    dispatch(setSectionCInfo(targets))
    if(targets.length <= 0) {
      Swal.fire(
        'Error!',
        'Please add job objectives to save. ',
        'error'
      )
      return;
    }
    Swal.fire({
        title: 'Save Job Objectives',
        text: "Confirm to save details",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Save!'
    }).then((result) => {
        if (result.isConfirmed) {
            setLoading(true);
            DataService.saveSectionCInformation(targets, 1, appraiseeid).then(response => {
                if(response.data.status == 'success'){
                    setLoading(false);
                    Swal.fire(
                        'Success!',
                        response.data.message,
                        'success'
                    )
                }else{
                    setLoading(false);
                    Swal.fire(
                        'Error!',
                        response.data.message,
                        'error'
                    )
                }
            }).catch(error => {
                setLoading(false);
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            })
        }else{
            Swal.fire(
                'Cancelled!',
                'You have cancelled action. Job Objectives not submitted',
                'info'
              )
        }
    })
}

const saveAndContinueLater = () => {
  dispatch(setSectionCInfo(targets))
  if(targets.length <= 0) {
    Swal.fire(
      'Error!',
      'Please add job objectives to save. ',
      'error'
    )
    return;
  }
  Swal.fire({
      title: 'Save Job Objectives',
      text: "Confirm to save details",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
  }).then((result) => {
      if (result.isConfirmed) {
          setLoading(true);
          DataService.saveSectionCInformation(targets, 0, appraiseeid).then(response => {
              if(response.data.status == 'success'){
                  setLoading(false);
                  Swal.fire(
                      'Success!',
                      response.data.message,
                      'success'
                  )
              }else{
                  setLoading(false);
                  Swal.fire(
                      'Error!',
                      response.data.message,
                      'error'
                  )
              }
          }).catch(error => {
              setLoading(false);
              Swal.fire(
                  'Error!',
                  error.message,
                  'error'
              )
          })
      }else{
          Swal.fire(
              'Cancelled!',
              'You have cancelled action. Job Objectives not submitted',
              'info'
            )
      }
  })
}


  

  const modalTarget = () => {
    return (
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Add Job Objective</h2>
        <div className='col-md-12'>
                <form onSubmit={(event) =>saveNewTarget(event)}>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Target</label>
                            <textarea className='form-control' value={newtarget} required onChange={(event) => setNewTarget(event.target.value)} name='target' rows={3}></textarea>
                        </div>
                    </div>

                    

                    <div className='row col-md-12'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Weight (Projected)</label>
                                <input type='number' className='form-control' disabled={isSupervisor==true ? false : true} required value={weight_projected} onChange={(event) => setNewWeight(event.target.value)} name='weight_projected'  />
                                <small style={{color: 'red', fontSize: 14}}>Eg. 20 or 80 or 100 -- without % sign</small>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Weight (Obtained) In Percentage</label>
                                <input type='number' className='form-control' disabled={isSupervisor==true ? false : true}  value={weight_obtained} required onChange={(event) => setWeightObtained(event.target.value)} name='weight_obtained'  />
                                <small style={{color: 'red', fontSize: 14}}>Eg. 20 or 80 or 100 -- without % sign</small>
                            </div>
                        </div>

                        
                    </div>

                    <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Resources Required</label>
                                <textarea className='form-control' value={resource} required onChange={(event) => setResource(event.target.value)} name='target' rows={3}></textarea>
                            </div>
                        </div>

                    <div className="row col-md-12">
                      <div className='col-md-6'>
                          <button type='submit' className='btn btn-primary btn-round btn-block col-md-10'>Save Target</button>
                      </div>

                      <div className='col-md-6'>
                          <button type='button' className='btn btn-secondary btn-round btn-block col-md-6' onClick={closeModal}>close</button>
                      </div>
                    </div>
                </form>
        </div>
      </Modal>
    )
  }





  const renderTargetRecord = () => {
    if((targets != null) && targets != undefined && targets.length > 0){
        return targets.map((target, index) => {
            return (
                <tr key={index}>
                    <td>{target.description}</td>
                    <td>{target.projected_weight}</td>
                    <td>{target.obtained_weight}</td>
                    <td>{target.resource}</td>
                    <td>
                        <button className='btn btn-sm btn-info' onClick={() => editTarget(index)}><i className='fa fa-edit'></i></button>
                        <button className='btn btn-sm btn-danger' style={{marginLeft: 10}} onClick={() => removeTarget(index)}><i className='fa fa-trash'></i></button>
                    </td>
                </tr>
            )
        })
    }
  }
  return (
        <div style={{marginBottom: 40}}>
          <Loader loading={loading} isOpen={loading}/>
            <div className="container" >
            <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION C - JOB TARGETS/OBJECTIVES FOR THE CURRENT YEAR</h4>
                    </div>
                    <div className="card-body">
                       <div className='card'>
                            <div className='card-body'>

                            <InfoLabel isSupervisor={isSupervisor}></InfoLabel>
                            <p>
                            The appraiser and appraisee should meet to set performance targets/objectives for the year. This meeting should be held before the end of
                            the second week in August. 
                            </p>

                            <p>The targets/objectives should be reviewed periodically, and feedback provided to enable staff to achieve the
                            set objectives. The targets/objectives should reflect the Unit’s/Department’s action plan in line with University/College Strategic Plan.
                            </p>

                            <p>The targets must be SMART (i.e. Specific, Measurable, Realistic, Agreeable, Timebound).</p>
               
                            </div>
                       </div>


                       <div className='table-responsive'>
                            <button className='btn btn-secondary btn-small btn-round col-md-2' disabled={isHod==true ? true: false} style={{marginTop: 30, marginBottom: 20}} onClick={openModal}>Add New Target</button>
                            <table className='table table-striped'>
                                <tr>
                                    <th>TARGET</th>
                                    <th>WEIGHT(PROJECTED)</th>
                                    <th>WEIGHT(OBTAINED)</th>
                                    <th>RESOURCE REQUIRED</th>
                                    <th>ACTION</th>
                                </tr>

                                <tbody>
                                    {renderTargetRecord()}
                                </tbody>
                            </table>
                       </div>


                     
                       <button onClick={saveInformation} disabled={isHod == true ? true : false} className='btn btn-danger btn-round col-md-3'  style={{marginTop: 30}}><i className='fa fa-save'></i> Save Target</button>
                       <button type="button" disabled={isHod == true ? true : false} style={{marginLeft: 10, marginTop: 30}}  onClick={saveAndContinueLater}  className="btn btn-warning round col-md-3 ">Save & Continue Later</button>
                    </div>
                </div>
            </div>

            

            {modalTarget()}
            
        </div>
  )
}

export default JobObjectiveMain