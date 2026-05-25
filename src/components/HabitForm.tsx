import { useState, type SubmitEvent } from "react";
import Button from "./Button";
import { useHabits } from "../context/useHabits";

const HabitForm = () => {
  const [habitName, setHabitName] = useState("");
  const {addHabit} = useHabits()

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()
    if (habitName.trim() === '') return;
    
    setHabitName('')

    addHabit(habitName)
    console.log(habitName)
  }

  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          placeholder="New Habit..."
        />
        <Button disabled={habitName.trim() === ''} className="rounded-lg px-4 py-2 font-medium">Add habit</Button>
      </form>
    </>
  );
};

export default HabitForm;
