import React,{Component} from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

    const CustomButton=(props)=>{
        return (
            <View style={{margin:10}}>
                <Button title={props.title} style={(props.round?style.Round:{})}  color='orange' onPress={()=>props.onPress()}/>
            </View>
        );
    }


    export default CustomButton;
        const style=StyleSheet.create({
        Round:{
            borderRadius:50,
        },
    });