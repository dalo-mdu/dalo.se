"use client";
import SongText from '@/components/songText';
import { ISongAttributes, ISongInfo } from '@/types/types';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';




export default function Songbook() {
    //fetch songs

    const [showScroll, setShowScroll] = useState<boolean>(false)

    const Songs:ISongInfo[] = [
        {
            name: "Nationalsången",
            melody: "Melodi: Du gamla, Du fria",
            text: "Du gamla, Du fria, Du fjällhöga nord\n\nDu tysta, Du glädjerika sköna!\n\nJag hälsar Dig, vänaste land uppå jord,\n\n𝄆 Din sol, Din himmel, Dina ängder gröna. 𝄇\n\nDu tronar på minnen från fornstora da'r,\n\ndå ärat Ditt namn flög över jorden.\n\nJag vet att Du är och Du blir vad Du var.\n\n𝄆 Ja, jag vill leva jag vill dö i Norden. 𝄇"
        },
        {
            name: "Rida get",
            text: "DALOs “föreningslåt”Riida Rida Get\n\nEn glad analfabet\n\nLeeva Leva Liivet\n\nUte på Savannen!"
        },
        {
            name: "Bolaget",
            melody: "Melodi: Du käre lille snickerbo'",
            text: "Till Bolaget så ränner jag\n\noch bankar på dess port!\n\nJag vill ha nått som bränner bra\n\noch gör mej skitfull fort!\n\nExpediten sa goda\’ hur gammal kan min herre va?\n\nHar du nått leg ditt fula dräää-gg?\n\nKooo-m hit igen när du fått skägg!Meee-n detta var ju inte bra,\n\njag vill bli full ikväll. IGEN!\n\nDå plötsligt en idé jag fick,\n\ndom har ju sprit på Shell. OK!\n\nMånga flaskor stod där på rad så nu\n\nkan jag bli full och glad\n\nDen röda drycken åkte neee-r…\n\nNuuu- kan jag inte se nå\’ mer!"
        },
        {
            name: "Feta fransyskor",
            melody: "Melodi: Militärmarsch av Schubert",
            text: "Alla    Feta fransyskor som svettas om fötterna.\n\nDe trampar druvor som sedan ska jäsas till vin.\n\nTranspirationen viktig é,\n\nty den ge\’ fin bouquet.\n\nVårtor och svampar följer me\’\n\nmen vad gör väl de\’?\n\nFör…\n\nVi vill ha vin, vill ha vin, vill ha mera vin,\n\näven om följderna blir att vi må lida pin.\n\nTjejer  Flaskan och glaset gått i sin.\n\nKillar  Hit med vin, mera vin!\n\nTjejer  Tror ni att vi är fyllesvin?\n\nKillar  JA! FAST STÖRRE!!"
        },
        {
            name: "Jag ska festa",
            melody: "Melodi: Bamse",
            text: "Jag ska festa, ta det lugnt med spriten.\n\nHa det roligt utan att va´ full.\n\nInte krypa runt med festeliten.\n\nTa det sansat för min egen skull.Ref: Först en öl i torra stupen,\n\nefter det så kommer supen,\n\ni med vinet, ner med punschen,\n\nsist en groggbuffé.Jag är skitfull, däckar först av alla,\n\nmissar festen, Men va gör väl det.\n\nBlandar hejdlöst öl och gammal filmjölk.\n\nKastat upp på bordsdamen brevé.Ref: Först en öl…Spyan rinner ner för n0lleslipsen.\n\nRaviolin torkar i mitt hår.\n\nVem har lagt mig här på matsalsbordet.\n\nVems är gaffeln i mitt högra lår!"
        },
        {
            name: "JASen",
            melody: "Melodi: Måsen",
            text: "Sjungs som svar när M.A.C.H. har sjungit JAS-hymnenOch Jasen styrde mot Västerbron\n\nmen styrsystemet var trasigt.\n\nPiloten ut sköt sig med kanon\n\nför planet vingla så knasigt.\n\nHan ville uppåt han ville mer,\n\nmen planet svarte han ville ner.\n\nMot alla jon,\n\npå Västerbron."
        },
        {
            name: "Strejk på Pripps",
            melody: "Melodi: I natt jag drömde",
            text: "I natt jag drömde något som,\n\njag aldrig drömt förut.\n\nJag drömde det var strejk på Pripps\n\noch alla ölen var slut.\n\nJag drömde om en jättesal\n\ndär ölen stod på rad.\n\nJag drack sådär ett tusental\n\noch reste mig och sa:ARMEN I VINKEL\n\nBLICKEN I SKYN\n\nSÅ VAR DET MENAT\n\nWHISKY OCH RENAT\n\nVÅRT MÅL: ALKOHOL\n\nFÖR DEN SOM TÅL! SKÅL!Man säger endast skål om man tänker dricka"
        },
        {
            name: "Öl, öl, öl i glas",
            melody: "Melodi: Row, row, row your boat",
            text: "Öl, öl, öl i glas eller i butelj\n\nSkummande, skummande, skummande, skummande\n\nta en klunk o svälj!"
        },
        {
            name: "Lambo",
            text: "TODO: Skriv en fet info låda Resten     Sätt nu glaset till din mun!\n\n Tjo-fa-de-rittan lambo!\n\n Och drick ur, din fylle-fylle hund\n\n Tjo-fa-de-rittan lambo!\n\n Se, hur dropparna i glaset\n\n rinner ner i fylle-aset.\n\n Lambo-Hej! Lambo-Hej!\n\n Tjo-fa-de-rittan lambo!Fyllehund  Jag nu glaset druckit har!\n\nResten     Tjo-fa-de-rittan lambo!\n\nFyllehund  Ej en droppe finnes kvar!\n\nResten     Tjo-fa-de-rittan lambo!\n\nFyllehund  Som bevis jag nu skall vända\n\n glaset på dess rätta ända.\n\nResten     Lambo-Hej! Lanbo-Hej!\n\n Tjo-fa-de-rittan lambo!\n\n Ja han kunde konsten att att va\n\n en riktig fylle-fylle hund!"
        },
        {
            name: "Tacksång för spex",
            text: "Denna sjunger man efter att någon har genomfört ett spex på<br>\n\nt.ex. en sittning. Ersätt [XX] med rätt pronomen eller namnAlla  Det där det gjorde [XX] fan så bra (hej!)\n\n      En skål uti botten för [XX] nu vi tar!\n\n      Hugg i och dra, hej!\n\n      Hugg i och dra, hej!\n\n      En skål uti botten för [XX] nu vi tar!\n\n      Och alla så dricker vi nu [XX] till!\n\n[XX]  Och [XX] säger inte nej därtill!\n\nAlla  För det var i vår ungdoms fagraste vår,\n\nvi drack varandra till och vi sade gutååår!"
        },
        {
            name: "Kalmarevisan",
            text: "Ledare  𝄆 För uti Kalmare Stad\n\nAlla    ja där finns inge kvast 𝄇\n\nAlla    förrän lördagen.Ref:\n\nLedare  Hej Dick.\n\nAlla    Hej Dack.\n\nLedare  Jag slog i.\n\nAlla    Och vi drack.\n\nLedare  Hej dickom dickom dack.\n\nAlla    Hej dickom dickom dack.\n\nAlla    För uti Kalmar stad finns det ingen\n\nkvast förrän lördagen.Ledare  𝄆 När som bonden kommer hem,\n\nAlla    kommer bondekvinnan ut 𝄇\n\nAlla    och är stor i sin trut.\n\nRef: Hej Dick…Ledare  𝄆 Vart är pengarna du fått?\n\nAlla    Jo dom har jag supit opp! 𝄇\n\nAlla    Uppå Kalmare slot.\n\nRef: Hej Dick…Ledare  𝄆 Jag skall mäla dig an,\n\nAlla    för vår kronbefallningsman 𝄇\n\nAlla    Och du skall få skam\n\nRef: Hej Dick…Ledare  𝄆 Kronbefallningsmannen vår,\n\nAlla    satt på krogen igår 𝄇\n\nAlla    Och var full som ett får\n\nRef: Hej Dick…Ledare  𝄆 Va\’ ska\’ bonnen ha te\’ mat?\n\nAlla    Sura sillar och potat 𝄇\n\nAlla    Det blir sillsallad.\n\nRef: Hej Dick…Ledare  𝄆 Var är din labbrapport?\n\nAlla    Jo, den har jag supit bort 𝄇\n\nAlla    För den var för kort.\n\nRef: Hej Dick…Ledare  𝄆 När jag ser en teknolog\n\nAlla    Tar jag fram min motorsåg 𝄇\n\nAlla    Och han blir så låg\n\nRef: Hej Dick…"
        },
        {
            name: "Porthos visa",
            melody: "Melodi: You Can't Get A Man With A Gun",
            text: "Jag vill börja Gasqua,\n\nvar faan är min flaska,\n\nvem i helvete stal min butelj?\n\nSkall törsten mig tvinga\n\nen TT börja svinga,\n\nmen för faan bara blunda och svälj.Vilken smörja,\n\nfår jag spörja,\n\nvem för faan tror att jag är en älg?Till England vi rider\n\noch sedan vad det lider\n\nträffar vi välan på någon pub.\n\nDär skall vi phæsta,\n\nblott dricka av det bästa,\n\nutav Whisky och Portvin,\n\njag tänker gå hårt in\n\nför att pröva på rubb och stubb!\n\nrubb o stubb,\n\nrubb o stubb,\n\nrubb o stubb,\n\nrubbo!"
        },
        {
            name: "Blå förgätimej",
            text: "Sjungs efter sittning för att tacka personalHur gärna ville jag ej vara\n\nen liten blå förgätmigej,\n\nen liten blå förgätmigej.\n\nDå skulle jag för dig förklara,\n\nhur innerligt jag älskar dej,\n\noch dej,\n\noch dej,\n\n…"
        },
        {
            name: "Brännvin filibombombom",
            melody: "Melodi: Ritsch ratsch, filibombombom",
            text: "Brännvin filibombombom\n\när en gudadryck för en törstig gom!\n\nBrännvin filibombombom\n\när potatisblom filibom"
        },
        {
            name: "Capsvisan",
            melody: "Melodi: I natt jag drömde",
            text: "Idag jag capsade en stund som\n\njag aldrig gjort förut.\n\nJag reste mig till slut och\n\nsa efter en tusen flak var slut:\n\nDet finns inga kapsyler kvar,\n\nej en enda kan jag se.\n\nNu ska jag gå och spy en stund,\n\nhelt vingelig och sne.\n\nArmen i vinkel, båge mot knät,\n\nså var det menat, capsa på renat,\n\nvårt mål: alkohol, capsa i mitten\n\nSKÅL!"
        },
        {
            name: "Halle Luta",
            melody: "Melodi: Halleluja",
            text: "Jag minns knappt hur jag tog mig hem\n\nKlockan var minst kvart i fem\n\nNär jag stod utanför min egen våning\n\nJag lyfte upp min nyckelring\n\nOch haja nästan ingenting\n\nNär dörren öppnas står min hall och lutar𝄆 Hallen luta, hallen luta 𝄇Jag minns knappt julen nittitre\n\nMin bror var där och syster mé\n\nÅ snyggingen i rött satt alldles brevé\n\nVi drack vår glögg och pratade\n\nMin dejt blev trött och schappade\n\nSå jag fick mera tid för hen den röde𝄆 Hen i luva, hen i luva 𝄇Fredagar har mer att ge\n\nÄn räkor snask och en TV\n\nEn kan ju hyra film och DVD\n\nÅ vill en ha något riktigt bra\n\nSå kan en faktiskt bara ta\n\nEn film som vunnit Oscar åt en Berry𝄆 Halle Berry, Halle Berry 𝄇"
        },
        {
            name: "Idas sittningsvisa",
            melody: "Melodi: Idas sommarvisa",
            text: "Du ska inte tro det blir sittning,\n\nifall inte nån sätter fart\n\npå toast och gör lite groggar,\n\ndå kommer känslorna snart.\n\nJag gör så att vinet blommar,\n\njag gör hela sittningen lila,\n\noch nu så har festen kommit,\n\nför jag har just tagit bort Phös.Jag gör mycket öl i stopen,\n\nså där så det hoppar och far.\n\nJag gör fullt med skratt som flyger\n\noch hån som Generalen tar.\n\nJag gör glasen rena på borden\n\noch små nubbar här och där.\n\nJag gör himlen vacker om kvällen,\n\nför jag gör den alldeles gul.Och vodka det gör jag åt barna,\n\nför det tycker jag dom kan få,\n\noch andra små roliga saker\n\nsom passar när barnen ska gå.\n\nOch jag gör så roliga ställen,\n\ndär studenten kan springa omkring,\n\ndå blir studenten fulla\n\noch buskarna blir fulla med sorg."
        },
        {
            name: "Jag har aldrig vart på snusen",
            melody: "Melodi: O hur saligt att få vandra",
            text: "Jag har aldrig varit på snusen\n\nAldrig rökat en cigarr, halleluja!\n\nMina dygder äro tusen,\n\nInga syndiga laster jag har.Jag har aldrig sett nått naket,\n\nInte ens ett nyfött barn, halleluja!\n\nMina blickar går mot taket,\n\nDärmed undgår jag frestarens garn.Halleluja…Bacchus spelar på gitarren,\n\nSatan spelar på sitt handklaver.\n\nAlla djävlar dansar tango\n\nSäg vad kan man önska sig mer?Jo, att alla bäckar vore brännvin,\n\nSVARTÅN full av bayerskt öl,\n\nKonjak i varenda rännsten,\n\nOch punsch i varendaste pöl, mera öl!Mera öl…"
        },
        {
            name: "JAS-hymn",
            melody: "Melodi: Nu grönskar det",
            text: "M.A.C.H.s “föreningslåt”För vi har världens bästa plan\n\nmed mängder av bomber och speed.\n\nKom med, kom med på två machs färd\n\ni våran bistra tid.\n\nVart plan är byggt som utav stål\n\ntill bredden fyllt med elektronik.\n\nDet väldigt mycket G-kraft tål\n\nnej, ingen är Jasen lik.Den flyger högt, den flyger lågt,\n\nden flyger snabbt och fort.\n\nDen flyger rätt, den flyger lätt,\n\nden flyger heltenkelt som smort.\n\nDen landar kanske ej så bra\n\nmen vad sjuttsingen gör väl de\’?\n\nDen kan ju flyga från en ryss\n\noch svänga i sju-åtta G.Sverige har en gammal tradition\n\natt bygga flygplan av klass.\n\nVi Tunnvis plan Lanserat har så\n\nsJas, Drak iväg och försVigg!\n\nVi är så bra, så hejdans bäst,\n\ningen kan våra flygplan slå\n\nnär vi kommer svepande över er\n\nmed full last och EBK."
        },
        {
            name: "Måsen",
            melody: "Melodi: Vid lindens fot (Månvisa)",
            text: "Det satt en mås på en klyvarbom\n\noch tom i krävan var kräket.\n\nOch tungan lådde vid skepparns gom,\n\ndär skutan låg uti blecket.\n\n“Jag vill ha sill!” hördes måsen rope\n\noch skepparn svarte: “Jag vill ha OP!\n\nOm blott jag får, om blott jag får.”Nu lyfter måsen från klybarbom,\n\noch vinden spelar i tågen.\n\nOch OP:n svalkat har skepparns gom,\n\njag önskar blott att jag såg\’en.\n\nSå nöjd och lycklig den arme saten,\n\nhan sätter storsegel den krabaten.\n\nTill sjöss han far, och Halvan tar.Nu månen vandrar sin tysta ban\n\noch tittar in genom rutan.\n\nDå tänker jag att på ljusan dag\n\ndå kan jag klara mig utan.\n\nDå kan jag klara mig utan måne,\n\nmen utan renat och utan skåne,\n\ndet vete fan, det vete fan.Den mås som satt på en klyvarbom,\n\nden är nu död och begraven,\n\noch skepparn som drack en flaska rom,\n\nhan har nu drunknat i haven.\n\nSå kan det gå om man fått för mycket,\n\nom man för brännvin har fattat tycke.\n\nVi som har kvar, vi resten tar."
        },
        {
            name: "Rekursionsvisa",
            melody: "Melodi: Bjällerklang",
            text: "Rekursion, rekursion,\n\ndet är bra att ha.\n\nMen utan basfall\n\nfastnar man\n\ni en oändlig loop av…"
        },
        {
            name: "Siffervisan",
            melody: "Melodi: Ritch-ratch",
            text: "1 2 75 6 7 75 6 7 75 6 7\n\n3 2 75 6 1 43 7 1 92\n\n103 102 101 105 6 19 47\n\n19 18 17 16 15 14 13 11\n\n16 17 18 19 13 55!1 2 75 6 7 75 6 7 75 6 7\n\n1 2 75 6 7 75 6 7 73\n\n107 103 102\n\n107 6 19 27\n\n17 18 16 15\n\n13 19 18 17\n\n19 16 15 11\n\n8 47!"
        },
        {
            name: "Studielånet",
            melody: "Melodi: Hej tomtegubbar",
            text: "𝄆 Mitt lilla lån det räcker inte,\n\ndet går till öl och till brännvin! 𝄇\n\nTill öl och brännvin går lånet åt\n\noch till små flickor emellanåt.\n\nMitt lilla lån det räcker inte,\n\ndet går till öl och till brännvin."
        },
        {
            name: "The basic song",
            melody: "Melodi: Mors lilla Olle",
            text: "10 LET oss nu fatta i våra glas\n\n20 INPUT en klunk utav det som där has\n\n30 IF du fått nog THEN till 50 min vän\n\n40 ELSE GOTO-baka till 10 igen\n\n50 END"
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
                                <a className='py-2 px-4 md:px-8 dark:bg-neutral-900 text-sm md:text-lg bg-white/50 rounded-full border-yellow-500/10 border-2 ' href={`#${song.name}`} key={song.name}>{song.name}</a>
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