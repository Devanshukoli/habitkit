
function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1>Habit Tracker</h1>
          <span>1 / 1 done today</span>
        </div>
        <div></div>
      </header>
    </>
  );
}


export default function App() {
  return (
    <>
      <Header />
    </>
  );
}
