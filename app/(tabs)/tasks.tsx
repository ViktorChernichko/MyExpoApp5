import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Tasks() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: task,
        status: 'Planned',
      },
    ]);

    setTask('');
  };

  const updateStatus = (id: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === 'Planned'
                  ? 'In Progress'
                  : t.status === 'In Progress'
                  ? 'Completed'
                  : 'Completed',
            }
          : t
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      <TextInput
        style={styles.input}
        placeholder="Task"
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity style={styles.btn} onPress={addTask}>
        <Text style={{ color: '#fff' }}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => updateStatus(item.id)}
          >
            <Text>{item.title}</Text>
            <Text>{item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  btn: { backgroundColor: '#007AFF', padding: 10 },
  item: { borderWidth: 1, padding: 10, marginTop: 10 },
});