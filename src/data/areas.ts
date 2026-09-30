// Orter företaget arbetar i. En sida per ort genereras under /omraden/<slug>/.

export interface Area {
  slug: string;
  name: string;
  intro: string;
  nearby: string[];
}

export const areas: Area[] = [
  {
    slug: 'trollhattan',
    name: 'Trollhättan',
    intro:
      'Trollhättan är vår hemmabas. Här städar vi hem, kontor och trapphus åt privatpersoner, företag och hyresvärdar varje vecka, från centrum och Västerstaden till Lextorp, Kronogården, Sylte och Skoftebyn.',
    nearby: ['Vänersborg', 'Lilla Edet', 'Sjuntorp'],
  },
  {
    slug: 'grastorp',
    name: 'Grästorp',
    intro:
      'I Grästorp hjälper vi både villaägare och lokala företag med flyttstäd, storstäd, fönsterputs och regelbunden kontorsstädning.',
    nearby: ['Vänersborg', 'Tengene', 'Trollhättan'],
  },
  {
    slug: 'lysekil',
    name: 'Lysekil',
    intro:
      'I Lysekil städar vi bostäder, fritidshus och lokaler, med extra fokus på flyttstäd och storstäd inför och efter säsongen.',
    nearby: ['Brastad', 'Skaftö', 'Uddevalla'],
  },
  {
    slug: 'smogen',
    name: 'Smögen',
    intro:
      'På Smögen och i Sotenäs hjälper vi dig som har fritidshus, uthyrningsboende eller verksamhet med storstäd, fönsterputs och städning mellan gäster.',
    nearby: ['Kungshamn', 'Hunnebostrand', 'Väjern'],
  },
];

export const areaNames = areas.map((a) => a.name);
