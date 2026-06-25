import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Notes() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([note, ...notes]);
    setNote('');
  };

  const removeNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes Manager</Text>

      <TextInput
        style={styles.input}
        placeholder="New note"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity style={styles.button} onPress={addNote}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>

      <Text>Total Notes: {notes.length}</Text>

      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeNote(index)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, marginBottom: 10 },
  buttonText: { color: '#fff', textAlign: 'center' },
  item: { padding: 10, borderBottomWidth: 1 },
});