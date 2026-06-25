import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NoteItem({
  title,
  onDelete,
}: {
  title: string;
  onDelete: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  delete: {
    color: 'red',
  },
});