import Button from "./Button";

type HabitItemProps = {
  id: string;
  name: string;
};

const HabitItem = ({ habit }: HabitItemProps) => {
  const visibleDate = [new Date()]

  return (
    <>
      <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="font-medium">{habit.name}</span>
            <span className="font-sm text-amber-400">🔥 3</span>
          </div>
          <Button>Delete</Button>
        </div>
        <div className="flex gap-1.5">
          {visibleDate.map(date => (
            <Button key={date.toISOString()}>
              <span className="font-medium">Mon</span>  
              <span>2</span>  
            </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default HabitItem;
