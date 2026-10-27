// Carta especial de Halloween.
// Datos de ejemplo: reemplazar por la propuesta real del cliente antes de publicar.
// Las imágenes son referenciales (Unsplash); sustituirlas por fotos reales de la carta.
export interface HalloweenCocktail {
  name: string;
  price: string;
  description: string;
  tag: string;
  icon: 'flask' | 'ghost' | 'wine' | 'moon' | 'skull' | 'flame';
  image?: string;
}

export const coctelesHalloween: HalloweenCocktail[] = [
  {
    name: 'Elixir de la Mandrágora',
    price: 'S/32.00',
    description:
      'Gin macerado con romero, licor de saúco, lima y un velo de humo de canela. El brebaje que da nombre a la casa.',
    tag: 'Elixir de la casa',
    icon: 'flask',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=240&h=300&q=70',
  },
  {
    name: 'Beso de la Viuda',
    price: 'S/30.00',
    description:
      'Vodka, maracuyá, jengibre y carbón activado. Cítrico, oscuro y con un final que no se olvida.',
    tag: 'Oscuro y cítrico',
    icon: 'ghost',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=240&h=300&q=70',
  },
  {
    name: 'Sangre de Samhain',
    price: 'S/34.00',
    description:
      'Ron añejo, naranja sanguina, granadina y canela. Dulce, profundo y servido bien frío.',
    tag: 'Dulce y profundo',
    icon: 'wine',
    image:
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=240&h=300&q=70',
  },
  {
    name: 'Lágrimas de Médium',
    price: 'S/29.00',
    description:
      'Pisco, lavanda, limón y clara de huevo. Floral, sedoso y ligeramente inquietante.',
    tag: 'Floral y sedoso',
    icon: 'moon',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=240&h=300&q=70',
  },
  {
    name: 'Poción del Ahorcado',
    price: 'S/33.00',
    description:
      'Whiskey, manzana verde, miel de caña y bitter de avellana. Ahumado, audaz y con carácter.',
    tag: 'Ahumado y audaz',
    icon: 'skull',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=240&h=300&q=70',
  },
  {
    name: 'Último Conjuro',
    price: 'S/35.00',
    description:
      'Mezcal, tamarindo, chile ahumado y sal de gusano. Un final intenso para cerrar el ritual.',
    tag: 'Picante y ritual',
    icon: 'flame',
    image:
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=240&h=300&q=70',
  },
];
