import ReactMarkdown from "react-markdown";

const about = `
# Om Dalo

DALO är studentföreningen som tar hand om rookieperioden för de tre datainriktade programmen på skolan och drivs helt ideellt av studenter från de tre programmen.

Som ny på högskolan och på rookieperioden blir det svårt att hålla koll på allt som händer. Rookiecrew rekommenderar att du går med i grupperna som rekommenderades i välkomstbrevet och följer DALO på sociala medier.

Med detta kommer ni enkelt kunna hitta era program kamrater, be om hjälp och vi kommer kunna informera er på ett smidigt sätt.

---
`;

export default async function About() {
    const statutes = await fetch(
        "https://raw.githubusercontent.com/dalo-mdu/meta/refs/heads/main/stadgar.md",
    )
        .then((data) => data.text())
        .catch((error) => "Ånej! Något gick fel med att hämta stadgarna :(");

    return (
        <main className="max-w-2xl mx-auto mt-10">
            <ReactMarkdown className="prose dark:prose-invert  ">
                {about + statutes}
            </ReactMarkdown>
        </main>
    );
}
