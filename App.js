import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Import Firestore
import {getFirestore,doc,setDoc, collection, addDoc, getDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWOnqXe4wvHetoFTnPREHCu1QxJshDQSE",
  authDomain: "fbase1-d102e.firebaseapp.com",
  projectId: "fbase1-d102e",
  storageBucket: "fbase1-d102e.appspot.com",
  messagingSenderId: "847265884989",
  appId: "1:847265884989:web:bbd304ecb3078379887354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const guardar=()=>{
    let user={
      cedula:'1023556349',
      nombre:'David',
      apellido:'Sierra',
    
    }
    const refUser =doc(db,'Personas','1023556349');
    setDoc(refUser,user)
  }
  const guardarAddDoc =()=>{
    let user={
      cedula:'1023556340',
      nombre:'Maria',
      apellido:'Davila'
    }
    const refUser=collection(db,'Personas');
    addDoc(refUser,user)
  }
  const recuperarDoc=async()=>{
    const refUser=doc(db,'Personas','17199807599');
    const userSnap=await getDoc(refUser);
    if(userSnap.exists()){
      console.log('Usuario: ',userSnap.data())
    }else{
      console.log('usuario no registrado')
    }
  }
  return (
    <View style={styles.container}>
      <Text>Working firestore!</Text>
      <Button title='Guardar' onPress={()=>{guardarAddDoc()}}></Button>
      <Button title='Recovery' onPress={()=>{recuperarDoc()}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
