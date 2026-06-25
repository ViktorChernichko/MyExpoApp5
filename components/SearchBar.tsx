import { StyleSheet, TextInput } from 'react-native';

export default function SearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});