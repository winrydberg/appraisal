import {useState, useEffect} from 'react';

interface Props {
    cooperation: string;
    accepinstruction: string;
    assistothers: string;
    teamWorkStateFn: (field: string, value: string) => void;
}

function Teamwork(props: Props) {

    const [cooperation, setCooperation] = useState<any>(null);
    const [accepinstruction, setAcceptInstruction] = useState<any>(null);
    const [assistothers, setAssistOthers] = useState<any>(null);


    useEffect(() => {
        setCooperation(props.cooperation)
        setAcceptInstruction(props.accepinstruction)
        setAssistOthers(props.assistothers)
    }, [props.cooperation, props.accepinstruction, props.assistothers])



    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'cooperation':
                props.teamWorkStateFn('cooperation',event.target.value);
                break;
            case 'accepinstruction':
                props.teamWorkStateFn('accepinstruction', event.target.value);
                break;
            case 'assistothers':
                props.teamWorkStateFn('assistothers', event.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <div className="card">
            <div className='card-header1' style={{padding: 10}}>
            <p className='card-title'><strong>TEAMWORK</strong></p>
            </div>
            <div className='card-body'>
                <div className='col-md-12'>
                    <div className=''>
                        <h4>Cooperates with persons in and outside the unit</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Excellent (90–100%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Very good (75–89%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Good (60–74%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Average (50–59%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Below Average (40–49%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="cooperation" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'cooperation')} 
                                checked={cooperation == "Unsatisfactory (below 40%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className='col-md-12' style={{marginTop: 20}}>
                    <div className=''>
                        <h4>Willingly accepts instructions and additional assignments</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Excellent (90–100%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Very good (75–89%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Good (60–74%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Average (50–59%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Below Average (40–49%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="accepinstruction" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'accepinstruction')} 
                                checked={accepinstruction == "Unsatisfactory (below 40%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className='col-md-12' style={{marginTop: 20}}>
                    <div className=''>
                        <h4>Assists others to accomplish group objective</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Excellent (90–100%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Very good (75–89%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Good (60–74%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Average (50–59%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Below Average (40–49%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="assistothers" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'assistothers')} 
                                checked={assistothers == "Unsatisfactory (below 40%)" ? true : false}
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

export default Teamwork