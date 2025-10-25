import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { save, load } from '../utils/storage';

const palette = ['#ff6b6b','#ffd93d','#6bcB77','#4d96ff','#b980f0','#ff9f1c'];
const emojis = ['🦄','🦖','🐼','🐯','🐰','🦊','🐨','🐸'];

export default function Avatars(){
  const [avatar, setAvatar] = useState({bg:'#ffd93d', emoji:'🐰', name:'Buddy'});
  useEffect(()=>{(async()=>{ const a = await load('avatar'); if(a) setAvatar(a) })();},[]);
  const pick = async (bg, emoji)=>{ const a={...avatar,bg,emoji}; setAvatar(a); await save('avatar', a); };
  const setName = async (name)=>{ const a={...avatar,name}; setAvatar(a); await save('avatar', a); };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Character</Text>
      <View style={[styles.avatar, {backgroundColor: avatar.bg}]}>
        <Text style={styles.emoji}>{avatar.emoji}</Text>
      </View>
      <TextInput placeholder="Character name" value={avatar.name} onChangeText={setName} style={styles.input}/>
      <Text style={{marginBottom:8}}>Tap a color + character to set.</Text>
      <View style={styles.row}>
        {palette.map(c=>(<TouchableOpacity key={c} style={[styles.color, {backgroundColor:c}]} onPress={()=>pick(c, avatar.emoji)}/>))}
      </View>
      <View style={styles.row}>
        {emojis.map(e=>(<TouchableOpacity key={e} style={styles.char} onPress={()=>pick(avatar.bg, e)}><Text style={{fontSize:28}}>{e}</Text></TouchableOpacity>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700'},
  avatar:{width:120, height:120, borderRadius:60, alignItems:'center', justifyContent:'center', marginVertical:16},
  emoji:{fontSize:64},
  input:{borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, marginBottom:8},
  row:{flexDirection:'row', flexWrap:'wrap', gap:10},
  color:{width:36, height:36, borderRadius:18, margin:6},
  char:{padding:8, margin:6, backgroundColor:'#f0f0ff', borderRadius:10}
});
