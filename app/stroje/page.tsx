import type { Metadata } from "next";
import MachineCard from "@/components/MachineCard";
import { machines } from "@/lib/machines";

export const metadata: Metadata = { title: "Stroje" };

export default function MachinesPage() {
  return <>
    <section className="page-head"><div className="container" data-reveal="up"><span className="eyebrow">Nabídka</span><h1>Stroje k pronájmu</h1><p className="lead">Technika na výkopy, převoz materiálu a hutnění.</p></div></section>
    <section className="section white"><div className="container machine-grid">{machines.map(machine => <MachineCard key={machine.slug} machine={machine} />)}</div></section>
  </>;
}
