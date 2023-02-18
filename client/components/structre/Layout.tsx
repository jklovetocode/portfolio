import BottomBar from '../custom/BottomBar'

type MainLayoutProps = {
  children: React.ReactNode
  style?: string
}
export default function Layout({ children, style }: MainLayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <BottomBar></BottomBar>
    </div>
  )
}
