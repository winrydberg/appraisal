import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import moment from "moment";


import InstructionLabel from "./InstructionLabel/InstructionLabel"
import StaffInfo from "./StaffInfo/StaffInfo"
import './MainPage.css'
import DataService from "./Services/DataService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { setAppraisal, setAppraiseeStaffID, setFormCompleted, setHODStatus, setHod, setSectionStatus, setSupervisor, setSupervisorStatus, setUser } from "./store/actions/dataAction";
import { Staff } from "./Models/Staff";
import { Appraisal, StaffData } from "./types/types";
import Loader from "./Loader/Loader";
// import countr

const prodBaseURL = process.env.NODE_ENV =='development' ? '' : '/services/staff/new-appraisal';


function MainPage() {

    const dispatch : AppDispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true);
    const sectiona = useSelector((state: RootState) => state.data.sectiona);
    const sectionb = useSelector((state: RootState) => state.data.sectionb);
    const sectionc = useSelector((state: RootState) => state.data.sectionc);
    const sectiond = useSelector((state: RootState) => state.data.sectiond);
    const sectione = useSelector((state: RootState) => state.data.sectione);
    const sectionf = useSelector((state: RootState) => state.data.sectionf);
    const sectiong = useSelector((state: RootState) => state.data.sectiong);
    const sectionh = useSelector((state: RootState) => state.data.sectionh);
    const sectioni = useSelector((state: RootState) => state.data.sectioni);
    const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);
    const isHod = useSelector((state: RootState) => state.data.isHod);
    // const appraiseeid :  string = useSelector((state: RootState) => state.data.appraisee_id);
    // const staff:StaffData = useSelector((state: RootState) => state.data.staff);
    // const form_completed = useSelector((state: RootState) => state.data.form_completed);
    const appraisal: Appraisal = useSelector((state: RootState) =>  state.data.appraisal);

    useEffect(() => {
        getCurrentYearAppraisalStatus();
        getLoggedInUser();
        // checkSupervisorStatus();
        // checkHODStatus();
        getSupervisor();
        getLoggedInStaffType();
    }, [])



    // if (window.performance) {
    //     if (window.performance.navigation.type == 1) {
    //         window.location.href="https://sts.ug.edu.gh/services/staff/new-appraisal"
    //     } 
    // }


    const getLoggedInStaffType = () => {
        DataService.getStaffType().then((response) => {
            if(response.data.status == 'success'){
                let stafftype = response.data.stafftype
                if(stafftype =='norm'){
                    dispatch(setSupervisorStatus(false));
                    dispatch(setHODStatus(false));
                }else if(stafftype =='supervisor'){
                    dispatch(setSupervisorStatus(true));
                    dispatch(setHODStatus(false));
                }else if(stafftype =='hod'){
                    dispatch(setSupervisorStatus(false));
                    dispatch(setHODStatus(true));
                }
               dispatch(setAppraiseeStaffID(response.data.apparaiseeid)); 
            }
        }).catch(error => {
            console.log(error);
        })
    }



    const getLoggedInUser = () => {
        DataService.getLoggedInStaff().then((response) => {
            setLoading(false);
            if(response.data.status == 'success'){
                let staff = null;
                if(response.data.appraisee == null){
                     staff = response.data.staff;
                }else{
                     staff = response.data.appraisee;
                }
              
                let newStaff = new Staff(staff?.surname, staff?.othernames, staff.staff_id, staff.department, staff.email,"" , "",staff.position, "",null,staff.app_type)
                let staffdata : StaffData = {
                    surname: newStaff.surname,
                    othernames: newStaff?.othernames,
                    email: newStaff?.email,
                    gender: newStaff?.gender, 
                    staffid: newStaff?.staffid,
                    department: newStaff?.department,
                    presentgrade: newStaff.presentgrade,
                    school: 'N/A',
                    first_appointment_date: appraisal != null ? appraisal.sectiona?.first_appointment_date : null,
                    employment_type: newStaff?.employment_type,
                    evaluation_period: new Date().getFullYear()-1+'/'+new Date().getFullYear(),
                    last_promotion_date: appraisal != null ? appraisal.sectiona?.last_promotion_date : null,
                    last_transfer_date: appraisal != null ? appraisal.sectiona?.last_transfer_date : null,
                    last_relieve_duty_date: appraisal != null ? appraisal.sectiona?.last_relieve_duty_date : null
                }
                dispatch(setUser(staffdata))
                getAppraisal(staff.staff_id);
            }else{
                console.log("NOT SUCCESSFUL");
            }
        }).catch(error => {
            setLoading(false);
            console.log(error);
        })
    }

    // const checkSupervisorStatus = () => {
    //     DataService.checkSupervisorStatus('27672').then((response) => {
    //         if(response.data.status == 'success'){
    //             if(response.data.isSupervisor == true){
    //                 dispatch(setSupervisorStatus(true))
    //             }else{
    //                 dispatch(setSupervisorStatus(true))
    //             }
    //         }else{
    //             dispatch(setSupervisorStatus(true))
    //         }
    //     })
    // }

    // const checkHODStatus = () => {
    //     DataService.checkHODStatus('27672').then((response) => {
    //         if(response.data.status == 'success'){
    //             if(response.data.isHod == true){
    //                 dispatch(setHODStatus(true))
    //             }else{
    //                 dispatch(setHODStatus(true))
    //             }
    //         }else{
    //             dispatch(setHODStatus(true))
    //         }
    //     })
    // }

    const getAppraisal = (staffid: string) => {
        DataService.getAppraisal(staffid).then(response => {
          console.log(response.data.data);
            if(response.data.status == 'success'){
                dispatch(setAppraisal(response.data.data))
                setLoading(false)
            }
        }).catch(error => {
          console.log(error);
          setLoading(false);
        })
      }


    const getSupervisor = () => {
        DataService.getStaffSupervisor().then((response) => {
            if(response.data.status == 'success'){
                dispatch(setSupervisor(response.data.supervisor));
                dispatch(setHod(response.data.hod));
            }
        })
    }


    const getCurrentYearAppraisalStatus = () => {
        DataService.getMyCurrentYearAppraisalStatus().then((response) => {
            if(response.data.status == 'success'){
                dispatch(setFormCompleted(response.data.complete == 1 ? true : false));
                dispatch(setSectionStatus({name: 'SECTIONA', completed: response.data.sectiona_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONB', completed: response.data.sectionb_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONC', completed: response.data.sectionc_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIOND', completed: response.data.sectiond_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONE', completed: response.data.sectione_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONF', completed: response.data.sectionf_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONG', completed: response.data.sectiong_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONH', completed: response.data.sectionh_status== 1 ? true : false}));
                dispatch(setSectionStatus({name: 'SECTIONI', completed: response.data.sectioni_status== 1 ? true : false}));
            }
        }).catch(error => {
            console.log(error)
        });
    }


    // const getCurrentYearAppraisal = () => {
    //     DataService.getMyCurrentYearAppraisal().then(response => {
    //         if(response.data.status == 'success'){
    //             dispatch(setCurrentYearAppraisal(response.data.data));
    //         }
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }




    const completionStatus = (section: string) => {
        switch(section){
            case 'sectiona':
                if(sectiona.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectionb':
                if(sectionb.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectionc':
                if(sectionc.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectiond':
                if(sectiond.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectione':
                if(sectione.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectionf':
                if(sectionf.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectiong':
                if(sectiong.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectionh':
                if(sectionh.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
            case 'sectioni':
                if(sectioni.completed == true){
                    return <span className="completed pull-right">COMPLETED</span>
                }else{
                    return <span className="not-completed pull-right">NOT COMPLETED</span>
                }
        }
    }


    const renderStaffStartLink = () => {
        if(!isSupervisor && !isHod){
            return <Link to={prodBaseURL+'/personal-information'} className="btn btn-primary round col-md-2">{sectiona.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>
        }else{
            return <Link to={prodBaseURL+'/personal-information'} className="btn btn-primary round col-md-2">VIEW DETAILS</Link>;
        }
    }

    const renderStaffAppraisersStartLink = () => {
        if(!isSupervisor && !isHod){
            return <Link to={prodBaseURL+"/appraisers-information"} className="btn btn-primary round col-md-2">{sectionb.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>
        }else{
            return <Link to={prodBaseURL+"/appraisers-information"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link>;
        }
    }


    const renderSetObjectiveLink = () => {
        if(isSupervisor){
            return <Link to={prodBaseURL+"/job-objectives"} className="btn btn-primary round col-md-2">{sectionc.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>
        }
        if(isHod){
            return <Link to={prodBaseURL+"/job-objectives"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link>
        }
        if(isHod == false && isHod == false){
            return <Link to={prodBaseURL+"/job-objectives"} className="btn btn-primary round col-md-2">{sectionc.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>
        }
        return <Link to={prodBaseURL+"/job-objectives"} className="btn btn-primary round col-md-2">VIEW DEETAILS</Link>
    }


    const renderAppraisalGuide = () => {
        if(isSupervisor){
            return (
                <>
                    <div style={{paddingTop: 30, paddingBottom: 30}}>
                        <h3 className="text-center">As the Supervisor, you are required to complete the below listed section(s)</h3>
                        <h3 className="text-center" style={{fontWeight: 'bold', color:'brown'}}>SECTION-C, SECTION-D, SECTION-E, SECTION-F, SECTION-G,SECTION-H, SECTION-I</h3>
                    </div>
                </>
            )
        }
        else if(isHod){
            return (
                <>
                    <div style={{paddingTop: 30, paddingBottom: 30}}>
                        <h3 className="text-center">As the HoD, you are required to complete the below listed section(s)</h3>
                        <h3 className="text-center" style={{fontWeight: 'bold', color:'brown'}}>SECTION-I</h3>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <div style={{paddingTop: 30, paddingBottom: 30}}>
                        <h3 className="text-center">As an Employee / Appraisee, you are required to complete the below listed section(s)</h3>
                        <h3 className="text-center" style={{fontWeight: 'bolder', color:'brown'}}>SECTION-A, SECTION-B, SECTION-C, SECTION-H, SECTION-I</h3>
                    </div>
                </>
            )
        }
    }




    

    return (
        <div className="container" style={{marginTop: 30}}>
                        <Loader isOpen={loading} loading={loading} />

                        <button onClick={() => navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}> Go Back </button>

                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">PERFORMANCE APPRAISAL FOR SENIOR AND JUNIOR STAFF</h4>
                            </div>
                            <div className="card-body">

                                <StaffInfo></StaffInfo>

                                <InstructionLabel></InstructionLabel>

                                {renderAppraisalGuide()}

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION A</strong> - Appraisee Personal Information</h5>   
                                            {completionStatus('sectiona')}
                                        </div>
                                        <p className="card-text completed-by">[ To be completed By Appraisee ]</p>
                                        {renderStaffStartLink()}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION B</strong> - Appraisers Information</h5>   
                                            {completionStatus('sectionb')}
                                        </div>
                                        <p className="card-text completed-by">[ To be completed By Appraisee ]</p>
                                        {renderStaffAppraisersStartLink()}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION C</strong> - Job Targets/Objectives For the Current Year</h5>
                                            {completionStatus('sectionc')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed By Both Appraiser & Appraisee ]</p>
                                        <p><i className="fa fa-info-circle"></i> The appraiser and appraisee should meet to set performance targets/objectives for the year. This meeting should be held before the end of
                                            the second week in August. 
                                        </p>
                                        <p><i className="fa fa-info-circle"></i> The targets/objectives should be reviewed periodically, and feedback provided to enable staff to achieve the
                                            set objectives. </p>
                                        <p><i className="fa fa-info-circle"></i> The targets/objectives should reflect the Unit’s/Department’s action plan in line with University/College Strategic Plan.</p>
                                        <p><i className="fa fa-info-circle"></i> The targets must be SMART (i.e. Specific, Measurable, Realistic, Agreeable, Timebound).</p>
                                        {renderSetObjectiveLink()}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION D</strong> - Appraisee Conduct</h5>
                                            {completionStatus('sectiond')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed By Appraiser ]</p>
                                        <p><i className="fa fa-info-circle"></i> Employee conduct should contribute to the achievement of objectives/targets, facilitate teamwork, demonstrate, and uphold the core
                                            values of the University and provide memorable service experience to internal and external stakeholders.</p>
                                            {isSupervisor == true ?  <Link to={prodBaseURL+"/appraisee-conduct"} aria-disabled="true" className="btn btn-primary round col-md-2">{sectiond.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>: ''}
                                            {isHod == true && isSupervisor == false ?  <Link to={prodBaseURL+"/appraisee-conduct"} aria-disabled="true" className="btn btn-primary round col-md-2">VIEW DETAILS</Link>: ''}
                                            {isHod == false && isSupervisor == false ?  <Link to={prodBaseURL+"/appraisee-conduct"} aria-disabled="true" className="btn btn-primary round col-md-2">VIEW DETAILS</Link>: ''}
                                    
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION E</strong> - Overall Evaluation Of Appraisee</h5>
                                            {completionStatus('sectione')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed By Appraiser ]</p>
                                        <p><i className="fa fa-info-circle"></i> Employee conduct should contribute to the achievement of objectives/targets, facilitate teamwork, demonstrate, and uphold the core
                                            values of the University and provide memorable service experience to internal and external stakeholders.</p>
                                            
                                            {isSupervisor == true ? <Link to={prodBaseURL+"/overall-evaluation-apraisee"} className="btn btn-primary round col-md-2">{sectione.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                            {isSupervisor == false && isHod == false ? <Link to={prodBaseURL+"/overall-evaluation-apraisee"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link> : ''}
                                            {isHod == true && isSupervisor==false?  <Link to={prodBaseURL+"/overall-evaluation-apraisee"} aria-disabled="true" className="btn btn-primary round col-md-2">VIEW DETAILS</Link>: ''}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION F</strong> - Specific Examples And/Or Other Comments</h5>
                                            {completionStatus('sectionf')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed By Appraiser ]</p>
                                        <p><i className="fa fa-info-circle"></i> Strengths and Areas for Development</p>
                                        {isSupervisor == true ?  <Link to={prodBaseURL+"/strength-area-development"} className="btn btn-primary round col-md-2">{sectionf.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                        {isSupervisor == false && isHod == false ?  <Link to={prodBaseURL+"/strength-area-development"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link> : ''}
                                        {isHod == true ?  <Link to={prodBaseURL+"/strength-area-development"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link> : ''}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION G</strong> - Setting Job Objectives/Targets for Next Year</h5>
                                            {completionStatus('sectiong')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed By Appraiser and Appraisee ]</p>
                                        <p><i className="fa fa-info-circle"></i> The supervisor and employee shall engage in a collegial dialogue to set key job objectives/targets against which employee performance
                                            will be evaluated at the end of the next appraisal year</p>
                                        {isSupervisor == true ? <Link to={prodBaseURL+"/next-year-targets"} className="btn btn-primary round col-md-2">{sectiong.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                        {isSupervisor == false && isHod ==false ? <Link to={prodBaseURL+"/next-year-targets"} className="btn btn-primary round col-md-2">{sectiong.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                        {isHod == true ? <Link to={prodBaseURL+"/next-year-targets"} className="btn btn-primary round col-md-2">VIEW DETAILS</Link> : '' }
                                    </div>
                                </div>

                                <div className="card"> 
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION H</strong> - Training & Development Needs</h5>
                                            {completionStatus('sectionh')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed by the appraiser in discussion with the appraisee ]</p>
                                        <p></p>
                                        { isSupervisor== true ? <Link to={prodBaseURL+"/training-and-development"} className="btn btn-primary round col-md-2">{sectionh.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                        { isSupervisor == false && isHod == false ? <Link to={prodBaseURL+"/training-and-development"} className="btn btn-primary round col-md-2">{sectionh.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                        { isHod == true ? <Link to={prodBaseURL+"/training-and-development"} className="btn btn-primary round col-md-2">{sectionh.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link> : ''}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION I</strong> - Signature(s)</h5>
                                            {completionStatus('sectioni')}
                                        </div>
                                        
                                        <p className="card-text completed-by">[ To be completed by Both Appraiser, Appraisee  And HOD ]</p>
                                        <p></p>
                                        <Link to={prodBaseURL+"/signature"} className="btn btn-primary round col-md-2">{sectioni.completed ? 'CLICK TO EDIT' : 'START NOW'}</Link>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="section-head">
                                            <h5 className=""><strong>SECTION J</strong> - Preview</h5>
                                        </div>
                                        <p><i className="fa fa-info-circle"></i> Use the below button to preview submitted information.</p>
                                        <Link to={prodBaseURL+"/preview-submissions"} className="btn btn-primary round col-md-3">PREVIEW SUBMISSIONS</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
    )
}

export default MainPage