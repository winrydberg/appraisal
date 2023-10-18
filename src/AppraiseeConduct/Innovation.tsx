import {useState, useEffect} from 'react'


interface Props {
    displaysinnovation: string;
    utilizetechnology: string;
    innovationStateFn: (field: string, data: string) => void;
}
function Innovation(props: Props) {

    const [displaysinnovation, setDisplaysInnovation] = useState<any>(null);
    const [utilizetechnology, setUtilizeTechnology] = useState<any>(null);

    useEffect(() => {
        setDisplaysInnovation(props.displaysinnovation)
        setUtilizeTechnology(props.utilizetechnology)
    }, [props.displaysinnovation, props.utilizetechnology])



    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'displaysinnovation':
                props.innovationStateFn('displaysinnovation', event.target.value);
                break;
            case 'utilizetechnology':
                props.innovationStateFn('utilizetechnology', event.target.value);
                break;
            default:
                break;
        }
    }

  return (
    <div className="card">
            <div className='card-header1' style={{padding: 10}}>
            <p className='card-title'><strong>INNOVATION</strong></p>
            </div>
            <div className='card-body'>
                <div className='col-md-12'>
                    <div className=''>
                        <h4>Always displays innovation, and imagination in improving work methods</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Excellent (90–100%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Very good (75–89%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Good (60–74%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Average (50–59%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Below Average (40–49%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="displaysinnovation" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'displaysinnovation')} 
                                checked={displaysinnovation == "Unsatisfactory (below 40%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className='col-md-12' style={{marginTop: 20}}>
                    <div className=''>
                        <h4>Utilize technology (or other effective ways) to improve work outputs</h4>
                    </div>
                    <div style={{marginLeft: 10}}>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Excellent (90–100%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Excellent (90–100%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Very good (75–89%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Very good (75–89%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Good (60–74%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Good (60–74%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Good (60–74%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Average (50–59%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Average (50–59%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Average (50–59%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Below Average (40–49%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Below Average (40–49%)" ? true : false}
                                className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="d-inline-block custom-control custom-radio">
                                <input type="radio" name="utilizetechnology" value="Unsatisfactory (below 40%)" 
                                onChange={(event) => handleSelection(event, 'utilizetechnology')} 
                                checked={utilizetechnology == "Unsatisfactory (below 40%)" ? true : false}
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

export default Innovation