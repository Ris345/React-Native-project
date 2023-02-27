
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text style={styles.design}>Cool App</Text></View>
      <Text></Text>
      <Text style={styles.design}>Item on the iphone</Text>
      <Button title="touch me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  design: {
    margin: 16, borderWidth: 2, borderColor: 'blue', padding: 20
  }
});
