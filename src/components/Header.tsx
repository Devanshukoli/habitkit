import Button from "./Button";
import { useHabits } from "../context/useHabits";
import { format, isToday } from "date-fns";

type HeaderProps = {
  visibleDates: Date[]
}

const Header = ({visibleDates}: HeaderProps) => {

  const { habits } = useHabits()

  const isDoneToday = habits.filter(h => h.completions.some(c => isToday(c))).length;

  const dateRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates.at(-1)!, "MMM d")}`

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Habit Tracker</h1>
          <span className="text-zinc-400 text-sm"> {isDoneToday} / {habits.length} done today</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-zinc-400 text-sm items-end">
            {dateRange}
          </span>
          <div className="flex items-center gap-3">
            <Button>Prev</Button>
            <Button>Next</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
