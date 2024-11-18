import { Minus, Plus } from "lucide-react";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import { useRestaurantTheme } from "../../store/slices/restaurantDetails";

interface RemoveAddCartBoxProps {
  variant?: 'default' | 'cartItem';
  currentValue: (value: number) => void;
}

export function RemoveAddCartBox({ variant = 'default', currentValue, }: RemoveAddCartBoxProps) {
  const theme = useRestaurantTheme();
  const [unity, setUnity] = useState(1);

  function handleAdd() {
    setUnity(prev => prev + 1)
  }

  function handleRemove() {
    setUnity(prev => prev - 1)
  }

  useEffect(() => {
    currentValue(unity)
  }, [unity])

  return (
    <div className={cn("flex items-center", variant === 'default' ? "gap-7 my-3" : variant === 'cartItem' && "gap-4")}>
      <button
        style={{ 
          backgroundColor: unity === 1 ? "#DADADA" : theme?.webSettings.primaryColour,
          color: unity === 1 ? "#5F5F5F" : "#fff"
        }}
        onClick={() => handleRemove()}
        disabled={unity === 1}
        className={cn("text-white disabled:bg-[#DADADA] disabled:text-[#5F5F5F] flex items-center justify-center p-[0.1rem] rounded-full",
          variant === 'default'
          ? "w-8 h-8"
          : variant === 'cartItem' 
          && "w-5 h-5")          
        }
      >
        <Minus strokeWidth={3} />
      </button>

      <span 
        className={cn("text-[#121212]", 
          variant === 'default' 
          ? "text-2xl font-semibold" 
          : variant === 'cartItem' 
          && "text-base font-bold")
        }
      >
        {unity}
      </span>

      <button
        style={{ backgroundColor: theme?.webSettings.primaryColour }}
        onClick={() => handleAdd()}
        className={cn("flex items-center justify-center p-[0.1rem] rounded-full text-white", 
          variant === 'default' 
          ? "w-8 h-8" 
          : variant === 'cartItem' 
          && "w-5 h-5")
        }
      >
        <Plus strokeWidth={3} />
      </button>
    </div>
  )
}