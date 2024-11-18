import { X } from "lucide-react";
import { ModifierProps, SelectModifierBox } from "../SelectModifierBox";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { RemoveAddCartBox } from "../RemoveAddCartBox";
import { useAppDispatch } from "../../store";
import { addCart } from "../../store/slices/menuDetails";
import { formatCurrency } from "../../utils/formatCurrency";
import { useMemo, useState } from "react";
import { Button } from "../Button";

interface OrderDialogProps {
  item: {
    alcoholic: number;
    availabilityType: string;
    available: boolean;
    description: string;
    id: number;
    images: {
      id: string;
      image: string;
    }[];
    name: string;
    position: number;
    price: number;
    sku: string;
    modifiers: {
      id: string;
      name: string;
      minChoices: number;
      maxChoices: number;
      items: {
        id: number;
        name: string;
        price: number;
        maxChoices: number;
        position: number;
        visible: number;
        availabilityType: string;
        available: boolean;
      }[];
    }[];
    visible: number;
  };
}

export function OrderDialog({ item }: OrderDialogProps) {
  const [quantity, setQuantity] = useState(1);
  const [modifierItemSelected, setModifierItemSelected] = useState({} as ModifierProps);

  const dispatch = useAppDispatch();

  const totalPrice = useMemo(() => {
    return (item.price + (modifierItemSelected.price || 0)) * quantity;
  }, [item.price, modifierItemSelected.price, quantity]);

  function handleAddCart() {
    dispatch(addCart({
      name: item.name,
      quantity,
      unityPrice: item.price,
      modifierItemSelected,
    }))
  }

  return (
    <DialogContent className="bg-white min-w-full sm:max-w-min sm:min-w-[30rem] h-full sm:h-max flex flex-col">
      <DialogClose className="absolute w-7 h-7 rounded-full bg-white text-[#4f372f] flex items-center justify-center top-4 right-4">
        <X />
      </DialogClose>

      {item.images && (
        <div>
          <img 
            src={item.images[0].image} 
            alt="" 
            className="min-w-full object-cover sm:max-w-[30rem] max-h-[16.5rem] sm:max-h-[20rem]" 
          />
        </div>
      )}

      <main>
        <div className="p-4">
          <DialogTitle className="text-2xl text-[#121212] font-bold">{item.name}</DialogTitle>
          <DialogDescription className="text-base text-[#464646] font-normal">{item.description}</DialogDescription>
        </div>


        {item.modifiers && (
          <>
            <div className="bg-[#F8F9FA] px-6 py-4">
              <h2 className="text-base text-[#464646] font-bold">Choose your size</h2>
              <h3 className="text-base text-[#5F5F5F] font-normal">Select 1 option</h3>
            </div>

            <div>
              {item.modifiers[0].items.map(item => (
                <SelectModifierBox 
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  selectModifierItem={value => setModifierItemSelected(value)}
                  selected={item.name === modifierItemSelected?.name}
                />
              ))}
            </div>
          </>
        )}

        <footer className="flex flex-col items-center px-4 pb-6">
          <RemoveAddCartBox currentValue={value => setQuantity(value)} />

          <DialogClose asChild>
            <Button 
              onClick={() => handleAddCart()}
              className="group"
              disabled={totalPrice === 0}
            >
              Add to Order
              <div className="bg-white group-disabled:bg-[#5F5F5F] w-1 h-1 rounded-full" />
              {formatCurrency(totalPrice)}
            </Button>
          </DialogClose>
        </footer>
      </main>
    </DialogContent>
  )
}