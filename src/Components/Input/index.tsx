import { LucideProps } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface InputProps {
  placeholder: string;
  className?: string;
  icon?: React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon: Icon,
      className,
      ...props
    }, 
    ref,
  ) => (
    <div className={cn("border border-[#8A94A4] flex items-center gap-2 bg-white rounded-lg px-[0.625rem] lg:px-4 py-[0.625rem] lg:py-3", className)}>
      {Icon && <Icon className="text-[#8A94A4] h-5 w-5" />}

      <input 
        type="text"
        ref={ref}
        className="bg-[transparent] w-full focus:outline-none"
        {...props}
      />
    </div>
  ),
);

Input.displayName = "Input";