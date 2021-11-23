import React, { useContext, useState, createContext } from "react";
import { Text, StyleSheet, TextInput, View , Button, TouchableOpacity} from "react-native";
import {Context}  from "../context/Context"; 
import { Feather } from '@expo/vector-icons'; 


const CreateScreen = ({ navigation, route }) => {
const [title, setTitle] = useState();
const [content, setContent] = useState();


const noteContext = useContext(Context);
  
  return (
    <View>
        <Text style = {styles.textTitle}>Add a new note: </Text>
        <TextInput 
            placeholder = "Title"
            style = {styles.textInput}
            value={title} 
            onChangeText={(title) => setTitle(title)}            
        />
        
        <TextInput 
            placeholder = "Content"
            style = {styles.textInput}
            value={content}  
            onChangeText={(t) => setContent(t)}
           
        />

        <TouchableOpacity style = {styles.create} //ìcone que chama a tela de criação de notas
                onPress={() => {noteContext.create(title, content)}}
        >
            <Feather name="check" size={55} color="white" />
        </TouchableOpacity>  



        <View style={styles.noteDatails}>
            <Text style={styles.textDetails}>{title}</Text>
        </View>
        <View style={styles.noteDatails}>
            <Text styele={styles.textTitle}>{content}</Text>
        </View>
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
});

export default CreateScreen ;
