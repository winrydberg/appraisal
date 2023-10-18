import {useState, useEffect} from 'react'


interface Props {
    reliabilityandtrustworthy: string;
    confidentialandethical: string;
    meetdeadlines: string;
    supportgoals: string;
    dependabilityStateFn: (field: string, data: string) => void;
}

function Dependability(props: Props) {

    const [reliabilityandtrustworthy, setReliabilityAndTrustWorkthy] = useState<any>(null);
    const [confidentialandethical, setConfidentialAndEthical] = useState<any>(null);
    const [meetdeadlines, setMeetDeadlines] = useState<any>(null);
    const [supportgoals, setSupportGoals] = useState<any>(null);


    useEffect(() => {
        setReliabilityAndTrustWorkthy(props.reliabilityandtrustworthy)
        setConfidentialAndEthical(props.confidentialandethical)
        setMeetDeadlines(props.meetdeadlines)
        setSupportGoals(props.supportgoals)
    }, [props.reliabilityandtrustworthy, props.confidentialandethical, props.meetdeadlines, props.supportgoals])


    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'reliabilityandtrustworthy':
                props.dependabilityStateFn('reliabilityandtrustworthy', event.target.value);
                break;
            case 'confidentialandethical':
                props.dependabilityStateFn('confidentialandethical', event.target.value);
                break;
            case 'meetdeadlines':
                props.dependabilityStateFn('meetdeadlines', event.target.value);
                break;
            case 'supportgoals':
                props.dependabilityStateFn('supportgoals', event.target.value);
                break;
            default:
                break;
        }
    }


  return (
    <div className="card">
        <div className='card-header1' style={{padding: 10}}>
        <p className='card-title'><strong>DEPENDABILITY</strong></p>
        </div>
        <div className='card-body'>
            <div className='col-md-12'>
                <div className=''>
                    <h4>Reliable and trustworthy </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="reliabilityandtrustworthy" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')} 
                            checked={reliabilityandtrustworthy == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')} 
                            checked={reliabilityandtrustworthy == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')}
                            checked={reliabilityandtrustworthy == "Good (60–74%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')} 
                            checked={reliabilityandtrustworthy == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')} 
                            checked={reliabilityandtrustworthy == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'reliabilityandtrustworthy')} 
                            checked={reliabilityandtrustworthy == "Unsatisfactory (below 40%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Confidential and ethical </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="confidentialandethical" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'confidentialandethical')} 
                            checked={confidentialandethical == "Unsatisfactory (below 40%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Meets deadlines </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="meetdeadlines" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'meetdeadlines')} 
                            checked={meetdeadlines == "Unsatisfactory (below 40%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Supports unit goals</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')}
                            checked={supportgoals == "Excellent (90–100%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')} 
                            checked={supportgoals == "Very good (75–89%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')} 
                            checked={supportgoals == "Good (60–74%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')} 
                            checked={supportgoals == "Average (50–59%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')} 
                            checked={supportgoals == "Below Average (40–49%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="supportgoals" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'supportgoals')} 
                            checked={supportgoals == "Unsatisfactory (below 40%)" ? true : false} 
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

export default Dependability