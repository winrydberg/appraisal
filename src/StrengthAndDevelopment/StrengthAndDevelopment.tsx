// import React from 'react'
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import DataService from '../Services/DataService';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import InfoLabel from '../InstructionLabel/InfoLabel';

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
interface ComposedData {
    description: string;
    type: string;
}
function StrengthAndDevelopment() {

    const navigate = useNavigate();
    const [devareas, setDevelopmentAreas] = useState<Array<ComposedData>>([]);
    const [newarea, setNewArea] = useState<string>('');
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [modalIsOpenStrength, setIsOpenStrength] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const isSupervisor: boolean = useSelector((state: RootState) => state.data.isSupervisor);


    useEffect(() => {
        getPreviusSubmission();
    }, []);




    // let subtitle: any ="";

    function openModal() {
        setIsOpen(true);
    }

    function openStrengthModal(){
        setIsOpenStrength(true);
    }
    
    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setIsOpen(false);
        setIsOpenStrength(false);
    }


    const setNewDevArea = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let thearea = {
            description: newarea,
            type: "dev"
        }
        setDevelopmentAreas([...devareas, thearea]);
        setNewArea("");
        setIsOpen(false);
    }


    const setNewStrongHoldOfEmployee = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let thearea = {
            description: newarea,
            type: "strength"
        }
        setDevelopmentAreas([...devareas, thearea]);
        setNewArea("");
        setIsOpenStrength(false);
    }


    const removeArea = (idx: number) => {
        setDevelopmentAreas((state) => state.filter((_, index) => index !== idx));
    }


    const getPreviusSubmission = () => {
        DataService.loadSectionFInformation().then(response => {
            if(response.data.status =='success'){
                if(response.data.data.data != null){
                    setDevelopmentAreas(response.data.data.data);
                }else{
                    setDevelopmentAreas([]);
                }
            }
        })
    }


    const saveInformation = (submittype: string|number) => {
        if(devareas.length <=0){
            Swal.fire(
                'Error!',
                "Oops. Add one or more areas for development to save",
                'error'
            )
            return;
        }
        Swal.fire({
            title: 'Areas For Development Info',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                
                DataService.saveSectionFInformation(devareas, submittype).then(response => {
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
                    'You have cancelled action. Areas for development not submitted. Please try again',
                    'info'
                  )
            }
        })
    }

    const strengthModal = () => {
        return (
            <Modal
                isOpen={modalIsOpenStrength}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4>New Strength </h4>
                <div className=''>
                        <form onSubmit={(event) =>setNewStrongHoldOfEmployee(event)}>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>Enter Employee Strength</label>
                                    <textarea className='form-control'  required onChange={(event) => setNewArea(event.target.value)} name='target' rows={10}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type='button' className='btn btn-secondary btn-round col-md-2' onClick={closeModal}>close</button>
                                <button type='submit' className='btn btn-primary btn-round col-md-5' style={{marginLeft: 20}}>Add</button>
                            </div>
                        </form>
                </div>
          </Modal>
        )
      }


    const areaForDevModal = () => {
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4>New Area For Development</h4>
                <div className=''>
                        <form onSubmit={(event) =>setNewDevArea(event)}>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>Enter an area employee needs development</label>
                                    <textarea className='form-control'  required onChange={(event) => setNewArea(event.target.value)} name='target' rows={10}></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type='button' className='btn btn-secondary btn-round col-md-2' onClick={closeModal}>close</button>
                                <button type='submit' className='btn btn-primary btn-round col-md-5' style={{marginLeft: 20}}>Add</button>
                            </div>
                        </form>
                </div>
          </Modal>
        )
      }


    const renderDevelopmentAreas = () => {
        return devareas.map((elem, index) => {
            return (<li className="list-group-item">
                <span>
                    <span>{index+1}. {elem.description} </span>
                    <br />
                    <small style={{color: elem.type.toUpperCase() =="DEV" ? 'red' : 'green', fontSize: 10,fontWeight:'bold' }}>{elem.type.toUpperCase() == 'DEV' ? 'AREA FOR DEVELOPMENT' : elem.type.toUpperCase()}</small>
                </span>
                <button onClick={() => removeArea(index)} className='btn btn-sm btn-danger pull-right'><i className='fa fa-trash'></i> Remove</button></li>)
        })
    }


    const renderSaveButton = () => {
        if(devareas.length > 0){
            return  <button disabled={isSupervisor == true ? false : true}  onClick={() => saveInformation(1)} className='btn btn-danger btn-round col-md-2'   style={{marginTop: 30}}><i className='fa fa-save'></i> Save Changes</button>
        }
    }


  return (
    <div style={{paddingBottom: 40}}>
        <Loader loading={loading} isOpen={loading} />
        <div className="container">
        <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
            
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">SECTION F - SPECIFIC EXAMPLES AND/OR OTHER COMMENTS</h4>
                </div>
                <div className="card-body">

                    <InfoLabel isSupervisor={isSupervisor}></InfoLabel>
                    
                    <p>Strengths and Areas for Development  </p>

                    <div className='col-md-12'>
                        <button className='btn btn-success btn-round col-md-3' disabled={isSupervisor == true ? false : true}  style={{marginTop: 30, marginBottom: 20, marginRight: 10}} onClick={openStrengthModal}>Add Strength</button>
                        <button className='btn btn-secondary btn-round col-md-3' disabled={isSupervisor == true ? false : true}  style={{marginTop: 30, marginBottom: 20}} onClick={openModal}>Add Area For Development</button>
                        <ul className="list-group">
                            {renderDevelopmentAreas()}
                        </ul>
                    </div>

                    <div className='col-md-12'>
                       {renderSaveButton()}
                    </div>
                </div>
            </div>
        </div>

        {areaForDevModal()}
        {strengthModal()}
    </div>
  )
}

export default StrengthAndDevelopment