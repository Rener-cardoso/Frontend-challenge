import { Minus, Plus } from "lucide-react";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";

interface RemoveAddCartBoxProps {
  variant?: 'default' | 'cartItem';
  currentValue: (value: number) => void;
}

export function RemoveAddCartBox({ variant = 'default', currentValue, }: RemoveAddCartBoxProps) {
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
        onClick={() => handleRemove()}
        disabled={unity === 1}
        className={cn("bg-[#4f372f] text-white disabled:bg-[#DADADA] disabled:text-[#5F5F5F] flex items-center justify-center p-[0.1rem] rounded-full",
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
        onClick={() => handleAdd()}
        className={cn("flex items-center justify-center p-[0.1rem] rounded-full bg-[#4f372f] text-white", 
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