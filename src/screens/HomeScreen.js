import React, { useContext, useState } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {Context}  from "../context/Context";  
import { FontAwesome } from '@expo/vector-icons';
import AlterScreen from './AlterScreen'



const HomeScreen = ({navigation}) => {
  
    const noteContext = useContext(Context);


    return (
        <View style={styles.grid}>  
            <FlatList
                data={noteContext.notes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                return (
                    <View style={styles.container}>
                        <Text style = {styles.titleNote}>  
         
                            {item.title}
                        </Text>
                        
                        <Text style = {styles.contentNote}>                        
                            {item.content}
                        </Text>

                      
                            <TouchableOpacity style = {styles.alter} //ícone que chama a tela de remoção de notas
                                onPress={() => navigation.navigate('AlterScreen', {id: item.id, title: item.title, content: item.content})}
                                >
                                <FontAwesome name="edit" size={24} color="green" />
                            </TouchableOpacity>   

                            

                            <TouchableOpacity style = {styles.remove} //ícone que chama a tela de remoção de notas
                                onPress={() => noteContext.remove(item.id, item.title, item.content) }
                                >
                                <FontAwesome name="trash" size={24} color="red" />
                            </TouchableOpacity>  

                        
                          

                    </View>
                )
                }}
            />
            <TouchableOpacity style = {styles.create} //ícone que chama a tela de criação de notas
                onPress={() => navigation.navigate('CreateScreen')}
            >
                <AntDesign name="pluscircle" size={55} color="#1494ff" />
            </TouchableOpacity>     
            
        </View>
  );
};

const styles = StyleSheet.create({
    create:{
        position: "absolute",
        marginLeft: 290,
        marginTop: 535,
        borderRadius: 25,
    },
    remove:{
        marginLeft: 280,
        marginTop: -26
    },
    
    alter:{
        marginLeft: 240,
        marginTop: -20
    },

    grid:{
        marginTop:10,
        marginBottom: 82
    },

    container:{
        
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        alignContent: "center",
        width: 330,
        height: 88,
        marginLeft: 15,
        marginBottom: 10,
    },

    titleNote:{
        fontSize: 18,
        fontWeight: 'bold', 
        marginRight: 80,
    },

    contentNote:{
        marginTop: 7,
        marginRight: 80,
        fontSize: 13,
    }
});

export default HomeScreen;
