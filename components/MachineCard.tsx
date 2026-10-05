import Image from "next/image";
import Link from "next/link";
import type { Machine } from "@/lib/machines";

export default function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="machine-card" data-reveal="up">
      <Link className="machine-card-link" href={`/stroje/${machine.slug}`} aria-label={`Zobrazit ${machine.name}`}>
        <div className="machine-image">
          <Image src={machine.image} alt={machine.name} fill sizes="(max-width: 700px) 100vw, 50vw" />
          <span className="image-badge">K pronájmu</span>
        </div>
        <div className="machine-body">
          <div>
            <h3>{machine.name}</h3>
            <p>{machine.short}</p>
          </div>
          <span className="detail-link">Detail stroje <b aria-hidden="true">→</b></span>
        </div>
      </Link>
    </article>
  );
}
