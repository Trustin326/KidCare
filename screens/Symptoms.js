import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const suggestions = (input) => {
  const text = input.toLowerCase();
  const tips = [];
  if(text.includes('fever')) tips.push('Offer fluids often; keep room comfortable; light clothing.');
  if(text.includes('cough')) tips.push('Warm liquids and honey (if over 1 year old) may soothe a cough.');
  if(text.includes('vomit') || text.includes('nausea')) tips.push('Small sips of oral rehydration solution; avoid heavy foods.');
  if(text.includes('diarrhea')) tips.push('Oral rehydration solutions and frequent small drinks.');
  if(text.includes('rash')) tips.push('Keep skin cool and avoid new lotions or detergents.');
  if(text.includes('ear') || text.includes('earache')) tips.push('Warm compress on the ear may reduce discomfort.');
  if(tips.length===0) tips.push('Track symptoms and rest. Seek professional guidance if you are worried.');
  return tips;
};

export default function Symptoms(){
  const [text, setText] = useState('');
  const [tips, setTips] = useState([]);
  const analyze = ()=> setTips(suggestions(text));
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Symptoms & Info</Text>
      <TextInput multiline style={styles.input} placeholder="Enter symptoms (e.g., fever 101.5F, cough, runny nose)"
        value={text} onChangeText={setText}/>
      <Button title="Get Helpful Tips" onPress={analyze}/>
      <View style={{marginTop:12}}>
        {tips.map((t,i)=>(<Text key={i} style={styles.tip}>• {t}</Text>))}
      </View>
      <View style={styles.card}>
        <Text style={styles.small}>
          This tool is for general, non-diagnostic information only. For medical advice, diagnosis, or treatment, contact a licensed clinician.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  input:{borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, minHeight:80, textAlignVertical:'top'},
  tip:{fontSize:16, marginVertical:6},
  card:{backgroundColor:'#f0f8ff', padding:10, borderRadius:10, marginTop:12},
  small:{fontSize:12, color:'#333'}
});
