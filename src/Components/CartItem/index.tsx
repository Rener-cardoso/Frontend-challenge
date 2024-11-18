import { cn } from "../../utils/cn";
import { Minus, Plus } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../store";
import { decrementCartItem, incrementCartItem } from "../../store/slices/menuDetails";
import { useRestaurantTheme } from "../../store/slices/restaurantDetails";
import { selectCartItemDetails } from "../../store/selectors/cartItemDetails";

interface CartItemProps {
  indexItem: number;
}

export function CartItem({ indexItem }: CartItemProps) {
  const theme = useRestaurantTheme();

  const { name, quantity, totalPrice, modifier } = useAppSelector(
    state => selectCartItemDetails(state, indexItem)
  );

  const dispatch = useAppDispatch();

  function handleIncrementItem() {
    dispatch(incrementCartItem(name))
  }

  function handleDecrementItem() {
    dispatch(decrementCartItem(name))
  }

  return (
    <div className="bg-white flex justify-between px-4 py-2 border-b-[1px] border-b-[#EEEEEE] lg:border-b-[transparent]">
      <div className="flex flex-col gap-1">
        <div>
          <h2 className="text-base text-[#121212] font-normal">{name}</h2>
          {modifier && <h3 className="text-base text-[#5F5F5F] font-normal">{modifier.name}</h3>}         
        </div>

        <div className={cn("flex items-center gap-4")}>
          <button
            style={{ 
              backgroundColor: quantity === 1 ? "#DADADA" : theme?.webSettings.primaryColour,
              color: quantity === 1 ? "#5F5F5F" : "#fff"
            }}
            disabled={quantity === 1}
            onClick={() => handleDecrementItem()}
            className={cn("w-5 h-5 flex items-center justify-center rounded-full")          
            }
          >
            <Minus strokeWidth={3} />
          </button>

          <span className={cn("text-[#121212] text-base font-bold")}>
            {quantity}
          </span>

          <button
            style={{ backgroundColor: theme?.webSettings.primaryColour }}
            onClick={() => handleIncrementItem()}
            className={cn("flex items-center justify-center rounded-full text-white w-5 h-5")}
          >
            <Plus strokeWidth={3} />
          </button>
        </div>
      </div>

      <span className="text-base text-[#121212] font-medium">{formatCurrency(totalPrice)}</span>
    </div>
  )
}