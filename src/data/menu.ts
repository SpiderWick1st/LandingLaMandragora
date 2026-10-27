export interface MenuItemData {
  name: string;
  price: string;
  description: string;
  tag?: string;
  image?: string;
}

export const cocteles: MenuItemData[] = [
  {
    name: 'Sinatra Forever',
    price: 'S/28.00',
    description:
      "A base de Jack Daniel's, Jagermeister, Maracuya, Ginger Ale, con notas citricas Coctel super agradable.",
    tag: 'Elixir Insignia',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Gimme The Power',
    price: 'S/28.00',
    description:
      'Coctel ultra refrescante a base de tequila, mezcal, licor de naranja, cítricos y jarabe herbal artesanal, cargado de auténtica picardía mexicana.',
    tag: 'Misterioso & Frutal',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'The Voice of Freddie',
    price: 'S/28.00',
    description:
      'Por esa voz poderosa, a base de cachaza, licor de manzana, zumo de piña natural, gajos de limon y azucar granulada.',
    tag: 'Nuevo',
    image:
      'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Marley Punch',
    price: 'S/28.00',
    description:
      'Mezcla de rones, limón, maracuyá, jarabe herbal de la casa y bitter de naranja. Súper fresco como sus canciones.',
    tag: 'Cítrico & Mágico',
    image:
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'La Mula de X Dinero',
    price: 'S/28.00',
    description:
      'Pisco, vodka, ginger, jarabe de kion y ponche colombiano. En honor a "Las locas de X Dinero", ideal para los piratas del mar arequipeño.',
    tag: 'Fuerte & Especiado',
    image: '/barra/cocteles/Mula.webp',
  },
  {
    name: 'Charly Charly',
    price: 'S/30.00',
    description:
      'Por el loco de Charly García, Un coctel super matador, como debe de ser, te pone la fiesta, un blend de rones mas fernet, mix citricos y granadina.',
    tag: 'Fuerte & Especiado',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Brisa del Chachani',
    price: 'S/28.00',
    description:
      'Una fresca mezcla tropical Aperol y Gin con notas cítricas, florales y burbujeantes, inspirada en la imponente brisa del Chachani.',
    tag: 'Fresco & Tropical',
    image:
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Amy Blake',
    price: 'S/25.00',
    description:
      'Coctel a base de Gin y licor de moras artesanal, jarabe herbal y zumo de limon... Combinacion dulce citrica muy agradable.',
    tag: 'Fuerte & Especiado',
    image: '/barra/cocteles/Amy.webp',
  },
  {
    name: 'Orishas Fashioned',
    price: 'S/28.00',
    description:
      'A base de un blend de rones espaciados, azúcar, agua con gas, aromas de naranja y canela.',
    tag: 'Fuerte & Especiado',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Magdalena',
    price: 'S/25.00',
    description:
      'En honor a cara de haba, a base de pisco, hierba luisa, gajos de naranja, jarabe herbal, maracuyá y agua tónica.',
    tag: 'Fuerte & Especiado',
    image:
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Trópico Oscuro',
    price: 'S/30.00',
    description:
      'Etiqueta Negra, cihuatán 8, cítricos, frutas tropicales y panela. Un viaje elegante y ahumado del Caribe a la oscuridad.',
    tag: 'Un viaje del Caribe a la oscuridad',
    image:
      'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Smoke & Strings',
    price: 'S/30.00',
    description:
      'Chivas 12, vermouth rosso y bitter de naranja, coronado con tocino ahumado. Un aperitivo elegante y rebelde.',
    tag: 'Un viaje del Caribe a la oscuridad',
    image: '/barra/cocteles/Smoke.webp',
  },
  {
    name: 'Jungle Fire Zombie',
    price: 'S/35.00',
    description:
      'Mezcla explosiva de tequila picante, mezcal, blend de rones, licor de ají, piña, cítricos y jarabe de chancaca, Un cóctel tropical con carácter y fuego.',
    tag: 'Un viaje del Caribe a la oscuridad',
    image:
      'https://images.unsplash.com/photo-1541546339599-ecdbfcf77378?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Bartolita',
    price: 'S/33.00',
    description:
      'Una explosión frutal y cítrica, con el carácter del pisco moscatel y tequila, equilibrada con suaves notas de naranja, limón y granadina.',
    tag: 'Frutal & Cítrico',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=70',
  },
];

export const mocktails: MenuItemData[] = [
  {
    name: 'Green and Fresh',
    price: 'S/20.00',
    description:
      'Maracuyá, limón, pepino y albahaca con un toque burbujeante, Fresco, herbal y revitalizante.',
    tag: 'Sin alcohol',
    image:
      'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Fuego Dulce',
    price: 'S/20.00',
    description:
      'Piña, naranja, kion y chancaca en una mezcla tropical con un final refrescante y lleno de carácter.',
    tag: 'Sin alcohol',
    image:
      'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Andino de Oro',
    price: 'S/20.00',
    description:
      'Aguaymanto, limón y granadina con un toque de agua tónica, Equilibrado, cítrico y refrescante.',
    tag: 'Sin alcohol',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Passion Sunset',
    price: 'S/20.00',
    description:
      'Piña y maracuyá con limón y un ligero dulzor. Tropical, burbujeante y perfecto para el verano.',
    tag: 'Sin alcohol',
    image:
      'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=500&q=70',
  },
];

export const entradas: MenuItemData[] = [
  {
    name: 'Tequeños de Jamón y Queso',
    price: 'S/20.00',
    description:
      'Masa de wantan crocante rellena de jamón y queso acompañados con guacamole.',
    tag: 'El Clásico que Nunca Falla',
    image:
      'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Tequeños Chicken Thai Roll',
    price: 'S/22.00',
    description:
      'Masa de wantan crocante rellena de pechuga de pollo al wok, cebolla blanca, pimiento con estilo oriental acompañados de salsa de 5 especias.',
    tag: 'Inspiración Oriental',
    image:
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Salchipapa Gaucha Personal',
    price: 'S/30.00',
    description:
      'Crocantes papas fritas acompañada de tropezones de chorizo argentino de finas hierbas al grill, bañado de suave y cremosa salsa de queso cheddar y lluvia crocante de tocino.',
    tag: 'Para Compartir sin Culpa',
    image:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Salchipapa Personal Frankfurt',
    price: 'S/20.00',
    description: 'Crocantes papas fritas acompañada de salchicha frankfurt.',
    tag: 'Sabor Callejero',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Salchipapa Personal Doble Embutido',
    price: 'S/25.00',
    description:
      'Crocantes papas fritas acompañadas de salchicha arequipeña y chorizo.',
    tag: 'Sabor Callejero',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Salchipapa Parrillera (Para Dos)',
    price: 'S/55.00',
    description:
      'Crocantes papas fritas acompañadas de chorizo de finas hierbas, salchicha Arequipeña coronada con chuleta de bife de res o filete de pollo bañada en salsa chimichurri.',
    tag: 'Para Compartir',
    image:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Salchipapa Carretillera Doble (Para Dos)',
    price: 'S/49.00',
    description:
      'Crocantes papas fritas acompañada de salchicha frankfurt, salchicha Arequipeña coronada con pechuga de pollo crocante.',
    tag: 'Para Compartir',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=70',
  },
];

export const fuertes: MenuItemData[] = [
  {
    name: 'Ensalada César',
    price: 'S/29.00',
    description:
      'Trozos frescos de lechuga bañados en deliciosa salsa de vinagreta Cesar acompañada de pechuga de pollo al grill.',
    tag: 'La Opción Fresca',
    image:
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Lomo Saltado',
    price: 'S/39.00',
    description:
      'Trozos de lomo fino de res salteados al wok con cebolla, tomate, acompañados de crocantes papas fritas y arroz blanco.',
    tag: 'El Favorito de Siempre',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Lomo Strogonoff',
    price: 'S/39.00',
    description:
      'Jugosos trozos de lomo fino de res salteados al wok con cebolla, champiñones acompañados de crocantes papas nativas y mix de lechugas.',
    tag: 'Suave & Reconfortante',
    image:
      'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Enrollado Cordon Bleu',
    price: 'S/35.00',
    description:
      'Pechuga de pollo rellena de jamon y queso crocante, bañado en salsa de champiñones acompañado de mix de lechugas.',
    tag: 'Dorado a la Perfección',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Fettuccini en Salsa Huancaína con Lomo Saltado',
    price: 'S/39.00',
    description:
      'Fetuccini bañados en salsa huancaina artesanal acompañado con nuestro jugoso lomo saltado de res.',
    tag: 'Dos Clásicos, Un Plato',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Crispi de Pollo',
    price: 'S/30.00',
    description:
      'Bastones crocantes de pechuga de pollo bañados en miel de maracuyà con papas fritas crocantes.',
    tag: 'Dulce & Crocante',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Costillas de Cerdo en Salsa BBQ / Búfalo',
    price: 'S/35.00',
    description:
      'Tiernas costillas de cerdo bañadas en salsa BBQ clásica con papas fritas crocantes.',
    tag: 'Pura Tentación',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=70',
  },
];

export const hamburguesas: MenuItemData[] = [
  {
    name: 'Hamburguesa Clásica',
    price: 'S/29.00',
    description:
      'Asado de tira hecho hamburguesa, queso cheddar, tocino servido en pan brioche y papas nativas.',
    tag: 'El Clásico',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Hamburguesa Montada Mandrágora',
    price: 'S/30.00',
    description:
      'Asado de tira hecho hamburguesa, queso cheddar, tocino, huevo frito servido en pan brioche y papas nativas.',
    tag: 'Sin Miedo al Hambre',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Hamburguesa a lo Pobre',
    price: 'S/35.00',
    description:
      'Asado de tira hecho hamburguesa, queso cheddar, tocino, huevo frito y plátano servido en pan brioche y papas nativas.',
    tag: 'Tradición que Conquista',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Hamburguesa BBQ Tocino',
    price: 'S/35.00',
    description:
      'Asado de tira hecho hamburguesa, queso cheddar, tocino, bañada en BBQ de tocino servido en pan brioche y papas nativas.',
    tag: 'Ahumada & Poderosa',
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Hamburguesa Mandrágora',
    price: 'S/35.00',
    description:
      'Asado de tira hecho hamburguesa, queso cheddar, tocino, aros de cebolla crocantes servido en pan brioche y papas nativas.',
    tag: 'La Favorita de la Casa',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Hamburguesa LM Especial',
    price: 'S/38.00',
    description:
      'Asado de tira hecho hamburguesa, tocino, tomate, lechuga, bañada en salsa de queso de la casa y servido en pan brioche con papas nativas.',
    tag: 'Especial de la Casa',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=70',
  },
];

export const alitas_y_combos: MenuItemData[] = [
  {
    name: 'Alitas Clásicas BBQ / Búfalo / Acevichadas / Teriyaki',
    price: 'S/30.00',
    description:
      'Alitas tiernas y jugosas bañadas en salsa BBQ con papas fritas crotantes.',
    tag: 'Las Más Pedidas',
    image:
      'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Combo La Mandrágora',
    price: 'S/79.00',
    description:
      'Costillas de cerdo BBQ clasica, alitas acevichadas, alitas BBQ de maracuyà con sus papas fritas crocantes.',
    tag: 'Para Compartir',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Combo Especial L.M.',
    price: 'S/89.00',
    description:
      'Costillas de cerdo búfalo, alitas acevichadas, alitas honey mustard, dedos crocantes de pollo en miel de maracuyá acompañada de crocantes papas fritas.',
    tag: 'Experiencia Completa',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=70',
  },
  {
    name: 'Combo Alitas',
    price: 'S/85.00',
    description:
      'Una gran combinación de nuestras deliciosas Alitas BBQ/ACEVICHADAS/TERIYAKI.',
    tag: 'Para Compartir',
    image:
      'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=70',
  },
];
