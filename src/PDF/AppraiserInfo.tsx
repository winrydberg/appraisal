
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { SectionBInfo } from '../types/types';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
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


interface  Props {
    data: SectionBInfo | null
}
  
function AppraiserInfo(props: Props) {

//   const supervisor : Supervisor = useSelector((state: RootState) => state.data.supervisor);
  return (
    <View style={styles.section}>
        <View style={styles.sectionheader}>
            <Text style={styles.subtitle}>SECTION B - Appraisers Information</Text>
        </View>
        <Text style={styles.subtitle}>[ To be completed By Appraisee ]</Text>
        <View style={styles.table}>                       
            <View style={styles.table}>
                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>SUPERVISOR:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.curr_supervisorname: ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>SUPERVISOR FILE NO:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.curr_supervisorid: ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}></View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>CURRENT HOD:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.curr_hodname: ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>CURRENT HOD FILE NO:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.curr_hodid: ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}></View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PREVIOUS SUPERVISOR:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.prev_supervisorname: ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PREVIOUS SUPERVISOR FILE NO:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.prev_supervisorid: ''}</Text>
                    </View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}></View>
                </View>

                <View style={styles.tablerow}>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PREVIOUS HOD:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.prev_hodname: ''}</Text>
                    </View>
                    <View style={styles.tabledata}>
                        <Text style={styles.textheader}>PREVIOUS HOD FILE NO:</Text>
                        <Text style={styles.text}> {props.data != null ? props.data.prev_hodid: ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default AppraiserInfo