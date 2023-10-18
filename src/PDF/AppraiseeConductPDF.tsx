import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { SectionDInfo } from '../types/types';
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
    data: SectionDInfo | null
}

export default function AppraiseeConductPDF(props: Props) {

    const renderHeadingGuide = () => {
        return (
            <View style={styles.table}>                       
            <View style={styles.table}>
                <View style={styles.tablerow}>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                        
                        <Text style={styles.textheader}>EXCELLENT: - Exceeded the targets. Achieved over 100% of the targets.</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Consistently performed beyond expectations in all key areas of objectives set.</Text>
                        <Text style={styles.text}> - Performance noticeably exceeded expectations.</Text>
                        <Text style={styles.text}> - An outstanding all-round performance</Text>
                        <Text style={styles.text}> - Performance becomes a benchmark for others</Text>
                    </View>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                        <Text style={styles.textheader}>VERY GOOD: - Met the targets fully. Achieved 90-100% of the targets</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Fully met expectations in many all the objectives set.</Text>
                        <Text style={styles.text}> - Meets job requirements and often exceeds them.</Text>
                        <Text style={styles.text}> - Made significant impact</Text>
                    </View>
                </View>

                <View style={styles.tabledata}></View>

                <View style={styles.tablerow}>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                        
                        <Text style={styles.textheader}>GOOD: - Met most of the targets. Achieved 70% to 89% of the targets</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Met most targets set for the period in a satisfactory and adequate manner.</Text>
                        <Text style={styles.text}> - Recognized as important team member.</Text>
                        <Text style={styles.text}> - Meets and is above satisfactory performance standards at times.</Text>
                        <Text style={styles.text}> - Job performance is satisfactory, acceptable and sometimes above expectations</Text>
                    </View>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>AVERAGE: - Met some of the targets. Achieved 50% to 69% of the targets</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Met some objectives set but not all.</Text>
                        <Text style={styles.text}> - Partially successful</Text>
                    </View>
                </View>

                <View style={styles.tabledata}></View>

                <View style={styles.tablerow}>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                        
                        <Text style={styles.textheader}>BELOW AVERAGE: - Did not meet the targets. Achieved 40-49% of the targets.</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Met less than half of objectives set</Text>
                        <Text style={styles.text}> - Objectives not consistently met</Text>
                        <Text style={styles.text}> - Improvement is needed to maintain current position</Text>

                    </View>
                    <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                        <Text style={styles.textheader}>UNSATISFACTORY: - Did not meet the targets. Achieved below 39% of the targets.</Text>
                        <View style={{marginTop: 10}}></View>
                        <Text style={styles.text}> - Failed to deliver to expected standards in key objective areas.</Text>
                        <Text style={styles.text}> - Could not meet any of the targets</Text>
                        <Text style={styles.text}> - Performance requires a high degree of supervision and immediate corrective action.</Text>
                        <Text style={styles.text}> - Does not meet basic job requirements and immediate improvement is needed for employment to continue</Text>
                    </View>
                </View>
            </View>
        </View>
        )
    }
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION D - Appraisee Conduct</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed By Appraiser ]</Text>

        <Text style={styles.text}>Employee conduct should contribute to the achievement of objectives/targets, facilitate teamwork, demonstrate, and uphold the core values of the University and provide memorable service experience to internal and external stakeholders.</Text>
        
        <Text style={styles.text}>The following narratives should guide the assessment of employee’s conduct and work.</Text>

        {/* <Text style={styles.text}>The following narratives should guide the assessment of employee’s conduct and work.</Text> */}


        {renderHeadingGuide()}


        <View style={styles.table}>
            <View style={styles.tablerow}>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>WORK ATTENDANCE / PUNCTUALITY</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Reports to work on time</Text>
                    <Text style={styles.text}> - Always available during working hours.</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.work_attendance : 'Not Filled'}</Text>
                    </View>
                </View>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>TEAMWORK</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Cooperates with persons in and outside the unit</Text>
                    <Text style={styles.text}> - Willingly accepts instructions and additional assignments</Text>
                    <Text style={styles.text}> - Assists others to accomplish group objective</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.teamwork : 'Not Filled'}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tablerow}>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>COMMITMENT TO SERVICE EXCELLENCE AND UNIVERSITY CORE VALUES</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Respects superiors, colleagues, and customers</Text>
                    <Text style={styles.text}> - Demonstrates a high level of integrity and loyalty</Text>
                    <Text style={styles.text}> - Exhibits commitment to assigned job</Text>
                    <Text style={styles.text}> - Demonstrated behavior becomes a benchmark for others</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.commitment : 'Not Filled'}</Text>
                    </View>
                </View>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>CUSTOMER SERVICE</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Ability to assist customers to find solutions to their problems</Text>
                    <Text style={styles.text}> - Go extra mile to offer support to customers</Text>
                    <Text style={styles.text}> - Respects and talks to customers politely</Text>
                    <Text style={styles.text}> - Ability to handle difficult customers</Text>
                    <Text style={styles.text}> - Willing to take time to answer questions or provide help to others</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.customer_service : 'Not Filled'}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tablerow}>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>PARTICIPATION IN CAPACITY BUILDING PROGRAMMES</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Readily participates in training programmes</Text>
                    <Text style={styles.text}> - Transfers knowledge and competences acquired at training to the job</Text>
                    <Text style={styles.text}> - Takes time outside of work to improve skills</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.capacity_building : 'Not Filled'}</Text>
                    </View>
                </View>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>DEPENDABILITY</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Reliable and trustworthy</Text>
                    <Text style={styles.text}> - Confidential and ethical</Text>
                    <Text style={styles.text}> - Meets deadlines</Text>
                    <Text style={styles.text}> - Supports unit goals</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.dependability : 'Not Filled'}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tablerow}>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>COMMUNICATION</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Ability to network and relate to other workers across departments</Text>
                    <Text style={styles.text}> - Effectively communicates decisions and requests.</Text>
                    <Text style={styles.text}> - Ability to comprehend and execute assignments without difficulty.</Text>
                    <Text style={styles.text}> - Has the ability to clearly express ideas to others</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.communication : 'Not Filled'}</Text>
                    </View>
                </View>
                <View style={[styles.tabledata, {flexDirection:'column', flexWrap: 'wrap'}]}>
                    <Text style={styles.textheader}>INNOVATION</Text>
                    <View style={{marginTop: 10}}></View>
                    <Text style={styles.text}> - Always displays innovation, and imagination in improving work methods</Text>
                    <Text style={styles.text}> - Utilize technology (or other effective ways) to improve work outputs</Text>
                    <View>
                        <Text style={[styles.textheader, {color:'red'}]}>SCORE: {props.data != null ? props.data.innovation : 'Not Filled'}</Text>
                    </View>
                </View>
            </View>



        </View>
    </View>
  )
}
