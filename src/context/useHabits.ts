import { createContext, useContext } from "react";
import type { Habit } from "../components/HabitList";


type context = {
  habits: Habit[]
  addHabit: (name: string) => void
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void
}

export const HabitContext = createContext<null | context>(null)

export function useHabits() {
  const habitContext = useContext(HabitContext)
  if (habitContext === null) throw new Error('null context')
    
  return habitContext;
}