type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{text}</button>
    </>
  );
}
