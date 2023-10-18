import {useState, useEffect} from 'react'


interface  Props {
    readilyparticipates: string;
    transferstrainingknowledge: string;
    takestimetoimproveskills: string;
    capacityBuildingStateFn: (field: string, data: string) => void;
}



function CapacityBuilding(props: Props) {

    const [readilyparticipates, setReadilyParticipate] = useState<any>(null);
    const [transferstrainingknowledge, setTransferTrainingKnowledge] = useState<any>(null);
    const [takestimetoimproveskills, setTakesTimeToImproveSkils] = useState<any>(null);


    useEffect(() => {
        setReadilyParticipate(props.readilyparticipates)
        setTransferTrainingKnowledge(props.transferstrainingknowledge)
        setTakesTimeToImproveSkils(props.takestimetoimproveskills)
    }, [props.readilyparticipates, props.transferstrainingknowledge, props.takestimetoimproveskills])


    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'readilyparticipates':
                props.capacityBuildingStateFn('readilyparticipates',event.target.value);
                break;
            case 'transferstrainingknowledge':
                props.capacityBuildingStateFn('transferstrainingknowledge', event.target.value);
                break;
            case 'takestimetoimproveskills':
                props.capacityBuildingStateFn('takestimetoimproveskills', event.target.value);
                break;
            default:
                break;
        }
    }

  return (
    <div className="card">
    <div className='card-header1' style={{padding: 10}}>
    <p className='card-title'><strong>PARTICIPATION IN CAPACITY BUILDING PROGRAMMES</strong></p>
    </div>
    <div className='card-body'>
        <div className='col-md-12'>
            <div className=''>
                <h4>Reports to work on time</h4>
            </div>
            <div style={{marginLeft: 10}}>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Excellent (90–100%)" 
                        checked={readilyparticipates == "Excellent (90–100%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Very good (75–89%)" 
                        checked={readilyparticipates == "Very good (75–89%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Good (60–74%)" 
                        checked={readilyparticipates == "Good (60–74%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Average (50–59%)" 
                        checked={readilyparticipates == "Average (50–59%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Below Average (40–49%)" 
                        checked={readilyparticipates == "Below Average (40–49%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="readilyparticipates" value="Unsatisfactory (below 40%)" 
                        checked={readilyparticipates == "Unsatisfactory (below 40%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'readilyparticipates')} className="custom-control-input" />
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
                        <input type="radio" name="transferstrainingknowledge" value="Excellent (90–100%)" 
                        checked={transferstrainingknowledge == 'Excellent (90–100%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="transferstrainingknowledge" value="Very good (75–89%)" 
                        checked={transferstrainingknowledge == 'Very good (75–89%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="transferstrainingknowledge" value="Good (60–74%)" 
                        checked={transferstrainingknowledge == 'Good (60–74%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="transferstrainingknowledge" value="Average (50–59%)" 
                        checked={transferstrainingknowledge == 'Average (50–59%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="transferstrainingknowledge" value="Below Average (40–49%)" 
                        checked={transferstrainingknowledge == 'Below Average (40–49%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="transferstrainingknowledge" value="Unsatisfactory (below 40%)" 
                        checked={transferstrainingknowledge == 'Unsatisfactory (below 40%)'  ? true : false}
                        onChange={(event) => handleSelection(event, 'transferstrainingknowledge')} className="custom-control-input" />
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
                        <input type="radio" name="takestimetoimproveskills" value="Excellent (90–100%)"
                        checked={takestimetoimproveskills == "Excellent (90–100%)" ? true : false}
                         onChange={(event) => handleSelection(event, 'availability')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="takestimetoimproveskills" value="Very good (75–89%)" 
                        checked={takestimetoimproveskills == "Very good (75–89%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'takestimetoimproveskills')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="takestimetoimproveskills" value="Good (60–74%)" 
                        checked={takestimetoimproveskills == "Good (60–74%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'takestimetoimproveskills')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="takestimetoimproveskills" value="Average (50–59%)"
                        checked={takestimetoimproveskills == "Average (50–59%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'takestimetoimproveskills')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="takestimetoimproveskills" value="Below Average (40–49%)" 
                        checked={takestimetoimproveskills == "Below Average (40–49%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'takestimetoimproveskills')} className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="takestimetoimproveskills" value="Unsatisfactory (below 40%)" 
                        checked={takestimetoimproveskills == "Unsatisfactory (below 40%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'takestimetoimproveskills')} className="custom-control-input" />
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

export default CapacityBuilding