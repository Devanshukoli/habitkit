import HabitItem from "../components/HabitItem";

const HabitList = () => {
  const habits = [
    { id: 1, name: "dev" },
    { id: 2, name: "kp" },
  ];

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
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </>
  );
};

export default HabitList;
