import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start ddumini!</Text>
      </View>
      <Text>OnePiece</Text>
      <Button title='Do anything yet' onPress={() => alert('Button pressed')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
