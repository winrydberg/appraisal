import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import DataService from '../Services/DataService';
import { TrainingArea } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Loader from '../Loader/Loader';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
    //   right: 'auto',
      bottom: 'auto',
    //   marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

function TrainingAndDevelopment() {

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [appraisee_modal, setAppraiseModalOpen] = useState<boolean>(false);

    const [trainingdevs, setTrainingDev] = useState<Array<TrainingArea>>([]);
    const [newtraining, setTraining] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const appraiseeid = useSelector((state: RootState) => state.data.appraisee_id);
    const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);
    const [hadtraining, setHadTraining] = useState<string>("");
    const [new_appraisee_training, setNewAppraiseetraining] = useState<string>("");
    const [appraisee_trainings, setAppraiseetrainings] = useState<Array<string>>([]);
    const navigate = useNavigate();


    useEffect(() => {
        getSectionInfo();
        getAppraiseePreviousTrainingResponse();
    }, [])

    // let subtitle: any ="";

    function openModal() {
        setIsOpen(true);
    }

    function openAppraiseeTrainingModal() {
        setAppraiseModalOpen(true);
    }
    
    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    function closeAppraiseeTrainingModal() {
        setAppraiseModalOpen(false);
    }


    const addNewTraining = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        let ta : TrainingArea = {
            description: newtraining
        }
        setTrainingDev([...trainingdevs, ta])
        setTraining("");
        setIsOpen(false);
    }

    const addAppraiseeTrainingTaken = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAppraiseetrainings([...appraisee_trainings, new_appraisee_training])
        setAppraiseModalOpen(false);
        setNewAppraiseetraining("")
    }


    const getAppraiseePreviousTrainingResponse  = () => {
        DataService.getAppraiseeTrainingInfo().then(response => {
            if(response.data.status == 'success'){
                if(Array.isArray(response.data.trainings)){
                    setAppraiseetrainings(response.data.trainings);
                }
                setHadTraining(response.data.hadtraining == '1' ? "Yes" : "No")
            }
        }).catch(error => {
            console.log(error);
        })
    }





    const setNewTraining = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTraining(event.target.value);
    }


    const removeArea = (idx: number) => {
        setTrainingDev((state) => state.filter((_, index) => index !== idx));
    }

    const  handleAppraiseeHadTraining = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHadTraining(event.target.value);
    }

    const removeAppraiseeTraining = (idx: number) => {
        setAppraiseetrainings((state) => state.filter((_, index) => index !== idx));
    }

    const rendertrainingAreas = () => {
        return trainingdevs.map((elem, index) => {
            return (
                    <li className="list-group-item">
                        <span>{index+1}. {elem.description}</span>
                        <button onClick={() => removeArea(index)} className='btn btn-sm btn-danger pull-right'><i className='fa fa-trash'></i> Remove </button>
                    </li>
            );
        })
    }





    const getSectionInfo = () => {
        DataService.loadSectionHInformation().then(response => {
            if(response.data.status == 'success'){
                if(response.data.data.data != null){
                    setTrainingDev(response.data.data.data);
                }
            }
        })
    }

    const saveInformation = (submittype: number) => {
        if(trainingdevs.length <=0){
            Swal.fire(
                'Error!',
                "Oops. Add training ares for employee",
                'error'
            )
            return;
        }
        Swal.fire({
            title: 'Training Requirement',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                
                DataService.saveSectionHInformation(trainingdevs, submittype, appraiseeid).then(response => {
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
                    'You have cancelled action. Areas for training not submitted. Please try again',
                    'info'
                  )
            }
        })
    }


    const saveAppraiseeTrainingResponse = () => {
        if(hadtraining == "Yes"){
            if(Array.isArray(appraisee_trainings) && appraisee_trainings.length <=0){
                Swal.fire(
                    'Error!',
                    "Please add training(s) undertaken in the past year",
                    'error'
                )
                return;
            }
        }
        Swal.fire({
            title: 'Training Requirement',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                
                DataService.saveAppraiseeTrainingResponse(hadtraining, appraisee_trainings).then(response => {
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
                    'You have cancelled action. Areas for training not submitted. Please try again',
                    'info'
                  )
            }
        })
    }

    const trainingModal = () => {
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4>Add New Training Area</h4>
                <div className=''>
                        <form onSubmit={(event) =>addNewTraining(event)}>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>Training Area</label>
                                    <textarea className='form-control' onChange={(event) => setNewTraining(event)} name='target' rows={7}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type='button' className='btn btn-secondary btn-round col-md-2' onClick={closeModal}>close</button>
                                <button type='submit' className='btn btn-primary btn-round col-md-3' style={{marginLeft: 20}}>Add To List</button>
                            </div>
                        </form>
                </div>
          </Modal>
        )
    }


    const appraiseeTrainingTaken = () => {
        return (
            <Modal
                isOpen={appraisee_modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeAppraiseeTrainingModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4>Add Trianings Undertaken</h4>
                <div className=''>
                        <form onSubmit={addAppraiseeTrainingTaken}>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>Training Area</label>
                                    <textarea className='form-control' onChange={(event) => setNewAppraiseetraining(event.target.value)} name='target' rows={7}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type='button' className='btn btn-secondary btn-round col-md-2' onClick={closeAppraiseeTrainingModal}>close</button>
                                <button type='submit' className='btn btn-primary btn-round col-md-3' style={{marginLeft: 20}}>Add To List</button>
                            </div>
                        </form>
                </div>
          </Modal>
        )
    }

    const  renderTrainingUndertaken = () => {
        if(hadtraining === "Yes"){
            return (
                <div className='col-md-4'>
                    <button onClick={() => openAppraiseeTrainingModal()} className='btn btn-primary btn-block'> Add Training Taken</button>
                </div>
            )
        }

    }

    const renderAppraiseePeviousYearTraining = () => {
        if(appraisee_trainings != null && Array.isArray(appraisee_trainings)){
            return appraisee_trainings.map((element: string, index: number) => {
                return (
                    <li className="list-group-item">{ index + 1 } . {element} <button className='btn btn-sm btn-danger pull-right' onClick={() => removeAppraiseeTraining(index)}><i className='fa fa-trash '></i></button></li>
                )
            })
        }
    }

    const renderTraining = () => {
        if(isSupervisor == true ){
            return renderSupervisorTraining()
        }else{
            return (
                   <div className='card-body'>
                        <div className='col-md-12'>
                            <p><strong></strong> Have you taken any training in the past year? </p>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_targets" value="Yes"
                                    className="custom-control-input" checked={hadtraining == "Yes" ?  true : false} onChange={(event) => handleAppraiseeHadTraining(event)} />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>Yes</span></span>
                                </label>
                            </div>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_targets" value="No" checked={hadtraining == "No" ?  true : false} onChange={(event) => handleAppraiseeHadTraining(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>No</span></span>
                                </label>
                            </div>
                        </div>


                        {renderTrainingUndertaken()}

                        {appraiseeTrainingTaken()}

                        <ul className="list-group" style={{marginTop: 30}}>
                            {renderAppraiseePeviousYearTraining()}  
                        </ul>
                        
                        <button  onClick={() => saveAppraiseeTrainingResponse()} className='btn btn-danger btn-round col-md-2'   style={{marginTop: 30}}><i className='fa fa-save'></i> Save & Continue</button>
                   </div>
            )
        }
    }



    const renderSupervisorTraining = () => {
        return (
            <div className="card-body">
                <p className='card-text completed-by'>[To be completed by the appraiser in discussion with the appraisee]</p>
                <div className='card'>
                    <div className='card-body'>
                        <p>With reference to the performance evaluation and job description what competencies/skills does the employee lack, which contributed to his/her inability to meet all the targets or will enhance the performance of the employee? </p>
                        <p>What specific training would you recommend to enable the employee to acquire the competencies needed to improve on performance in the ensuring year?</p>
                    </div>
                </div>

                <button className='btn btn-secondary btn-small btn-round col-md-2' disabled={isSupervisor == true ? false: true}  style={{marginTop: 30, marginBottom: 20}} onClick={openModal}>Add Training</button>

                <div className='col-md-12'>
                    <ul className="list-group">
                        { rendertrainingAreas() }
                    </ul>
                </div>

                <button disabled={isSupervisor == true ? false: true} onClick={() => saveInformation(1)} className='btn btn-danger btn-round col-md-2'   style={{marginTop: 30}}><i className='fa fa-save'></i> Save & Continue</button>
                {/* <button onClick={() => saveInformation(1)} className='btn btn-danger btn-round col-md-2'   style={{marginTop: 30}}><i className='fa fa-save'></i> Save & Continue</button> */}
            </div>
        )
    }


    return (
            <div style={{marginBottom: 40}}>
                <Loader isOpen={loading} loading={loading} />
                <div className="container" >
                <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
            
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">SECTION H: TRAINING AND DEVELOPMENT NEEDS</h4>
                        </div>
                        
                        {renderTraining()}
                    </div>
                </div>
                {trainingModal()}
            </div>
    )
}

export default TrainingAndDevelopment