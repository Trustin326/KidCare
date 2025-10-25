import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { save, load } from '../utils/storage';

const moods = [
  {key:'great', label:'😀 Great'},
  {key:'ok', label:'🙂 Okay'},
  {key:'tired', label:'🥱 Tired'},
  {key:'sad', label:'😢 Sad'},
  {key:'ouch', label:'🤒 Ouchy'},
  {key:'angry', label:'😠 Grumpy'},
];

export default function Mood(){
  const [history, setHistory] = useState([]);
  const add = async (m)=>{
    const rec = {id: Date.now().toString(), mood:m.key, label:m.label, ts:new Date().toISOString()};
    const next = [rec, ...history]; setHistory(next); await save('mood', next);
  };
  useEffect(()=>{(async()=> setHistory(await load('mood', [])))();},[]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How do you feel?</Text>
      <View style={styles.row}>
        {moods.map(m => (
          <TouchableOpacity key={m.key} style={styles.btn} onPress={()=>add(m)}>
            <Text style={styles.btnText}>{m.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{marginTop:16, fontWeight:'700'}}>History</Text>
      <FlatList data={history} keyExtractor={i=>i.id}
        renderItem={({item})=> (<Text style={styles.item}>{new Date(item.ts).toLocaleString()} — {item.label}</Text>)}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  row:{flexDirection:'row', flexWrap:'wrap'},
  btn:{backgroundColor:'#ffe66d', padding:10, margin:6, borderRadius:12},
  btnText:{fontSize:16},
  item:{paddingVertical:6}
});
