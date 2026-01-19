export interface UsageData {
  equipment: string;
  consumption: string;
  canConnect: string;
  time: string;
  recommendation: string;
}

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
  usageData?: UsageData[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "🔆 KIT SOLAR HÍBRIDO OFF-GRID 3 kW",
    sku: "ESC001-1",
    price: 9400000,
    priceFormatted: "$9.400.000",
    image: "/images/kitSolar1.png",
    specifications: {
      "Potencia nominal": "3 kW",
      "Potencia FV instalada": "2094 Wp",
      "Voltaje nominal AC de salida": "110-120 VAC(L-N)",
      "Frecuencia de la red AC": "50Hz/60Hz Configurable",
      "Generación estimada en un día (para 4 HSP)": "39kWh",
      "Tensión máxima de entrada fotovoltaica": "270VDC",
      "Configuración del campo FV": "1 string de 3 paneles de 630Wp",
      MPPT: "1",
      "Tipo de batería": "Litio LifePO4",
      "Energía nominal de la batería": "5.12 kWh",
      "Energía utilizable de la batería 80% DoD": "4.1 kWh",
      "Tensión del sistema de batería": "25.6V",
      "Capacidad del banco de baterías": "200Ah",
      "Generación estimada en un día para 4 HSP": "8.4 kWh/día",
      "Monitoreo y configuración remota": "Sí, desde App Móvil",
    },
    usageData: [
      {
        equipment: "💡 Iluminación LED (5–10 focos)",
        consumption: "50–120 W",
        canConnect: "✅ Sí",
        time: "24+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "📺 TV LED / Smart TV",
        consumption: "80–150 W",
        canConnect: "✅ Sí",
        time: "20–30 horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "🌐 Router / Módem",
        consumption: "10–20 W",
        canConnect: "✅ Sí",
        time: "24+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "💻 Laptop",
        consumption: "50–100 W",
        canConnect: "✅ Sí",
        time: "20+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "🖥️ PC de escritorio",
        consumption: "150–300 W",
        canConnect: "✅ Sí",
        time: "8–12 horas",
        recommendation: "Uso normal",
      },
      {
        equipment: "❄️ Nevera eficiente (inverter)",
        consumption: "100–200 W (prom.)",
        canConnect: "✅ Sí",
        time: "8–10 horas nocturnas",
        recommendation: "Uso recomendado",
      },
      {
        equipment: "🧺 Lavadora (sin calentador)",
        consumption: "500–800 W",
        canConnect: "⚠️ Sí",
        time: "Uso puntual",
        recommendation: "Preferible con sol",
      },
      {
        equipment: "☕ Cafetera / Licuadora",
        consumption: "600–900 W",
        canConnect: "⚠️ Sí",
        time: "Uso corto",
        recommendation: "Preferible con sol",
      },
      {
        equipment: "🍽️ Microondas",
        consumption: "800–1200 W",
        canConnect: "⚠️ Sí",
        time: "5–15 min",
        recommendation: "Uso ocasional",
      },
      {
        equipment: "❄️ Aire acondicionado inverter 9k–12k BTU",
        consumption: "700–1200 W",
        canConnect: "⚠️ Limitado",
        time: "1–3 horas",
        recommendation: "Solo con sol",
      },
      {
        equipment: "🔥 Estufa / Horno eléctrico",
        consumption: ">1500 W",
        canConnect: "❌ No",
        time: "—",
        recommendation: "No compatible",
      },
      {
        equipment: "🚿 Ducha eléctrica",
        consumption: ">3000 W",
        canConnect: "❌ No",
        time: "—",
        recommendation: "No compatible",
      },
    ],
  },
  {
    id: "2",
    name: "🔆 KIT SOLAR HÍBRIDO OFF-GRID 6 kW",
    sku: "ESC008-6KW",
    price: 18900000,
    priceFormatted: "$16.900.000",
    image: "/images/kitSolar2.png",
    specifications: {
      "Potencia nominal del inversor": "6 kW",
      "Potencia FV instalada": "5584 Wp",
      "Voltaje nominal AC de salida": "220–240 VAC",
      "Frecuencia de la red AC": "60 Hz",
      "Generación estimada en un día (para 4 HSP)": "22.3 kWh/día",
      "Tensión máxima de entrada fotovoltaica": "245 VDC",
      "Configuración del campo FV": "2 strings de 4 paneles de 698 Wp (4S2P)",
      MPPT: "1 (80 A)",
      "Tipo de batería": "Litio LiFePO₄",
      "Energía nominal de la batería": "10.24 kWh",
      "Energía utilizable de la batería 80% DoD": "8.2 kWh",
      "Tensión del sistema de batería": "51.2 V",
      "Capacidad del banco de baterías": "200 Ah",
      "Corriente máxima de carga MPPT": "80 A",
      "Comunicación batería-inversor": "CAN / RS485",
      "Monitoreo y configuración remota": "Sí, desde App Móvil",
      "Eficiencia del inversor (modo AC)": "95%",
    },
    usageData: [
      {
        equipment: "💡 Iluminación LED (10–20 focos)",
        consumption: "100–250 W",
        canConnect: "✅ Sí",
        time: "24+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "📺 TV LED / Smart TV",
        consumption: "80–180 W",
        canConnect: "✅ Sí",
        time: "20–30 horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "🌐 Router / Módem",
        consumption: "10–20 W",
        canConnect: "✅ Sí",
        time: "24+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "💻 Laptop",
        consumption: "50–120 W",
        canConnect: "✅ Sí",
        time: "20+ horas",
        recommendation: "Uso ideal",
      },
      {
        equipment: "🖥️ PC de escritorio",
        consumption: "200–400 W",
        canConnect: "✅ Sí",
        time: "10–15 horas",
        recommendation: "Uso normal",
      },
      {
        equipment: "❄️ Nevera eficiente (inverter)",
        consumption: "120–250 W (prom.)",
        canConnect: "✅ Sí",
        time: "12–24 horas",
        recommendation: "Uso recomendado",
      },
      {
        equipment: "🧺 Lavadora (sin calentador)",
        consumption: "600–900 W",
        canConnect: "⚠️ Sí",
        time: "Uso puntual",
        recommendation: "Preferible con sol",
      },
      {
        equipment: "☕ Cafetera / Licuadora",
        consumption: "800–1200 W",
        canConnect: "⚠️ Sí",
        time: "Uso corto",
        recommendation: "Preferible con sol",
      },
      {
        equipment: "🍽️ Microondas",
        consumption: "1000–1500 W",
        canConnect: "⚠️ Sí",
        time: "5–15 min",
        recommendation: "Uso ocasional",
      },
      {
        equipment: "❄️ Aire acondicionado inverter 9k–12k BTU",
        consumption: "700–1200 W",
        canConnect: "⚠️ Sí",
        time: "3–6 horas",
        recommendation: "Recomendado con apoyo solar",
      },
      {
        equipment: "🔥 Estufa / Horno eléctrico",
        consumption: ">2000 W",
        canConnect: "⚠️ Limitado",
        time: "Uso corto",
        recommendation: "Solo con sol pleno",
      },
      {
        equipment: "🚿 Ducha eléctrica",
        consumption: ">3500 W",
        canConnect: "❌ No",
        time: "—",
        recommendation: "No compatible",
      },
    ],
  },
];
