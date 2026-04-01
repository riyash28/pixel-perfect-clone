import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  {
    id: "who",
    title: "Who Should Take It",
    content:
      "Ideal for men aged 18–60 who experience low energy, stamina issues, or want to naturally boost their vitality. Consult a physician if you have pre-existing conditions.",
  },
  {
    id: "ingredients",
    title: "Ingredients",
    content:
      "Horny Goat Weed Extract, Maca Root Extract, Safed Musli, Ashwagandha (KSM-66), Shilajit (Purified Himalayan), Gokshura Extract, Black Pepper Extract (Piperine) for enhanced absorption.",
  },
  {
    id: "nutrients",
    title: "Nutrients",
    content:
      "Each tablet contains: Icariin 60mg, Macamides 40mg, Saponins 100mg, Withanolides 25mg, Fulvic Acid 20mg, Piperine 5mg. Provides essential micronutrients for male vitality.",
  },
];

const ProductAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((s) => (
        <AccordionItem key={s.id} value={s.id} className="border-b border-border">
          <AccordionTrigger className="py-4 font-display text-base font-semibold text-foreground hover:no-underline">
            {s.title}
          </AccordionTrigger>
          <AccordionContent className="pb-4 font-body text-sm leading-relaxed text-muted-foreground">
            {s.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProductAccordion;
