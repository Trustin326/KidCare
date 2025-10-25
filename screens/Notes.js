import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { save, load } from '../utils/storage';

export default function Notes(){
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  useEffect(()=>{ (async()=> setNotes(await load('notes', [])))(); },[]);
  const add = async ()=>{
    if(!text.trim()) return;
    const item = { id: Date.now().toString(), text, ts: new Date().toISOString() };
    const next = [item, ...notes];
    setNotes(next); setText(''); await save('notes', next);
  };
  const remove = async (id)=>{
    const next = notes.filter(n=>n.id!==id); setNotes(next); await save('notes', next);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Care Notes</Text>
      <TextInput placeholder="Add a note (e.g., gave fluids, nap at 2pm)" value={text} onChangeText={setText} style={styles.input}/>
      <Button title="Add Note" onPress={add}/>
      <FlatList data={notes} keyExtractor={i=>i.id}
        renderItem={({item})=> (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <Text style={styles.itemTs}>{new Date(item.ts).toLocaleString()}</Text>
            <TouchableOpacity onPress={()=>remove(item.id)}><Text style={styles.remove}>Delete</Text></TouchableOpacity>
          </View>
        )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  input:{borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:10, marginBottom:10},
  item:{backgroundColor:'#f8fbff', padding:12, borderRadius:10, marginTop:10},
  itemText:{fontSize:16},
  itemTs:{fontSize:12, color:'#666', marginTop:4},
  remove:{color:'#d00', marginTop:6}
});
