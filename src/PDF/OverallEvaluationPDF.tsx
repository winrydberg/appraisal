import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { SectionEInfo } from '../types/types';
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
    data: SectionEInfo | null
}

function OverallEvaluationPDF(props: Props) {
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION E - Overall Evaluation Of Appraisee</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed By Appraiser ]</Text>

        <View style={{border: 1, padding: 10}}>
                <View style={{flexDirection: 'row',marginBottom: 10}}>
                    <Text style={styles.textheader}>WORK: </Text>
                    <Text style={[styles.textheader, {color: 'red'}]}> - { props.data != null  ? (props.data.workevaluation != null ?  props.data.workevaluation+"  "+ props.data.overall_work_val : "Not Filled") : "Not Filled"}</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Excellent (90–100%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Very good (75–89%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Good (60–74%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Average (50–59%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Below Average (40–49%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Unsatisfactory (below 40%)</Text>
                </View>
        </View>

        <View style={{border: 1, padding: 10}}>
                <View style={{flexDirection: 'row',marginBottom: 10}}>
                    <Text style={styles.textheader}>CONDUCT:</Text>
                    <Text style={[styles.textheader, {color:'red'}]}> - { props.data != null ? (props.data.conductevaluation != null ? props.data.conductevaluation +" "+ props.data.overall_conduct_val : "Not Filled") : "Not Filled"}</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Excellent (90–100%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Very good (75–89%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Good (60–74%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Average (50–59%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Below Average (40–49%)</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Text style={styles.text}> - Unsatisfactory (below 40%)</Text>
                </View>
        </View>

        <View style={{border: 1, padding: 10}}>
                <View style={{flexDirection: 'row',marginBottom: 10}}>
                    <Text style={styles.textheader}>SPECIFIC DETAILS:</Text>
                </View>
                <Text style={styles.text}> Please give specific examples of outstanding, below average or unsatisfactory work and/or conduct in the section below. Letters of commendation or warning/caution should be attached.</Text>
                <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
                    <Text style={styles.text}> {props.data != null && props.data.specific_details != null? props.data.specific_details : "Not Filled"}</Text>
                </View>
                
        </View>
    </View>
  )
}

export default OverallEvaluationPDF