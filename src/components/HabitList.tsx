import HabitItem from "../components/HabitItem";
import { useHabits } from "../context/useHabits";

export type Habit = {
  id: string,
  name: string,
  completions: Date[]
}

type HabitListProps = {
  visibleDates : Date[]
}

const HabitList = ({visibleDates}: HabitListProps) => {
  
  const { habits, toggleHabit, deleteHabit } = useHabits()

  if (habits.length === 0) {
    return (
      <>
        <p className="text-center text-zinc-500 py-12">
          No habits here, Add one to get started...
        </p>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {habits.map((habit) => (
          <HabitItem
            deleteHabit={deleteHabit}
            toggleHabit={toggleHabit}
            key={habit.id}
            habit={habit}
            visibleDates={visibleDates}
          />
        ))}
      </div>
    </>
  );
};

export default HabitList;
