import { forwardRef } from "react"
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {

    return (
      <button
        className={cn("flex items-center justify-center gap-2 bg-[#4f372f] disabled:bg-[#DADADA] w-full rounded-[40px] text-white disabled:text-[#5F5F5F] text-lg font-medium py-2", className)}
        ref={ref}
        {...props}
      />
    )
  }
)