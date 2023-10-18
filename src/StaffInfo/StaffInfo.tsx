import { useSelector } from "react-redux";
import { Appraisal, StaffData } from "../types/types";
import { RootState } from "../store";

export default function StaffInfo() {

  const appraisal: Appraisal = useSelector((state: RootState) => state.data.appraisal);
  const user: StaffData = useSelector((state: RootState) => state.data.staff);
  const isSupervisor = useSelector((state: RootState) => state.data.isSupervisor);
  const isHod = useSelector((state: RootState) => state.data.isHod);
  const form_completed = useSelector((state: RootState) => state.data.form_completed);
//   const stafftype =  useSelector((state: RootState) => state.data.stafftype);

  const overAllFormSubmission = () => {
    if(form_completed){
        return <span className="completed">COMPLETED</span>
    }else{
        if(appraisal?.state != null && appraisal?.state != ""){
            if(appraisal.state == "All Completed"){
                return <span className="completed">{appraisal.state}</span>
            }else{
                return <span className="not-completed">{appraisal.state}</span>
            }
        }else{
            return <span className="not-completed">NOT COMPLETED</span>
        }
        
    }
  }


  const renderSupervisorInfo = () => {
     if(isHod == false && isSupervisor == false){
       return (
        <div>
        <table className="table table-striped">
            <tbody>
                <tr>
                    <td> <strong>SURNAME:</strong> {appraisal != null && appraisal.sectiona != null ? appraisal.sectiona.surname : user != null ? user.surname : ''}</td>
                    <td> <strong>OTHERNAME(S): </strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.othernames : (user != null ? user.othernames : '')}</td>
                </tr>
                <tr>
                    <td> <strong>DEPARTMENT / UNIT: </strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.department : user != null ? user.department : ''}</td>
                    <td> <strong>SCHOOL / COLLEGE: </strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.school : user != null ? user.school : ''}</td>
                </tr>

                <tr>
                    <td><strong>PRESENT GRADE: </strong>  {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.presentgrade : user != null ? user.presentgrade : ''}</td>
                    <td> <strong>FILE NO / STAFF ID:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.staffid : user != null ? user.staffid : ''}</td>
                </tr>

                <tr>
                    <td> <strong>SEX:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.gender : user != null ? user.gender : ''}</td>
                    <td> <strong>AGE:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.age : ""}</td>
                </tr>

                <tr>
                    <td> <strong>DATE OF 1ST APPOINTMENT:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.first_appointment_date : user != null ? user.first_appointment_date : ''}</td>
                    <td> <strong>EMPLOYMENT TYPE:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.employment_type : user != null ? user.employment_type : ''}</td>
                </tr>

                <tr>
                    <td> <strong>DATE OF LAST PROMOTION / UPGRADING </strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.last_promotion_date : user != null ? user.last_promotion_date : ''}</td>
                    <td><strong>EVALUATION PERIOD:</strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.evaluation_period : user != null ? user.evaluation_period : ''}</td>
                </tr>

                <tr>
                    <td> <strong>PREVIOUS UNIT </strong> {(appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.previous_unit : user != null ? user.previous_unit : ''}</td>
                    <td><strong>DATE OF LAST TRANSFER:</strong> { (appraisal != null && appraisal.sectiona != null) ? appraisal.sectiona.last_relieve_duty_date : user != null ? user.last_transfer_date : ''}</td>
                </tr>

                <tr>
                    <td> <strong>STATUS:</strong> <span style={{marginLeft: 10}}>{overAllFormSubmission()}</span></td>
                    
                </tr>
            </tbody>
        </table>
    </div>
       )
     }else{
       return(
        <div style={{paddingTop: 30, paddingBottom: 30}}>
            <h3 className="text-center" style={{color:'red'}} >COMPLETING APPRAISAL FOR <strong>{user?.othernames+' '+user?.surname}</strong></h3>
        </div>
       )
     }
  }
  return (
    <>
    {renderSupervisorInfo()}
    </>
  )
}
