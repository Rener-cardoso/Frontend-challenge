import { OrderAccordionItem } from "../OrderAccordionItem";
import { 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "../ui/accordion";

export interface OrderAccordionProps {
  name: string;
  sectionId: number;
  items: {
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
  }[];
}

export function OrderAccordion({ name, sectionId, items, }: OrderAccordionProps) {
  return (
    <AccordionItem value={String(sectionId)} className="">
      <AccordionTrigger className="text-2xl font-medium text-[#121212] px-4 sm:px-6">
        {name}
      </AccordionTrigger>

      <AccordionContent className="flex flex-col px-4 sm:px-6">
        {items.map(item => (
          <OrderAccordionItem key={item.id} orderItem={item} />
        ))}          
      </AccordionContent>
    </AccordionItem>
  )
}