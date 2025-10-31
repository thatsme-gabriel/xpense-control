import { useState } from "react"
import { Button } from "../ui/button"
import { Moon, Sun } from "lucide-react"
//import { useTheme } from "next-themes"

export default function Header() {
  //const { theme, setTheme } = useTheme()
  const [theme, setTheme] = useState("")

  return (
    <header className="flex justify-between items-center px-6 py-3 border-b border-border bg-background/80 backdrop-blur">
      <h1 className="text-lg font-semibold">Painel Financeiro</h1>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}