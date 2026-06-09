export interface MenuItemData {
  name: string;
  price: string;
  description: string;
  tag?: string;
}

export const cocteles: MenuItemData[] = [
  {
    name: 'Sinatra Forever',
    price: 'S/28.00',
    description:
      "La intensidad de Jack Daniel's y Jägermeister se fusiona con zumo de maracuyá y Ginger Ale. Tropical, cítrico y refrescante.",
    tag: 'Elixir Insignia',
  },
  {
    name: 'Gimme The Power',
    price: 'S/25.00',
    description:
      'Tequila, mezcal, licor de naranja y un balance perfecto de cítricos y notas herbales. Un cóctel intenso, refrescante y con el poder de México en cada sorbo.',
    tag: 'Misterioso & Frutal',
  },
  {
    name: 'Marley Punch',
    price: 'S/25.00',
    description:
      'Una fusión de rones, maracuyá y cítricos frescos, complementada con nuestro jarabe herbal de la casa y bitter de naranja. Un cóctel tropical, relajado y lleno de buena energía.',
    tag: 'Cítrico & Mágico',
  },
  {
    name: 'La Mula de X Dinero',
    price: 'S/25.00',
    description:
      'En honor a las locas de X Dinero, a base de pisco y vodka, para la locura Ginger, jarabe de Kion, ponche colombiano, algo para los piratas de este mar arequipeño.',
    tag: 'Fuerte & Especiado',
  },
  {
    name: 'Charly Charly',
    price: 'S/28.00',
    description:
      'Inspirado en el espíritu rebelde de Charly García, este cóctel combina rones seleccionados, fernet, mix cítrico y granadina. Audaz, refrescante y con carácter de sobra.',
    tag: 'Fuerte & Especiado',
  },
  {
    name: 'Amy Blake',
    price: 'S/25.00',
    description:
      'Gin, moras artesanales, limón y notas herbales se unen en un cóctel suave, refrescante y sutilmente dulce, con un final cítrico irresistible.',
    tag: 'Fuerte & Especiado',
  },
  {
    name: 'Orishas Fashioned',
    price: 'S/28.00',
    description:
      'A base de un blend de rones espaciados, azucar, agua con gas, aroma de naranja y canela.',
    tag: 'Fuerte & Especiado',
  },
  {
    name: 'Magdalena',
    price: 'S/25.00',
    description:
      'En honor a Cara de Haba. Pisco, hierba luisa, gajos de naranja, maracuyá, jarabe herbal de la casa y agua tónica se unen en una mezcla fresca, cítrica y llena de buena vibra.',
    tag: 'Fuerte & Especiado',
  },
  {
    name: 'Tropico Oscuro',
    price: 'S/30.00',
    description:
      'La elegancia ahumada de Johnnie Walker Black Label y el carácter del Havana Club 7 Años se fusionan con cítricos y frutas tropicales, equilibrados por las notas cálidas de la panela. Intenso, exótico y perfectamente armonizado.',
    tag: 'Un viaje del Caribe a la oscuridad',
  },
  {
    name: 'Smoke & Strings',
    price: 'S/30.00',
    description:
      'La intensidad de Chivas 13 se entrelaza con vermouth rosso y bitter de naranja, coronada por un sutil toque de tocino ahumado. Un aperitivo elegante y rebelde que despierta los sentidos con cada sorbo.',
    tag: 'Un viaje del Caribe a la oscuridad',
  },
  {
    name: 'Jungle Fire Zombie',
    price: 'S/35.00',
    description:
      'Una tormenta de rones y mezcal se fusiona con maracuyá, naranja y canela, encendida por un atrevido toque de ají. Un tiki intenso y salvaje que desata la selva en cada sorbo.',
    tag: 'Un viaje del Caribe a la oscuridad',
  },
];

export const entradas: MenuItemData[] = [
  {
    name: 'Tequeños de Jamón y Queso',
    price: 'S/20.00',
    description:
      'Dorados y crocantes por fuera, con un irresistible relleno de jamón y queso fundido. Acompañados de nuestra salsa de guacamole para el toque perfecto.',
    tag: 'El Clásico que Nunca Falla',
  },
  {
    name: 'Tequeños Chicken Thai Roll',
    price: 'S/22.00',
    description:
      'Crujiente masa de wantán rellena de pollo al wok, cebolla blanca y pimientos, acompañada de salsa de cinco especias inspirada en sabores orientales.',
    tag: 'Inspiración Oriental',
  },
  {
    name: 'Papas Parrilleras',
    price: 'S/28.00',
    description:
      'Papas fritas crocantes acompañadas de chorizo de finas hierbas, salchicha arequipeña y chuleta de res, terminadas con salsa chimichurri.',
    tag: 'Para Compartir sin Culpa',
  },
  {
    name: 'Papas Bravas Carretilleras',
    price: 'S/28.00',
    description:
      'Papas fritas crocantes acompañadas de chorizo de finas hierbas y salchicha arequipeña, coronadas con salsa anticuchera, chalaca y chimichurri.',
    tag: 'Sabor Callejero',
  },
  {
    name: 'Ensalada César',
    price: 'S/25.00',
    description:
      'Lechuga fresca y pechuga de pollo al grill acompañadas de nuestra clásica salsa César, en una combinación ligera, fresca y llena de sabor.',
    tag: 'La Opción Fresca',
  },
];
export const fuertes: MenuItemData[] = [
  {
    name: 'Lomo Saltado',
    price: 'S/35.00',
    description:
      'Jugosos trozos de lomo fino salteados al wok junto a cebolla y tomate, acompañados de crocantes papas fritas y arroz blanco. Un clásico que nunca falla.',
    tag: 'El Favorito de Siempre',
  },
  {
    name: 'Lomo Strogonoff',
    price: 'S/35.00',
    description:
      'Lomo de res y champiñones envueltos en una cremosa salsa strogonoff, acompañado de papas crujientes y ensalada fresca.',
    tag: 'Suave & Reconfortante',
  },
  {
    name: 'Enrollado Cordon Bleu',
    price: 'S/25.00',
    description:
      'Pechuga de pollo rellena de jamón y queso, dorada hasta alcanzar el punto perfecto y acompañada de salsa de champiñones y mix de lechugas frescas.',
    tag: 'Dorado a la Perfección',
  },
  {
    name: 'Fettuccini a la Huancaína con Lomo Saltado',
    price: 'S/38.00',
    description:
      'La cremosidad de nuestra salsa huancaína artesanal se combina con un jugoso lomo saltado para crear una de las fusiones más irresistibles de la casa.',
    tag: 'Dos Clásicos, Un Plato',
  },
  {
    name: 'Crispi de Pollo',
    price: 'S/25.00',
    description:
      'Crujientes trozos de pollo bañados en miel de maracuyá, acompañados de papas fritas para un contraste perfecto entre dulzor y textura.',
    tag: 'Dulce & Crocante',
  },
  {
    name: 'Costillas de Cerdo BBQ',
    price: 'S/30.00',
    description:
      'Tiernas costillas de cerdo bañadas en salsa BBQ, acompañadas de papas fritas crocantes. Un plato lleno de sabor en cada bocado.',
    tag: 'Pura Tentación',
  },
  {
    name: 'Costillas de Cerdo Búfalo',
    price: 'S/30.00',
    description:
      'Jugosas costillas de cerdo cubiertas con salsa búfalo de carácter intenso, acompañadas de papas fritas crocantes.',
    tag: 'Para los Valientes',
  },
];

export const hamburguesas: MenuItemData[] = [
  {
    name: 'Hamburguesa Montada Mandrágora',
    price: 'S/26.00',
    description:
      'Una combinación generosa de asado de tira, queso cheddar, tocino y huevo, realzada por nuestro característico encebollado de la casa en cada bocado.',
    tag: 'Sin Miedo al Hambre',
  },
  {
    name: 'Hamburguesa a lo Pobre',
    price: 'S/27.00',
    description:
      'La unión perfecta entre el sabor de la parrilla y la tradición: asado de tira, queso cheddar, tocino, huevo frito, plátano frito y nuestro encebollado especial.',
    tag: 'Tradición que Conquista',
  },
  {
    name: 'Hamburguesa BBQ Tocino',
    price: 'S/27.00',
    description:
      'Asado de tira, queso cheddar y tocino bañado en salsa BBQ se encuentran en una combinación intensa, servida en pan brioche con papas nativas.',
    tag: 'Ahumada & Poderosa',
  },
  {
    name: 'Hamburguesa Mandrágora',
    price: 'S/27.00',
    description:
      'La esencia de la casa: asado de tira, queso cheddar, tocino y aros de cebolla crocantes, servidos en pan brioche acompañado de papas nativas.',
    tag: 'La Favorita de la Casa',
  },
];

export const alitas_y_combos: MenuItemData[] = [
  {
    name: 'Alitas BBQ',
    price: 'S/25.00',
    description:
      'Alitas tiernas y jugosas cubiertas con nuestra clásica salsa BBQ, logrando el equilibrio perfecto entre dulzor, intensidad y sabor ahumado.',
    tag: 'Las Más Pedidas',
  },
  {
    name: 'Alitas BBQ Maracuyá',
    price: 'S/25.00',
    description:
      'La intensidad de la salsa BBQ se encuentra con el toque tropical del maracuyá en una combinación dulce, vibrante y llena de carácter.',
    tag: 'Toque Tropical',
  },
  {
    name: 'Alitas BBQ Tocino',
    price: 'S/25.00',
    description:
      'Alitas jugosas bañadas en salsa BBQ con el inconfundible sabor del tocino, una combinación intensa que conquista desde el primer bocado.',
    tag: 'Sabor Ahumado',
  },
  {
    name: 'Alitas Acevichadas',
    price: 'S/25.00',
    description:
      'Nuestra versión más peruana: alitas bañadas en salsa acevichada con un perfil cítrico y cremoso que realza cada bocado.',
    tag: 'Fusión Peruana',
  },
  {
    name: 'Alitas Búfalo',
    price: 'S/25.00',
    description:
      'Alitas bañadas en salsa búfalo de carácter intenso y picante, ideales para quienes buscan emociones fuertes.',
    tag: 'Nivel Picante',
  },
  {
    name: 'Alitas Teriyaki',
    price: 'S/25.00',
    description:
      'Una combinación equilibrada de sabores dulces y salados inspirada en la cocina oriental, con un acabado irresistible.',
    tag: 'Estilo Oriental',
  },
  {
    name: 'Alitas Frutos del Bosque',
    price: 'S/27.00',
    description:
      'Una propuesta diferente que combina notas dulces y frutales para crear una experiencia única y sorprendente.',
    tag: 'La Más Original',
  },
  {
    name: 'Combo La Mandrágora',
    price: 'S/65.00',
    description:
      'Costillas BBQ clásicas, alitas acevichadas y alitas BBQ de maracuyá acompañadas de papas fritas crocantes. Ideal para disfrutar sin apuros.',
    tag: 'Para Compartir',
  },
  {
    name: 'Combo Especial LM',
    price: 'S/65.00',
    description:
      'Costillas búfalo, alitas acevichadas, alitas frutos del bosque y crocantes de pollo en miel de maracuyá con papas fritas. Una combinación pensada para probarlo todo.',
    tag: 'Experiencia Completa',
  },
];
