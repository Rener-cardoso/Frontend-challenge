import { useRestaurantTheme } from "../../store/slices/restaurantDetails";
import { Menu } from "lucide-react";
import { cn } from "../../utils/cn";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const navigation = [
  { url: "/", title: "Menu" },
  { url: "/signIn", title: "Entrar" },
  { url: "/contact", title: "Contato" },
]

export function Header() {
  const theme = useRestaurantTheme();

  const pathname = window.location.pathname

  return (
    <header style={{ backgroundColor: theme?.webSettings.navBackgroundColour }} className="sticky top-0">
      <div className="relative flex lg:hidden justify-center py-4 text-white">
        <h1 className="text-lg font-medium">
          {pathname === "/" 
          ? "Menu" 
          : pathname === "/signIn" 
          ? "Entrar" 
          : pathname === "/contact" 
          && "Contato"}
        </h1>

        <DropdownMenu >
          <DropdownMenuTrigger className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Menu />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="bg-white mt-[0.85rem] min-w-[15rem] mr-2">
            {navigation.map(item => (
              <DropdownMenuItem key={item.title}>
                <Link 
                  to={item.url} 
                  className="text-base font-normal"
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="hidden lg:block">
        <ul className="flex justify-center text-white uppercase text-xl">
          {navigation.map(item => (
            <li key={item.title} className={cn("flex justify-center min-w-40 py-3 border-b-4 ", pathname === item.url ? "border-b-white" : "border-b-[transparent]")}>
              <Link to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}