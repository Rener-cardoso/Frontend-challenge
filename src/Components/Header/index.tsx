import { Menu } from "lucide-react";
import { useAppSelector } from "../../store";
import { cn } from "../../utils/cn";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const navigation = [
  { url: "/", title: "Menu" },
  { url: "/signIn", title: "Entrar" },
  { url: "/contact", title: "Contato" },
]

export function Header() {
  const store = useAppSelector(store => {
    const layoutDetails = store.restaurant.restaurantInfo?.webSettings;

    return layoutDetails
  });

  const pathname = window.location.pathname

  return (
    <header style={{ backgroundColor: store?.primaryColour}} className="sticky top-0">
      <div className="relative flex sm:hidden justify-center py-4 text-white">
        <h1 className="text-lg font-medium">Menu</h1>

        <Dialog>
          <DialogTrigger>
            <Menu className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </DialogTrigger>

          <DialogContent>
            teste
          </DialogContent>
        </Dialog>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex justify-center text-white uppercase text-xl">
          {navigation.map(item => (
            <li key={item.title} className={cn("flex justify-center min-w-40 py-3 border-b-4 ", pathname === item.url ? "border-b-white" : "border-b-[transparent]")}>
              <a href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}