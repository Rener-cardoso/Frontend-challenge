import { X } from "lucide-react";
import { useAppSelector } from "../../store";
import { Button } from "../Button";
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogTitle, 
  DialogTrigger 
} from "../ui/dialog";
import { CartItem } from "../CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import { selectTotalCartPrice } from "../../store/selectors/totalCartPrice";

export function MobileCart() {
  const cart = useAppSelector(state => state.menu.cart);
  const totalCartPrice = useAppSelector(selectTotalCartPrice);

  return (
    <>
      {cart.length > 0 && (
        <div className="lg:hidden fixed bottom-0 w-full p-6">
          <div className="absolute inset-0 -z-10 backdrop-blur-sm bg-white/70" />

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                Your basket
                <div className="bg-white group-disabled:bg-[#5F5F5F] w-1 h-1 rounded-full" />
                {cart.length} item
              </Button>
            </DialogTrigger>

            <DialogContent className="bg-[#F8F9FA] h-full min-w-full pb-6 flex flex-col justify-start">
              <div className="bg-white relative py-[0.875rem] border-b-[1px] border-b-[#DADADA]">
                <DialogTitle className="text-lg font-medium text-center">Basket</DialogTitle>

                <DialogClose className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <X />
                </DialogClose>
              </div>
              
              <main>
                {cart.map((item, index) => (
                  <CartItem key={item.name} indexItem={index} />
                ))}
              </main>

              <div className="bg-[#F8F9FA] p-4 flex items-center justify-between border-y-[1px] border-b-[#DADADA]">
                <span className="text-base font-normal text-[#121212]">Sub total</span>
                <strong className="text-base font-medium text-[#121212]">{formatCurrency(totalCartPrice)}</strong>
              </div>

              <div className="bg-[#F8F9FA] p-4 flex items-center justify-between">
                <span className="text-2xl font-light text-[#121212]">Total:</span>
                <strong className="text-2xl text-[#121212] font-semibold">{formatCurrency(totalCartPrice)}</strong>
              </div>
              
              <div className="px-6 mt-auto">
                <Button>
                  Checkout now
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  )
}