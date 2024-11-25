export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-4 uppercase font-semibold rounded text-slate-900 bg-amber-400 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
