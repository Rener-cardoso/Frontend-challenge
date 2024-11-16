import { useEffect } from "react";
import { Header } from "../../Components/Header";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRestaurantDetails } from "../../store/slices/restaurantDetails";
import { Outlet } from "react-router-dom";

export function Layout() {
  const backgroundTheme = useAppSelector(store =>
    store.restaurant.restaurantInfo?.webSettings.backgroundColour)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails())
  }, [])

  return (
    <div style={{ backgroundColor: backgroundTheme}} className="w-full min-h-[105vh] pb-4">
      <Header />

      <Outlet />
    </div>
  )
}