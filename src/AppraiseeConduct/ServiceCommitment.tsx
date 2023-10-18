import {useState, useEffect} from 'react'


interface Props {
    respectothers: string;
    integrityloyalty: string;
    commitment: string;
    benchmarkbehavior: string;
    commitmentStateFn: (field: string, data: string) => void;
}

function ServiceCommitment(props: Props) {


    const [respectothers, setRespectOthers] = useState<any>(null);
    const [integrityloyalty, setIntegrityLoyalty] = useState<any>(null);
    const [commitment, setCommitment] = useState<any>(null);
    const [benchmarkbehavior, setBenchmarkbehavior] = useState<any>(null);


    useEffect(() => {
        setRespectOthers(props.respectothers)
        setIntegrityLoyalty(props.integrityloyalty)
        setCommitment(props.commitment)
        setBenchmarkbehavior(props.benchmarkbehavior)
    }, [props.respectothers, props.integrityloyalty, props.commitment, props.benchmarkbehavior])


    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'respectothers':
                props.commitmentStateFn('respectothers',event.target.value);
                break;
            case 'integrityloyalty':
                props.commitmentStateFn('integrityloyalty' , event.target.value);
                break;
            case 'commitment':
                props.commitmentStateFn('commitment' , event.target.value);
                break;
            case 'benchmarkbehavior':
                props.commitmentStateFn('benchmarkbehavior' , event.target.value);
                break;
            default:
                break;
        }
    }

  return (
    <div className="card">
    <div className='card-header1' style={{padding: 10}}>
    <p className='card-title'><strong>COMMITMENT TO SERVICE EXCELLENCE AND UNIVERSITY CORE VALUES</strong></p>
    </div>
    <div className='card-body'>
        <div className='col-md-12'>
            <div className=''>
                <h4>Respects superiors, colleagues, and customers</h4>
            </div>
            <div style={{marginLeft: 10}}>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Excellent (90–100%)" 
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        checked={respectothers == "Excellent (90–100%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Very good (75–89%)" 
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        checked={respectothers == "Very good (75–89%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Good (60–74%)" 
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        checked={respectothers == "Good (60–74%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Average (50–59%)" 
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        checked={respectothers == "Average (50–59%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Below Average (40–49%)"
                        checked={respectothers == "Below Average (40–49%)" ? true : false} 
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="respectothers" value="Unsatisfactory (below 40%)" 
                        checked={respectothers == "Unsatisfactory (below 40%)" ? true : false}
                        onChange={(event) => handleSelection(event, 'respectothers')} 
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                    </label>
                </div>
            </div>
        </div>


        <div className='col-md-12' style={{marginTop: 20}}>
            <div className=''>
                <h4>Demonstrates a high level of integrity and loyalty</h4>
            </div>
            <div style={{marginLeft: 10}}>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Excellent (90–100%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Excellent (90–100%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Very good (75–89%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Very good (75–89%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Good (60–74%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Good (60–74%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Average (50–59%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Average (50–59%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Below Average (40–49%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Below Average (40–49%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="integrityloyalty" value="Unsatisfactory (below 40%)" 
                        onChange={(event) => handleSelection(event, 'integrityloyalty')} 
                        checked={integrityloyalty == "Unsatisfactory (below 40%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                    </label>
                </div>
            </div>
        </div>


        <div className='col-md-12' style={{marginTop: 20}}>
            <div className=''>
                <h4>Exhibits commitment to assigned job</h4>
            </div>
            <div style={{marginLeft: 10}}>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Excellent (90–100%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Excellent (90–100%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Very good (75–89%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Very good (75–89%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Good (60–74%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Good (60–74%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Average (50–59%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Average (50–59%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Below Average (40–49%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Below Average (40–49%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="commitment" value="Unsatisfactory (below 40%)" 
                        onChange={(event) => handleSelection(event, 'commitment')} 
                        checked={commitment == "Unsatisfactory (below 40%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                    </label>
                </div>
            </div>
        </div>


        <div className='col-md-12' style={{marginTop: 20}}>
            <div className=''>
                <h4>Demonstrated behavior becomes a benchmark for others</h4>
            </div>
            <div style={{marginLeft: 10}}>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Excellent (90–100%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Excellent (90–100%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Very good (75–89%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Very good (75–89%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Good (60–74%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Good (60–74%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Good (60–74%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Average (50–59%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Average (50–59%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Average (50–59%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Below Average (40–49%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Below Average (40–49%)" ? true : false}
                        className="custom-control-input" />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                    </label>
                </div>
                <div>
                    <label className="d-inline-block custom-control custom-radio">
                        <input type="radio" name="benchmarkbehavior" value="Unsatisfactory (below 40%)" 
                        onChange={(event) => handleSelection(event, 'benchmarkbehavior')} 
                        checked={benchmarkbehavior == "Unsatisfactory (below 40%)" ? true : false}
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

export default ServiceCommitment