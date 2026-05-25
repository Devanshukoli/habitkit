import { createContext, useContext, useState, type ReactNode } from "react";
import type { Habit } from "../components/HabitList";
import { isSameDay } from "date-fns";

type context = {
  habits: Habit[]
  addHabit: (name: string) => void
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void
}

type HabitProviderProps = {
  children: ReactNode
}

export const HabitContext = createContext<null | context>(null)

const HabitProvider = ({ children }: HabitProviderProps) => {

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

  const toggleHabit = (id: string, date: Date) => {
    setHabits(curr => (
      curr.map(h => {
        if (h.id !== id) return h;
        
        const alreadyDone = h.completions.some(c => isSameDay(c, date))
        const completions = alreadyDone
          ? h.completions.filter(c => !isSameDay(c, date))
          : [...h.completions, date]

          return {...h, completions}
      })
    ))
  }



  return <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>{children}</HabitContext>
}

export function useHabits() {
  const habitContext = useContext(HabitContext)
  if (habitContext === null) throw new Error('null context')
    
  return habitContext;
}

export default HabitProvider;