import { useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        status: 'Planned',
        priority: 'Medium',
      },
    ]);
  };

  const changeStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        let nextStatus = task.status;

        if (task.status === 'Planned') nextStatus = 'In Progress';
        else if (task.status === 'In Progress') nextStatus = 'Completed';

        return {
          ...task,
          status: nextStatus,
        };
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    changeStatus,
    deleteTask,
  };
}