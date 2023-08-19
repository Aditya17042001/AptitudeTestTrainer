
import { StyleSheet,Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
export default function LoginScreen(){
    return(
        <ScrollView
   
        >
         <View style={styles.container}>
         <View style={styles.logocontainer}>
           <Image
              source={require('../assets/mocktestlogo.jpg')} 
              style={styles.logo}
            />
            </View>
           
          <View style={styles.logincontainer}>
          <TextInput
              style={styles.input}
              placeholder="Username"
            />
              <TextInput
              style={[styles.input,styles.password]}
              secureTextEntry={true}
              placeholder="Password"
            />
            <TouchableOpacity style={styles.signinbutton}>
              <Text style={styles.signintext} >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
         
          <View style={styles.footer}>
            <Text>Don't have an account?  </Text>
            <TouchableOpacity>
              <Text>SignUp</Text>
            </TouchableOpacity>
          </View>
          </View>
         </ScrollView>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin:5,
      alignItems:'center',
     
    },
    logocontainer:{
      flex:3,
     
     paddingTop:40
    },
    logo:{
      height:160,
      width:160,
      borderRadius:80,
      marginTop:50
     
    },
    logincontainer:{
     
      flex:4,
      width:300,
      alignItems:'center',
      paddingTop:50,
     
      marginBottom:80
     
    },
    input:{
    borderBottomWidth:1,
    borderBottomColor:'#d3d3d3',
  
    width:280,
    paddingBottom:0,
    marginBottom:60,
    
    },
    password:{
      marginBottom:50
    },
    signinbutton:{
     backgroundColor:'#953bdb',
     width:150,
     height:40,
     textAlign:'center',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:30,
     marginTop:40
     
    },
    signintext:{
      color:'white',
      fontWeight:'bold'
    },
    footer:{
      
      flex:1,
      width:200,
      display:'flex',
      flexDirection:'row'
    }
  });
