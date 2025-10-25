import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const tabs = [
  {key:'Home', label:'Home'}, 
  {key:'Notes', label:'Notes'},
  {key:'Avatars', label:'Characters'},
  {key:'Mood', label:'Feelings'},
  {key:'Symptoms', label:'Symptoms'},
  {key:'Temperature', label:'Temp'},
  {key:'Meds', label:'Meds'},
  {key:'Music', label:'Music'},
  {key:'Games', label:'Games'}
];

export default function TabBar({ current, onSelect }){
  return (
    <View style={styles.bar}>
      {tabs.map(t => (
        <TouchableOpacity key={t.key} style={[styles.tab, current===t.key && styles.active]} onPress={()=>onSelect(t.key)}>
          <Text style={[styles.label, current===t.key && styles.activeLabel]}>{t.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar:{flexDirection:'row', flexWrap:'wrap', borderTopWidth:1, borderColor:'#eee', paddingBottom:8, justifyContent:'center'},
  tab:{paddingVertical:8, paddingHorizontal:10, margin:4, backgroundColor:'#f6f6ff', borderRadius:12},
  active:{backgroundColor:'#7ec8ff'},
  label:{fontWeight:'600'},
  activeLabel:{color:'#003a66'}
});
