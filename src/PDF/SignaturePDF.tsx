
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { SectionIInfo } from '../types/types';

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
    // padding: 10,
    // borderWidth: 0.5,
    marginTop: 10,
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
    fontSize: 10,
    textAlign: 'justify',
    marginLeft: 10
  },
  textheader: {
    fontFamily: 'Oswald',
    fontSize: 10,
    textAlign: 'justify',
    fontWeight: 'black'
  },

  tablerow : {
    // width: '100%',
    flexDirection: 'row',
    justifyContent:'center',
    // alignItems:'center'
  },
  tabledata: {
    border: 1,
    borderColor: 'gray',
    padding: 5,
    flex: 1,
    flexDirection: 'row'
    // width:'50%',
    // justifyContent:'center',
    // alignItems:'center'
  }



  
});


interface Props {
  data: SectionIInfo | null,
  supervisorname: string | null | undefined,
  hodname: string | null | undefined
}

function SignaturePDF(props: Props) {
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION I - Signature(s)</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed by Both Appraiser, Appraisee  And HOD]</Text>


        <View style={{border: 1, padding: 10}}>
                <View style={{flexDirection: 'row',marginBottom: 10}}>
                    <Text style={[styles.textheader, {color:'red'}]}>   APPRAISEE </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10, alignItems:'center'}}>
                    <Text style={styles.text}>1. I received a copy of my job description prior to setting performance targets/objectives. : </Text>
                    <Text style={[styles.textheader, {color:'red'}]}> {props.data != null ? props.data.appraisee_rcvd_job_desc : " - "}</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 10, alignItems:'center'}}>
                    <Text style={styles.text}>2. I received the required resources to enable me to achieve my performance targets : </Text>
                    <Text style={[styles.textheader, {color:'red'}]}>{props.data != null ? props.data.appraisee_rcvd_resources : " - "}</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 10, alignItems:'center'}}>
                    <Text style={styles.text}>3. I agree with the content and overall appraisal score of my performance. If “No” complete the comment section. : </Text>
                    <Text style={[styles.textheader, {color:'red'}]}>{props.data != null ? props.data.appraisee_agree : "NO"}</Text>
                </View>


                <View style={{flexDirection: 'column', marginBottom: 10}}>
                    
                    <Text style={[styles.textheader]}>COMMENTS</Text>
                    <Text style={styles.text}> {props.data != null ? props.data.appraisee_comment : " - "}</Text>
                </View>
        </View>

        <View style={{border: 1, padding: 10, marginTop: 10}}>
                <View style={{flexDirection: 'column',marginBottom: 10}}>
                    <Text style={[styles.textheader, {color:'red'}]}>   SUPERVISOR / APPRAISER </Text>
                    <Text style={styles.text}>I declare that this report reflects my candid evaluation of the employee’s performance in the year under review. I also acknowledge that I engaged the appraisee in a review dialogue and agreed on the final rating with reference to the achievement of each target set and the job description for the role. I hereby submit to Head of Department for further review.</Text>
                </View>
                <View style={{flexDirection: 'column', marginBottom: 10}}>
                    <Text style={styles.text}> Staff Name: {props.supervisorname != null ? props.supervisorname : ''}</Text>
                    <Text style={styles.text}> Signed: {props.data != null ? props.data?.supervisor_signed : "No"}</Text>
                    <Text style={styles.text}> Date Signed: {props.data != null ? props.data?.supervisor_signdate : " - "}</Text>
                </View>
        </View>

        <View style={{border: 1, padding: 10, marginTop: 10}}>
                <View style={{flexDirection: 'column',marginBottom: 10}}>
                    <Text style={[styles.textheader, {color:'red'}]}>   HEAD OF DEPARTMENT - HoD </Text>
                    <Text style={styles.text}>I reviewed this appraisal report with the supervisor to ensure that the appraisal process and dialogue were duly followed prior to issuance

to the employee. By signature, I confirm that the overall assessment scores reflect the performance of appraisee with respect to the

achievement of performance objectives and contribution to the achievement of University/College strategic objectives.</Text>
                </View>
                <View style={{flexDirection: 'column', marginBottom: 10}}>
                    <Text style={styles.text}> Staff Name: {props.hodname == null ? '' : props.hodname}</Text>
                    <Text style={styles.text}> Signed: {props.data != null ? props.data?.hod_signed: 'No'}</Text>
                    <Text style={styles.text}> Date Signed: {props.data != null ? props.data?.hod_signdate: ' - '}</Text>
                </View>
        </View>


    </View>
  )
}

export default SignaturePDF