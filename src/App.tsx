import { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList, { type Habit } from "./components/HabitList";
import Header from "./components/Header";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    setHabits(current => [
      ...current,
      { id: crypto.randomUUID(), name, completions: [] }
    ])
  }

  const deleteHabit = (id: string) => {
    setHabits(current => current.filter( h => h.id !== id))
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header />
        <HabitForm addHabit={addHabit} /> 
        <HabitList habits={habits}  deleteHabit={ deleteHabit}/>
      </div>
    </>
  );
}
