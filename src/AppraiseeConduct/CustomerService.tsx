import {useState, useEffect} from 'react'

interface Props {
    assiscustomers: string;
    goextramile: string;
    respectcustomers: string;
    handledifficultcustomers: string;
    taketimetoanswercustomers: string;
    customerServiceStateFn: (field: string, data: string) => void;
}
function CustomerService(props: Props) {


    const [assiscustomers, setAssistCustomers] = useState<any>(null);
    const [goextramile, setGoExtraMile] = useState<any>(null);
    const [respectcustomers, setRespectCustomers] = useState<any>(null);
    const [handledifficultcustomers, setHandleDifficultCustomers] = useState<any>(null);
    const [taketimetoanswercustomers, settakeTimeToAnswerCustomers] = useState<any>(null);

    useEffect(() => {
        setAssistCustomers(props.assiscustomers)
        setGoExtraMile(props.goextramile)
        setRespectCustomers(props.respectcustomers)
        setHandleDifficultCustomers(props.handledifficultcustomers)
        settakeTimeToAnswerCustomers(props.taketimetoanswercustomers)
    }, [props.assiscustomers, props.goextramile, props.respectcustomers, props.handledifficultcustomers, props.taketimetoanswercustomers])


    const handleSelection = (event: React.ChangeEvent<HTMLInputElement>, radioname: string) => {
        switch(radioname){
            case 'assiscustomers':
                props.customerServiceStateFn('assiscustomers',event.target.value);
                break;
            case 'goextramile':
                props.customerServiceStateFn('goextramile' , event.target.value);
                break;
            case 'respectcustomers':
                props.customerServiceStateFn('respectcustomers' , event.target.value);
                break;
            case 'handledifficultcustomers':
                props.customerServiceStateFn('handledifficultcustomers' , event.target.value);
                break;
            case 'taketimetoanswercustomers':
                props.customerServiceStateFn('taketimetoanswercustomers' , event.target.value);
                break;
            default:
                break;
        }
    }

  return (
    <div className="card">
        <div className='card-header1' style={{padding: 10}}>
        <p className='card-title'><strong>CUSTOMER SERVICE</strong></p>
        </div>
        <div className='card-body'>
            <div className='col-md-12'>
                <div className=''>
                    <h4>Ability to assist customers to find solutions to their problems</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="assiscustomers" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'assiscustomers')} 
                            checked={assiscustomers == "Unsatisfactory (below 40%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Go extra mile to offer support to customers</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="goextramile" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'goextramile')} 
                            checked={goextramile == "Unsatisfactory (below 40%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Respects and talks to customers politely </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'respectcustomers')} 
                            checked={respectcustomers == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'respectcustomers')} 
                            checked={respectcustomers == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'respectcustomers')} 
                            checked={respectcustomers == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'respectcustomers')} 
                            checked={respectcustomers == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'respectcustomers')} 
                            checked={respectcustomers == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="respectcustomers" value="Unsatisfactory (below 40%)"
                             onChange={(event) => handleSelection(event, 'respectcustomers')} 
                             checked={respectcustomers == "Unsatisfactory (below 40%)" ? true : false}
                             className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Ability to handle difficult customers </h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')}
                            checked={handledifficultcustomers == "Excellent (90–100%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')} 
                            checked={handledifficultcustomers == "Very good (75–89%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Good (60–74%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')} 
                            checked={handledifficultcustomers == "Good (60–74%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')} 
                            checked={handledifficultcustomers == "Average (50–59%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')} 
                            checked={handledifficultcustomers == "Below Average (40–49%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="handledifficultcustomers" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'handledifficultcustomers')}
                            checked={handledifficultcustomers == "Unsatisfactory (below 40%)" ? true : false} 
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Unsatisfactory (below 40%)</span></span>
                        </label>
                    </div>
                </div>
            </div>


            <div className='col-md-12' style={{marginTop: 20}}>
                <div className=''>
                    <h4>Willing to take time to answer questions or provide help to others</h4>
                </div>
                <div style={{marginLeft: 10}}>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Excellent (90–100%)" 
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Excellent (90–100%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Excellent (90–100%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Very good (75–89%)" 
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Very good (75–89%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Very good (75–89%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Good (60–74%)"
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Good (60–74%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Good (60–74%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Average (50–59%)" 
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Average (50–59%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Average (50–59%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Below Average (40–49%)" 
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Below Average (40–49%)" ? true : false}
                            className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description"><span>Below Average (40–49%)</span></span>
                        </label>
                    </div>
                    <div>
                        <label className="d-inline-block custom-control custom-radio">
                            <input type="radio" name="taketimetoanswercustomers" value="Unsatisfactory (below 40%)" 
                            onChange={(event) => handleSelection(event, 'taketimetoanswercustomers')} 
                            checked={taketimetoanswercustomers == "Unsatisfactory (below 40%)" ? true : false}
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

export default CustomerService