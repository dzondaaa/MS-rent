import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMachine, machines } from "@/lib/machines";

export function generateStaticParams() {
  return machines.map((machine) => ({
    slug: machine.slug,
  }));
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const machine = getMachine(slug);

  if (!machine) {
    notFound();
  }

  return (
    <>
      <section className="page-head">
        <div className="container" data-reveal="up">
          <span className="eyebrow">Stroj k pronájmu</span>

          <h1>{machine.name}</h1>

          <p className="lead">
            {machine.intro}
          </p>
        </div>
      </section>

      <section className="section white">
        <div className="container machine-detail">

          <div className="detail-image" data-reveal="left">
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>

          <div data-reveal="right">

            <h2>Na co se hodí</h2>

            <ul className="checklist">
              {machine.uses.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <h2>Proč si ho půjčit</h2>

            <ul className="checklist">
              {machine.reasons.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="buttons">

              <Link
                className="button primary"
                href={`/kontakt?stroj=${encodeURIComponent(machine.name)}`}
              >
                Poptat tento stroj
                <span aria-hidden="true"> →</span>
              </Link>

              <Link
                className="button"
                href="/stroje"
              >
                Zpět na stroje
              </Link>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}