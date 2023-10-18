import {useState, useEffect} from 'react';

interface Props {
    abilitytonetwork: string;
    effectivecommunication: string;
    abilitytocomprehend: string;
    abilitytoexpressclearly: string;
    communicationStateFn: (field: string, data: string) => void;
}

function Communication(props: Props) {

    const [abilitytonetwork, setAbilityToNetwork] = useState<any>(null);
    const [effectivecommunication, setEffectiveCommunication] = useState<any>(null);
    const [abilitytocomprehend, setAbilityToComprehend] = useState<any>(null);
    const [abilitytoexpressclearly, setAbilityToExpressClearly] = useState<any>(null);

    useEffect(() => {
        setAbilityToNetwork(props.abilitytonetwork)
        setEffectiveCommunication(props.effectivecommunication)
        setAbilityToComprehend(props.abilitytocomprehend)
        setAbilityToExpressClearly(props.abilitytoexpressclearly)
    }, [props.abilitytonetwork, props.effectivecommunication, props.abilitytocomprehend, props.abilitytoexpressclearly])



    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'abilitytonetwork':
                props.communicationStateFn('abilitytonetwork', event.target.value);
                break;
            case 'effectivecommunication':
                props.communicationStateFn('effectivecommunication', event.target.value);
                break;
            case 'abilitytocomprehend':
                props.communicationStateFn('abilitytocomprehend' , event.target.value);
                break;
            case 'abilitytoexpressclearly':
                props.communicationStateFn('abilitytoexpressclearly', event.target.value);
                break;
            default:
                break;
        }
    }


  return (
    <div className="card">
        <div className='card-header1' style={{padding: 10}}>
        <p className='card-title'><strong>COMMUNICATION</strong></p>
        </div>
        <div className='card-body'>
            <div className='col-md-12'>
                <div className=''>
                    <h4>Ability to network and relate to other workers across departments.</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Excellent (90–100%)" 
                            checked={abilitytonetwork == "Excellent (90–100%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Very good (75–89%)" 
                            checked={abilitytonetwork == "Very good (75–89%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Good (60–74%)" 
                            checked={abilitytonetwork == "Good (60–74%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Average (50–59%)" 
                            checked={abilitytonetwork == "Average (50–59%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Below Average (40–49%)" 
                            checked={abilitytonetwork == "Below Average (40–49%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytonetwork" value="Unsatisfactory (below 40%)" 
                            checked={abilitytonetwork == "Unsatisfactory (below 40%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytonetwork')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Effectively communicates decisions and requests.</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Excellent (90–100%)"
                            checked={effectivecommunication == "Excellent (90–100%)" ? true : false}
                             onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Very good (75–89%)" 
                            checked={effectivecommunication == "Very good (75–89%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Good (60–74%)" 
                            checked={effectivecommunication == "Good (60–74%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Average (50–59%)" 
                            checked={effectivecommunication == "Average (50–59%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Below Average (40–49%)" 
                            checked={effectivecommunication == "Below Average (40–49%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="effectivecommunication" value="Unsatisfactory (below 40%)" 
                            checked={effectivecommunication == "Unsatisfactory (below 40%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'effectivecommunication')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Ability to comprehend and execute assignments without difficulty. </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Excellent (90–100%)" 
                            checked={abilitytocomprehend == "Excellent (90–100%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Very good (75–89%)" 
                            checked={abilitytocomprehend == "Very good (75–89%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Good (60–74%)" 
                            checked={abilitytocomprehend == "Good (60–74%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Average (50–59%)" 
                            checked={abilitytocomprehend == "Average (50–59%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Below Average (40–49%)" 
                            checked={abilitytocomprehend == "Below Average (40–49%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytocomprehend" value="Unsatisfactory (below 40%)" 
                            checked={abilitytocomprehend == "Unsatisfactory (below 40%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytocomprehend')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Has the ability to clearly express ideas to others</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Excellent (90–100%)" 
                            checked={abilitytoexpressclearly == "Excellent (90–100%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Very good (75–89%)" 
                            checked={abilitytoexpressclearly == "Very good (75–89%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Good (60–74%)" 
                            checked={abilitytoexpressclearly == "Good (60–74%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Average (50–59%)"
                            checked={abilitytoexpressclearly == "Average (50–59%)" ? true : false} 
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Below Average (40–49%)" 
                            checked={abilitytoexpressclearly == "Below Average (40–49%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="abilitytoexpressclearly" value="Unsatisfactory (below 40%)" 
                            checked={abilitytoexpressclearly == "Unsatisfactory (below 40%)" ? true : false}
                            onChange={(event) => handleSelection(event, 'abilitytoexpressclearly')} className="custom-control-input" />
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

export default Communication