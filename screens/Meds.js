import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { save, load } from '../utils/storage';

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: false }),
});

export default function Meds(){
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [list, setList] = useState([]);
  useEffect(()=>{(async()=> setList(await load('meds', [])))();},[]);

  const schedule = async (title, whenISO) => {
    const perm = await Notifications.requestPermissionsAsync();
    if(perm.status !== 'granted'){ Alert.alert('Notifications permission not granted'); return; }
    const when = new Date(whenISO);
    if(isNaN(when.getTime())){ Alert.alert('Use ISO time like 2025-09-07T21:00'); return; }
    await Notifications.scheduleNotificationAsync({
      content: { title, body:'Medication reminder' },
      trigger: when
    });
    Alert.alert('Reminder set for ' + when.toLocaleString());
  };

  const add = async ()=>{
    if(!name.trim() || !time.trim()) return;
    const item = { id: Date.now().toString(), name, time };
    const next = [item, ...list]; setList(next); await save('meds', next);
    setName(''); setTime('');
    await schedule('Time for ' + item.name, item.time);
  };

  const remove = async (id)=>{
    const next = list.filter(x=>x.id!==id); setList(next); await save('meds', next);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medication Alerts</Text>
      <TextInput placeholder="Medication name" value={name} onChangeText={setName} style={styles.input}/>
      <TextInput placeholder="When (ISO e.g. 2025-09-07T20:00)" value={time} onChangeText={setTime} style={styles.input}/>
      <Button title="Add & Schedule" onPress={add} />
      <FlatList data={list} keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name} — {item.time}</Text>
            <TouchableOpacity onPress={()=>remove(item.id)}><Text style={styles.remove}>Delete</Text></TouchableOpacity>
          </View>
        )}/>
      <Text style={styles.small}>⚠️ Always follow your clinician’s dosing instructions. This app does not recommend doses.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  input:{borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:8},
  item:{backgroundColor:'#f8fbff', padding:12, borderRadius:10, marginTop:10},
  itemText:{fontSize:16},
  remove:{color:'#d00', marginTop:6},
  small:{fontSize:12, marginTop:10, color:'#333'}
});
