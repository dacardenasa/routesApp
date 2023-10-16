import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Heart } from 'phosphor-react-native'

import { userLocationStore } from '@state'

const Home = () => {
  const location = userLocationStore(state => state.location);
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(location)}</Text>
      <Heart color="#AE2983" weight="fill" size={32} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});