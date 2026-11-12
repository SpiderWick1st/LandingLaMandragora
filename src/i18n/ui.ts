export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'brand.restaurant': 'RESTAURANTE',
    'nav.home': 'Inicio',
    'nav.ambientes': 'Ambientes',
    'nav.carta': 'Carta',
    'nav.galeria': 'Galería',
    'nav.ubicanos': 'Ubícanos',
    'nav.reserva': 'Reservar',
    'nav.open_menu': 'Abrir menú',
    'nav.close_menu': 'Cerrar menú',
    'footer.quick_links': 'Enlaces Rápidos',
    'footer.happy_hour_food': 'Happy Hour & Comida',
    'footer.happy_hour_until': 'Hasta las 9:00 PM',
    'footer.kitchen': 'Cocina',
    'footer.kitchen_until': 'Hasta las 12:00 AM',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'seo.title': 'La Mandrágora | Restaurante y Coctelería en Arequipa',
    'seo.description':
      'Restaurante con coctelería de autor en el corazón de Arequipa. Terraza y salón, cocina a la carta y música en vivo.',

    // Hero
    'hero.subtitle_html':
      'Una noche para recordar. <br /> Terraza y Salón: dos experiencias en el corazón de Arequipa.',
    'hero.view_menu': 'Ver la carta',
    'hero.down_aria': 'Bajar a la sección Ambientes',

    // Ambientes
    'ambientes.title': 'Dos Ambientes',
    'ambientes.desc':
      'Cada nivel de LA MANDRÁGORA ofrece una experiencia única. Elige tu vibra.',
    'ambientes.salon.badge': 'Salón',
    'ambientes.salon.title': 'Música en Vivo',
    'ambientes.salon.desc':
      'Sube al segundo piso y sumérgete en la experiencia de bandas en vivo. Rock, jazz, blues y más géneros se apoderan del escenario cada noche. Siente la vibración de la música en vivo en un ambiente íntimo y retro.',
    'ambientes.salon.live_bands': 'Bandas en Vivo',
    'ambientes.salon.shows_nightly': 'Shows Todas las Noches',
    'ambientes.salon.alt': 'Salón de La Mandrágora con banda en vivo y público',
    'ambientes.terraza.badge': 'Terraza',
    'ambientes.terraza.title': 'Zona DJ',
    'ambientes.terraza.desc':
      'La cima de LA MANDRÁGORA es pura energía. Nuestros DJs residentes mezclan lo mejor de la música electrónica, reggaeton, hip-hop y todos los géneros que te hacen mover. La fiesta nunca termina en el tercer piso.',
    'ambientes.terraza.resident_djs': 'DJs Residentes',
    'ambientes.terraza.alt':
      'DJ mezclando música en la zona DJ de La Mandrágora',
    'ambientes.genres.rock': 'Rock',
    'ambientes.genres.jazz': 'Jazz',
    'ambientes.genres.blues': 'Blues',
    'ambientes.genres.electronic': 'Electrónica',
    'ambientes.genres.reggaeton': 'Reguetón',
    'ambientes.genres.hiphop': 'Hip-hop',

    // Galería
    'galeria.tag': 'Galería',
    'galeria.subtitle':
      'Un vistazo a los ambientes, la barra y la cocina antes de tu visita.',
    'galeria.moments': 'momentos',
    'galeria.summary': 'Música · Terraza · Barra',
    'galeria.caption.live_music': 'Música en vivo',
    'galeria.caption.bartender': 'Bartender',
    'galeria.caption.bar': 'Barra',
    'galeria.caption.kitchen': 'Cocina',
    'galeria.caption.live_dj': 'Dj en vivo',
    'galeria.caption.nights': 'Noches LM',
    'galeria.caption.wings_ribs': 'Alitas y costillas',
    'galeria.caption.sunset': 'Atardecer',
    'galeria.alt.musico': 'Músico tocando la guitarra en vivo en La Mandrágora',
    'galeria.alt.bartender': 'Bartender de La Mandrágora con coctelera',
    'galeria.alt.banda': 'Banda tocando en vivo en La Mandrágora',
    'galeria.alt.barra':
      'Bartender preparando cócteles en la barra de La Mandrágora',
    'galeria.alt.comida': 'Hamburguesa con papas fritas de La Mandrágora',
    'galeria.alt.dj': 'DJ mezclando música en la zona DJ de La Mandrágora',
    'galeria.alt.clientes':
      'Clientes disfrutando de una cerveza en La Mandrágora',
    'galeria.alt.bbq': 'Costillas y alitas con papas fritas de La Mandrágora',
    'galeria.alt.terraza_atardecer':
      'Atardecer sobre Arequipa desde la terraza de La Mandrágora',

    // Ubícanos
    'ubicanos.title': 'Ubícanos',
    'ubicanos.desc':
      'Ven a vivir la experiencia mística y retro en el corazón del Centro Histórico de Arequipa.',
    'ubicanos.location_tag': 'Ubicación',
    'ubicanos.address_hint': 'A media cuadra de la Plaza de Armas',
    'ubicanos.hours_tag': 'Horario de Atención',
    'ubicanos.hours_title': 'Atención al Público',
    'ubicanos.days': 'Lunes a Domingo',
    'ubicanos.maps_button': 'Abrir ruta en Google Maps',
    'ubicanos.popup_restaurant': 'Restaurante',

    // Carta
    'carta.title': 'NUESTRA CARTA',
    'carta.desc':
      'Una selección exclusiva de coctelería mística y platos diseñados para complementar una noche perfecta de música y buena compañía.',
    'carta.cocktails_tag': 'Coctelería de autor',
    'carta.cocktails_title': 'La barra también es parte del show',
    'carta.cocktails_desc':
      'Nuestro bartender crea cócteles de autor con ingredientes locales y técnicas de vanguardia. Cada bebida es una firma propia, pensada para acompañar la noche.',
    'carta.tag_signature': 'Cócteles de autor',
    'carta.tag_local': 'Ingredientes locales',
    'carta.to_drink': 'Para beber',
    'carta.tab_cocktails': 'Cócteles',
    'carta.tab_mocktails': 'Mocktails',
    'carta.tab_hot': 'Calientes',
    'carta.to_eat': 'Para comer',
    'carta.tab_starters': 'Entradas',
    'carta.tab_mains': 'Platos',
    'carta.tab_burgers': 'Hamburguesas',
    'carta.tab_wings': 'Alitas',
    'carta.view_more': 'Ver más',
    'carta.view_less': 'Ver menos',
  },
  en: {
    'brand.restaurant': 'RESTAURANT',
    'nav.home': 'Home',
    'nav.ambientes': 'Ambiances',
    'nav.carta': 'Menu',
    'nav.galeria': 'Gallery',
    'nav.ubicanos': 'Find Us',
    'nav.reserva': 'Book a Table',
    'nav.open_menu': 'Open menu',
    'nav.close_menu': 'Close menu',
    'footer.quick_links': 'Quick Links',
    'footer.happy_hour_food': 'Happy Hour & Food',
    'footer.happy_hour_until': 'Until 9:00 PM',
    'footer.kitchen': 'Kitchen',
    'footer.kitchen_until': 'Until 12:00 AM',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'seo.title': 'La Mandrágora | Restaurant & Cocktail Bar in Arequipa',
    'seo.description':
      'Signature cocktail bar and restaurant in the heart of Arequipa. Rooftop terrace & lounge, à la carte dining, and live music.',

    // Hero
    'hero.subtitle_html':
      'A night to remember. <br /> Rooftop Terrace & Lounge: two experiences in the heart of Arequipa.',
    'hero.view_menu': 'Explore Menu',
    'hero.down_aria': 'Scroll down to Ambiances',

    // Ambientes
    'ambientes.title': 'Two Ambiances',
    'ambientes.desc':
      'Each level of LA MANDRÁGORA offers a unique experience. Choose your vibe.',
    'ambientes.salon.badge': 'Lounge',
    'ambientes.salon.title': 'Live Music',
    'ambientes.salon.desc':
      'Head up to the second floor and immerse yourself in the live band experience. Rock, jazz, blues, and more take over the stage every night. Feel the live music pulse in an intimate, retro setting.',
    'ambientes.salon.live_bands': 'Live Bands',
    'ambientes.salon.shows_nightly': 'Shows Every Night',
    'ambientes.salon.alt': 'La Mandrágora lounge with live band and guests',
    'ambientes.terraza.badge': 'Rooftop Terrace',
    'ambientes.terraza.title': 'DJ Zone',
    'ambientes.terraza.desc':
      'The top of LA MANDRÁGORA is pure energy. Our resident DJs spin the best electronic, reggaeton, hip-hop, and beats that keep you moving. The party never stops on the third floor.',
    'ambientes.terraza.resident_djs': 'Resident DJs',
    'ambientes.terraza.alt': 'DJ mixing music in the DJ zone of La Mandrágora',
    'ambientes.genres.rock': 'Rock',
    'ambientes.genres.jazz': 'Jazz',
    'ambientes.genres.blues': 'Blues',
    'ambientes.genres.electronic': 'Electronic',
    'ambientes.genres.reggaeton': 'Reggaeton',
    'ambientes.genres.hiphop': 'Hip-hop',

    // Galería
    'galeria.tag': 'Gallery',
    'galeria.subtitle':
      'A glimpse of our spaces, cocktail bar, and kitchen before your visit.',
    'galeria.moments': 'moments',
    'galeria.summary': 'Music · Rooftop · Bar',
    'galeria.caption.live_music': 'Live Music',
    'galeria.caption.bartender': 'Bartender',
    'galeria.caption.bar': 'Bar',
    'galeria.caption.kitchen': 'Kitchen',
    'galeria.caption.live_dj': 'Live DJ',
    'galeria.caption.nights': 'LM Nights',
    'galeria.caption.wings_ribs': 'Wings & Ribs',
    'galeria.caption.sunset': 'Sunset',
    'galeria.alt.musico': 'Musician playing guitar live at La Mandrágora',
    'galeria.alt.bartender': 'La Mandrágora bartender shaking cocktails',
    'galeria.alt.banda': 'Live band performing at La Mandrágora',
    'galeria.alt.barra': 'Bartender crafting cocktails at La Mandrágora bar',
    'galeria.alt.comida': 'Burger with french fries at La Mandrágora',
    'galeria.alt.dj': 'DJ mixing music on the rooftop of La Mandrágora',
    'galeria.alt.clientes': 'Guests enjoying a drink at La Mandrágora',
    'galeria.alt.bbq': 'Ribs and chicken wings with fries at La Mandrágora',
    'galeria.alt.terraza_atardecer':
      'Sunset over Arequipa from La Mandrágora rooftop terrace',

    // Ubícanos
    'ubicanos.title': 'Find Us',
    'ubicanos.desc':
      'Come experience the mystic, retro vibe right in the historic center of Arequipa.',
    'ubicanos.location_tag': 'Location',
    'ubicanos.address_hint':
      'Half a block from the Main Square (Plaza de Armas)',
    'ubicanos.hours_tag': 'Opening Hours',
    'ubicanos.hours_title': 'General Hours',
    'ubicanos.days': 'Monday to Sunday',
    'ubicanos.maps_button': 'Open in Google Maps',
    'ubicanos.popup_restaurant': 'Restaurant',

    // Carta
    'carta.title': 'OUR MENU',
    'carta.desc':
      'An exclusive selection of signature cocktails and dishes crafted to accompany a perfect night of music and great company.',
    'carta.cocktails_tag': 'Signature Cocktails',
    'carta.cocktails_title': 'The bar is also part of the show',
    'carta.cocktails_desc':
      'Our bartender crafts signature cocktails with local ingredients and modern techniques. Each drink is a personal signature, tailored to elevate your night.',
    'carta.tag_signature': 'Signature Cocktails',
    'carta.tag_local': 'Local Ingredients',
    'carta.to_drink': 'Drinks',
    'carta.tab_cocktails': 'Cocktails',
    'carta.tab_mocktails': 'Mocktails',
    'carta.tab_hot': 'Hot Drinks',
    'carta.to_eat': 'Food',
    'carta.tab_starters': 'Starters',
    'carta.tab_mains': 'Mains',
    'carta.tab_burgers': 'Burgers',
    'carta.tab_wings': 'Wings',
    'carta.view_more': 'View more',
    'carta.view_less': 'View less',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  // Strip trailing slashes and locale prefix
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const withoutLang = cleanPath.replace(/^\/en(\/|$)/, '/');
  const normalized = withoutLang === '' ? '/' : withoutLang;

  if (targetLang === 'en') {
    return normalized === '/'
      ? '/en/'
      : `/en${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
  }

  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}
