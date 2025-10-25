import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Temperature(){
  const [tempF, setTempF] = useState('');
  const [time, setTime] = useState('');
  const [log, setLog] = useState([]);
  const add = ()=>{
    const t = parseFloat(tempF);
    if(isNaN(t)){ Alert.alert('Enter a number for temperature'); return; }
    const entry = {t, ts: time || new Date().toISOString()};
    setLog([entry, ...log]); setTempF(''); setTime('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Temperature Tracker</Text>
      <TextInput keyboardType="decimal-pad" value={tempF} onChangeText={setTempF} placeholder="Temperature (°F)" style={styles.input}/>
      <TextInput value={time} onChangeText={setTime} placeholder="Time (optional, ISO or note)" style={styles.input}/>
      <Button title="Add" onPress={add}/>
      <View style={styles.card}>
        <Text style={styles.small}>
          📌 Current smartphones cannot measure core temperature from a finger. Please use a trusted thermometer (e.g., digital, tympanic, forehead) and enter the reading here.
        </Text>
      </View>
      {log.map((e,i)=>(<Text key={i} style={{marginTop:6}}>{e.ts}: {e.t.toFixed(1)}°F</Text>))}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  input:{borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:8},
  card:{backgroundColor:'#fff8e1', padding:10, borderRadius:10, marginTop:12},
  small:{fontSize:12, color:'#333'}
});
