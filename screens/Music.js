import React from 'react';
import { View, Text, Linking, Button, StyleSheet } from 'react-native';
export default function Music(){
  const open = (url)=> Linking.openURL(url);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Soothing Sounds</Text>
      <Text style={styles.small}>Tap to play calming sounds in your music app:</Text>
      <Button title="White Noise (YouTube)" onPress={()=>open('https://www.youtube.com/results?search_query=white+noise+10+hours')}/>
      <Button title="Lullabies (YouTube)" onPress={()=>open('https://www.youtube.com/results?search_query=lullaby+playlist')}/>
      <Button title="Rain Sounds (YouTube)" onPress={()=>open('https://www.youtube.com/results?search_query=rain+sounds+sleep')}/>
      <Text style={styles.small}>You can minimize the app while it plays in the background.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, padding:16},
  header:{fontSize:20, fontWeight:'700', marginBottom:8},
  small:{fontSize:14, marginVertical:8}
});
