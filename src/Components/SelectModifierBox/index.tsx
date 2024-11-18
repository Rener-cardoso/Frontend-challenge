import { cn } from "../../utils/cn";
import { formatCurrency } from "../../utils/formatCurrency";

export interface ModifierProps {
  name: string;
  price: number;
}

interface SelectModifierBoxProps {
  selected?: boolean;
  name: string;
  price: number;
  selectModifierItem: (value: ModifierProps) => void;
}

export function SelectModifierBox({ selected = false, name, price, selectModifierItem  }: SelectModifierBoxProps) {
  return (
    <button onClick={() => selectModifierItem({ name, price })} className="flex justify-between items-center px-6 py-4 w-full">
      <div>
        <h2 className="text-base text-[#121212] font-medium text-start">{name}</h2>
        <h3 className="text-base text-[#464646] font-normal">{formatCurrency(price)}</h3>
      </div>

      <div className={cn("rounded-full w-5 h-5", selected ? "border-[7px] border-[#4f372f]" : "border-[3px] border-[#5F5F5F]")} />
    </button>
  )
}