import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TaskItem({
  title,
  status,
  onPress,
}: {
  title: string;
  status: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
      <Text>{status}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
  },
});