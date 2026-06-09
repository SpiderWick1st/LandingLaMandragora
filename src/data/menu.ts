export interface MenuItemData {
  name: string;
  price: string;
  description: string;
  tag?: string;
}

export const cocteles: MenuItemData[] = [
  {
    name: "Sinatra Forever",
    price: "S/28.00",
    description: "La intensidad de Jack Daniel's y Jägermeister se fusiona con zumo de maracuyá y Ginger Ale. Tropical, cítrico y refrescante.",
    tag: "Elixir Insignia"
  },
  {
    name: "Gimme The Power",
    price: "S/25.00",
    description: "Tequila, mezcal, licor de naranja y un balance perfecto de cítricos y notas herbales. Un cóctel intenso, refrescante y con el poder de México en cada sorbo.",
    tag: "Misterioso & Frutal"
  },
  {
    name: "Marley Punch",
    price: "S/25.00",
    description: "Una fusión de rones, maracuyá y cítricos frescos, complementada con nuestro jarabe herbal de la casa y bitter de naranja. Un cóctel tropical, relajado y lleno de buena energía.",
    tag: "Cítrico & Mágico"
  },
  {
    name: "La Mula de X Dinero",
    price: "S/25.00",
    description: "En honor a las locas de X Dinero, a base de pisco y vodka, para la locura Ginger, jarabe de Kion, ponche colombiano, algo para los piratas de este mar arequipeño.",
    tag: "Fuerte & Especiado"
  },
  {
    name: "Charly Charly",
    price: "S/28.00",
    description: "Inspirado en el espíritu rebelde de Charly García, este cóctel combina rones seleccionados, fernet, mix cítrico y granadina. Audaz, refrescante y con carácter de sobra.",
    tag: "Fuerte & Especiado"
  },
  {
    name: "Amy Blake",
    price: "S/25.00",
    description: "Gin, moras artesanales, limón y notas herbales se unen en un cóctel suave, refrescante y sutilmente dulce, con un final cítrico irresistible.",
    tag: "Fuerte & Especiado"
  },
  {
    name: "Orishas Fashioned",
    price: "S/28.00",
    description: "A base de un blend de rones espaciados, azucar, agua con gas, aroma de naranja y canela.",
    tag: "Fuerte & Especiado"
  },
  {
    name: "Magdalena",
    price: "S/25.00",
    description: "En honor a Cara de Haba. Pisco, hierba luisa, gajos de naranja, maracuyá, jarabe herbal de la casa y agua tónica se unen en una mezcla fresca, cítrica y llena de buena vibra.",
    tag: "Fuerte & Especiado"
  },
  {
    name: "Tropico Oscuro",
    price: "S/30.00",
    description: "La elegancia ahumada de Johnnie Walker Black Label y el carácter del Havana Club 7 Años se fusionan con cítricos y frutas tropicales, equilibrados por las notas cálidas de la panela. Intenso, exótico y perfectamente armonizado.",
    tag: "Un viaje del Caribe a la oscuridad"
  },
  {
    name: "Tropico Oscuro",
    price: "S/28.00",
    description: "La elegancia ahumada de Johnnie Walker Black Label y el carácter del Havana Club 7 Años se fusionan con cítricos y frutas tropicales, equilibrados por las notas cálidas de la panela. Intenso, exótico y perfectamente armonizado.",
    tag: "Un viaje del Caribe a la oscuridad"
  },
  {
    name: "Smoke & Strings",
    price: "S/30.00",
    description: "La intensidad de Chivas 13 se entrelaza con vermouth rosso y bitter de naranja, coronada por un sutil toque de tocino ahumado. Un aperitivo elegante y rebelde que despierta los sentidos con cada sorbo.",
    tag: "Un viaje del Caribe a la oscuridad"
  },
  {
    name: "Jungle Fire Zombie",
    price: "S/35.00",
    description: "Una tormenta de rones y mezcal se fusiona con maracuyá, naranja y canela, encendida por un atrevido toque de ají. Un tiki intenso y salvaje que desata la selva en cada sorbo.",
    tag: "Un viaje del Caribe a la oscuridad"
  }
];

export const entradas: MenuItemData[] = [
  {
    name: "Tequeños de Jamón y Queso",
    price: "S/18.00",
    description: "Crujientes tequeños rellenos de jamón inglés y queso fundido, servidos con una generosa porción de crema de guacamole de la casa.",
    tag: "Para Compartir"
  },
  {
    name: "Tequeños Chicken Thai Roll",
    price: "S/22.00",
    description: "Tequeños rellenos de pollo marinado en salsa de maní estilo tailandés con notas de jengibre y hierba luisa, servidos con salsa dulce y agria.",
    tag: "Toque Exótico"
  },
  {
    name: "Papas Parrilleras",
    price: "S/15.00",
    description: "Papas nativas doradas a la parrilla con mantequilla de ajo, romero y sal de maras, acompañadas de chimichurri rústico.",
    tag: "Favorito de la Barra"
  },
  {
    name: "Papas Bravas Carretilleras",
    price: "S/18.00",
    description: "Papas fritas crujientes bañadas en una salsa brava picante de ají panca y rocoto, acompañadas de salsa huancaína tradicional.",
    tag: "Picante Local"
  },
  {
    name: "Ensalada César",
    price: "S/24.00",
    description: "Lechuga romana fresca, crutones crujientes, queso parmesano rallado y aderezo César de la casa, coronada con pechuga de pollo a la parrilla.",
    tag: "Fresco & Clásico"
  }
];

export const fuertes: MenuItemData[] = [
  {
    name: "Lomo Saltado",
    price: "S/32.00",
    description: "Jugosos trozos de lomo fino salteados al wok con cebolla, tomate, ají amarillo y un toque de pisco, servidos con papas rústicas fritas y arroz.",
    tag: "Clásico Peruano"
  },
  {
    name: "Lomo Stroganoff",
    price: "S/35.00",
    description: "Tiras de lomo salteadas con champiñones frescos en una salsa cremosa de crema de leche, vino blanco y mostaza dijon, acompañadas de arroz con choclo.",
    tag: "Especialidad"
  },
  {
    name: "Enrollado Cordon Bleu",
    price: "S/30.00",
    description: "Pechuga de pollo enrollada con jamón y queso fundido, empanizada y frita al término perfecto, acompañada de ensalada fresca y puré rústico.",
    tag: "Crujiente & Cremoso"
  },
  {
    name: "Fettuccini a la Huancaína con Lomo Saltado",
    price: "S/36.00",
    description: "Pasta al dente bañada en nuestra salsa huancaína cremosa a base de ají amarillo y queso fresco, coronada con un jugoso lomo saltado al wok.",
    tag: "Fusión Suprema"
  },
  {
    name: "Crispi de Pollo",
    price: "S/28.00",
    description: "Tiras de pechuga de pollo marinadas con especias secretas, rebozadas en panko crujiente y servidas con salsa alioli de la casa.",
    tag: "Para Compartir"
  },
  {
    name: "Costillas de Cerdo BBQ",
    price: "S/38.00",
    description: "Costillas de cerdo cocidas a baja temperatura, bañadas en nuestra salsa BBQ artesanal ahumada, acompañadas de papas fritas rústicas.",
    tag: "Favorito Ahumado"
  },
  {
    name: "Costillas de Cerdo Búfalo",
    price: "S/38.00",
    description: "Costillas de cerdo tiernas bañadas en salsa búfalo picante artesanal, servidas con bastones de apio y salsa de queso azul.",
    tag: "Intenso & Picante"
  }
];

export const hamburguesas: MenuItemData[] = [
  {
    name: "Hamburguesa Montada Mandrágora",
    price: "S/28.00",
    description: "Carne premium de res de 150g, huevo frito, plátano frito, queso gouda, lechuga, tomate y salsa especial de la casa en pan brioche.",
    tag: "Contundente"
  },
  {
    name: "Hamburguesa a lo Pobre",
    price: "S/26.00",
    description: "Carne premium de res, huevo frito, cebolla caramelizada, plátano frito y cremas tradicionales en pan brioche suave.",
    tag: "Sabor Criollo"
  },
  {
    name: "Hamburguesa BBQ Tocino",
    price: "S/27.00",
    description: "Carne de res seleccionada, queso cheddar fundido, láminas de tocino crujiente, cebolla frita y salsa BBQ ahumada.",
    tag: "Sabor Americano"
  },
  {
    name: "Hamburguesa Mandrágora",
    price: "S/25.00",
    description: "Nuestra clásica: carne premium, queso gouda derretido, cebolla caramelizada al bourbon, arúgula fresca y pan brioche negro artesanal.",
    tag: "La Especial de la Casa"
  }
];

export const alitas_y_combos: MenuItemData[] = [
  {
    name: "Alitas BBQ",
    price: "S/22.00",
    description: "Alitas de pollo crujientes bañadas en salsa BBQ dulce y ahumada de la casa, servidas con bastones de zanahoria.",
    tag: "Clásico de la Barra"
  },
  {
    name: "Alitas BBQ Maracuyá",
    price: "S/23.00",
    description: "Alitas crujientes bañadas en una reducción agridulce de maracuyá y salsa BBQ de la casa, un balance perfecto de dulce y ácido.",
    tag: "Frutal & Agridulce"
  },
  {
    name: "Alitas BBQ Tocino",
    price: "S/24.00",
    description: "Alitas de pollo glaseadas con salsa BBQ infusionada con crujientes trozos de tocino ahumado.",
    tag: "Sabor Ahumado"
  },
  {
    name: "Alitas Acevichada",
    price: "S/24.00",
    description: "Alitas marinadas bañadas en nuestra salsa acevichada cremosa con cebollín picado y un toque de togarashi.",
    tag: "Fusión Peruana"
  },
  {
    name: "Alitas Búfalo",
    price: "S/22.00",
    description: "Alitas bañadas en la clásica salsa búfalo picante y mantequillosa, servidas con dip de queso azul.",
    tag: "Picante Tradicional"
  },
  {
    name: "Alitas Teriyaki",
    price: "S/23.00",
    description: "Alitas glaseadas con una reducción de salsa teriyaki de soja, jengibre y sésamo tostado.",
    tag: "Estilo Oriental"
  },
  {
    name: "Alitas Frutos del Bosque",
    price: "S/24.00",
    description: "Una receta única: alitas bañadas en una salsa dulce y ácida de frutos rojos (moras y arándanos) al vino tinto.",
    tag: "Creación Mística"
  },
  {
    name: "Combo La Mandrágora",
    price: "S/45.00",
    description: "Una hamburguesa Mandrágora clásica + una porción de papas parrilleras + un cóctel de autor de tu elección.",
    tag: "El Favorito"
  },
  {
    name: "Combo Especial LM",
    price: "S/55.00",
    description: "Una porción completa de costillas BBQ + una porción de tequeños de jamón y queso + 2 cervezas artesanales o refrescos.",
    tag: "Para Compartir"
  }
];
