import Button from "./Button";
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from "date-fns";

type HabitItemProps = {
  id: string;
  name: string;
};

const HabitItem = ({ habit }: HabitItemProps) => {
  const visibleDate = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  });

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
          {visibleDate.map((date) => (
            <Button key={date.toISOString()}>
              <span className="font-medium">{format(date, "EEE")}</span>
              <span>{format(date, "d")}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HabitItem;
