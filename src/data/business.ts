// Enda källan för företagsuppgifter. Används i header, footer, formulär och schema.org.
// Fält markerade TODO väntar på svar från ägaren.

export const business = {
  name: 'E&I Bygg Service Fastighet Städning AB',
  shortName: 'E&I Service',
  tagline: 'Städning & fastighetsservice i Trollhättan',
  phones: [
    { display: '070-013 21 39', href: 'tel:+46700132139' },
    { display: '070-446 67 54', href: 'tel:+46704466754' },
  ],
  email: 'emsabiscevic@gmail.com',
  orgNumber: '', // TODO: org.nr
  address: {
    street: '', // TODO: gatuadress
    postalCode: '', // TODO
    city: 'Trollhättan',
    region: 'Västra Götalands län',
    country: 'SE',
  },
  geo: { lat: 58.2837, lng: 12.2886 }, // Trollhättan centrum
  // TODO: bekräfta öppettider
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
  ],
  openingHoursText: 'Mån–fre 07–18',
  responseTime: 'inom 24 timmar',
  // Förtroendepunkter. TODO: bekräfta F-skatt och försäkring med ägaren
  trust: ['Godkänd för F-skatt', 'Ansvarsförsäkrade', 'RUT-avdrag direkt på fakturan', 'Fast pris i offerten'],
} as const;

export const primaryPhone = business.phones[0];
