export type Machine = {
  slug: string;
  name: string;
  image: string;
  short: string;
  intro: string;
  uses: string[];
  reasons: string[];
};

export const machines: Machine[] = [
  {
    slug: "minibagr",
    name: "Pásový minibagr",
    image: "/assets/minibagr.webp",
    short: "Výkopy, drenáže, základy a menší terénní práce.",
    intro: "Kompaktní pásový minibagr pro práce kolem domu, zahrady i menší stavby.",
    uses: ["výkopy pro přípojky", "drenáže", "základy", "terénní úpravy"],
    reasons: ["šetří ruční práci", "vejde se i na menší pozemek", "rychlejší výkopové práce"],
  },
  {
    slug: "dumper",
    name: "Pásový dumper",
    image: "/assets/dumper.webp",
    short: "Převoz zeminy, suti a stavebního materiálu.",
    intro: "Pásový dumper usnadní převoz materiálu i v místech, kde se kolečko nebo větší technika používá špatně.",
    uses: ["odvoz zeminy", "převoz suti", "převoz štěrku", "práce na zahradě a stavbě"],
    reasons: ["ušetří hodně času", "dobře zvládá horší terén", "ideální doplněk k minibagru"],
  },
  {
    slug: "vibracni-deska",
    name: "Vibrační deska",
    image: "/assets/vibracni-deska.webp",
    short: "Hutnění štěrku, podkladů a ploch pod dlažbu.",
    intro: "Vibrační deska je vhodná hlavně pro rovnější plochy a přípravu pevného podkladu.",
    uses: ["hutnění štěrku", "podklady pod dlažbu", "chodníky a terasy", "příjezdové cesty"],
    reasons: ["rovnoměrné hutnění", "rychlejší práce než ručně", "jednoduché použití"],
  },
  {
    slug: "vibracni-pech",
    name: "Vibrační pěch",
    image: "/assets/vibracni-pech.webp",
    short: "Hutnění zeminy v úzkých a hůře přístupných místech.",
    intro: "Vibrační pěch je určený hlavně do úzkých výkopů a míst, kam se vibrační deska nevejde.",
    uses: ["úzké výkopy", "zásypy", "prostor kolem obrubníků", "hutnění kolem základů"],
    reasons: ["silné hutnění na malé ploše", "vhodný do úzkých míst", "praktický po výkopových pracích"],
  },
];

export function getMachine(slug: string) {
  return machines.find((machine) => machine.slug === slug);
}
