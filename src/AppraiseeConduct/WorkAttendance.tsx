import {useState, useEffect} from 'react'

interface Props {
    reporting: string;
    availability: string;
    reportStateFn: (data: string) => void;
    availabilityStateFn: (data: string) => void;
}
function WorkAttendance(props: Props) {

    const [reporting, setReporting] = useState<any>(null);
    const [availability, setAvailability] = useState<any>(null);


    useEffect(() => {
        setReporting(props.reporting)
        setAvailability(props.availability)
    }, [props.reporting, props.availability])



    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'reporting':
                // setReporting(event.target.value);
                props.reportStateFn(event.target.value);
                break;
            case 'availability':
                props.availabilityStateFn(event.target.value);
                break;
            default:
                break;
        }
    }
 

    return (
        <div className="card">
            <div className='card-header1' style={{padding: 10}}>
            <p className='card-title'><strong>WORK ATTENDANCE / PUNCTUALITY</strong></p>
            </div>
            <div className='card-body'>
                <div className='col-md-12'>
                    <div className=''>
                        <h4>Reports to work on time</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'reporting')}
                                checked={reporting =='Excellent (90–100%)' ? true: false} 
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'reporting')} 
                                checked={reporting =='Very good (75–89%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'reporting')} 
                                checked={reporting =='Good (60–74%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'reporting')} 
                                checked={reporting =='Average (50–59%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'reporting')} 
                                checked={reporting =='Below Average (40–49%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="reporting" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'reporting')} 
                                checked={reporting =='Unsatisfactory (below 40%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className='col-md-12' style={{marginTop: 20}}>
                    <div className=''>
                        <h4>Always available during working hours.</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Excellent (90–100%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Very good (75–89%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Good (60–74%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Average (50–59%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Below Average (40–49%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="availability" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'availability')} 
                                checked={availability =='Unsatisfactory (below 40%)' ? true: false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkAttendance