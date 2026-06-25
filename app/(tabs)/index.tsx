import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      <Link href="/notes" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Task 1 - Notes Manager</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/products" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Task 2 - Product Catalog</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/tasks" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Task 3 - Task Manager</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/weather" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Task 4 - Weather App</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});