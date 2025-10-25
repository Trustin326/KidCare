import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KidCare Companion</Text>
      <Text style={styles.subtitle}>Friendly tools to help you track, soothe, and stay informed.</Text>
      <View style={styles.card}>
        <Text style={styles.note}>
          ⚠️ Not medical advice. For emergencies, call your local emergency number. 
          This app does not measure temperature from a finger or diagnose disease.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:18, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title:{ fontSize:28, fontWeight:'800', color:'#1e90ff', marginBottom:6 },
  subtitle:{ fontSize:16, textAlign:'center', marginBottom:16, color:'#333' },
  card:{ backgroundColor:'#f0f8ff', padding:14, borderRadius:12 },
  note:{ fontSize:14, color:'#333' }
});
