import {useState} from 'react';
import { Link } from 'react-router-dom'


function AppraiseeConduct() {

    const [selected, setSelected] = useState<any>(null);
    const [subselection, setSubSelecttion] = useState<any>([]);

    const handleRadioSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubSelecttion([])
        setSelected(event.target.value)
    }

    const handleSubSelections = (event: React.ChangeEvent<HTMLInputElement>) => {
        let stateSelections = subselection;
        let elemIndex = stateSelections.indexOf(event.target.value);
        if(elemIndex == -1){
            setSubSelecttion([...subselection, event.target.value]);
        }else{
            setSubSelecttion((state:any) => state.filter((elem:string) => elem !== event.target.value));
        }
    }
    
    return (
        <div className="container">
            <Link to="/" className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}>Go Back</Link>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">SECTION D - APPRAISEE CONDUCT</h4>
                </div>
                <div className="card-body">
                <p>
                    <i className='fa fa-info-circle'></i> Employee conduct should contribute to the achievement of objectives/targets, facilitate teamwork, demonstrate, and uphold the core
                    values of the University and provide memorable service experience to internal and external stakeholders.
                </p>
                <p>
                <i className='fa fa-info-circle'></i> The following narratives should guide the assessment of employee’s conduct and work.
                </p>

                    <hr />

                <div className="container">
                        <div className="form-group">
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="excellent" value="EXCELLENT - Exceeded the targets. Achieved over 100% of the targets." className="custom-control-input" onChange={(event) => handleRadioSelection(event) } />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span><strong>EXCELLENT</strong> - Exceeded the targets. Achieved over 100% of the targets.</span></span>
                            </label>
                            <div style={{marginLeft: 100}}>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Consistently performed beyond expectations in all key areas of objectives set" className="custom-control-input" 
                                            checked={subselection.includes('Consistently performed beyond expectations in all key areas of objectives set') ? true : false} 
                                            onChange={(event) => handleSubSelections(event)}
                                            disabled={selected == 'EXCELLENT - Exceeded the targets. Achieved over 100% of the targets.' ? false : true}
                                            />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>1</strong> Consistently performed beyond expectations in all key areas of objectives set.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Performance noticeably exceeded expectations." className="custom-control-input" 
                                            checked={subselection.includes('Performance noticeably exceeded expectations.') ? true : false} 
                                            onChange={(event) => handleSubSelections(event)}
                                            disabled={selected == 'EXCELLENT - Exceeded the targets. Achieved over 100% of the targets.' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>2</strong> Performance noticeably exceeded expectations.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="An outstanding all-round performance" className="custom-control-input" 
                                        checked={subselection.includes('An outstanding all-round performance') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'EXCELLENT - Exceeded the targets. Achieved over 100% of the targets.' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>3</strong> An outstanding all-round performance</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Performance becomes a benchmark for others" className="custom-control-input" 
                                        checked={subselection.includes('Performance becomes a benchmark for others') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'EXCELLENT - Exceeded the targets. Achieved over 100% of the targets.' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>4</strong> Performance becomes a benchmark for others</span></span>
                                    </label>
                                </div>
                                
                            </div>
                        </div >





                        <div className="form-group">
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="excellent" value="VERY GOOD - Met the targets fully. Achieved 90-100% of the targets" className="custom-control-input" onChange={(event) => handleRadioSelection(event) } />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span><strong>VERY GOOD</strong> - Met the targets fully. Achieved 90-100% of the targets</span></span>
                            </label>

                            <div style={{marginLeft: 100}}>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Fully met expectations in many all the objectives set." className="custom-control-input" 
                                        checked={subselection.includes('Fully met expectations in many all the objectives set.') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'VERY GOOD - Met the targets fully. Achieved 90-100% of the targets' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>1</strong> Fully met expectations in many all the objectives set.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Meets job requirements and often exceeds them." className="custom-control-input" 
                                        checked={subselection.includes('Meets job requirements and often exceeds them.') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'VERY GOOD - Met the targets fully. Achieved 90-100% of the targets' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>2</strong> Meets job requirements and often exceeds them.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Made significant impact" className="custom-control-input" 
                                        checked={subselection.includes('Made significant impact') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'VERY GOOD - Met the targets fully. Achieved 90-100% of the targets' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>3</strong> Made significant impact</span></span>
                                    </label>
                                </div>
                            </div>
                        </div>






                        <div className="form-group">
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="excellent" value="GOOD - Met most of the targets. Achieved 70% to 89% of the targets" className="custom-control-input" onChange={(event) => handleRadioSelection(event) } />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span><strong>GOOD</strong> - Met most of the targets. Achieved 70% to 89% of the targets</span></span>
                            </label>

                            <div style={{marginLeft: 100}}>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Met most targets set for the period in a satisfactory and adequate manner." className="custom-control-input" 
                                        checked={subselection.includes('Met most targets set for the period in a satisfactory and adequate manner.') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)} 
                                        disabled={selected == 'GOOD - Met most of the targets. Achieved 70% to 89% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>1</strong> Met most targets set for the period in a satisfactory and adequate manner.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Recognized as important team member." className="custom-control-input" 
                                        checked={subselection.includes('Recognized as important team member.') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)} 
                                        disabled={selected == 'GOOD - Met most of the targets. Achieved 70% to 89% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>2</strong> Recognized as important team member.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Meets and is above satisfactory performance standards at times." className="custom-control-input" 
                                        checked={subselection.includes('Meets and is above satisfactory performance standards at times.') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'GOOD - Met most of the targets. Achieved 70% to 89% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>3</strong> Meets and is above satisfactory performance standards at times.</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Job performance is satisfactory, acceptable and sometimes above expectations" className="custom-control-input" 
                                        checked={subselection.includes('Job performance is satisfactory, acceptable and sometimes above expectations') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'GOOD - Met most of the targets. Achieved 70% to 89% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>4</strong> Job performance is satisfactory, acceptable and sometimes above expectations</span></span>
                                    </label>
                                </div>
                                
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="excellent" value="AVERAGE - Met some of the targets. Achieved 50% to 69% of the targets" className="custom-control-input" onChange={(event) => handleRadioSelection(event) }/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span><strong>AVERAGE</strong> - Met some of the targets. Achieved 50% to 69% of the targets</span></span>
                            </label>

                            <div style={{marginLeft: 100}}>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Met some objectives set but not all" className="custom-control-input" 
                                        checked={subselection.includes('Met some objectives set but not all') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'AVERAGE - Met some of the targets. Achieved 50% to 69% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>1</strong> Met some objectives set but not al</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Partially successful" className="custom-control-input" 
                                        checked={subselection.includes('Partially successful') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'AVERAGE - Met some of the targets. Achieved 50% to 69% of the targets' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>2</strong> Partially successful</span></span>
                                    </label>
                                </div>
                        
                            </div>
                        </div>




                        <div className="form-group">
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="excellent" value="BELOW AVERAGE - Did not meet the targets. Achieved 40-49% of the targets." className="custom-control-input" onChange={(event) => handleRadioSelection(event) }/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span><strong>BELOW AVERAGE</strong> - Did not meet the targets. Achieved 40-49% of the targets.</span></span>
                            </label>

                            <div style={{marginLeft: 100}}>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Met less than half of objectives set" className="custom-control-input" 
                                        checked={subselection.includes('Met less than half of objectives set') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'BELOW AVERAGE - Did not meet the targets. Achieved 40-49% of the targets.' ? false : true}/>
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>1</strong> Met less than half of objectives set</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Objectives not consistently met" className="custom-control-input" 
                                        checked={subselection.includes('Objectives not consistently met') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)}
                                        disabled={selected == 'BELOW AVERAGE - Did not meet the targets. Achieved 40-49% of the targets.' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>2</strong> Objectives not consistently met</span></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="d-inline-block custom-control custom-checkbox">
                                        <input type="checkbox" name="excellent" value="Improvement is needed to maintain current position" className="custom-control-input" 
                                        checked={subselection.includes('Improvement is needed to maintain current position') ? true : false} 
                                        onChange={(event) => handleSubSelections(event)} 
                                        disabled={selected == 'BELOW AVERAGE - Did not meet the targets. Achieved 40-49% of the targets.' ? false : true} />
                                        <span className="custom-control-indicator"></span>
                                        <span className="custom-control-description"><span><strong>3</strong> Improvement is needed to maintain current position</span></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        
                        <hr />

                        <button type="submit" className="btn btn-danger round col-md-3 ">Save & Continue</button>
                        
                </div>
                </div>
            </div>
        </div>
    )
}

export default AppraiseeConduct