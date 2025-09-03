"use client";
import SongText from '@/components/songText';
import { ISongAttributes, ISongInfo } from '@/types/types';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';




export default function Songbook() {
    const [showScroll, setShowScroll] = useState<boolean>(false)

    const Songs:ISongInfo[] = [
        {
            name: "Nationalsången",
            melody: "Melodi: Du gamla, Du fria",
            text:
`Du gamla, Du fria, Du fjällhöga nord

Du tysta, Du glädjerika sköna!

Jag hälsar Dig, vänaste land uppå jord,

𝄆 Din sol, Din himmel, Dina ängder gröna. 𝄇

&nbsp;

Du tronar på minnen från fornstora da'r,

då ärat Ditt namn flög över jorden.

Jag vet att Du är och Du blir vad Du var.

𝄆 Ja, jag vill leva jag vill dö i Norden. 𝄇`
        },
        {
            name: "Rida get",
            note: "DALOs ”föreningslåt”",
            text:
`Riida Rida Get

En glad analfabet

Leeva Leva Liivet

Ute på Savannen!`
        },
        {
            name: "Bolaget",
            melody: "Melodi: Du käre lille snickerbo'",
            text:
`Till Bolaget så ränner jag

och bankar på dess port!

Jag vill ha nått som bränner bra

och gör mej skitfull fort!

Expediten sa goda\’ hur gammal kan min herre va?

Har du nått leg ditt fula dräää-gg?

Kooo-m hit igen när du fått skägg!

&nbsp;

Meee-n detta var ju inte bra,

jag vill bli full ikväll. IGEN!

Då plötsligt en idé jag fick,

dom har ju sprit på Shell. OK!

Många flaskor stod där på rad så nu

kan jag bli full och glad

Den röda drycken åkte neee-r…

Nuuu- kan jag inte se nå\’ mer!`
        },
        {
            name: "Feta fransyskor",
            melody: "Melodi: Militärmarsch av Schubert",
            text:
`Alla    Feta fransyskor som svettas om fötterna.

De trampar druvor som sedan ska jäsas till vin.

Transpirationen viktig é,

ty den ge\’ fin bouquet.

Vårtor och svampar följer me\’

men vad gör väl de\’?

För…

Vi vill ha vin, vill ha vin, vill ha mera vin,

även om följderna blir att vi må lida pin.

Tjejer  Flaskan och glaset gått i sin.

Killar  Hit med vin, mera vin!

Tjejer  Tror ni att vi är fyllesvin?

Killar  JA! FAST STÖRRE!!`
        },
        {
            name: "Jag ska festa",
            melody: "Melodi: Bamse",
            text:
`Jag ska festa, ta det lugnt med spriten.

Ha det roligt utan att va´ full.

Inte krypa runt med festeliten.

Ta det sansat för min egen skull.

&nbsp;

*Ref*

Först en öl i torra stupen,

efter det så kommer supen,

i med vinet, ner med punschen,

sist en groggbuffé.

&nbsp;

Jag är skitfull, däckar först av alla,

missar festen, Men va gör väl det.

Blandar hejdlöst öl och gammal filmjölk.

Kastat upp på bordsdamen brevé.

&nbsp;

*Ref*

Först en öl…

&nbsp;

Spyan rinner ner för n0lleslipsen.

Raviolin torkar i mitt hår.

Vem har lagt mig här på matsalsbordet.

Vems är gaffeln i mitt högra lår!`
        },
        {
            name: "JASen",
            melody: "Melodi: Måsen",
            note: "Sjungs som svar när M.A.C.H. har sjungit JAS-hymnen",
            text:
`Och Jasen styrde mot Västerbron

men styrsystemet var trasigt.

Piloten ut sköt sig med kanon

för planet vingla så knasigt.

Han ville uppåt han ville mer,

men planet svarte han ville ner.

Mot alla jon,

på Västerbron.`
        },
        {
            name: "Strejk på Pripps",
            melody: "Melodi: I natt jag drömde",
            note: "Man säger endast skål om man tänker dricka",
            text:
`I natt jag drömde något som,

jag aldrig drömt förut.

Jag drömde det var strejk på Pripps

och alla ölen var slut.

Jag drömde om en jättesal

där ölen stod på rad.

Jag drack sådär ett tusental

och reste mig och sa:

&nbsp;

ARMEN I VINKEL

BLICKEN I SKYN

SÅ VAR DET MENAT

WHISKY OCH RENAT

VÅRT MÅL: ALKOHOL

FÖR DEN SOM TÅL! SKÅL!`
        },
        {
            name: "Öl, öl, öl i glas",
            melody: "Melodi: Row, row, row your boat",
            text:
`Öl, öl, öl i glas eller i butelj

Skummande, skummande, skummande, skummande

ta en klunk o svälj!`
        },
        {
            name: "Lambo",
            text:
`Resten Sätt nu glaset till din mun!

Tjo-fa-de-rittan lambo!

Och drick ur, din fylle-fylle hund

Tjo-fa-de-rittan lambo!

Se, hur dropparna i glaset

rinner ner i fylle-aset.

Lambo-Hej! Lambo-Hej!

Tjo-fa-de-rittan lambo!

Fyllehund  Jag nu glaset druckit har!

Resten     Tjo-fa-de-rittan lambo!

Fyllehund  Ej en droppe finnes kvar!

Resten     Tjo-fa-de-rittan lambo!

Fyllehund  Som bevis jag nu skall vända

glaset på dess rätta ända.

Resten     Lambo-Hej! Lanbo-Hej!

Tjo-fa-de-rittan lambo!

Ja han kunde konsten att att va

en riktig fylle-fylle hund!`
        },
        {
            name: "Tacksång för spex",
            note: "Denna sjunger man efter att någon har genomfört ett spex på t.ex. en sittning. Ersätt [XX] med rätt pronomen eller namn",
            text:
`Alla  Det där det gjorde [XX] fan så bra (hej!)

En skål uti botten för [XX] nu vi tar!

Hugg i och dra, hej!

Hugg i och dra, hej!

En skål uti botten för [XX] nu vi tar!

Och alla så dricker vi nu [XX] till!

[XX]  Och [XX] säger inte nej därtill!

Alla  För det var i vår ungdoms fagraste vår,

vi drack varandra till och vi sade gutååår!`
        },
        {
            name: "Kalmarevisan",
            text:
`Ledare  𝄆 För uti Kalmare Stad

Alla    ja där finns inge kvast 𝄇

Alla    förrän lördagen.

&nbsp;

*Ref*

Ledare  Hej Dick.

Alla    Hej Dack.

Ledare  Jag slog i.

Alla    Och vi drack.

Ledare  Hej dickom dickom dack.

Alla    Hej dickom dickom dack.

Alla    För uti Kalmar stad finns det ingen

kvast förrän lördagen.

&nbsp;

Ledare  𝄆 När som bonden kommer hem,

Alla    kommer bondekvinnan ut 𝄇

Alla    och är stor i sin trut.

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 Vart är pengarna du fått?

Alla    Jo dom har jag supit opp! 𝄇

Alla    Uppå Kalmare slot.

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 Jag skall mäla dig an,

Alla    för vår kronbefallningsman 𝄇

Alla    Och du skall få skam

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 Kronbefallningsmannen vår,

Alla    satt på krogen igår 𝄇

Alla    Och var full som ett får

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 Va\’ ska\’ bonnen ha te\’ mat?

Alla    Sura sillar och potat 𝄇

Alla    Det blir sillsallad.

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 Var är din labbrapport?

Alla    Jo, den har jag supit bort 𝄇

Alla    För den var för kort.

&nbsp;

*Ref*

Hej Dick…

&nbsp;

Ledare  𝄆 När jag ser en teknolog

Alla    Tar jag fram min motorsåg 𝄇

Alla    Och han blir så låg

&nbsp;

*Ref*

Hej Dick…`
        },
        {
            name: "Porthos visa",
            melody: "Melodi: You Can't Get A Man With A Gun",
            text:
`Jag vill börja Gasqua,

var faan är min flaska,

vem i helvete stal min butelj?

Skall törsten mig tvinga

en TT börja svinga,

men för faan bara blunda och svälj.

&nbsp;

Vilken smörja,

får jag spörja,

vem för faan tror att jag är en älg?

&nbsp;

Till England vi rider

och sedan vad det lider

träffar vi välan på någon pub.

Där skall vi phæsta,

blott dricka av det bästa,

utav Whisky och Portvin,

jag tänker gå hårt in

för att pröva på rubb och stubb!

rubb o stubb,

rubb o stubb,

rubb o stubb,

rubbo!`
        },
        {
            name: "Blå förgätimej",
            note: "Sjungs efter sittning för att tacka personal",
            text:
`Hur gärna ville jag ej vara

en liten blå förgätmigej,

en liten blå förgätmigej.

Då skulle jag för dig förklara,

hur innerligt jag älskar dej,

och dej,

och dej,

…`
        },
        {
            name: "Brännvin filibombombom",
            melody: "Melodi: Ritsch ratsch, filibombombom",
            text:
`Brännvin filibombombom

är en gudadryck för en törstig gom!

Brännvin filibombombom

är potatisblom filibom`
        },
        {
            name: "Capsvisan",
            melody: "Melodi: I natt jag drömde",
            text:
`Idag jag capsade en stund som

jag aldrig gjort förut.

Jag reste mig till slut och

sa efter en tusen flak var slut:

Det finns inga kapsyler kvar,

ej en enda kan jag se.

Nu ska jag gå och spy en stund,

helt vingelig och sne.

&nbsp;

Armen i vinkel, båge mot knät,

så var det menat, capsa på renat,

vårt mål: alkohol, capsa i mitten

SKÅL!`
        },
        {
            name: "Halle Luta",
            melody: "Melodi: Halleluja",
            text:
`Jag minns knappt hur jag tog mig hem

Klockan var minst kvart i fem

När jag stod utanför min egen våning

Jag lyfte upp min nyckelring

Och haja nästan ingenting

När dörren öppnas står min hall och lutar

𝄆 Hallen luta, hallen luta 𝄇

&nbsp;

Jag minns knappt julen nittitre

Min bror var där och syster mé

Å snyggingen i rött satt alldles brevé

Vi drack vår glögg och pratade

Min dejt blev trött och schappade

Så jag fick mera tid för hen den röde

𝄆 Hen i luva, hen i luva 𝄇

&nbsp;

Fredagar har mer att ge

Än räkor snask och en TV

En kan ju hyra film och DVD

Å vill en ha något riktigt bra

Så kan en faktiskt bara ta

En film som vunnit Oscar åt en Berry

𝄆 Halle Berry, Halle Berry 𝄇`
        },
        {
            name: "Idas sittningsvisa",
            melody: "Melodi: Idas sommarvisa",
            text:
`Du ska inte tro det blir sittning,

ifall inte nån sätter fart

på toast och gör lite groggar,

då kommer känslorna snart.

Jag gör så att vinet blommar,

jag gör hela sittningen lila,

och nu så har festen kommit,

för jag har just tagit bort Phös.

&nbsp;

Jag gör mycket öl i stopen,

så där så det hoppar och far.

Jag gör fullt med skratt som flyger

och hån som Generalen tar.

Jag gör glasen rena på borden

och små nubbar här och där.

Jag gör himlen vacker om kvällen,

för jag gör den alldeles gul.

&nbsp;

Och vodka det gör jag åt barna,

för det tycker jag dom kan få,

och andra små roliga saker

som passar när barnen ska gå.

Och jag gör så roliga ställen,

där studenten kan springa omkring,

då blir studenten fulla

och buskarna blir fulla med sorg.`
        },
        {
            name: "Jag har aldrig vart på snusen",
            melody: "Melodi: O hur saligt att få vandra",
            text:
`Jag har aldrig varit på snusen

Aldrig rökat en cigarr, halleluja!

Mina dygder äro tusen,

Inga syndiga laster jag har.

Jag har aldrig sett nått naket,

Inte ens ett nyfött barn, halleluja!

Mina blickar går mot taket,

Därmed undgår jag frestarens garn.

&nbsp;

Halleluja…

&nbsp;

Bacchus spelar på gitarren,

Satan spelar på sitt handklaver.

Alla djävlar dansar tango

Säg vad kan man önska sig mer?

&nbsp;

Jo, att alla bäckar vore brännvin,

SVARTÅN full av bayerskt öl,

Konjak i varenda rännsten,

Och punsch i varendaste pöl, mera öl!

&nbsp;

Mera öl…`
        },
        {
            name: "JAS-hymn",
            melody: "Melodi: Nu grönskar det",
            note: "M.A.C.H.s ”föreningslåt”",
            text:
`För vi har världens bästa plan

med mängder av bomber och speed.

Kom med, kom med på två machs färd

i våran bistra tid.

&nbsp;

Vart plan är byggt som utav stål

till bredden fyllt med elektronik.

Det väldigt mycket G-kraft tål

nej, ingen är Jasen lik.

&nbsp;

Den flyger högt, den flyger lågt,

den flyger snabbt och fort.

Den flyger rätt, den flyger lätt,

den flyger heltenkelt som smort.

&nbsp;

Den landar kanske ej så bra

men vad sjuttsingen gör väl de\’?

Den kan ju flyga från en ryss

och svänga i sju-åtta G.

&nbsp;

Sverige har en gammal tradition

att bygga flygplan av klass.

Vi Tunnvis plan Lanserat har så

sJas, Drak iväg och försVigg!

&nbsp;

Vi är så bra, så hejdans bäst,

ingen kan våra flygplan slå

när vi kommer svepande över er

med full last och EBK.`
        },
        {
            name: "Måsen",
            melody: "Melodi: Vid lindens fot (Månvisa)",
            text:
`Det satt en mås på en klyvarbom

och tom i krävan var kräket.

Och tungan lådde vid skepparns gom,

där skutan låg uti blecket.

”Jag vill ha sill!” hördes måsen rope

och skepparn svarte: ”Jag vill ha OP!”

Om blott jag får, om blott jag får.

&nbsp;

Nu lyfter måsen från klybarbom,

och vinden spelar i tågen.

Och OP:n svalkat har skepparns gom,

jag önskar blott att jag såg\’en.

Så nöjd och lycklig den arme saten,

han sätter storsegel den krabaten.

Till sjöss han far, och Halvan tar.

&nbsp;

Nu månen vandrar sin tysta ban

och tittar in genom rutan.

Då tänker jag att på ljusan dag

då kan jag klara mig utan.

Då kan jag klara mig utan måne,

men utan renat och utan skåne,

det vete fan, det vete fan.

&nbsp;

Den mås som satt på en klyvarbom,

den är nu död och begraven,

och skepparn som drack en flaska rom,

han har nu drunknat i haven.

Så kan det gå om man fått för mycket,

om man för brännvin har fattat tycke.

Vi som har kvar, vi resten tar.`
        },
        {
            name: "Rekursionsvisa",
            melody: "Melodi: Bjällerklang",
            text:
`Rekursion, rekursion,

det är bra att ha.

Men utan basfall

fastnar man

i en oändlig loop av…`
        },
        {
            name: "Siffervisan",
            melody: "Melodi: Ritch-ratch",
            text:
`1 2 75 6 7 75 6 7 75 6 7

3 2 75 6 1 43 7 1 92

103 102 101

105 6 19 47

19 18 17 16

15 14 13 11

16 17 18 19

13 55!

&nbsp;

1 2 75 6 7 75 6 7 75 6 7

1 2 75 6 7 75 6 7 73

107 103 102

107 6 19 27

17 18 16 15

13 19 18 17

19 16 15 11

8 47!`
        },
        {
            name: "Studielånet",
            melody: "Melodi: Hej tomtegubbar",
            text:
`𝄆 Mitt lilla lån det räcker inte,

det går till öl och till brännvin! 𝄇

Till öl och brännvin går lånet åt

och till små flickor emellanåt.

Mitt lilla lån det räcker inte,

det går till öl och till brännvin.`
        },
        {
            name: "The basic song",
            melody: "Melodi: Mors lilla Olle",
            text:
`\`\`\`
10 LET oss nu fatta i våra glas
20 INPUT en klunk utav det som där has
30 IF du fått nog THEN till 50 min vän
40 ELSE GOTO-baka till 10 igen
50 END
\`\`\``
        }
    ]

    const checkScrollTop = () => {
        if (window.scrollY > 100) {
            setShowScroll(true)
        } else if (window.scrollY <= 100) {
            setShowScroll(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [setShowScroll])

    
    return (
        <div >
           

            <div className='flex flex-col gap-10 items-center  max-w-5xl mx-auto ' >
                    <div className='flex md:gap-4 gap-2 flex-wrap justify-center'>
                        {Songs.map((song) => {
                            return (
                                <a className='py-2 px-4 md:px-8 dark:bg-neutral-900 dark:text-white text-sm md:text-lg bg-white/50 rounded-full border-yellow-500/10 border-2 ' href={`#${song.name}`} key={song.name}>{song.name}</a>
                            )
                        })}
                    </div>
                    {Songs.map((song) => {
                        return (
                            <SongText song={song} key={song.name}  />
                        )
                    })}
            </div>
            
            <Transition    
                show={
                   showScroll
                }
                className={"rounded-full dark:bg-neutral-900 bg-[#fffef8] border-yellow-500/10 border-2 shadow p-4 fixed bottom-5 right-5 ease-in-out"}
                as={'a'}
                enter="duration-300 transform"
                enterFrom="opacity-0  translate-y-4 "
                enterTo="opacity-100 translate-y-0 "
                leave="duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
                href='#'
            >
                       <ChevronUpIcon className='h-6 w-6' />
            </Transition>


        </div>)
}
