import React, { useContext, useState, createContext } from "react";
import { Text, StyleSheet, TextInput, View , Button, TouchableOpacity} from "react-native";
import {Context}  from "../context/Context"; 
import { Feather } from '@expo/vector-icons'; 
import Home from "./HomeScreen";


const CreateScreen = ({navigation, route}) => {
const [newTitle, setTitle] = useState();
const [newContent, setContent] = useState();


const noteContext = useContext(Context);
  
  return (
    <View>
        <Text style = {styles.textTitle}>Alter note: </Text>
        <TextInput 
            placeholder = 'Title...'
            style = {styles.textInput}
            value={newTitle} 
            onChangeText={(ti) => setTitle(ti)}            
        />
        
        <TextInput 
            placeholder = 'Content...'
            style = {styles.textInput}
            value={newContent}  
            //value={newContent} 
            onChangeText={(t) => setContent(t)}
           
        />
        <View style={styles.grid}>
            <View style={styles.gridTitle}>
                <Text style={styles.titleNote}>
                    {route.params.title}
                </Text>
            </View>

            <View style={styles.gridContent}>
                <Text style={styles.contentNote}>
                    {route.params.content}
                </Text>
            </View>
        </View>
        {newTitle == null && newContent == null ?
        <TouchableOpacity style = {styles.create} //ìcone que chama a tela de criação de notas
                onPress={() => navigation.navigate('Home')}
        >
            <Feather name="check" size={55} color="white" />
        </TouchableOpacity>  
        : newTitle == null ? 
            <TouchableOpacity style = {styles.create} //ìcone que chama a tela de criação de notas
                onPress={() => {noteContext.alter(route.params.id, route.params.title, route.params.content,  route.params.title, newContent)}}
            >
                <Feather name="check" size={55} color="white" />
            </TouchableOpacity>  
        : newContent == null ? 
        <TouchableOpacity style = {styles.create} //ìcone que chama a tela de criação de notas
            onPress={() => {noteContext.alter(route.params.id, route.params.title, route.params.content,  newTitle, route.params.content)}}
        >
            <Feather name="check" size={55} color="white" />
        </TouchableOpacity>  
        :
        <TouchableOpacity style = {styles.create} //ìcone que chama a tela de criação de notas
                onPress={() => {noteContext.alter(route.params.id, route.params.title, route.params.content,  newTitle, newContent)}}
            >
                <Feather name="check" size={55} color="white" />
        </TouchableOpacity>  

        }
        
    </View>  
  );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 0.5,
        borderColor: 'rgb(0,0,0)',
        borderRadius:10, //bordas arredondadas
        margin: 10,
        padding: 5,
        backgroundColor: 'rgb(255,255,255)'
    },
    textTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
    },
    noteDatails:{
        margin:15
    },
    textDetails:{
        fontSize: 20,
        fontWeight: 'bold', 
    },
    create:{
        position: "absolute",
        marginLeft: 290,
        marginTop: 520,
        borderRadius: 28,
        backgroundColor: "green",
    
    },
    titleNote:{
        fontSize: 25,
        fontWeight: 'bold', 
        color: 'black',
        marginRight: 80,
    },

    contentNote:{
        marginRight: 80,
        fontSize: 15,
    },

    gridTitle:{
        marginLeft: 10,
        marginTop: 10
    },

    gridContent:{
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 180
    },
    grid:{
        borderWidth: 3,
        borderColor: 'rgb(255,255,255)',
        borderRadius:10, //bordas arredondadas
        margin: 20,
        padding: 5,
        backgroundColor: '#ffced9' 
    }
});

export default CreateScreen ;
