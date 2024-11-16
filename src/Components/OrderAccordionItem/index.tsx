import { useAppSelector } from "../../store";
import { formatCurrency } from "../../utils/formatCurrency";
import { OrderAccordionProps } from "../OrderAccordion";
import { OrderDialog } from "../OrderDialog";
import { Dialog, DialogTrigger } from "../ui/dialog";

interface OrderAccordionContentProps {
  orderItem: OrderAccordionProps['items'][0];
}

export function OrderAccordionItem({ orderItem }: OrderAccordionContentProps) {
  const quantityOrder = useAppSelector(store => {
    const { cart } = store.menu;

    const itemExist = cart.find(item => item.name === orderItem.name)

    if (itemExist) {
      return itemExist.quantity;
    } else {
      return null
    }
  })

  return (
    <Dialog key={orderItem.id}>
      <DialogTrigger asChild>
        <button className="flex justify-between py-4">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              {quantityOrder && <span className="flex items-center justify-center h-5 w-5 bg-[#4F372F] text-sm text-white font-medium rounded-[4px]">{quantityOrder}</span>}
              <h2 className="font-medium text-[#121212] text-base">{orderItem.name}</h2>
            </div>
            <p className="text-[#464646] text-start text-base font-light line-clamp-1 max-w-96">{orderItem.description}</p>
            <span className="text-base font-medium">{formatCurrency(orderItem.price)}</span>
          </div> 

          {orderItem.images && (
            <div className="w-32 h-20">
              <img 
                src={orderItem.images[0].image} 
                alt=""
                className="object-cover rounded-md"
              />
            </div>
          )}
        </button>
      </DialogTrigger>

      <OrderDialog item={orderItem} />
    </Dialog>
  )
}