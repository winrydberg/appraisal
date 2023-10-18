
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { StaffData } from '../types/types';
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
  data: StaffData | null
}


function AppraiseePersonalInfo(props: Props) {
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION A - Appraisee Personal Information</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed By Appraisee ]</Text>
        <View style={styles.table}>                       
            <View style={styles.table}>
                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>FIRST NAME:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.othernames : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>SURNAME:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.surname : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>DEPARTMENT / UNIT:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.department : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>SCHOOL / COLLEGE:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.school : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>FILE NO:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.staffid : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PRESENT GRADE:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.presentgrade : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>SEX:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.gender : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>AGE:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.age : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>DATE OF 1ST APPOINMTMENT:</Text>
                        <Text style={styles.text}>  {props.data != null ? props.data.first_appointment_date : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>EMPLOYMENT TYPE:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.employment_type : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>DATE OF LAST PROMOTION:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.last_promotion_date : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>EVALUATION PERIOD:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.evaluation_period : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PREVIOUS UNIT:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.previous_unit : ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>DATE OF LAST TRANSFER:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.last_transfer_date : ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>DATE OF LAST RELIEVE OF DUTIES:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.last_relieve_duty_date : ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default AppraiseePersonalInfo