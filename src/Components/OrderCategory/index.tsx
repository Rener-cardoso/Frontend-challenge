import { useAppSelector } from "../../store";
import { cn } from "../../utils/cn";

interface OrderCategoryProps {
  name: string;
  image: string;
  selected?: boolean;
  handleSelectCategory: () => void;
}

export function OrderCategory({ name, image, handleSelectCategory, selected = false }: OrderCategoryProps) {
  const store = useAppSelector(store => store.restaurant.restaurantInfo?.webSettings);

  return (
    <button 
      onClick={() => handleSelectCategory()}
      className="group lg:px-1 flex flex-col items-center" 
    >
      <div 
        style={{ border: selected ? `2px solid ${store?.primaryColour}` : '2px solid transparent'}} 
        className="rounded-full border-2 w-max h-max"
      >
        <img 
          src={image} 
          alt="" 
          className="object-cover rounded-full p-[0.15rem] w-20 h-20" 
        />
      </div>

      <div 
        style={{ borderBottom: selected ? `2px solid ${store?.primaryColour}` : "2px solid transparent"}} 
        className={cn("relative p-4 border-b-2 min-w-24", selected ? `border-b-[${store?.primaryColour}]` : "border-b-[transparent]")}
      >
        <h2 className={cn("text-[#121212] absolut", selected ? "font-semibold" : "font-normal group-hover:underline")}>
          {name}
        </h2>
      </div>
    </button>
  )
}