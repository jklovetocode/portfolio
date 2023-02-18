type ButtonProps = {
  children?: React.ReactNode
  style?: string
}
export default function ButtonClick({ children, style }: ButtonProps) {
  return (
    <div>
      <button
        className={`px-2 py-1 border border-primary w-max rounded-lg bg-primary/30 hover:bg-primary/70 ${style}`}
      >
        {children}
      </button>
    </div>
  )
}
