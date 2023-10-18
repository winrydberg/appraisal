import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Target } from '../types/types';
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

interface Props  {
    data: Array<Target>
}
function NextyearTargetPDF(props: Props) {

  const renderNextYearTargets = () => {
    if(props.data != null && Array.isArray(props.data)){
      return props.data.map((element: Target, index: number) => {
          return(
              <View style={{border: 1, padding: 10}} key={index}>
                  <View style={{flexDirection: 'row',marginBottom: 10}}>
                      <Text style={styles.textheader}>TARGET:</Text>
                      <Text style={styles.text}> {element.description}</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                      <Text style={styles.textheader}>WEIGHT(PROJECTED):</Text>
                      <Text style={styles.text}> {element.projected_weight}</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                      <Text style={styles.textheader}>WEIGHT(OBTAINED):</Text>
                      <Text style={styles.text}> NOT AVAILABLE NOW</Text>
                  </View>
                  <View style={{flexDirection: 'row', }}>
                      <Text style={styles.textheader}>RESOURCES REQUIRED:</Text>
                      <Text style={styles.text}> </Text>
                  </View>
              </View>
          )
      })
    }
  }
  
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION G - Setting Job Objectives/Targets for Next Year</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed By Appraiser and Appraisee ]</Text>

        <Text style={styles.text}> The supervisor and employee shall engage in a collegial dialogue to set key job objectives/targets against which employee performance will be evaluated at the end of the next appraisal year</Text>

        <View style={{marginTop: 10, }}>
            {renderNextYearTargets()}
        </View>
    </View>
  )
}

export default NextyearTargetPDF