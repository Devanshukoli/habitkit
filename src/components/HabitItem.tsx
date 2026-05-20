type HabitItemProps = {
  id: string;
  name: string;
};

const HabitItem = ({ habit }: HabitItemProps) => {
  return (
    <>
      <div className="rounded-xl bg-zinc-800 p-4 flex-col gap-3">
        <div className="flex items-center justify-between">helllo</div>
        <div>buttom</div>
      </div>
    </>
  );
};

export default HabitItem;
