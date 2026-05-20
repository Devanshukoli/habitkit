const HabitList = () => {
  const habits = [];

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
        <p>{habit}</p>
      ))}
    </>
  );
};

export default HabitList;
