import { Link } from "react-router-dom"
import {useState} from 'react';

interface Objective {
    target: string;
    projected_weight: string;
    obtained_weight: string;
    resource: string
}

function JobObjectives() {


 const [objectives, setObjectives] = useState<Objective[]>([]);

  const addObjective = () => {
    let tempObjective : Objective = {
        target: "",
        projected_weight: "",
        obtained_weight: "",
        resource: "",
    };
    setObjectives([...objectives, tempObjective]);
  }

  const deleteObjective = (index: number) => {
    let newState = objectives.filter((obj: Objective, indx) => {
        if(index !== indx){
            return obj;
        }
    });
    setObjectives(newState);
  }


  const handleSetObective = (event:any, index:number, field: string) => {
    const newState = objectives.map((obj:Objective, newindex:number)=> {
        if (index === newindex) {
            switch(field){
                case 'TARGET':
                    return {...obj, target: event.target.value};
                case 'WEIGHT_PROJECTED':
                    return {...obj, target: event.target.value};
                case 'WEIGHT_OBTAINED':
                    return {...obj, target: event.target.value};
                case 'RESOURCE':
                    return {...obj, target: event.target.value};
                default:
                    return obj
            }
          
        }
        return obj;
    });
    setObjectives(newState)
  }

  const renderObjectives = ()  => {
    return objectives.map((_:Objective, index:any) => {
        return(
            <div className="row" key={index}>
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="title">Target</label>
                                <textarea className="form-control" onChange={(event)=>handleSetObective(event, index, 'TARGET',)} name="target"></textarea>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="protected_weight">Weight(projected)</label>
                                <input type="text" className="form-control" onChange={(event)=>handleSetObective(event, index, 'WEIGHT_PROJECTED',)} id="protected_weight" name="protected_weight" />
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="obtained_weight">Weight(Obtained)</label>
                                <input type="text" className="form-control" onChange={(event)=>handleSetObective(event, index, 'WEIGHT_OBTAINED',)} id="obtained_weight" name="obtained_weight" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="resource">Target</label>
                                <textarea className="form-control" name="resource" onChange={(event)=>handleSetObective(event, index, 'RESOURCE',)} id="resource"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="form-group" style={{marginTop: 30}}>
                        <button className="btn btn-sm" onClick={() => deleteObjective(index)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    })
  }

  return (
    <div style={{marginBottom: 40}}>
    <div className="container" >
        <Link to="/" className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}>Go Back</Link>
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">SECTION C - JOB TARGETS/OBJECTIVES FOR THE CURRENT YEAR</h4>
            </div>
            <div className="card-body">
                <p>
                The appraiser and appraisee should meet to set performance targets/objectives for the year. This meeting should be held before the end of
                the second week in August. The targets/objectives should be reviewed periodically, and feedback provided to enable staff to achieve the
                set objectives. The targets/objectives should reflect the Unit’s/Department’s action plan in line with University/College Strategic Plan.
                The targets must be SMART (i.e. Specific, Measurable, Realistic, Agreeable, Timebound).
                </p>
                <hr />
                <form>
                    {/* <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="title">Target</label>
                                <textarea className="form-control" name="target"></textarea>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="protected_weight">Weight(projected)</label>
                                <input type="text" className="form-control" id="protected_weight" name="protected_weight" />
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="form-group">
                                <label htmlFor="obtained_weight">Weight(Obtained)</label>
                                <input type="text" className="form-control" id="obtained_weight" name="obtained_weight" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="resource">Target</label>
                                <textarea className="form-control" name="resource" id="resource"></textarea>
                            </div>
                        </div>
                    </div> */}
                    {renderObjectives()}

                    <button type="button" className="btn btn-md btn-primary" onClick={addObjective}>Add Objective</button>
                    <hr />

                    <button type="submit" className="btn btn-danger round col-md-3 ">Save & Continue</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default JobObjectives