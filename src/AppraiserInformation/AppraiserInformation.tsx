import { useSelector } from "react-redux";
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Swal from 'sweetalert2'
import { RootState } from "../store";
import { Hod, SectionBInfo, StaffSearch, Supervisor } from "../types/types";
import DataService from "../Services/DataService";
import Loader from "../Loader/Loader";

function AppraiserInformation() {

    const supervisor: Supervisor = useSelector((state: RootState) => state.data.supervisor);
    const hod: Hod = useSelector((state: RootState) => state.data.hod);
    const isSupervisor: boolean = useSelector((state: RootState) => state.data.isSupervisor)
    const isHod: boolean = useSelector((state: RootState) => state.data.isHod)

    const [curr_supervisorid, setCurrentSupervisorId] = useState<string >(supervisor != null ? supervisor.staffid: '');
    const [curr_supervisorName, setCurrentSupervisorName] = useState<string>(supervisor != null ? supervisor.staffid: '');
    const [curr_hodid, setCurrentHodId] = useState<string>(hod != null ? hod.staffid: '');
    const [curr_hodName, setCurrentHodName] = useState<string>(hod != null ? hod.fullname: '');


    const [prev_supervisorid, setPrevSupervisorId] = useState<string>('');
    const [prev_supervisorName, setPrevSupervisorName] = useState<string>('');
    const [prev_hodid, setPrevHodId] = useState<string>('');
    const [prev_hodName, setPrevHodName] = useState<string>('');


    // const [supervisor_search, setSupervisorSearch] = useState<string>('');
    // const [hod_search, setHodSearch] = useState<string>('');
    const [items, setSearchResults] = useState<Array<StaffSearch>>([]);
    const [supitems, setSearchSupResults] = useState<Array<StaffSearch>>([]);
    const [hoditems, setSearchHodResults] = useState<Array<StaffSearch>>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate()





    useEffect(() => {
        setCurrentSupervisorId(supervisor != null ? supervisor.staffid : "");
        setCurrentSupervisorName(supervisor != null ? supervisor?.fullname : "");

        getSectionBInformation();
        // setCurrentSupervisorAndHod();
        loadStaff();
    }, [])


    // const setCurrentSupervisorAndHod = () => {
    //     if(supervisor != null){
    //         setCurrentSupervisorId(supervisor.staffid);
    //         setCurrentSupervisorName(supervisor.fullname);
    //     }
    //     if(hod != null){
    //         setCurrentSupervisorId(hod.staffid);
    //         setCurrentSupervisorName(hod.fullname);
    //     }
    // }

    const loadStaff = () => {
        setLoading(true);
        DataService.searchStaff("staffname").then(response => {
            setLoading(false);
            if(response.data.status == 'success'){
                setSearchResults(response.data.data != null ? response.data.data: []);
                setSearchSupResults(response.data.data != null ? response.data.data: []);
                setSearchHodResults(response.data.data != null ? response.data.data: []);
            }
        }).catch(error => {
            console.log(error)
            setLoading(false);
        })
    }


    const getSectionBInformation = () => {
        DataService.loadSectionBInformation().then(response => {
            if(response.data.status == 'success'){
                let data = response.data.data;
                if(data  != null){
                    setCurrentSupervisorId(data.curr_supervisorid != null ? data.curr_supervisorid : supervisor?.staffid);
                    setCurrentSupervisorName(data.curr_supervisorname != null ? data.curr_supervisorname : supervisor?.fullname);
                    setCurrentHodId(data.curr_hodid != null ? data.curr_hodid : hod?.staffid);
                    setCurrentHodName(data.curr_hodname != null ? data.curr_hodname : hod?.fullname);
                    setPrevSupervisorId(data.prev_supervisorid)
                    setPrevSupervisorName(data.prev_supervisorname);
                    setPrevHodId(data.prev_hodid);
                    setPrevHodName(data.prev_hodname);
                }
            }
        })
    }



    const saveInformation = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>, type: number) => {
        event.preventDefault();
        Swal.fire({
            title: 'Appraisers Information',
            text: "Confirm to save details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);

                let data : SectionBInfo = {
                    curr_supervisorid: curr_supervisorid == ""  ? supervisor.staffid: curr_supervisorid,
                    curr_supervisorname: curr_supervisorName == "" ? supervisor.fullname : curr_supervisorName,
                    curr_hodid: curr_hodid == "" ? hod.staffid : curr_hodid,
                    curr_hodname: curr_hodName == "" ? hod.fullname : curr_hodName,
                    prev_supervisorid: prev_supervisorid,
                    prev_supervisorname: prev_supervisorName,
                    prev_hodid: prev_hodid,
                    prev_hodname: prev_hodName,
                    sectionb_complete: type,
                }
                DataService.saveSectionBInformation(data).then(response => {
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
                    'You have cancelled action. Appraiser Information not submitted',
                    'info'
                )
            }
        })
    }



    const handleOnSearch = (searchterm: string, results:any) => {
        console.log(results, searchterm);
        // DataService.searchStaff(searchterm).then(response => {
        //     if(response.data.status == 'success'){
        //         setSearchResults(response.data.data != null ? response.data.data: []);
        //     }
        // })
    }

    const handleOnPrevSupervisorSearch = (searchterm: string, results:any) => {
        console.log(results, searchterm);
        // alert(searchterm);
        // DataService.searchStaff(searchterm).then(response => {
        //     if(response.data.status == 'success'){
        //         setSearchSupResults(response.data.data != null ? response.data.data: []);
        //     }
        // })
    }

    // const handleOnHODSearch = (searchterm: string, results:any) => {
    //     console.log(results);
    //     DataService.searchStaff(searchterm).then(response => {
    //         if(response.data.status == 'success'){
    //             setSearchResults(response.data.data != null ? response.data.data: []);
    //         }
    //     })
    // }


    const handleOnPrevHODSearch = (searchterm: string, results:any) => {
        console.log(results, searchterm);
        // DataService.searchStaff(searchterm).then(response => {
        //     if(response.data.status == 'success'){
        //         setSearchHodResults(response.data.data != null ? response.data.data: []);
        //     }
        // })
    }
    
    const handleOnSelect = (item: StaffSearch) => {
        setPrevSupervisorId(item.staff_id);
        setPrevSupervisorName(item.name);
    }

    
    const handleOnHodSelect = (item: StaffSearch) => {
        setPrevHodName(item.name)
        setPrevHodId(item.staff_id)
    }



    const handleOnCurrentHodSelect =(item: StaffSearch) => {
        setCurrentHodId(item.staff_id);
        setCurrentHodName(item.name);
    }


    

    const formatResult = (item: StaffSearch) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name} - {item.staff_id}</span>
          </>
        )
      }




    const renderHodInput = () =>  {
        if(hod != null && curr_hodName != "" && hod != undefined){
            return (
                <input type="text" value={curr_hodName} disabled={true} className="form-control" id="prev_fullname" name="prev_fullname" />
            )
        }else{
            return (
                <ReactSearchAutocomplete
                    items={items}
                    inputSearchString={curr_hodName != null ? curr_hodName : ""}
                    styling={{zIndex: 100}}
                    onSearch={handleOnSearch}
                    onSelect={handleOnCurrentHodSelect}
                    formatResult={formatResult}
                />
            )
        }
    }
    return (
        <div style={{marginBottom: 40}}>
            <Loader loading={loading} isOpen={loading}/>
            <div className="container" >
            <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION B - APPRAISERS INFORMATION</h4>
                    </div>
                    <div className="card-body">

                    
                        <form onSubmit={(event) => saveInformation(event, 1)}>

                        <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Current Supervisor</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="title">Staff ID</label>
                                                <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" readOnly value={curr_supervisorid == "" ? supervisor?.staffid : curr_supervisorid} className="form-control" id="staffid" name="staffid" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name</label>
                                                <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" value={curr_supervisorName == "" ? supervisor?.fullname : curr_supervisorName} className="form-control" id="current_fullname" name="current_fullname" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4>Current Head Of Department</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="title">Staff ID</label>
                                                <input disabled={isHod== true||isSupervisor == true ? true : false} type="text" readOnly value={curr_hodid != null ? curr_hodid : ''} className="form-control" id="staffid" name="staffid" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="prev_fullname">Full Name</label>
                                                {renderHodInput()}
                                               
                                                {/* <input type="text" value={curr_hodName} className="form-control" id="prev_fullname" name="prev_fullname" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <hr /> */}

                            <br />
                            <br />

                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Previous Supervisor</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="prev_supervisor_title">Staff ID</label>
                                                <input type="text" readOnly value={prev_supervisorid != null ? prev_supervisorid : ""} className="form-control" id="staffid" name="staffid" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="prev_supervisor_fullname">Full Name</label>
                                                <ReactSearchAutocomplete
                                                    items={supitems}
                                                    inputSearchString={prev_supervisorName != null ? prev_supervisorName : ""}
                                                    onSearch={handleOnPrevSupervisorSearch}
                                                    styling={{zIndex: 99}}
                                                    onSelect={handleOnSelect}
                                                    formatResult={formatResult}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                <div className="col-md-6">
                                    <h4 >Previous Head Of Department</h4>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="prev_hod_title">Staff ID</label>
                                                <input type="text" readOnly value={prev_hodid} className="form-control" id="staffid" name="staffid" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="prev_hod_fullname">Full Name</label>
                                                <ReactSearchAutocomplete
                                                    items={hoditems}
                                                    inputSearchString={prev_hodName != null ? prev_hodName : ""}
                                                    onSearch={handleOnPrevHODSearch}
                                                    styling={{zIndex: 99}}
                                                    onSelect={handleOnHodSelect}
                                                    formatResult={formatResult}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <hr />

                            <br />
                            <br />
                           
                
                            <button type="submit" disabled={(isHod==true || isSupervisor==true) ? true : false}  className="btn btn-danger round col-md-3 ">Save & Continue</button>
                            <button type="button" disabled={(isHod==true || isSupervisor==true) ? true : false}  style={{marginLeft: 10}} onClick={(event)=>saveInformation(event, 0)}  className="btn btn-warning round col-md-3 ">Save & Continue Later</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AppraiserInformation