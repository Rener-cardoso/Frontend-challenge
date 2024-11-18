import { forwardRef } from "react"
import { cn } from "../../utils/cn";
import { useRestaurantTheme } from "../../store/slices/restaurantDetails";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const theme = useRestaurantTheme();

    return (
      <button
        style={{ backgroundColor: theme?.webSettings.primaryColour }}
        className={cn("flex items-center justify-center gap-2 disabled:bg-[#DADADA] w-full rounded-[40px] text-white disabled:text-[#5F5F5F] text-lg font-medium py-2", className)}
        ref={ref}
        {...props}
      />
    )
  }
)