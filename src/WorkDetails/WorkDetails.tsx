
import InstructionLabel from '../InstructionLabel/InstructionLabel'
import StaffInfo from '../StaffInfo/StaffInfo'

function WorkDetails() {
  return (
        <div className="container">
             <div className="card">
                <div className="card-header">
                    <h4 className="card-title">ANNUAL PERFORMANCE APPRAISAL FORM</h4>
                </div>
                <div className="card-body">
                    <StaffInfo></StaffInfo>

                    <InstructionLabel></InstructionLabel>
                </div>
            </div>
       </div>
  )
}

export default WorkDetails