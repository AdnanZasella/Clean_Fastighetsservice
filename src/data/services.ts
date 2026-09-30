// Alla tjänster. En sida per tjänst genereras från den här listan via src/pages/tjanster/[slug].astro.
// Lägg till en tjänst = lägg till ett objekt här.
// Foto: lägg en bild med samma namn som `slug` (t.ex. flyttstad-trollhattan.jpg) i src/assets/photos/.

export type Audience = 'privat' | 'foretag' | 'bada';
export type IconName = 'box' | 'home' | 'sparkle' | 'window' | 'briefcase' | 'stairs' | 'wrench';

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  chip?: string; // kort etikett i offertformuläret
  core: boolean; // true = står på affischen, visas först
  short: string;
  icon: IconName;
  audience: Audience;
  rut: boolean;
  title: string;
  description: string;
  h1: string;
  intro: string;
  includes: string[];
  faq: Faq[];
}

export const services: Service[] = [
  {
    slug: 'flyttstad-trollhattan',
    name: 'Flyttstäd',
    core: true,
    short: 'Slutstädning som klarar besiktningen.',
    icon: 'box',
    audience: 'bada',
    rut: true,
    title: 'Flyttstäd i Trollhättan – fast pris med RUT-avdrag',
    description:
      'Flyttstädning i Trollhättan, Grästorp, Lysekil och Smögen. Fast pris, RUT-avdrag och noggrann städning som klarar besiktningen. Få gratis offert.',
    h1: 'Flyttstäd i Trollhättan',
    // TODO: bekräfta att ägaren erbjuder omstädning vid anmärkning
    intro:
      'Vi städar efter samma checklista som hyresvärdar och mäklare använder vid besiktning. Blir något anmärkt kommer vi tillbaka och åtgärdar det.',
    includes: [
      'Ugn, spis, fläkt, kyl och frys, in och ut',
      'Skåp och lådor torkas in och ut',
      'Badrum avkalkas, inklusive fogar och golvbrunn',
      'Fönster putsas på båda sidor',
      'Lister, dörrar, karmar och element',
      'Alla golv dammsugs och våttorkas',
    ],
    faq: [
      {
        q: 'Vad kostar flyttstäd?',
        a: 'Det beror mest på bostadens storlek och skick. Du får ett fast pris i offerten, och som privatperson betalar du bara halva arbetskostnaden tack vare RUT-avdraget.',
      },
      {
        q: 'Behöver jag vara hemma?',
        a: 'Nej, det räcker att du lämnar nyckel. Bostaden ska vara tömd på möbler och saker när vi kommer.',
      },
      {
        q: 'Vad händer om besiktningen hittar något?',
        a: 'Hör av dig direkt, så kommer vi tillbaka och åtgärdar det.',
      },
    ],
  },
  {
    slug: 'hemstad-trollhattan',
    name: 'Hemstäd',
    core: true,
    short: 'Varje vecka, varannan vecka eller en gång i månaden.',
    icon: 'home',
    audience: 'privat',
    rut: true,
    title: 'Hemstäd i Trollhättan – regelbunden städning med RUT',
    description:
      'Regelbunden hemstädning i Trollhättan med omnejd. Du väljer intervall och betalar halva arbetskostnaden med RUT-avdrag. Begär gratis offert.',
    h1: 'Hemstäd i Trollhättan',
    intro:
      'Vi städar hos dig varje vecka, varannan vecka eller en gång i månaden. Du väljer intervall och kan pausa när du vill.',
    includes: [
      'Golv dammsugs och våttorkas',
      'Damning av ytor, lister och lampor',
      'Kök: bänkar, spis, fronter och diskho',
      'Badrum: handfat, toalett, dusch och speglar',
      'Papperskorgar töms',
    ],
    faq: [
      {
        q: 'Behöver jag ha egna städprodukter?',
        a: 'Nej, vi tar med det vi behöver. Har du produkter du föredrar använder vi gärna dem.',
      },
      {
        q: 'Hur fungerar RUT-avdraget?',
        a: 'Vi drar av 50 % av arbetskostnaden direkt på fakturan och sköter ansökan hos Skatteverket.',
      },
    ],
  },
  {
    slug: 'storstad-trollhattan',
    name: 'Storstäd',
    core: true,
    short: 'Grundlig städning av hela hemmet.',
    icon: 'sparkle',
    audience: 'bada',
    rut: true,
    title: 'Storstäd i Trollhättan – grundlig städning med RUT',
    description:
      'Storstädning i Trollhättan, Grästorp, Lysekil och Smögen. Vi tar även det vanlig städning missar. RUT-avdrag och fast pris. Få gratis offert.',
    h1: 'Storstäd i Trollhättan',
    intro:
      'Vi städar hela bostaden grundligt, även bakom möbler, ovanpå skåp och inuti vitvaror. Passar inför högtider, efter renovering eller i fritidshuset inför säsongen.',
    includes: [
      'Allt som ingår i hemstäd',
      'Ugn, fläkt och kyl',
      'Skåpluckor och handtag',
      'Avkalkning av badrum och kakel',
      'Dörrar, karmar, element och lister',
      'Fönsterputsning om du vill',
    ],
    faq: [
      {
        q: 'Hur lång tid tar det?',
        a: 'En vanlig trea tar oftast en dag. Du får en tidsuppskattning i offerten.',
      },
      {
        q: 'Städar ni fritidshus?',
        a: 'Ja, vi storstädar ofta fritidshus i Lysekil och på Smögen inför och efter säsongen.',
      },
    ],
  },
  {
    slug: 'fonsterputs-trollhattan',
    name: 'Fönsterputsning',
    chip: 'Fönster',
    core: true,
    short: 'In- och utvändigt, för hem och företag.',
    icon: 'window',
    audience: 'bada',
    rut: true,
    title: 'Fönsterputsning i Trollhättan – fönsterputs för hem & företag',
    description:
      'Fönsterputs i Trollhättan, Grästorp, Lysekil och Smögen för villor, lägenheter och butiker. RUT-avdrag för privatpersoner. Få gratis offert.',
    h1: 'Fönsterputsning i Trollhättan',
    intro:
      'Vi putsar in- och utvändigt, mellan glasen, och torkar karmar och fönsterbänkar. För villor, lägenheter, butiker och kontor.',
    includes: [
      'Utvändig och invändig puts',
      'Mellan glasen på kopplade fönster',
      'Karmar och fönsterbänkar',
      'Skyltfönster och glaspartier',
      'Engångsputs eller återkommande',
    ],
    faq: [
      {
        q: 'Ger fönsterputs RUT-avdrag?',
        a: 'Ja, fönsterputsning i ditt hem ger RUT-avdrag på 50 % av arbetskostnaden.',
      },
      {
        q: 'Putsar ni när det regnar?',
        a: 'Lätt regn går bra. Vid kraftigt regn eller minusgrader flyttar vi tiden tillsammans med dig.',
      },
    ],
  },
  {
    slug: 'kontorsstad-trollhattan',
    name: 'Kontorsstäd',
    core: true,
    short: 'Städavtal för kontor, butiker och lokaler.',
    icon: 'briefcase',
    audience: 'foretag',
    rut: false,
    title: 'Kontorsstäd i Trollhättan – städavtal för företag',
    description:
      'Kontorsstädning i Trollhättan med omnejd. Flexibla städavtal, fast pris och en kontaktperson. Begär offert för ert kontor eller er lokal.',
    h1: 'Kontorsstäd i Trollhättan',
    intro: 'Vi städar kontor, butiker och lokaler före, under eller efter arbetstid, efter ett schema som passar er.',
    includes: [
      'Skrivbord och arbetsytor',
      'Pentry och kaffemaskin',
      'Toaletter, inklusive påfyllning',
      'Golv i kontor, korridorer och entré',
      'Papperskorgar och källsortering',
      'Fönsterputsning och storstäd vid behov',
    ],
    faq: [
      {
        q: 'Hur ofta städar ni?',
        a: 'Allt från dagligen till en gång i månaden. Vi lägger upp schemat efter era behov.',
      },
      {
        q: 'Är det bindningstid?',
        a: 'Villkoren står tydligt i offerten, så att ni vet exakt vad ni betalar och hur länge.',
      },
    ],
  },
  {
    slug: 'trappstadning-trollhattan',
    name: 'Trappstädning',
    chip: 'Trappstäd',
    core: false,
    short: 'Trapphus och gemensamma utrymmen.',
    icon: 'stairs',
    audience: 'foretag',
    rut: false,
    title: 'Trappstädning i Trollhättan – för BRF och hyresvärdar',
    description:
      'Trappstädning och städning av gemensamma utrymmen i Trollhättan med omnejd. Fast schema för bostadsrättsföreningar och fastighetsägare.',
    h1: 'Trappstädning i Trollhättan',
    intro:
      'Vi städar trapphus, tvättstugor och andra gemensamma utrymmen enligt fast schema, åt bostadsrättsföreningar och hyresvärdar.',
    includes: [
      'Trappor och plan sopas och våttorkas',
      'Entréer, glaspartier och ledstänger',
      'Hissar',
      'Tvättstugor och soprum',
      'Källar- och vindsgångar',
    ],
    faq: [
      {
        q: 'Hur ofta brukar trapphus städas?',
        a: 'Vanligast är en gång i veckan eller varannan vecka, med storstädning ett par gånger om året.',
      },
      {
        q: 'Kan ni ta flera fastigheter?',
        a: 'Ja. Vi arbetar redan åt hyresvärdar i Trollhättan och lägger upp ett schema för alla era fastigheter.',
      },
    ],
  },
  {
    slug: 'fastighetsservice-trollhattan',
    name: 'Fastighetsservice',
    chip: 'Fastighet',
    core: false,
    short: 'Byggstäd och städning mellan hyresgäster.',
    icon: 'wrench',
    audience: 'foretag',
    rut: false,
    title: 'Fastighetsservice i Trollhättan – städ och skötsel',
    description:
      'Fastighetsservice i Trollhättan: byggstäd, städning mellan hyresgäster och skötsel av gemensamma ytor för fastighetsägare och förvaltare.',
    h1: 'Fastighetsservice i Trollhättan',
    intro:
      'Vi städar lägenheter mellan hyresgäster, gör byggstäd och sköter gemensamma ytor, så att fastighetsägare slipper samordna flera leverantörer.',
    // TODO: bekräfta exakt vilka fastighets-/byggtjänster ägaren erbjuder
    includes: [
      'Städning av lägenheter mellan hyresgäster',
      'Byggstäd efter renovering',
      'Skötsel av gemensamma ytor och miljörum',
      'Enklare underhåll',
      'Snabb hjälp vid akuta behov',
    ],
    faq: [
      {
        q: 'Arbetar ni redan med hyresvärdar?',
        a: 'Ja, vi arbetar löpande med hyresvärdar i Trollhättan och vet vad som krävs vid in- och utflyttning.',
      },
      {
        q: 'Hur snabbt kan ni komma?',
        a: 'Vid akuta behov försöker vi komma samma eller nästa vardag. Ring oss för snabbast svar.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const coreServices = services.filter((s) => s.core);
export const extraServices = services.filter((s) => !s.core);
export const businessServices = services.filter((s) => s.audience !== 'privat');
export const rutServiceNames = services.filter((s) => s.rut).map((s) => s.name.toLowerCase());
