# DALOs Föreningsida
[![Create and publish a Docker image for dalo.se](https://github.com/dalo-mdu/dalo.se/actions/workflows/docker-image.yml/badge.svg)](https://github.com/dalo-mdu/dalo.se/actions/workflows/docker-image.yml)


Detta är Dalos föreningsida som är byggd med Next.js och använder Tailwind CSS.

## Teknologier / Ramverk / Bibliotek
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [Heroicons](https://heroicons.com/)
- [React Icons](https://react-icons.github.io/react-icons/)


## Mål

- [ ] Implementera Supabase för hantering av sidan av administratörer.

## Installation

För att köra projektet lokalt, följ dessa steg:

1. Klona projektet från GitHub:

    ```bash
    git clone https://github.com/dalo/site.git
    ```

2. Gå till projektmappen:

    ```bash
    cd site
    ```

3. Installera beroenden med Yarn eller npm:

    ```bash
    yarn install
    # eller
    npm install
    ```

4. Starta utvecklingsservern:

    ```bash
    yarn dev
    # eller
    npm run dev
    ```

Nu är [http://localhost:3000](http://localhost:3000) tillgängligt i din webbläsare. 

## Bidrag

Om du vill bidra till projektet, följ dessa steg:

1. Forka projektet till ditt eget GitHub-konto.

2. Klona ditt forkade projekt:

    ```bash
    git clone https://github.com/{ditt-användarnamn}/site.git # Byt ut {ditt-användarnamn} mot ditt användarnamn
    ```

3. Gå till projektmappen:

    ```bash
    cd site
    ```

4. Skapa en ny branch för dina ändringar:

    ```bash
    git checkout -b feature/{ny-funktion} # Byt ut "{ny-funktion}" mot en beskrivande text
    # eller
    git checkout -b fix/{bugg} # Byt ut "{bugg}" mot en beskrivande text
    ```

5. Gör dina ändringar och commita dem:

    ```bash
    git add .
    git commit -m "Beskrivning av ändringar"
    ```

6. Pusha dina ändringar till ditt forkade projekt:

    ```bash
    git push origin feature/{ny-funktion} 
    # eller
    git push origin fix/{bugg}
    ```

7. Öppna en pull request på GitHub för att föreslå dina ändringar till huvudprojektet.

## Licens

Detta projekt är licensierat under MIT-licensen. Se [LICENSE](LICENSE) för mer information.
