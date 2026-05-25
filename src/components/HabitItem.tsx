import Button from "./Button";
import { eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, startOfWeek } from "date-fns";
import type { Habit } from "./HabitList";

export type HabitItemProps = {
  habit: Habit,
  deleteHabit: (id: string) => void;
};

const HabitItem = ({ habit, deleteHabit }: HabitItemProps) => {
  const visibleDate = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), {weekStartsOn: 1}),
  });

  return (
    <>
      <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="font-medium">{habit.name}</span>
            <span className="font-sm text-amber-400">🔥 3</span>
          </div>
          <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive" className="text-sm">Delete</Button>
        </div>
        <div className="flex gap-1.5">
          {visibleDate.map((date) => (
            <Button
              className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
              key={date.toISOString()}
              disabled={isFuture(date)}
              variant={ habit.completions.some(d => isSameDay(date, d)) ? "primary" : "secondary"}
            >
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
