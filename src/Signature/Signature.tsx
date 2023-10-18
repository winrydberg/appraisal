import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import Swal from 'sweetalert2'
import { Supervisor } from '../types/types'
import Loader from '../Loader/Loader'
import DataService from '../Services/DataService'

function Signature() {

  
  const [supervisor_signed, setSupervisorSignature] = useState<string>('')
  const [hod_signed, setHodSignature] = useState<string>('')
  const [appraisee_received_job_description, setAppraiseeReceivedJobDescription] = useState<string>("");
  const [appraisee_received_resources, setAppraiseeReceivedResources] = useState<string>("");
  const [appraisee_agree, setAppraiseeAgreeToAppraisal] = useState<string>("");
  const [comment, setAppraiseeComment] = useState<string>("");
//   const [appraisee_comment, setAppraiseeComment] = useState<string>("")
  const [hod_signdate, setHOdSignedDate] = useState<string>(new Date().toDateString())
  const [signed_date, setSignedDate] = useState<string>(new Date().toDateString())
  const navigate = useNavigate()
  const supervisor : Supervisor = useSelector((state:RootState) => state.data.supervisor)
  const hod : Supervisor = useSelector((state:RootState) => state.data.hod)
  const [loading, setLoading] = useState<boolean>(false)
  const sectionh = useSelector((state: RootState) => state.data.sectionh);


  useEffect(() => {
    getSectionIInfo();
  }, []);



  const isHod = useSelector((state: RootState) => state.data.isHod);
  const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);


  const handleAppraiseeReceivedJobDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppraiseeReceivedJobDescription(event.target.value);
  }

  const handleAppraiseeReceivedResources = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppraiseeReceivedResources(event.target.value);
  }

  const handleAppraiseeAgreed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppraiseeAgreeToAppraisal(event.target.value);
  }

  const setSupervisorSigned = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == "on"){
        setSupervisorSignature("Yes");
    }else{
        setSupervisorSignature("No");
    }
    
  }

  const setHodSigned = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value == "on"){
        setHodSignature("Yes");
    }else{
        setHodSignature("No");
    }
    
  }

  const saveInformation = () => {
    if(isSupervisor){
        saveSupervisorSignature();
    }else if(isHod){
        saveHodSignature();
    }else{
        saveAppraiseeAcceptance();
    }
}


const getSectionIInfo = () => {
    DataService.loadSectionIInformation().then(response => {
        if(response.data.status == 'success'){
            setSupervisorSignature(response.data.data.supervisor_signed);
            setSignedDate(response.data.data.supervisor_signdate);
            setAppraiseeReceivedJobDescription(response.data.data.appraisee_rcvd_job_desc);
            setAppraiseeReceivedResources(response.data.data.appraisee_rcvd_resources);
            setAppraiseeAgreeToAppraisal(response.data.data.appraisee_agree)
            setAppraiseeComment(response.data.data.appraisee_comment == undefined ? '' : response.data.data.appraisee_comment);
        }
    })
}



const saveAppraiseeAcceptance = () => {
    if(appraisee_agree === 'No' && (comment === null||comment === "")){
        Swal.fire(
            'Error!',
            "Please enter reason for not agreeing in the comment box",
            'error'
        )
        return;
    }
    Swal.fire({
        title: 'Agree & Sign',
        text: "Confirm to agree and sign. ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Confirm!'
    }).then((result) => {
        if (result.isConfirmed) {
            setLoading(true);
            DataService.appraiseeSign({rcv_job_dec: appraisee_received_job_description, rvcd_resource: appraisee_received_resources, appraisee_agree: appraisee_agree, comments: comment}).then(response => {
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
                'You have cancelled action. Personal Information not submitted',
                'info'
              )
        }
    })
}


const saveSupervisorSignature = () => {
    if(supervisor_signed == "Yes"){
        Swal.fire({
            title: 'Supervisor: Confirm to Sign',
            text: "Confirm to sign",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                DataService.supervisorSigning({staffid: supervisor.staffid, staffname: supervisor.fullname, signature: supervisor_signed}).then(response => {
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
                    'You have cancelled action. Signature not appended',
                    'info'
                )
            }
        })
    }else{
        Swal.fire(
            'Error!',
            "Please sign to complete supervisor's appraisal",
            'error'
        )
    }
}



const saveHodSignature = () => {
    if(hod_signed == "Yes"){
        Swal.fire({
            title: 'HOD: Confirm to Sign',
            text: "Confirm to sign",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                DataService.HODSigning({staffid: hod.staffid, staffname: hod.fullname, signature: hod_signed}).then(response => {
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
                    'You have cancelled action. Signature not appended',
                    'info'
                )
            }
        })
    }else{
        Swal.fire(
            'Error!',
            "Please sign to complete HOD's appraisal",
            'error'
        )
    }
}


const renderAppraiseeComment = () => {
    if(appraisee_agree == "No"){
        return (
            <div className='' style={{marginTop: 15}}>
                <div className="form-group">
                    <label><strong>4.</strong> Comment</label>
                    <textarea className='form-control' rows={5} name='comment' value={comment} onChange={(event) => setAppraiseeComment(event.target.value)}></textarea>
                </div>
            </div>
        )
    }
}


  const renderSupervisorSignature = () => {
    if(isSupervisor){
        return (
            <>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-header1'>
                        <h4 className='card-title'>SUPERVISOR</h4>
                    </div>
                    <p className='card-text completed-by'>[To be completed by supervisor]</p>
                    <p>
                    I declare that this report reflects my candid evaluation of the employee’s performance in the year under review. I also acknowledge that I engaged the appraisee in a review dialogue and agreed on the final rating with reference to the achievement of each target set and the job description for the role. I hereby submit to Head of Department for further review.
                    </p>

                    <div className='col-md-12'>
                        <form action="">
                            <div className='row'>
                                <div className='col-md-2'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Staff ID</label>
                                        <input readOnly={supervisor== null ? false: true} value={supervisor != null ? supervisor.staffid : ''} className='form-control'  name="title" />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Full Name</label>
                                        <input readOnly={supervisor== null ? false: true} value={supervisor != null ? supervisor.fullname : ''}  className='form-control'  name="fullname" />
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Signed Date</label>
                                        <input type='text' readOnly={true} onChange={(event) =>setSignedDate(new Date(event.target.value).toDateString())} className='form-control' value={signed_date} name="fullname" />
                                    </div>
                                </div>
                            </div>

                            <label className="d-inline-block custom-control custom-checkbox" style={{marginBottom: 30}}>
                                <input type="checkbox" required name="supervisorsign" checked={supervisor_signed == "Yes" ? true : false} onChange={(event)=> setSupervisorSigned(event)}  className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Signed By Me <strong style={{textTransform: 'uppercase'}}>{supervisor != null ? '['+supervisor.fullname+']' : ''}</strong></span></span>
                            </label>

                            <br />

                            {/* <div className='form-group'>
                                <button className='btn btn-primary'>Sign & Submit</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={saveInformation} className='btn btn-round btn-danger col-md-2'>Save & Continue</button>
            </>
        )
    }
  }



  const renderAppraiseeSignature = () => {
    if(!isHod && !isSupervisor) {
        if(sectionh.completed == true){
            return (
                <>
                <div className='card'>
                    <div className='card-body'>
                        <div className='card-header1'>
                            <h4 className='card-title'>APPRAISEE</h4>
                        </div>
                        <p className='card-text completed-by'>[To be completed by appraisee]</p>
                        <div className=''>
                            <p><strong>1.</strong> I received a copy of my job description prior to setting performance targets/objectives.  </p>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_targets" value="Yes"
                                    className="custom-control-input" checked={appraisee_received_job_description == "Yes" ?  true : false} onChange={(event) => handleAppraiseeReceivedJobDesc(event)} />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>Yes</span></span>
                                </label>
                            </div>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_targets" value="No" checked={appraisee_received_job_description == "No" ?  true : false} onChange={(event) => handleAppraiseeReceivedJobDesc(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>No</span></span>
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <p><strong>2.</strong> I received the required resources to enable me to achieve my performance targets </p>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_resource" value="Yes" checked={appraisee_received_resources == "Yes" ?  true : false} onChange={(event) => handleAppraiseeReceivedResources(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>Yes</span></span>
                                </label>
                            </div>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="received_resource" value="No" checked={appraisee_received_resources == "No" ?  true : false}  onChange={(event) => handleAppraiseeReceivedResources(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>No</span></span>
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <p><strong>3.</strong> I agree with the content and overall appraisal score of my performance. If “No” complete the comment section.</p>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="appraisee_agreed" value="Yes" checked={appraisee_agree == "Yes" ?  true : false}  onChange={(event) => handleAppraiseeAgreed(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>Yes</span></span>
                                </label>
                            </div>
                            <div>
                                <label className="d-inline-block custom-control custom-radio">
                                    <input type="radio" name="appraisee_agreed" value="No" checked={appraisee_agree == "No" ?  true : false}  onChange={(event) => handleAppraiseeAgreed(event)}
                                    className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description"><span>No</span></span>
                                </label>
                            </div>
                        </div>
    
                       {renderAppraiseeComment()}
                    </div>
                </div>
                <button onClick={saveInformation} className='btn btn-round btn-danger col-md-2'>Save & Continue</button>
                </>
            )
        }else{
            return (
                <div style={{paddingTop: 30, paddingBottom: 30}}>
                        <h3 className="text-center" style={{fontWeight: 'bolder', color:'brown'}}>Section I currently not enabled for completion. </h3>
                        <h3 className="text-center" style={{fontWeight: 'bolder', color:'brown'}}>Appraisal pending supervisor completion before you can sign. Check again later.</h3>
                </div>
            )
        }
        
    }
  }





  const renderHodSignature = () => {
    if(isHod) {
        return (
            <>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-header1'>
                        <h4 className='card-title'>HEAD OF DEPARTMENT</h4>
                    </div>
                    <p className='card-text completed-by'>[To be completed by Head of Department]</p>
                    <p>
                    I reviewed this appraisal report with the supervisor to ensure that the appraisal process and dialogue were duly followed prior to issuance to the employee. By signature, I confirm that the overall assessment scores reflect the performance of appraisee with respect to the achievement of performance objectives and contribution to the achievement of University/College strategic objectives.
                    </p>


                    <div className='col-md-12'>
                        <form action="">
                            <div className='row'>
                                <div className='col-md-2'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Staff ID</label>
                                        <input className='form-control' readOnly={hod== null ? false: true} value={hod != null ? hod.staffid : ''}  name="title" />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Full Name</label>
                                        <input readOnly={hod== null ? false: true} value={hod != null ? hod.fullname : ''} className='form-control'  name="fullname" />
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Signed Date</label>
                                        <input readOnly={true} className='form-control' onChange={(event) => setHOdSignedDate(event?.target.value)} value={hod_signdate} name="signeddate" />
                                    </div>
                                </div>
                            </div>

                            <label className="d-inline-block custom-control custom-checkbox" style={{marginBottom: 30}}>
                                <input type="checkbox" name="hodsign" checked={hod_signed == "Yes" ? true : false} onChange={(event) => setHodSigned(event)}  className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Signed By Me [ HOD ]</span></span>
                            </label>

                            <br />

                            {/* <div className='form-group'>
                                <button className='btn btn-primary'>Sign & Submit</button>
                            </div> */}
                            {/* <button onClick={saveInformation} className='btn btn-round btn-danger col-md-2'>Save & Continue</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={saveInformation} className='btn btn-round btn-danger col-md-2'>Save & Continue</button>
            </>
        )
    }
  }

  return (
    <div style={{marginBottom: 40}}>
        <Loader loading={loading} isOpen={loading}/>
        <div className="container" style={{paddingBottom: 50}}>
        <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
            
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">SECTION I - SIGNATURE (S)</h4>
                </div>
                <div className="card-body">
                    
                   
                    {renderSupervisorSignature()}


                    {renderAppraiseeSignature()}

                    
                    {renderHodSignature()}


                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signature