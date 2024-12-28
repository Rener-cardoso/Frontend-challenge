import { useRestaurantTheme } from "../../store/slices/restaurantDetails";
import { Menu } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { NavLink, useLocation } from "react-router-dom";

const navigationLinks = [
  { url: "/", title: "Menu" },
  { url: "/signIn", title: "Entrar" },
  { url: "/contact", title: "Contato" },
]

export function Header() {
  const theme = useRestaurantTheme();

  const { pathname } = useLocation();

  function getPageTitle(pathname: string) {
    return navigationLinks.find(link => link.url === pathname)?.title || "";
  }

  return (
    <header style={{ backgroundColor: theme?.webSettings.navBackgroundColour }} className="sticky top-0">
      <div className="relative flex lg:hidden justify-center py-4 text-white">
        <h1 className="text-lg font-medium">{getPageTitle(pathname)}</h1>

        <DropdownMenu >
          <DropdownMenuTrigger className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Menu />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="bg-white mt-[0.85rem] min-w-[15rem] mr-2">
            {navigationLinks.map(item => (
              <DropdownMenuItem key={item.title}>
                <NavLink 
                  to={item.url} 
                  className="text-base font-normal"
                >
                  {item.title}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="hidden lg:block">
        <ul className="flex justify-center text-white uppercase text-xl">
          {navigationLinks.map(item => (
            <li key={item.title}>
              <NavLink 
                to={item.url} 
                className={({ isActive }) => isActive ? "flex justify-center min-w-40 py-3 border-b-4 border-b-white" : "flex justify-center min-w-40 py-3 border-b-4 border-b-[transparent]"}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}