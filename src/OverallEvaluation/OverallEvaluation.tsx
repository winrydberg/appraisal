import { useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Loader from "../Loader/Loader";
import DataService from "../Services/DataService";
import { Target } from "../types/types";
import InfoLabel from "../InstructionLabel/InfoLabel";

function OverallEvaluation() {


    const [loading, setLoading] = useState<boolean>(false);
    const [workevaluation, setWorkEvaluation] = useState<string>('');
    const [specific_details, setDetails] = useState<string>('');
    const [conductevaluation, setConsultEvaluation] = useState<string>('');
    const [commendation_letter, setCommendationLetter] = useState<Blob>();
    const [caution_letter, setCautionLetter] = useState<Blob>();

    const [old_commendation_letter, setOldCommendationLetter] = useState<string>('');
    const [old_caution_letter, setOldCautionLetter] = useState<string>('');
    const isSupervisor: boolean = useSelector((state: RootState) => state.data.isSupervisor);

    const navigate = useNavigate()
    const conduct = useSelector((state: RootState) => state.data.sectiondinfo);
    const targets: Array<Target>  = useSelector((state: RootState) => state.data.sectioncinfo);


    useEffect(() => {
        calculateConduct();
        calculateWorkEvaluation();
        loadSectionEInformation();
    }, [])


    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        switch(field){
            case 'workevaluation':
                setWorkEvaluation(event.target.value);
                break;
            case 'conductevaluation':
                setConsultEvaluation(event.target.value);
                break;
        }
    }






    const calculateConduct = () => {
        if(conduct != null) {
            let sum = 0;
            let count = 0;
            for (const key in conduct) {
                if(key != 'sectiond_complete'){
                    count += 1;
                    sum += conduct[key]
                }
            }   
            let avg = sum / count;
            if(avg >= 90){
                setConsultEvaluation('Excellent')
            }else if(avg >= 75 && avg <= 89 ){
                setConsultEvaluation('Very good')
            }else if(avg >= 60 && avg <=74 ){
                setConsultEvaluation('Good')
            }else if(avg >= 50 && avg <= 59 ){
                setConsultEvaluation('Average')
            }else if(avg >= 40 && avg <= 49 ){
                setConsultEvaluation('Below Average')
            }else if(avg < 40 ){
                setConsultEvaluation('Unsatisfactory')
            }
        }else{
            // if(conductevaluation != ""){
            //     let avg = parseFloat(conductevaluation);
            //     if(avg >= 90){
            //         setConsultEvaluation('Excellent')
            //     }else if(avg >= 75 && avg <= 89 ){
            //         setConsultEvaluation('Very good')
            //     }else if(avg >= 60 && avg <=74 ){
            //         setConsultEvaluation('Good')
            //     }else if(avg >= 50 && avg <= 59 ){
            //         setConsultEvaluation('Average')
            //     }else if(avg >= 40 && avg <= 49 ){
            //         setConsultEvaluation('Below Average')
            //     }else if(avg < 40 ){
            //         setConsultEvaluation('Unsatisfactory')
            //     }
            // }
        }
    }


    const calculateWorkEvaluation = () => {
        if(targets != null) {
            let projectedsum: string|number = 0;
            let obtainedsum: string|number = 0;
            // let count = 0;
            // for (const key in targets) {
            //     count += 1;
            //     projectedsum += parseFloat(targets[key].projected_weight)
            // } 
            for(var i=0; i<targets.length; i++){
                projectedsum += Number(targets[i].projected_weight);
                obtainedsum += Number(targets[i].obtained_weight);
            }  
            let avg = (obtainedsum / projectedsum) * 100;
            if(avg >= 90){
                setWorkEvaluation('Excellent')
            }else if(avg >= 75 && avg <= 89 ){
                setWorkEvaluation('Very good')
            }else if(avg >= 60 && avg <=74 ){
                setWorkEvaluation('Good')
            }else if(avg >= 50 && avg <= 59 ){
                setWorkEvaluation('Average')
            }else if(avg >= 40 && avg <= 49 ){
                setWorkEvaluation('Below Average')
            }else if(avg < 40 ){
                setWorkEvaluation('Unsatisfactory')
            }
        }else{
            // if(workevaluation != ""){
            //     let avg = parseFloat(workevaluation); 
            //     if(avg >= 90){
            //         setWorkEvaluation('Excellent')
            //     }else if(avg >= 75 && avg <= 89 ){
            //         setWorkEvaluation('Very good')
            //     }else if(avg >= 60 && avg <=74 ){
            //         setWorkEvaluation('Good')
            //     }else if(avg >= 50 && avg <= 59 ){
            //         setWorkEvaluation('Average')
            //     }else if(avg >= 40 && avg <= 49 ){
            //         setWorkEvaluation('Below Average')
            //     }else if(avg < 40 ){
            //         setWorkEvaluation('Unsatisfactory')
            //     }
            // }
        }

        
    }



    const loadSectionEInformation = () => {
        DataService.loadSectionEInformation().then((response) => {
            setLoading(false)
            if(response.data.status == 'success'){
                if(response.data.data.workevaluation != null){
                    setWorkEvaluation(response.data.data.workevaluation);
                }

                if(response.data.data.conductevaluation != null){
                    setConsultEvaluation(response.data.data.conductevaluation);
                }
                
                if(response.data.data.commendation_letter != null){
                    setOldCommendationLetter(response.data.data.commendation_letter);
                }  
                
                if(response.data.data.caution_letter != null){
                    setCautionLetter(response.data.data.caution_letter);
                }  

                if(response.data.data.specific_details != null){
                    setDetails(response.data.data.specific_details);
                }
            }
        }).catch(error => {
            console.log(error);
        })
    }


    const saveInformation = () => {
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
                const formData = new FormData();
                formData.append('workevaluation', workevaluation);
                formData.append('conductevaluation', conductevaluation);
                formData.append('specific_examples', specific_details);
                if(commendation_letter != undefined && caution_letter != null && typeof commendation_letter != "string"){
                    formData.append('commendation_letter', commendation_letter, old_commendation_letter)
                }

                if(caution_letter != undefined && caution_letter != null && typeof caution_letter != "string"){
                    formData.append('caution_letter', caution_letter, old_caution_letter);
                }
                formData.append('sectione_complete', '1'); 

                DataService.saveSectionEInformation(formData).then(response => {
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


    const saveAndContinueLater = () => {
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
                const formData = new FormData();
                formData.append('workevaluation', workevaluation);
                formData.append('conductevaluation', conductevaluation);
                formData.append('specific_examples', specific_details);
                if(commendation_letter != undefined){
                    formData.append('commendation_letter', commendation_letter, old_commendation_letter)
                }

                if(caution_letter != undefined){
                    formData.append('caution_letter', caution_letter, old_caution_letter);
                }
                formData.append('sectione_complete', '0'); 

                DataService.saveSectionEInformation(formData).then(response => {
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
                    'You have cancelled action. Overall Evaluation not submitted. Please try again',
                    'info'
                  )
            }
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }


    const onCommendationFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files != null) {
            setCommendationLetter(event.target.files[0]);
            setOldCommendationLetter(event.target.files[0].name);
        }
    }

    const onCautionFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files != null) {
            setCautionLetter(event.target.files[0]);
            setOldCautionLetter(event.target.files[0].name);
        }
    }



    const renderSelectedCommendationFile = () => {
        if(old_commendation_letter != ""){
            return (
                <small style={{fontSize: 14, color:'red'}}>{old_commendation_letter}</small>
            )
        }
    }

    const renderSelectedCautionFile = () => {
        if(old_caution_letter != ""){
            return (
                <small style={{fontSize: 14, color:'red'}}>{old_caution_letter}</small>
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
                        <h4 className="card-title">SECTION E  - OVERALL EVALUATION OF APPRAISEE</h4>
                    </div>
                    <div className="card-body">

                        <InfoLabel isSupervisor={isSupervisor}></InfoLabel>
                        <div className="card">
                            
                            <div className="card-body">
                                <div className="card-header1">
                                    <h4 className="card-title">WORK</h4>   
                                    <small style={{color: 'red'}}>No action required. Calculated value checked</small>   
                                </div>
                                <div style={{marginLeft: 10}}>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="workevaluation" value="Excellent" 
                                            checked={workevaluation == "Excellent" ? true : false}
                                            disabled={workevaluation == "Excellent" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Excellent</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="abilitytocomprehend" value="Very good" 
                                            checked={workevaluation == "Very good"  || workevaluation =="Very Good" ? true : false}
                                            disabled={workevaluation == "Very good" || workevaluation =="Very Good" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Very good</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="abilitytocomprehend" value="Good" 
                                            checked={workevaluation == "Good" ? true : false}
                                            disabled={workevaluation == "Good" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Good</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="abilitytocomprehend" value="Average" 
                                            checked={workevaluation == "Average" ? true : false}
                                            disabled={workevaluation == "Average" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Average</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="abilitytocomprehend" value="Below Average" 
                                            checked={workevaluation == "Below Average" || workevaluation =="Below average" ? true : false}
                                            disabled={workevaluation == "Below Average" || workevaluation =="Below average" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Below Average </span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="abilitytocomprehend" value="Unsatisfactory" 
                                            checked={workevaluation == "Unsatisfactory" ? true : false}
                                            disabled={workevaluation == "Unsatisfactory" ? false : true}
                                            onChange={(event) => handleSelection(event, 'workevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Unsatisfactory</span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="card">
                            <div className="card-body">
                                <div className="card-header1">
                                    <h4 className="card-title">CONDUCT</h4>  
                                    <small style={{color: 'red'}}>No action required. Calculated value checked</small>  
                                </div>
                                <div style={{marginLeft: 10}}>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Excellent" 
                                            checked={conductevaluation == "Excellent" ? true : false}
                                            disabled={conductevaluation == "Excellent" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Excellent</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Very good" 
                                            checked={conductevaluation == "Very good" || conductevaluation =="Very Good" ? true : false}
                                            disabled={conductevaluation == "Very good" || conductevaluation =="Very Good" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Very good</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Good" 
                                            checked={conductevaluation == "Good" ? true : false}
                                            disabled={conductevaluation == "Good" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Good</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Average" 
                                            checked={conductevaluation == "Average" ? true : false}
                                            disabled={conductevaluation == "Average" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Average</span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Below Average" 
                                            checked={conductevaluation == "Below Average" || conductevaluation =="Below average" ? true : false}
                                            disabled={conductevaluation == "Below Average" || conductevaluation == "Below average" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Below Average </span></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="d-inline-block custom-control custom-checkbox">
                                            <input type="checkbox" name="conductevaluation" value="Unsatisfactory" 
                                            checked={conductevaluation == "Unsatisfactory" ? true : false}
                                            disabled={conductevaluation == "Unsatisfactory" ? false : true}
                                            onChange={(event) => handleSelection(event, 'conductevaluation')} className="custom-control-input" />
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description"><span>Unsatisfactory</span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header1">
                                    <h4 className="card-title">SPECIFIC DETAILS</h4>    
                                </div>

                                <div className="">
                                    <p>Please give specific examples of outstanding, below average or unsatisfactory work and/or conduct in the section below. Letters of
commendation or warning/caution should be attached.</p>
                                    <div className="form-group">
                                        <label>Details</label>
                                        <textarea value={specific_details} disabled={isSupervisor ? false : true} name="specific_details" onChange={(event)=> setDetails(event?.target.value)} className="form-control" id=""  rows={10}>{specific_details}</textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Letter of Commendation</label>
                                            <input disabled={isSupervisor ? false : true} className="form-control" type="file" onChange={(event) => onCommendationFileUpload(event)} name="commendation"/>
                                            {renderSelectedCommendationFile()}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Letter of Warning/Caution</label>
                                            <input disabled={isSupervisor ? false : true} className="form-control" type="file" onChange={(event)=> onCautionFileUpload(event)} name="caution"/>
                                            {renderSelectedCautionFile()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={saveInformation} disabled={isSupervisor ? false : true} className='btn btn-danger btn-round col-md-3'  style={{marginTop: 30}}><i className='fa fa-save'></i> Save Target</button>
                       <button disabled={isSupervisor ? false : true} type="button" style={{marginLeft: 10, marginTop: 30}}  onClick={saveAndContinueLater}  className="btn btn-warning round col-md-3 ">Save & Continue Later</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OverallEvaluation