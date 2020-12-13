import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity ,Button,Image } from 'react-native'

// import CustomButton from './components/CustomButton'
export default class App extends React.Component{
    constructor(){
        super()
        this.state={
           Count:0,
           value:''
        }
    }
    handleInc=()=> {
        this.setState({Count:this.state.Count+1})
        // this.setState((prevState)=>({'Count':prevState.Count+1}))
    }

    handleDec=()=> {
        let count = ((this.state.Count-1)>0?this.state.Count-1:0)
        this.setState({Count:count})
        // this.setState((prevState)=>({'Count':prevState.Count+1}))
    }

    handleReset=()=> {
        this.setState({Count:0})
        // this.setState((prevState)=>({'Count':prevState.Count+1}))
    }


    render(){
        return(
            <>
            
            <View style={{alignItems:'center',top:'10%',backgroundColor:'#E6DEDD',height:80,borderWidth:4,borderColor: "#20232a",borderRadius: 6,}}>
            <Text style={{top:'50%',transform: [
            { translateY: -55 },

    ], fontSize:80,fontWeight:'700',color:'#FA1405'}} >{this.state.Count}</Text>
    </View>

            <View style={styles.container}>              
            <View style={{marginRight:0}}>
                    {/* <Button onPress={this.handleInc} title='+' /> */}
                    <TouchableOpacity
                        style={{marginTop:-180,
                            width:60,
                            height:60,
                            paddingTop:15,
                            paddingBottom:15,
                            // marginLeft:-20,
                            marginRight:-35,
                            backgroundColor:'#0BB14E',
                            borderRadius:30,
                            borderWidth: 1,
                            borderColor: '#fff'}}
                        activeOpacity = { .5 }
                        onPress={ this.handleDec }
                    >
                        <Text style={{color:'#fff',
                                        textAlign:'center',}}> M </Text>
                    </TouchableOpacity>                   
                </View>
                <View style={{marginRight:0}}>
                    {/* <Button onPress={this.handleInc} title='+' /> */}
                    <TouchableOpacity
                        style={{marginTop:10,
                            width:200,
                            height:200,
                            paddingTop:15,
                            paddingBottom:15,
                            marginLeft:30,
                            marginRight:30,
                            backgroundColor:'#058C42',
                            borderRadius:100,
                            borderWidth: 1,
                            borderColor: '#fff'}}
                        activeOpacity = { .5 }
                        onPress={ this.handleInc }
                    >
                        <Text style={{color:'#fff',textAlign:'center',lineHeight:160,fontWeight:"bold",fontSize:25,textShadowColor:'#030A04',}}> COUNT </Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginRight:0}}>
                    {/* <Button onPress={this.handleInc} title='+' /> */}
                    <TouchableOpacity
                        style={{marginTop:-180,
                            width:60,
                            height:60,
                            paddingTop:15,
                            paddingBottom:15,
                            marginLeft:-35,
                            // marginRight:-20,
                            backgroundColor:'#2ECC71',
                            borderRadius:30,
                            borderWidth: 1,
                            borderColor: '#fff'}}
                        activeOpacity = { .5 }
                        onPress={ this.handleReset }
                    >
                        <Text style={{color:'#fff',textAlign:'center',}}> R </Text>
                    </TouchableOpacity>
                </View>  
                          
            </View> 
            <Image source = {require('C:/Users/Sajid/FirstApp/assets/app.png')} style={{marginLeft:80,marginTop:-145,marginBottom:25}} />
            <Text style={{textAlign:"center",}}>Prepared By: Engr.M SAJID MEHMOOD</Text>         
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})