export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  priceFormatted: string;
  image: string;
  specifications: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "KIT SOLAR HIBRIDO OFF-GRID 12kW MUST – RENESOLA",
    sku: "KOF001-1",
    price: 22700000,
    priceFormatted: "$ 22.700.000",
    image: "/images/kitSolar1.png",
    specifications: {
      "Potencia nominal": "12kW",
      "Potencia FV instalada": "9760 Wp",
      "Voltaje nominal AC de salida": "220VAC (L-L), 120VAC (L-N)",
      "Frecuencia de la red AC": "60Hz",
      "Generación estimada en un día (para 4 HSP)": "39kWh",
      "Máx. tensión en el terminal PV": "250VDC",
      "MPPT": "2",
      "Tipo de batería": "Litio",
      "Energía almacenada en batería": "10.2kWh",
      "Tensión del sistema de batería": "48V",
      "Monitoreo y configuración remota": "Sí, desde App Móvil",
    },
  },
];
