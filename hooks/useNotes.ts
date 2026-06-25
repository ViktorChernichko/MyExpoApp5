import { useState } from 'react';

export default function useNotes() {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    if (!note.trim()) return;
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (index: number) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
}