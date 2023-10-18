import {useEffect, useState} from 'react';
import Swal from 'sweetalert2'
import {  useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader';
import DataService from '../Services/DataService';
import { SectionDInfo } from '../types/types';
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setSectionDInfo } from '../store/actions/dataAction';
import InfoLabel from '../InstructionLabel/InfoLabel';
// import WorkAttendance from './WorkAttendance';
// import Teamwork from './Teamwork';
// import ServiceCommitment from './ServiceCommitment';
// import CustomerService from './CustomerService';
// import CapacityBuilding from './CapacityBuilding';
// import Dependability from './Dependability';
// import Communication from './Communication';
// import Innovation from './Innovation';



// interface WorkAttendance {

// }

function AppraiseeConductMain() {

    const navigate = useNavigate();

    const [work_attendance, setWorkAttendance] = useState<string|number>('');
    const [teamwork, setTeamwork] = useState<string|number>('');
    const [commitment, setCommitment] = useState<string|number>('');
    const [customer_service, setCustomerService] = useState<string|number>('');
    const [capacity_building, setCapacityBuilding] = useState<string|number>('');
    const [dependability, setDependability] = useState<string|number>('');
    const [communication, setCommunication] = useState<string|number>('');
    const [innovation, setInnovation] = useState<string|number>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errfield, setErrorField] = useState<string>('');
    const dispatch: AppDispatch = useDispatch();
    const isSupervisor:boolean = useSelector((state: RootState) => state.data.isSupervisor);



    useEffect(() => {
        getSectionDInfomation();
    }, [])
    // //Work Attendance
    // const [reporting, setReporting] = useState<any>(null);
    // const [availability, setAvailability] = useState<any>(null);

    // //Team work
    // const [cooperation, setCooperation] = useState<any>(null);
    // const [accepinstruction, setAcceptInstruction] = useState<any>(null);
    // const [assistothers, setAssistOthers] = useState<any>(null);

    // //commitment to Service
    // const [respectothers, setRespectOthers] = useState<any>(null);
    // const [integrityloyalty, setIntegrityLoyalty] = useState<any>(null);
    // const [commitment, setCommitment] = useState<any>(null);
    // const [benchmarkbehavior, setBenchmarkbehavior] = useState<any>(null);

    // //customer service
    // const [assiscustomers, setAssistCustomers] = useState<any>(null);
    // const [goextramile, setGoExtraMile] = useState<any>(null);
    // const [respectcustomers, setRespectCustomers] = useState<any>(null);
    // const [handledifficultcustomers, setHandleDifficultCustomers] = useState<any>(null);
    // const [taketimetoanswercustomers, settakeTimeToAnswerCustomers] = useState<any>(null);

    // //participation in capacity building
    // const [readilyparticipates, setReadilyParticipate] = useState<any>(null);
    // const [transferstrainingknowledge, setTransferTrainingKnowledge] = useState<any>(null);
    // const [takestimetoimproveskills, setTakesTimeToImproveSkils] = useState<any>(null);


    // //dependability
    // const [reliabilityandtrustworthy, setReliabilityAndTrustWorkthy] = useState<any>(null);
    // const [confidentialandethical, setConfidentialAndEthical] = useState<any>(null);
    // const [meetdeadlines, setMeetDeadlines] = useState<any>(null);
    // const [supportgoals, setSupportGoals] = useState<any>(null);

    // //communication
    // const [abilitytonetwork, setAbilityToNetwork] = useState<any>(null);
    // const [effectivecommunication, setEffectiveCommunication] = useState<any>(null);
    // const [abilitytocomprehend, setAbilityToComprehend] = useState<any>(null);
    // const [abilitytoexpressclearly, setAbilityToExpressClearly] = useState<any>(null);

    // //innovation
    // const [displaysinnovation, setDisplaysInnovation] = useState<any>(null);
    // const [utilizetechnology, setUtilizeTechnology] = useState<any>(null);





    // const teamWorkSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'cooperation':
    //             setCooperation(data);
    //             break;
    //         case 'accepinstruction':
    //             setAcceptInstruction(data);
    //             break;
    //         case 'assistothers':
    //             setAssistOthers(data);
    //             break;
    //     }
    // }

    // const serviceCommitmentSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'respectothers':
    //             setRespectOthers(data);
    //             break;
    //         case 'integrityloyalty':
    //             setIntegrityLoyalty(data);
    //             break;
    //         case 'commitment':
    //             setCommitment(data);
    //             break;
    //         case 'benchmarkbehavior':
    //             setBenchmarkbehavior(data);
    //             break;
    //     }
    // }

    // const customerServiceSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'assiscustomers':
    //             setAssistCustomers(data);
    //             break;
    //         case 'goextramile':
    //             setGoExtraMile(data);
    //             break;
    //         case 'respectcustomers':
    //             setRespectCustomers(data);
    //             break;
    //         case 'handledifficultcustomers':
    //             setHandleDifficultCustomers(data);
    //             break;
    //         case 'taketimetoanswercustomers':
    //             settakeTimeToAnswerCustomers(data);
    //             break;
    //     }
    // }

    // const capacityBuildingSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'readilyparticipates':
    //             setReadilyParticipate(data);
    //             break;
    //         case 'transferstrainingknowledge':
    //             setTransferTrainingKnowledge(data);
    //             break;
    //         case 'takestimetoimproveskills':
    //             setTakesTimeToImproveSkils(data);
    //             break;
    //     }
    // }

    // const dependabiltySelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'reliabilityandtrustworthy':
    //             setReliabilityAndTrustWorkthy(data);
    //             break;
    //         case 'confidentialandethical':
    //             setConfidentialAndEthical(data);
    //             break;
    //         case 'meetdeadlines':
    //             setMeetDeadlines(data);
    //             break;
    //         case 'supportgoals':
    //             setSupportGoals(data);
    //             break;
    //     }
    // }

    // const communicationSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'abilitytonetwork':
    //             setAbilityToNetwork(data);
    //             break;
    //         case 'effectivecommunication':
    //             setEffectiveCommunication(data);
    //             break;
    //         case 'abilitytocomprehend':
    //             setAbilityToComprehend(data);
    //             break;
    //         case 'abilitytoexpressclearly':
    //             setAbilityToExpressClearly(data);
    //             break;
    //     }
    // }

    // const innovationSelectionHandler = (field: string, data: string) => {
    //     switch(field){
    //         case 'displaysinnovation':
    //             setDisplaysInnovation(data);
    //             break;
    //         case 'utilizetechnology':
    //             setUtilizeTechnology(data);
    //             break;

    //     }
    // }


    const isValidEntries = () => {
        if(work_attendance == "" || work_attendance == null){
            scrollToError('work_attendance')
            setErrorField('work_attendance');
            Swal.fire(
                'Error!',
                "Please fill the work attendance section to save and continue",
                'error'
            )
            return false;
        }
        else if(teamwork == "" || teamwork == null){
            scrollToError('teamwork')
            setErrorField('teamwork');
            Swal.fire(
                'Error!',
                "Please fill teamwork section to save and continue",
                'error'
            )
            return false;
        }
        else if(commitment == "" || commitment == null){

            setErrorField('commitment');
            scrollToError('commitment');
            Swal.fire(
                'Error!',
                "Please fill commitment section to save and continue",
                'error'
            )
            return false;
        }
        else if(customer_service == "" || customer_service == null){
            scrollToError('customer_service');
            setErrorField('customer_service');
            Swal.fire(
                'Error!',
                "Please fill customer service section to save and continue",
                'error'
            )
            return false;
        }
        else if(capacity_building == "" || capacity_building == null){
            scrollToError('capacity_building');
            setErrorField('capacity_building');
            Swal.fire(
                'Error!',
                "Please fill participation in capacity building section to save and continue",
                'error'
            )
            return false;
        }
        else if(dependability == "" || dependability == null){
            scrollToError('dependability');
            setErrorField('dependability');
            Swal.fire(
                'Error!',
                "Please fill dependability section to save and continue",
                'error'
            )
            return false;
        }
        else if(communication == "" || communication == null){
            scrollToError('communication');
            setErrorField('communication');
            Swal.fire(
                'Error!',
                "Please fill communication section to save and continue",
                'error'
            )
            return false;
        }
        else if(innovation == "" || innovation == null){
            scrollToError('innovation');
            setErrorField('innovation');
            Swal.fire(
                'Error!',
                "Please fill innovation section to save and continue",
                'error'
            )
            return false;
        }else{
            setErrorField('');
            return true;
        }
    }


    const saveInformation = () => {
        if(isValidEntries() == false){
            return;
        }
        Swal.fire({
            title: 'Save Appraisee Conduct',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);

                let data : SectionDInfo ={
                    work_attendance,
                    teamwork,
                    commitment,
                    customer_service,
                    capacity_building,
                    dependability,
                    communication,
                    innovation,
                    sectiond_complete: 1
                }

                DataService.saveSectionDInformation(data).then(response => {
                    if(response.data.status == 'success'){
                        setLoading(false);
                        Swal.fire(
                            'Success!',
                            response.data.message,
                            'success'
                        )
                    }else{
                        setLoading(false);
                        Swal.fire(
                            'Error!',
                            response.data.message,
                            'error'
                        )
                    }
                }).catch(error => {
                    setLoading(false);
                    Swal.fire(
                        'Error!',
                        error.message,
                        'error'
                    )
                })
            }else{
                Swal.fire(
                    'Cancelled!',
                    'You have cancelled action. Personal Information not submitted',
                    'info'
                  )
            }
        })
    }



    const saveAndContinueLater = () => {
        Swal.fire({
            title: 'Save Appraisee Conduct',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);

                let data : SectionDInfo ={
                    work_attendance,
                    teamwork,
                    commitment,
                    customer_service,
                    capacity_building,
                    dependability,
                    communication,
                    innovation,
                    sectiond_complete: 0
                }

                DataService.saveSectionDInformation(data).then(response => {
                    if(response.data.status == 'success'){
                        setLoading(false);
                        Swal.fire(
                            'Success!',
                            response.data.message,
                            'success'
                        )
                    }else{
                        setLoading(false);
                        Swal.fire(
                            'Error!',
                            response.data.message,
                            'error'
                        )
                    }
                }).catch(error => {
                    setLoading(false);
                    Swal.fire(
                        'Error!',
                        error.message,
                        'error'
                    )
                })
            }else{
                Swal.fire(
                    'Cancelled!',
                    'You have cancelled action. Personal Information not submitted',
                    'info'
                  )
            }
        })
    }
    




    const getSectionDInfomation = () => {
        DataService.loadSectionDInformation().then(response => {
            if(response.data.status == 'success'){
                let data: SectionDInfo = response.data.data;

                dispatch(setSectionDInfo(data));
                setWorkAttendance(data.work_attendance);
                setTeamwork(data.teamwork);
                setCommitment(data.commitment);
                setCapacityBuilding(data.capacity_building);
                setDependability(data.dependability);
                setCommunication(data.communication);
                setInnovation(data.innovation);
                setCustomerService(data.customer_service);
            }
        })
    }



    const scrollToError = (errorfield: string) => {
        let errorSection = document.querySelector("#"+errorfield);
        errorSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'start',
        });
        
    }

    const renderGradingSystem = () => {
        return (
            <>
                <p><strong><i className='ft-arrow-right'></i></strong> Excellent (90–100%) </p>
                <p><strong><i className='ft-arrow-right'></i></strong> Very good (75–89%) </p>
                <p><strong><i className='ft-arrow-right'></i></strong> Good (60–74%) </p>
                <p><strong><i className='ft-arrow-right'></i></strong> Average (50–59%) </p>
                <p><strong><i className='ft-arrow-right'></i></strong> Below Average (40–49%) </p>
                <p><strong><i className='ft-arrow-right'></i></strong> Unsatisfactory (below 40%) </p>
            </>
        )
    }



    return (
        <div style={{marginBottom: 40}}>
            <Loader loading={loading} isOpen={loading}/>
            <div className="container" style={{paddingBottom: 50}}>
            <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION D - APPRAISEE CONDUCT</h4>
                    </div>
                    <div className="card-body">
                        <div className='container' >
                            <div className='card'>
                                <div className='card-body'>

                                    <InfoLabel isSupervisor={isSupervisor}></InfoLabel>
                                    
                                    <p><i className='fa fa-info-circle'></i> Employee conduct should contribute to the achievement of objectives/targets, facilitate teamwork, demonstrate, and uphold the core values of the University and provide memorable service experience to internal and external stakeholders.</p>
                                    <p><i className='fa fa-info-circle'></i> The following narratives should guide the assessment of employee’s conduct and work.</p>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <strong>EXCELLENT</strong> - Exceeded the targets. Achieved over 100% of the targets.

                                            <ul>
                                                <li>Consistently performed beyond expectations in all key areas of objectives set.</li>
                                                <li>Performance noticeably exceeded expectations.</li>
                                                <li>An outstanding all-round performance</li>
                                                <li>Performance becomes a benchmark for others</li>
                                            </ul>
                                        </div>

                                        <div className='col-md-6'>
                                            <strong>VERY GOOD</strong> - Met the targets fully. Achieved 90-100% of the targets

                                            <ul>
                                                <li>Fully met expectations in many all the objectives set.</li>
                                                <li>Meets job requirements and often exceeds them.</li>
                                                <li>Made significant impact</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <strong>GOOD </strong>- Met most of the targets. Achieved 70% to 89% of the targets

                                            <ul>
                                                <li>Met most targets set for the period in a satisfactory and adequate manner.</li>
                                                <li>Recognized as important team member.</li>
                                                <li>Meets and is above satisfactory performance standards at times.</li>
                                                <li>Job performance is satisfactory, acceptable and sometimes above expectations</li>
                                            </ul>
                                        </div>

                                        <div className='col-md-6'>
                                            <strong>AVERAGE </strong>- Met some of the targets. Achieved 50% to 69% of the targets

                                            <ul>
                                                <li>Met some objectives set but not all.</li>
                                                <li>Partially successful</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <strong>BELOW AVERAGE</strong> - Did not meet the targets. Achieved 40-49% of the targets.

                                            <ul>
                                                <li>Met less than half of objectives set</li>
                                                <li>Objectives not consistently met</li>
                                                <li>Improvement is needed to maintain current position</li>
                                            </ul>
                                        </div>

                                        <div className='col-md-6'>
                                            <strong>UNSATISFACTORY</strong> - Did not meet the targets. Achieved below 39% of the targets.

                                            <ul>
                                                <li>Failed to deliver to expected standards in key objective areas.</li>
                                                <li>Could not meet any of the targets</li>
                                                <li>Performance requires a high degree of supervision and immediate corrective action.</li>
                                                <li>Does not meet basic job requirements and immediate improvement is needed for employment to continue</li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="card" id='work_attendance' style={{borderColor: errfield == 'work_attendance' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                        <div className='col-md-8'>
                                            <div className='card-title'> WORK ATTENDANCE / PUNCTUALITY </div>
                                            <div className='description'>
                                                <ul>
                                                    <li>Reports to work on time</li>
                                                    <li>Always available during working hours.</li>
                                                </ul>
                                            </div>
                                            <div className='form-group'>
                                                <label>Enter Score (in Percentage - %)</label>
                                                <input disabled={isSupervisor == true ? false : true} name='work_attendance' value={work_attendance} onChange={(event) => setWorkAttendance(event.target.value)} className='form-control col-md-8' type='number' />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            {renderGradingSystem()}
                                        </div>
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='teamwork' style={{borderColor: errfield == 'teamwork' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        TEAMWORK
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Cooperates with persons in and outside the unit</li>
                                                <li>Willingly accepts instructions and additional assignments</li>
                                                <li>Assists others to accomplish group objective</li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='teamwork' value={teamwork} onChange={(event) => setTeamwork(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='commitment' style={{borderColor: errfield == 'commitment' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        COMMITMENT TO SERVICE EXCELLENCE AND UNIVERSITY CORE VALUES
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Respects superiors, colleagues, and customers</li>
                                                <li>Demonstrates a high level of integrity and loyalty</li>
                                                <li>Exhibits commitment to assigned job</li>
                                                <li>Demonstrated behavior becomes a benchmark for others</li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='commitment' value={commitment} onChange={(event) => setCommitment(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='customer_service' style={{borderColor: errfield == 'customer_service' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        CUSTOMER SERVICE
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Ability to assist customers to find solutions to their problems</li>
                                                <li>Go extra mile to offer support to customers</li>
                                                <li>Respects and talks to customers politely </li>
                                                <li>Ability to handle difficult customers </li>
                                                <li>Willing to take time to answer questions or provide help to others </li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='customer_service' value={customer_service} onChange={(event) => setCustomerService(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='capacity_building' style={{borderColor: errfield == 'capacity_building' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        PARTICIPATION IN CAPACITY BUILDING PROGRAMMES
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Readily participates in training programmes</li>
                                                <li>Transfers knowledge and competences acquired at training to the job</li>
                                                <li>Takes time outside of work to improve skills</li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='capacity_building' value={capacity_building} onChange={(event) => setCapacityBuilding(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>




                            <div className="card" id='dependability' style={{borderColor: errfield == 'dependability' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        DEPENDABILITY
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Reliable and trustworthy </li>
                                                <li>Confidential and ethical </li>
                                                <li>Meets deadlines </li>
                                                <li>Supports unit goals </li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='dependability' value={dependability} onChange={(event) => setDependability(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='communication' style={{borderColor: errfield == 'communication' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        COMMUNICATION
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Ability to network and relate to other workers across departments</li>
                                                <li>Effectively communicates decisions and requests.</li>
                                                <li>Ability to comprehend and execute assignments without difficulty.  </li>
                                                <li>Has the ability to clearly express ideas to others</li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='communication' value={communication} onChange={(event) => setCommunication(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>


                            <div className="card" id='innovation' style={{borderColor: errfield == 'innovation' ? 'red' : '#d6d6d6'}}>
                                <div className='card-body'>
                                   <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='card-title'>
                                        INNOVATION 
                                        </div>
                                        <div className='description'>
                                            <ul>
                                                <li>Always displays innovation, and imagination in improving work methods</li>
                                                <li>Utilize technology (or other effective ways) to improve work outputs</li>
                                            </ul>
                                        </div>
                                        <div className='form-group'>
                                            <label>Enter Score (in Percentage - %)</label>
                                            <input disabled={isSupervisor == true ? false : true} name='innovation' value={innovation} onChange={(event) => setInnovation(event.target.value)} className='form-control col-md-8' type='number' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        {renderGradingSystem()}
                                    </div>
                                    
                                   </div>
                                </div>
                            </div>



                            {/* <WorkAttendance reporting={reporting} availability={availability} 
                                            reportStateFn = {setReporting} 
                                            availabilityStateFn={setAvailability}/>

                            <Teamwork  cooperation={cooperation} accepinstruction={accepinstruction}  assistothers={assistothers}
                                            teamWorkStateFn = {teamWorkSelectionHandler}  />
                            
                            <ServiceCommitment respectothers={respectothers} integrityloyalty={integrityloyalty} 
                                            commitment={commitment} benchmarkbehavior={benchmarkbehavior} 
                                            commitmentStateFn={serviceCommitmentSelectionHandler}/>

                            <CustomerService assiscustomers={assiscustomers} goextramile={goextramile} respectcustomers={respectcustomers}
                                            handledifficultcustomers={handledifficultcustomers} taketimetoanswercustomers={taketimetoanswercustomers}
                                            customerServiceStateFn={customerServiceSelectionHandler}/>

                            <CapacityBuilding readilyparticipates = {readilyparticipates} transferstrainingknowledge={transferstrainingknowledge} 
                                            takestimetoimproveskills={takestimetoimproveskills}
                                            capacityBuildingStateFn={capacityBuildingSelectionHandler}/> 

                            <Dependability  reliabilityandtrustworthy={reliabilityandtrustworthy} confidentialandethical={confidentialandethical}
                                            meetdeadlines={meetdeadlines}
                                            supportgoals={supportgoals}
                                            dependabilityStateFn={dependabiltySelectionHandler}/>
                                    
                            <Communication abilitytonetwork={abilitytonetwork} effectivecommunication ={effectivecommunication}
                                           abilitytocomprehend={abilitytocomprehend} abilitytoexpressclearly={abilitytoexpressclearly}
                                           communicationStateFn={communicationSelectionHandler}/>

                            <Innovation displaysinnovation={displaysinnovation} utilizetechnology={utilizetechnology}
                                        innovationStateFn={innovationSelectionHandler}/> */}

                            <button onClick={saveInformation} disabled={isSupervisor == true ? false : true} className='btn btn-round btn-danger col-md-2'>Save & Continue</button>
                            <button onClick={saveAndContinueLater} disabled={isSupervisor == true ? false : true} className='btn btn-round btn-warning col-md-3'>Save & Continue Later</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AppraiseeConductMain