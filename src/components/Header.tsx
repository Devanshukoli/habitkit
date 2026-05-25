import Button from "./Button";
import { useHabits } from "../context/useHabits";
import { isToday } from "date-fns";

const Header = () => {

  const { habits } = useHabits()

  const isDoneToday = habits.filter(h => h.completions.some(c => isToday(c))).length;

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Habit Tracker</h1>
          <span className="text-zinc-400 text-sm"> {isDoneToday} / {habits.length} done today</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-zinc-400 text-sm items-end">
            May 18 - May 23
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
