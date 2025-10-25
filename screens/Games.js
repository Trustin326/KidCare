import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Coloring from './games/Coloring';
import JumpMonster from './games/JumpMonster';

export default function Games(){
  const [screen, setScreen] = useState(null);
  if(screen==='color'){ return <Coloring onBack={()=>setScreen(null)} />; }
  if(screen==='jump'){ return <JumpMonster onBack={()=>setScreen(null)} />; }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Play</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>setScreen('color')}><Text style={styles.btnText}>🎨 Coloring</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>setScreen('jump')}><Text style={styles.btnText}>🦠 Jump the Sick Monster</Text></TouchableOpacity>
      <Text style={styles.small}>Short, gentle games to distract and soothe.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  btn:{backgroundColor:'#ffd6a5', padding:14, borderRadius:12, marginBottom:10},
  btnText:{fontSize:18, fontWeight:'700'},
  small:{fontSize:12, color:'#444'}
});
