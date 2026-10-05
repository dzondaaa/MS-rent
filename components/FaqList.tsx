"use client";

import { useState } from "react";

const questions = [
  ["Kde si můžu stroj půjčit?", "Působíme v Děčíně a okolí. Přesné předání a termín se domluví individuálně."],
  ["Půjčujete i soukromým osobám?", "Ano. Stroje jsou určené pro firmy, řemeslníky i běžné práce kolem domu nebo zahrady."],
  ["Na jak dlouho si můžu stroj půjčit?", "Délka pronájmu je podle dohody a dostupnosti konkrétního stroje."],
  ["Nevím, který stroj potřebuji. Poradíte mi?", "Ano. Napište, co potřebujete udělat, a doporučíme vhodnou techniku."],
];

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {questions.map(([question, answer], index) => (
        <div className={open === index ? "faq-item open" : "faq-item"} key={question}>
          <button onClick={() => setOpen(open === index ? null : index)} type="button">
            <span>{question}</span>
            <b>+</b>
          </button>
          <div className="faq-answer"><p>{answer}</p></div>
        </div>
      ))}
    </div>
  );
}
