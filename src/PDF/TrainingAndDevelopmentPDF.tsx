import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { TrainingArea } from '../types/types';
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
    data: Array<TrainingArea>
}
function TrainingAndDevelopmentPDF(props: Props) {

  const renderTrainingAreaDev = () => {
    if(props.data != null && Array.isArray(props.data)){
      return props.data.map((data, index) => {
        return (
            
            <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text key={index} style={styles.text}> - {data.description}</Text>
            </View>
        )
     })
    }
     
  }
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION H - Training & Development Needs</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed by the appraiser in discussion with the appraisee ]</Text>

        <Text style={[styles.text, {marginTop: 10}]}>With reference to the performance evaluation and job description what competencies/skills does the employee lack, which contributed to his/her inability to meet all the targets or will enhance the performance of the employee?</Text>
        <Text style={[styles.text, {marginTop: 10}]}>With reference to the performance evaluation and job description what competencies/skills does the employee lack, which contributed to his/her inability to meet all the targets or will enhance the performance of the employee?</Text>

        <View style={{marginTop: 10, }}>
            {renderTrainingAreaDev()}
        </View>
        <View style={{border: 1, padding: 10}}>
                <View style={{flexDirection: 'row',marginBottom: 10}}>
                    <Text style={styles.textheader}>Training & Development Areas:</Text>
                </View>
                {renderTrainingAreaDev()}
            </View>
    </View>
  )
}

export default TrainingAndDevelopmentPDF