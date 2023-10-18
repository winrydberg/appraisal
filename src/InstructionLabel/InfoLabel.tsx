
interface Props {
    isSupervisor: boolean
}
function InfoLabel(props : Props) {
    const renderInfo = () => {
        if(props.isSupervisor){
            return;
        }else{
            return (
                <div style={{paddingTop: 30, paddingBottom: 30}}>
                     <h3 className="text-center" style={{color: 'brown'}}>NO ACTION NEEDED HERE FROM APPRAISEE</h3>
                     <h3 className="text-center" style={{color: 'brown'}}>This is for supervisor to complete</h3>
                </div>
            )
        }
    }
    return (
        <>
        {renderInfo()}
        </>
    )
}

export default InfoLabel