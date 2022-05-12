/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import *as React from 'react';
 import { View, Text, StyleSheet} from 'react-native';
 
 export default function App() {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Welcome to my food App  </Text>
       <Text style={styles.highlight}>Noodle Distribution App</Text>
     </View>
   );
 }

 const styles = StyleSheet.create({
    highlight: {
      color: 'orange',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });