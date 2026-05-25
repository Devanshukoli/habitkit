import HabitItem from "../components/HabitItem";

export type Habit = {
  id: string,
  name: string,
  completions: Date[]
}

type HabitListProps = {
  habits: Habit[],
  deleteHabit: (id: string) => void;
  toggleHabit: (id: string, date: Date) => void
}

const HabitList = ({ habits, deleteHabit, toggleHabit }: HabitListProps) => {
  
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
            habit={habit} />
        ))}
      </div>
    </>
  );
};

export default HabitList;
