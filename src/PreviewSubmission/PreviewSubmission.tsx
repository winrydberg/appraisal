import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font, Image } from '@react-pdf/renderer';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { AppDispatch, RootState } from '../store';
import { Appraisal, StaffData } from '../types/types';
import logo from "../assets/icon.png";
import AppraiseePersonalInfo from '../PDF/AppraiseePersonalInfo';
import AppraiserInfo from '../PDF/AppraiserInfo';
import JobObjectives from '../PDF/JobObjectives';
import AppraiseeConductPDF from '../PDF/AppraiseeConductPDF';
import OverallEvaluationPDF from '../PDF/OverallEvaluationPDF';
import StrengthAndDevelopmentPDF from '../PDF/StrengthAndDevelopmentPDF';
import NextyearTargetPDF from '../PDF/NextyearTargetPDF';
import TrainingAndDevelopmentPDF from '../PDF/TrainingAndDevelopmentPDF';
import DataService from '../Services/DataService';
import { setAppraisal } from '../store/actions/dataAction';
import Loader from '../Loader/Loader';
import SignaturePDF from '../PDF/SignaturePDF';


// Create styles
const styles = StyleSheet.create({
    docStyle: {
      width: "100%",
      minHeight: "100vh",
    },
  
    page: {
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection: "column",
      backgroundColor: "white",
      width: "100%",
    //   marginTop: 10
    },
    section: {
      width: "100%",
      padding: 20,
      // flexGrow: 1,
    },
    logoStyle: {
      height: 100,
      width: 100,
    },
    heading: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sectionheader: {
      marginTop: 10,
      marginBottom: 20,
      display: 'flex',
      alignItems:'center',
      alignSelf:'center',
      justifyContent: 'center',
      width: "100%",
      backgroundColor: '#281564',
      color:'white',
      padding: 5,
      marginLeft: 20,
      marginRight: 20,
      flexDirection:'row',
    },
    uniname: {
      fontSize: 14,
      marginBottom: 5,
    },
  
    //table
    table: {
      padding: 10,
      // borderWidth: 0.5,
      borderColor: "gray",
    },
    trow: {
      display:'flex',
      flexDirection:'row',
      marginBottom: 5,
      flexWrap: 'wrap'
      // justifyContent:'space-between'
    },
  
    //text styles
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    subtitle: {
      fontSize: 16,
      // marginBottom: 12,
      fontFamily: 'Oswald'
    },
    text: {
      marginRight: 20,
      marginBottom: 10,
      fontSize: 12,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
  
    
});

  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });


function PreviewSubmission() {

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const staff:StaffData = useSelector((state: RootState) => state.data.staff);
  const isSupervisor :  boolean = useSelector((state: RootState) => state.data.isSupervisor);
  const isHod :  boolean = useSelector((state: RootState) => state.data.isHod);
  const appraiseeid :  string = useSelector((state: RootState) => state.data.appraisee_id);
//   const [data, setAppraisal] = useState<any>(null);
  const data: Appraisal | null = useSelector((state: RootState) =>  state.data.appraisal);
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    getAppraisal();
  }, [])



  const getAppraisal = () => {
    let staffid = appraiseeid;
    if(isSupervisor == true || isHod == true){
        staffid = appraiseeid;
    }else{
        staffid = staff?.staffid != undefined ? staff?.staffid : appraiseeid;
    }
    DataService.getAppraisal(staffid).then(response => {
      // console.log(response.data.data);
       setLoading(false)
        if(response.data.status == 'success'){
            if(response.data.data == null){
              navigate(-1);
            }else{
              dispatch(setAppraisal(response.data.data))
            }
            setLoading(false)
        }else{
          Swal.fire("Error", response.data.message, "error").then(() => {
            navigate(-1);
          });
          setLoading(false)
        }
    }).catch(error => {
      console.log(error);
      setLoading(false);
    })
  }


  const renderPDF = () => {
    if(loading){
        return (
            <div>
                <Loader loading={loading} isOpen={loading} /> 
            </div>
        )
    }else{
        return (
            <div style={{marginBottom: 40}}>
            
            <div className="container" >
            <button onClick={()=> navigate(-1)} className="btn btn-primary" style={{marginTop: 20, marginBottom: 20}}><i className="fa fa-arrow-left"></i> Go Back</button>
            
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">SECTION J - PREVIEW SUBMISSIONS</h4>
                    </div>
                    <div className="card-body">
                        <PDFViewer style={{width: '100%', height: '100vh'}}>
                            <Document style={{width: '100%', }}>
                                    <Page size="A4" style={styles.page}>
                                        <View>
                                            <View style={styles.heading}>
                                            <Image src={logo} style={styles.logoStyle} />
                                            <Text style={styles.header}>UNIVERSITY OF GHANA</Text>
                                            <Text style={styles.title}>STAFF APPRAISAL - {data?.sectiona?.evaluation_period}</Text>
                                            
                                            </View>
                                        </View>
                                        
                                        <AppraiseePersonalInfo data={data != null ? data.sectiona : null} />

                                        <AppraiserInfo data={data != null ? data?.sectionb : null}/>

                                        <JobObjectives data={data != null ? data.sectionc : []}/>
                                    </Page>

                                    <Page size="A4" style={styles.page}>
                                        <AppraiseeConductPDF data={data != null ? data.sectiond : null}/>

                                        <OverallEvaluationPDF  data={data != null ? data.sectione : null}/>
                                    </Page>

                                    <Page size="A4" style={styles.page}>
                                        <StrengthAndDevelopmentPDF data={data != null ? data.sectionf: []} hadtraining={data!= null ? (data?.hadtraining != null ? data.hadtraining : 0 ) : 0} appraisee_training={data != null ? (data.appraisee_training != null ? data.appraisee_training : []) : []}/>

                                        <NextyearTargetPDF data={data != null ? data.sectiong : []}/>
                                    </Page>

                                    <Page size="A4" style={styles.page}>
                                        <TrainingAndDevelopmentPDF data={data != null ? data.sectionh : []}/>

                                        <SignaturePDF data={data != null ? data.sectioni : null} supervisorname={data?.sectionb.curr_supervisorname} hodname={data?.sectionb.curr_hodname}/>
                                    </Page>
                            </Document>
                        </PDFViewer>
                    </div>
                </div>
            </div>
    </div>
        )
    }
  }

  return (
    <>
        {renderPDF()}
    </>
  )
}

export default PreviewSubmission