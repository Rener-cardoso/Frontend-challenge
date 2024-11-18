import { Input } from "../../Components/Input";
import { Search } from "lucide-react";
import { Cart } from "../../Components/Cart";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadMenuDetails } from "../../store/slices/menuDetails";
import { MainMenu } from "../../Components/MainMenu";
import { MobileCart } from "../../Components/MobileCart";
import { useRestaurantTheme } from "../../store/slices/restaurantDetails";
import { Link } from "react-router-dom";

export function Menu() {
  const theme = useRestaurantTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMenuDetails());
  }, [])

  return (
    <>
      <div>
        <img 
          src={theme?.webSettings.bannerImage}
          alt=""
          width={0}
          height={0}
          sizes="100vw" 
          className="w-full h-[10rem] lg:h-auto object-cover lg:object-contain" 
        />
      </div>

      <div className="max-w-5xl mx-auto h-screen sm:h-full bg-[#F8F9FA] sm:bg-[transparent]">
        <Input
          icon={Search}
          placeholder="Procurar itens do menu"
          className="m-4 sm:m-0 sm:my-2 placeholder:text-[#1F2329] text-base"
        />

        <div className="bg-[#F8F9FA] grid grid-cols-6 gap-8 lg:px-10 lg:py-8">
          <MainMenu />
          <Cart />
          <MobileCart />
        </div>

        <div className="flex sm:hidden justify-center py-6 border-y-[1px] sm:border-y-[transparent]">
          <Link to="#" className="text-[#4F372F] text-base font-bold underline">View allergy information</Link>
        </div>
      </div>
    </>
  )
}