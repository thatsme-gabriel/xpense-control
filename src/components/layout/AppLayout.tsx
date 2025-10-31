import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <div className="flex h-screen w-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Separator />
        <ScrollArea className="flex-1 p-6">{<Outlet/>}</ScrollArea>
      </div>
    </div>
  )
}