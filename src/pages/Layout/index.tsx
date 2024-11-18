import { useEffect } from "react";
import { Header } from "../../Components/Header";
import { useAppDispatch } from "../../store";
import { loadRestaurantDetails, useRestaurantTheme } from "../../store/slices/restaurantDetails";
import { Outlet } from "react-router-dom";

export function Layout() {
  const theme = useRestaurantTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetails())
  }, [])

  return (
    <div style={{ backgroundColor: theme?.webSettings.backgroundColour }} className="w-full min-h-[105vh] pb-4">
      <Header />

      <Outlet />
    </div>
  )
}