import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Weather() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const getWeather = () => {
    setResult(`Weather data for ${city}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <TextInput
        style={styles.input}
        placeholder="City Name"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.btn} onPress={getWeather}>
        <Text style={{ color: '#fff' }}>Search</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  btn: { backgroundColor: '#007AFF', padding: 10 },
  result: { marginTop: 20, fontSize: 18 },
});