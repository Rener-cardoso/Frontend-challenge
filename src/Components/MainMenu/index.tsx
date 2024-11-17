import { useState } from "react";
import { useAppSelector } from "../../store";
import { OrderAccordion } from "../OrderAccordion";
import { OrderCategory } from "../OrderCategory";
import { Accordion } from "../ui/accordion";

export function MainMenu() { 
  const [accordionValue, setAccordionValue] = useState("");

  const backgroundTheme = useAppSelector(store =>
    store.restaurant.restaurantInfo?.webSettings.backgroundColour)
    
  const sections = useAppSelector(store => {
    return store.menu.menuInfo?.sections
  });

  return (
    <main 
      style={{ backgroundColor: backgroundTheme }} 
      className="col-span-6 lg:col-span-4 lg:shadow-[0_0_15px_rgba(0,0,0,0.1)] py-4 lg:py-6"
    >
      <section className="flex lg:justify-start gap-6 lg:gap-2 px-4 lg:px-6">
        {sections?.map(section => (
          <OrderCategory 
            key={section.id}
            name={section.name}
            image={section.images[0].image}
            handleSelectCategory={() => setAccordionValue(String(section.id))}
            selected={String(section.id) === accordionValue}
          />
        ))}
      </section>

      <section className="mt-4">
        <Accordion 
          type="single" 
          collapsible
          value={accordionValue}
          onValueChange={e => setAccordionValue(e)}
        >
          {sections?.map(section => (
            <OrderAccordion 
              key={section.id}
              sectionId={section.id}
              name={section.name}
              items={section.items}
            />
          ))}
        </Accordion>
      </section>
    </main>
  )
}