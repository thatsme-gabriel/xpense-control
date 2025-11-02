import { NavLink } from "react-router-dom"
import { Home, List, Target, Settings } from "lucide-react"
import { Button } from "../ui/button"
import clsx from "clsx"

export default function Sidebar() {

    const navItems = [
        { name: "Dashboard", icon: Home, path: "/" },
        { name: "Transações", icon: List, path: "/transactions" },
        { name: "Metas", icon: Target, path: "/goals" },
        { name: "Configurações", icon: Settings, path: "/settings" },
    ]
    return (
        <aside className="w-64 border-r border-border bg-card flex flex-col">
            <div className="p-6 text-xl font-semibold">Xpense control</div>

            <nav className="flex flex-col gap-1 px-2">
                {navItems.map(({ name, icon: Icon, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            clsx(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )
                        }
                    >
                        <Icon className="h-5 w-5" />
                        {name}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto p-4 text-xs text-muted-foreground border-t">
                v1.0.0
            </div>
        </aside>
    )
}