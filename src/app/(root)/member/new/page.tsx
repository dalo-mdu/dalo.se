"use client";

import Image from "next/image";

export default function Songbook() {
  return (
    <main className="max-w-2xl mx-auto mt-10 w-full prose dark:prose-invert ">
      <h1>Bli medlem</h1>
      <div>
        <p>
          Kul att du är intresserad av att bli medlem! På den här sidan finns
          mer information om vilka medlemskap som finns, vad det innebär och hur
          man blir medlem.
        </p>

        <h2>Rookieperioden</h2>
        <p>
          Under rookieperioden går det att bli en Rookie-medlem i vår{" "}
          <a
            className="dark:text-yellow-500 text-yellow-800"
            href="https://hitract.se/hitclub/1096"
          >
            DALO Rookie-hitClub
          </a>{" "}
          på{" "}
          <a
            className="dark:text-yellow-500 text-yellow-800"
            href="/new#hitract"
          >
            hitract
          </a>
          . Där finns information om events som anordnas under rookieperioden.
          Att bli Rookie-medlem kostar ingenting och är bara till för att vi ska
          kunna nå ut med information till er.
        </p>
        <h2>Dalo</h2>
        <p>
          Som medlem i Dalo har du möjlighet att vara med på sittningar och
          events som anordnas av Dalo under resten av studenttiden. Du har
          dessutom rätt att påverka verksamheten genom direkt engagemang samt
          röstning under årsmötet.
        </p>
        <p>Medlemskapet har en medlemsavgift på 100kr och gäller livet ut.</p>

        <Image
          alt={""}
          loading="lazy"
          src="/hitract-logga.png"
          height={180}
          width={180}
        />
        <div className="flex">
          <a
            className="dark:text-yellow-500 text-yellow-800"
            href="https://apps.apple.com/se/app/hitract/id1494632863"
          >
            <Image
              alt={""}
              loading="lazy"
              src="/appstore.png"
              height={150}
              width={500}
            />
          </a>
          <a
            className="dark:text-yellow-500 text-yellow-800"
            href="https://play.google.com/store/apps/details?id=se.hitract.hitract&hl=sv&gl=US&pli=1"
          >
            <Image
              alt={""}
              loading="lazy"
              src="/playstore.png"
              height={150}
              width={500}
            />
          </a>
        </div>

        <h2 className="text-2xl">Hur blir jag medlem?</h2>
        <ol className="list-decimal">
          <li>Ladda ner hitract-appen och skapa ett konto.</li>
          <li>
            Hitta vår hitClub genom att söka på &rdquo;Dalo&rdquo; eller besök{" "}
            <a
              className="dark:text-yellow-500 text-yellow-800"
              href="https://hitract.se/hitclub/1075"
            >
              den här länken
            </a>{" "}
            via webbläsaren på mobilen.
          </li>
          <li>Tryck på &rdquo;Bli medlem&rdquo; och följ instruktionerna.</li>
          <li>Klart! Du är nu medlem!</li>
        </ol>
      </div>
    </main>
  );
}
