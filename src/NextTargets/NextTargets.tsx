import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import DataService from '../Services/DataService';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Target } from '../types/types';
import Loader from '../Loader/Loader';
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

// Modal.setAppElement('#root');


// interface Target {
//     description: string|number;
//     projected_weight: string|number;
//     obtained_weight: string|number;
//     resource?: string
// }

function NextTargets() {


  // 
  const [next_year_targets, setNextYearTargets] = useState<Target[]>([])
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [newtarget, setNewTarget] = useState<string|number>("");
  const [newweight, setNewWeight] = useState<string|number>(0);
  const [newresource, setNewReource] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [total_weight_projected, setTotalprojectedWeight] = useState<string|number>(0);
  const appraiseeid = useSelector((state: RootState) =>state.data.appraisee_id );
  const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);
  const navigate = useNavigate();


  

  useEffect(() => {
    loadSectionGInformation();
  }, [])


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }


  const saveNewTarget = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let totaltagwght = parseFloat(total_weight_projected.toString()) + parseFloat(newweight.toString());

        if(totaltagwght > 100 ){
          Swal.fire(
            'Error!',
            'Projected weight CANNOT be more than 100%',
            'error'
          )
          return;
        }else{
          addToProjectedWeight("add", parseFloat(newweight.toString()));
          let tempnewtarget : Target = {
              description: newtarget,
              projected_weight: newweight,
              obtained_weight: "",
              resource: newresource,
          }
          setNextYearTargets([...next_year_targets, tempnewtarget])
          setNewTarget("")
          setNewWeight("")
          setNewReource("")
          setIsOpen(false)
        }
  }


  const removeTarget = (idx: number) => {
    setNextYearTargets((state) => state.filter((_, index) => index !== idx));
  }


  const loadSectionGInformation = () => {
    DataService.loadSectionGInformation().then(response => {
      console.log(response.data.data.data)
      if(response.data.status == 'success'){
        if(response.data.data.data != null && Array.isArray(response.data.data.data)){
          setNextYearTargets(response.data.data.data);
            let theprevtargets = response.data.data.data;
            let totalweights = 0;
            for(var i=0; i<theprevtargets.length; i++){
              totalweights += parseFloat(theprevtargets[i].projected_weight.toString());
            }
            setTotalprojectedWeight(totalweights);
        }else{
          setNextYearTargets([]);
        }
      }
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


  const saveInformation = (savetype: number) => {
    if(next_year_targets.length <= 0) {
      Swal.fire(
        'Error!',
        'Please add next year job objectives to save. ',
        'error'
      )
      return;
    }
        Swal.fire({
            title: 'Next Year Job Objectives',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                DataService.saveSectionGInformation(next_year_targets, savetype, appraiseeid).then(response => {
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
        <h2>Add New Target For Next Year</h2>
        <div className=''>
                <form onSubmit={(event) =>saveNewTarget(event)}>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Target</label>
                            <textarea className='form-control' required onChange={(event) => setNewTarget(event.target.value)} name='target' rows={3}></textarea>
                        </div>
                    </div>

                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Weight (Projected)</label>
                            <input className='form-control' required onChange={(event) => setNewWeight(event.target.value)} name='target'  />
                        </div>
                    </div>

                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label>Resource </label>
                            <textarea className='form-control' onChange={(event) => setNewReource(event.target.value)} ></textarea>
                        </div>
                    </div>

                    <div className="row col-md-12">
                        <div className='col-md-6'>
                        <button type='submit' className='btn btn-primary btn-round col-md-10'>Save Target</button>
                        </div>

                        <div className='col-md-6'>
                        <button type='button' className='btn btn-secondary btn-round col-md-6' onClick={closeModal}>close</button>
                        </div>
                        

                        
                    </div>
                </form>
        </div>
      </Modal>
    )
  }





  const renderTargetRecord = () => {
    if((next_year_targets != null) && Array.isArray(next_year_targets)){
        return next_year_targets.map((target, index) => {
            return (
                <tr>
                    <td>{target.description}</td>
                    <td>{target.projected_weight}</td>
                    <td>{target.resource}</td>
                    <td>
                        <button className='btn btn-sm' onClick={() => removeTarget(index)}><i className='fa fa-trash'></i></button>
                    </td>
                </tr>
            )
        })
    }
  }
  return (
        <div style={{marginBottom: 40}}>
            <Loader isOpen={loading} loading={loading} />
            <div className="container" >
            <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION G: SETTING JOB OBJECTIVES/TARGETS FOR NEXT YEAR</h4>
                    </div>
                    <div className="card-body">

                      <InfoLabel isSupervisor={isSupervisor}></InfoLabel>
                       <div className='card'>
                            <div className='card-body'>
                                <p>The supervisor and employee shall engage in a collegial dialogue to set key job objectives/targets against which employee performance will be evaluated at the end of the next appraisal year </p>
                            </div>
                       </div>


                       <div className=''>
                            <button disabled={isSupervisor == true ? false : true} className='btn btn-secondary btn-small btn-round col-md-2'  style={{marginTop: 30, marginBottom: 20}} onClick={openModal}>Add New Target</button>
                            <table className='table table-striped'>
                                <thead>
                                    <th>TARGET</th>
                                    <th>WEIGHT(PROJECTED)</th>
                                    <th>RESOURCE(S)</th>
                                    <th>ACTION</th>
                                </thead>

                                <tbody>
                                    {renderTargetRecord()}
                                </tbody>
                            </table>
                       </div>


                     
                       <button onClick={() => saveInformation(1)} disabled={isSupervisor == true ? false : true} className='btn btn-danger btn-round col-md-3'  style={{marginTop: 30, marginRight: 10}}><i className='fa fa-save'></i> Save Target</button>
                       <button onClick={() => saveInformation(0)} disabled={isSupervisor == true ? false : true} className='btn btn-warning btn-round col-md-3'  style={{marginTop: 30}}><i className='fa fa-save'></i> Save Target & Continue Later</button>
                    </div>
                </div>
            </div>

            

            {modalTarget()}
            
        </div>
  )
}

export default NextTargets