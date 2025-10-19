export default function Badge({ children }) {
  return (
    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
      {children}
    </span>
  )
}
