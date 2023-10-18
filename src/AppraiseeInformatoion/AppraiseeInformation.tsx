import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import { SectionAInfo, StaffData } from "../types/types"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "../store";
import { setStaffDepartment, setStaffOthername, setStaffPresentGrade, setStaffSchool, setStaffSurname, setStaffId, setSex, setStaffAge, setFirstAppointmentDate, setEmploymentType, setLastPromotionDate, setEvaluationPeriod, setPreviousUnit, setLastTransferDate, setLastReleivedDate, setSectionA} from "../store/actions/dataAction";
import Loader from "../Loader/Loader";
import DataService from '../Services/DataService';

function AppraiseeInformation() {

    const user: StaffData = useSelector((state: RootState) => state.data.staff);
    // const staffid: string = useSelector((state: RootState) => state.data.appraisee_id);
    const sectiona: SectionAInfo = useSelector((state: RootState) => state.data.sectionainfo);
    const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);
    const isHod = useSelector((state: RootState) => state.data.isHod);
    const dispatch : AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        loadDataOnRefresh();
        dispatch(setSex("Male"));
    }, []);


    const loadDataOnRefresh = () => {
        DataService.loadSectionAInformation().then((response)=> {
            setLoading(false)
            if(response.data.status == 'success'){
                dispatch(setSectionA(response.data.data))
            }
        }).catch((error) => {
            setLoading(false)
            console.log(error);
        })
    }


    const setSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffSurname(event.target.value));
    }

    const setOthernames = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffOthername(event.target.value));
    }

    const setDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffDepartment(event.target.value));
    }

    const setSchool = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffSchool(event.target.value));
    }

    const setGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffPresentGrade(event.target.value));
    }

    const setTheStaffId = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffId(event.target.value));
    }

    const setGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSex(event.target.value));
    }

    const setAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStaffAge(event.target.value));
    }

    const setAppointmentDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstAppointmentDate(event.target.value));
    }

    const setEmpType = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmploymentType(event.target.value));
    }

    const setPromotion = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastPromotionDate(event.target.value));
    }

    const setEvaluation = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEvaluationPeriod(event.target.value));
    }

    const setPrevUnit = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPreviousUnit(event.target.value));
    }

    const setTransfer = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastTransferDate(event.target.value));
    }

    const setRelieveDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastReleivedDate(event.target.value));
    }


    


    const saveInformation = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Swal.fire({
            title: 'Confirm Personal Info',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);

                DataService.saveSectionAInformation({
                    staff_id: sectiona != null ? sectiona.staff_id != null ? sectiona.staff_id : user?.staffid : user?.staffid,
                    surname: sectiona != null ? sectiona.surname != null ? sectiona.surname : user?.surname : user?.surname,
                    othernames: sectiona != null ? sectiona.othernames != null ? sectiona.othernames : user?.othernames : user?.othernames,
                    department: sectiona != null ? sectiona.department !+ null ? sectiona.department : user?.department : user?.department,
                    school: sectiona != null ? sectiona.school != null ? sectiona.school : user?.school : user?.school,
                    gender: sectiona != null ? sectiona.gender != null ? sectiona.gender : user?.gender : user?.gender,
                    age: sectiona != null ? sectiona.age != null ? sectiona.age: user.age : user?.age,
                    present_grade: sectiona != null ? sectiona.present_grade != null ? sectiona.present_grade : user.presentgrade : user?.presentgrade,
                    first_appointment_date: sectiona != null ? sectiona.first_appointment_date != null ? sectiona.first_appointment_date : user.first_appointment_date : user?.first_appointment_date,
                    employment_type: sectiona != null ? sectiona.employment_type != null ? sectiona.employment_type : user.employment_type : user?.employment_type,
                    last_promotion_date: sectiona != null ? sectiona.last_promotion_date != null ? sectiona.last_promotion_date : user.last_promotion_date : user?.last_promotion_date,
                    evaluation_period: sectiona != null ? sectiona.evaluation_period != null ? sectiona.evaluation_period : user.evaluation_period : user?.evaluation_period,
                    previous_unit: sectiona != null ? sectiona.previous_unit != null ? sectiona.previous_unit: user.previous_unit : user?.previous_unit,
                    last_transfer_date: sectiona != null ? sectiona.last_transfer_date != null ? sectiona.last_transfer_date : user.last_transfer_date : user?.last_transfer_date,
                    last_relieve_duty_date: sectiona != null ? sectiona.last_relieve_duty_date != null ? sectiona.last_relieve_duty_date : user.last_relieve_duty_date : user?.last_relieve_duty_date,
                    // staff_id: sectiona != null ? sectiona.staff_id : user?.staffid,
                    // surname: sectiona != null ? sectiona.surname : user?.surname,
                    // othernames: sectiona != null ? sectiona.othernames : user?.othernames,
                    // department: sectiona != null ? sectiona.department : user?.department,
                    // school: sectiona != null ? sectiona.school : user?.school,
                    // gender: sectiona != null ? sectiona.gender : user?.gender,
                    // age: sectiona != null ? sectiona.age : user?.age,
                    // present_grade: sectiona != null ? sectiona.present_grade : user?.presentgrade,
                    // first_appointment_date: sectiona != null ? sectiona.first_appointment_date : user?.first_appointment_date,
                    // employment_type: sectiona != null ? sectiona.employment_type : user?.employment_type,
                    // last_promotion_date: sectiona != null ? sectiona.last_promotion_date : user?.last_promotion_date,
                    // evaluation_period: sectiona != null ? sectiona.evaluation_period : user?.evaluation_period,
                    // previous_unit: sectiona != null ? sectiona.previous_unit : user?.previous_unit,
                    // last_transfer_date: sectiona != null ? sectiona.last_transfer_date : user?.last_transfer_date,
                    // last_relieve_duty_date: sectiona != null ? sectiona.last_relieve_duty_date : user?.last_relieve_duty_date,
                    sectiona_complete: 1,

                }).then(response => {
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


    // const saveAndContinueLater = () => {
    //     Swal.fire({
    //         title: 'Save And Continue Later',
    //         text: "Confirm to save details",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Save!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             setLoading(true);
    //             DataService.saveSectionAInformation({
    //                 staff_id: sectiona != null ? sectiona.staff_id != null ? sectiona.staff_id : user?.staffid : user?.staffid,
    //                 surname: sectiona != null ? sectiona.surname != null ? sectiona.surname : user?.surname : user?.surname,
    //                 othernames: sectiona != null ? sectiona.othernames != null ? sectiona.othernames : user?.othernames : user?.othernames,
    //                 department: sectiona != null ? sectiona.department !+ null ? sectiona.department : user?.department : user?.department,
    //                 school: sectiona != null ? sectiona.school != null ? sectiona.school : user?.school : user?.school,
    //                 gender: sectiona != null ? sectiona.gender != null ? sectiona.gender : user?.gender : user?.gender,
    //                 age: sectiona != null ? sectiona.age != null ? sectiona.age: user.age : user?.age,
    //                 present_grade: sectiona != null ? sectiona.present_grade != null ? sectiona.present_grade : user.presentgrade : user?.presentgrade,
    //                 first_appointment_date: sectiona != null ? sectiona.first_appointment_date != null ? sectiona.first_appointment_date : user.first_appointment_date : user?.first_appointment_date,
    //                 employment_type: sectiona != null ? sectiona.employment_type != null ? sectiona.employment_type : user.employment_type : user?.employment_type,
    //                 last_promotion_date: sectiona != null ? sectiona.last_promotion_date != null ? sectiona.last_promotion_date : user.last_promotion_date : user?.last_promotion_date,
    //                 evaluation_period: sectiona != null ? sectiona.evaluation_period != null ? sectiona.evaluation_period : user.evaluation_period : user?.evaluation_period,
    //                 previous_unit: sectiona != null ? sectiona.previous_unit != null ? sectiona.previous_unit: user.previous_unit : user?.previous_unit,
    //                 last_transfer_date: sectiona != null ? sectiona.last_transfer_date != null ? sectiona.last_transfer_date : user.last_transfer_date : user?.last_transfer_date,
    //                 last_relieve_duty_date: sectiona != null ? sectiona.last_relieve_duty_date != null ? sectiona.last_relieve_duty_date : user.last_relieve_duty_date : user?.last_relieve_duty_date,
    //                 sectiona_complete: 0
    //             }).then(response => {
    //                 if(response.data.status == 'success'){
    //                     setLoading(false);
    //                     Swal.fire(
    //                         'Success!',
    //                         response.data.message,
    //                         'success'
    //                     )
    //                 }else{
    //                     setLoading(false);
    //                     Swal.fire(
    //                         'Error!',
    //                         response.data.message,
    //                         'error'
    //                     )
    //                 }
    //             }).catch(error => {
    //                 setLoading(false);
    //                 Swal.fire(
    //                     'Error!',
    //                     error.message,
    //                     'error'
    //                 )
    //             })
    //         }else{
    //             Swal.fire(
    //                 'Cancelled!',
    //                 'You have cancelled action. Personal Information not submitted',
    //                 'info'
    //               )
    //         }
    //     })
    // }


    const getInformation = (field: string) => {
        switch(field){
            case 'surname':
                if(sectiona == null){
                    return user?.surname;
                }else{
                    return sectiona?.surname;
                }
            case 'othernames':
                if(sectiona == null){
                    return user?.othernames;
                }else{
                    return sectiona?.othernames;
                }
            case 'age':
                if(sectiona == null){
                    return user?.age;
                }else{
                    return sectiona?.age;
                }
            case 'department':
                if(sectiona == null){
                    return user?.department;
                }else{
                    return sectiona?.department;
                }
            case 'school':
                if(sectiona == null){
                    return user?.school;
                }else{
                    return sectiona?.school;
                }
            case 'presentgrade':
                if(sectiona == null){
                    return user?.presentgrade;
                }else{
                    return sectiona?.present_grade;
                }

            case 'first_appointment_date':
                if(sectiona == null){
                    return user?.first_appointment_date;
                }else{
                    return sectiona?.first_appointment_date;
                }
            case 'staffid':
                if(sectiona == null){
                    return user?.staffid;
                }else{
                    return sectiona?.staff_id;
                }
            case 'employment_type':
                if(sectiona == null){
                    return user?.employment_type;
                }else{
                    return sectiona?.employment_type;
                }
            case 'date_last_promotion':
                if(sectiona == null){
                    return user?.last_promotion_date;
                }else{
                    return sectiona?.last_promotion_date;
                }
            case 'evaludation_period':
                if(sectiona == null){
                    return user?.evaluation_period;
                }else{
                    return sectiona?.evaluation_period;
                }
            case 'previous_unit':
                if(sectiona == null){
                    return user?.previous_unit;
                }else{
                    return sectiona?.previous_unit;
                }
            case 'last_transfer_date':
                if(sectiona == null){
                    return user?.last_transfer_date;
                }else{
                    return sectiona?.last_transfer_date;
                }
            case 'relieve_date':
                if(sectiona == null){
                    return user?.last_relieve_duty_date;
                }else{
                    return sectiona?.last_relieve_duty_date;
                }
            
            
        }
    }
    





    return (
        <div >
            <Loader loading={loading} isOpen={loading}/>
            <div className="container" style={{paddingBottom: 50}}>
                <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION A - APPRAISEE PERSONAL INFORMATION</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(event) => saveInformation(event)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="surname">Surname</label>
                                        {/* <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" value={getInformation('surname')} onChange={(event) => setSurname(event)} className="form-control" id="surname" name="surname"/> */}
                                        <input disabled={true} type="text" value={getInformation('surname')} onChange={(event) => setSurname(event)} className="form-control" id="surname" name="surname"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="othername">Othername(s)</label>
                                        {/* <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" value={getInformation('othernames')} onChange={(event) => setOthernames(event)} id="othername" name="othername" /> */}
                                        <input disabled={true} type="text" className="form-control" value={getInformation('othernames')} onChange={(event) => setOthernames(event)} id="othername" name="othername" />
                                    </div>
                                </div>
                            </div>
                   
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="department">Department / Unit</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="department" value={getInformation('department')} onChange={(event) => setDepartment(event)} name="department" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="school">School / College</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="school" value={getInformation('school')} onChange={(event) => setSchool(event)} name="school" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="grade">Present Grade</label>
                                        {/* <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="grade" value={getInformation('presentgrade')} onChange={(event) => setGrade(event)} name="grade" /> */}
                                        <input disabled={true} type="text" className="form-control" id="grade" value={getInformation('presentgrade')} onChange={(event) => setGrade(event)} name="grade" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="staffid">Staff No</label>
                                        {/* <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" value={getInformation('staffid')} onChange={(event) => setTheStaffId(event)} id="staffid" name="staffid" /> */}
                                        <input disabled={true} type="text" className="form-control" value={getInformation('staffid')} onChange={(event) => setTheStaffId(event)} id="staffid" name="staffid" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="grade">Sex</label>
                                        <select name="sex" id="sex" onChange={(event) => setGender(event)} className="form-control" disabled={isHod== true||isSupervisor == true ? true : false} >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="age">Age</label>
                                        <input  type="text" disabled={isHod== true||isSupervisor == true ? true : false} className="form-control" value={getInformation('age')} onChange={(event) => setAge(event)} id="age" name="age" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="date_first_appointment">Date of First Appointment</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="date" className="form-control" id="date_first_appointment" onChange={(event) => setAppointmentDate(event)} value={getInformation('first_appointment_date')} name="date_first_appointment" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="employment_type">Employment Type</label>
                                        {/* <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="employment_type" onChange={(event) => setEmpType(event)} value={getInformation('employment_type')} name="employment_type" /> */}
                                        <input disabled={true} type="text" className="form-control" id="employment_type" onChange={(event) => setEmpType(event)} value={getInformation('employment_type')} name="employment_type" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="date_last_promotion">Date of last promotion/upgrading</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="date" className="form-control" onChange={(event) => setPromotion(event)} value={getInformation('date_last_promotion')} id="date_last_promotion" name="date_last_promotion" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="evaludation_period">Evaluation Period</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="evaludation_period" onChange={(event) => setEvaluation(event)} value={getInformation('evaludation_period')} name="evaludation_period" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="date_last_promotion">Previous Unit</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" className="form-control" id="previous_unit"  onChange={(event) => setPrevUnit(event)} value={getInformation('previous_unit')} name="previous_unit" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="last_transfer_date">Date of last Transfer</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="date" className="form-control" id="last_transfer_date " onChange={(event) => setTransfer(event)} value={getInformation('last_transfer_date')} name="last_transfer_date" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="relieve_date">Date of last relieving duties</label>
                                        <input disabled={isHod== true||isSupervisor == true ? true : false} type="date" className="form-control" id="relieve_date" onChange={(event) => setRelieveDate(event)} value={getInformation('relieve_date')} name="relieve_date" />
                                    </div>
                                </div>
                            </div>
                        
                        
                            <button type="submit" disabled={(isHod==true || isSupervisor==true) ? true : false}  className="btn btn-danger round col-md-3 ">Confirm & Continue</button>
                            {/* <button type="button" disabled={(isHod==true || isSupervisor==true) ? true : false}  style={{marginLeft: 10}} onClick={saveAndContinueLater}  className="btn btn-warning round col-md-3 ">Save & Continue Later</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AppraiseeInformation