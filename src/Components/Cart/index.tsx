import { useAppSelector } from "../../store"
import { selectTotalCartPrice } from "../../store/selectors/totalCartPrice";
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem } from "../CartItem";

export function Cart() {
  const cart = useAppSelector(state => state.menu.cart);
  const totalCartPrice = useAppSelector(selectTotalCartPrice);
  
  return (
    <aside className="hidden lg:block bg-white col-span-2 shadow-[0_0_15px_rgba(0,0,0,0.1)] max-h-max">
      <div className="bg-[#F8F9FA]">
        <h2 className="font-medium text-[#464646] text-2xl px-6 py-4">Carrinho</h2>
      </div>

      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <CartItem key={item.name} indexItem={index} />
          ))}
          
          <div className="bg-[#F8F9FA] p-4 flex items-center justify-between border-y-[1px] border-b-[#DADADA]">
            <span className="text-base font-normal text-[#121212]">Sub total</span>
            <strong className="text-base font-medium text-[#121212]">{formatCurrency(totalCartPrice)}</strong>
          </div>

          <div className="bg-[#F8F9FA] p-4 flex items-center justify-between">
            <span className="text-2xl font-light text-[#121212]">Total:</span>
            <strong className="text-2xl text-[#121212] font-semibold">{formatCurrency(totalCartPrice)}</strong>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <h2 className="text-[#464646] text-base">Seu carrinho está vazio</h2>
        </div>
      )}
    </aside>
  )
}