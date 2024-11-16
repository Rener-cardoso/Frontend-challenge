import { cn } from "../../utils/cn";
import { Minus, Plus } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../store";
import { decrementCartItem, incrementCartItem } from "../../store/slices/menuDetails";

interface CartItemProps {
  indexItem: number;
}

export function CartItem({ indexItem }: CartItemProps) {
  const { name, modifier, quantity, totalPrice } = useAppSelector(store => {
    const { name, quantity, unityPrice, modifierItemSelected, } = store.menu.cart[indexItem];

    const totalPrice = (unityPrice + (modifierItemSelected.price || 0)) * quantity;

    return {
      name,
      totalPrice,
      quantity,
      modifier: modifierItemSelected,
    }
  })

  const dispatch = useAppDispatch();

  function handleIncrementItem() {
    dispatch(incrementCartItem(name))
  }

  function handleDecrementItem() {
    dispatch(decrementCartItem(name))
  }

  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex flex-col gap-1">
        <div>
          <h2 className="text-base text-[#121212] font-normal">{name}</h2>
          {modifier && <h3 className="text-base text-[#5F5F5F] font-normal">{modifier.name}</h3>}         
        </div>

        <div className={cn("flex items-center gap-4")}>
          <button
            disabled={quantity === 1}
            onClick={() => handleDecrementItem()}
            className={cn("bg-[#4f372f] text-white disabled:bg-[#DADADA] disabled:text-[#5F5F5F] w-5 h-5 flex items-center justify-center rounded-full")          
            }
          >
            <Minus strokeWidth={3} />
          </button>

          <span className={cn("text-[#121212] text-base font-bold")}>
            {quantity}
          </span>

          <button
            onClick={() => handleIncrementItem()}
            className={cn("flex items-center justify-center rounded-full bg-[#4f372f] text-white w-5 h-5")}
          >
            <Plus strokeWidth={3} />
          </button>
        </div>
      </div>

      <span className="text-base text-[#121212] font-medium">{formatCurrency(totalPrice)}</span>
    </div>
  )
}