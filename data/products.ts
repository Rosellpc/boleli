export type Product = {
  id: number
  name: string
  slug: string
  category: string
  price: number
  originalPrice?: number
  tag: string
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aura Headphones",
    slug: "aura-headphones",
    category: "audio",
    price: 249,
    originalPrice: 299,
    tag: "New",
    description: "Auriculares premium con sonido envolvente y diseño ultra minimalista.",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Wave Pro Speaker",
    slug: "wave-pro-speaker",
    category: "audio",
    price: 189,
    originalPrice: 229,
    tag: "Best Seller",
    description: "Altavoz compacto con sonido balanceado y acabado elegante para cualquier espacio.",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Orion Smartwatch",
    slug: "orion-smartwatch",
    category: "wearables",
    price: 320,
    originalPrice: 380,
    tag: "Premium",
    description: "Reloj inteligente con diseño refinado, batería duradera y seguimiento preciso.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Arc Laptop 14",
    slug: "arc-laptop-14",
    category: "computing",
    price: 1299,
    originalPrice: 1499,
    tag: "Featured",
    description: "Laptop ultraligera con pantalla nítida, cámara limpia y diseño premium.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Luna Keyboard",
    slug: "luna-keyboard",
    category: "peripherals",
    price: 139,
    originalPrice: 169,
    tag: "New",
    description: "Teclado mecánico silencioso con acabados suaves y performance premium.",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "Vista Monitor 27",
    slug: "vista-monitor-27",
    category: "display",
    price: 459,
    originalPrice: 529,
    tag: "Top Rated",
    description: "Monitor 27” con imagen brillante, bordes finos y diseño de escritorio premium.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    name: "Echo Earbuds",
    slug: "echo-earbuds",
    category: "audio",
    price: 179,
    originalPrice: 219,
    tag: "Hot",
    description: "Audífonos inalámbricos compactos, elegantes y de gran claridad sonora.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    name: "Nova Camera",
    slug: "nova-camera",
    category: "photography",
    price: 899,
    originalPrice: 999,
    tag: "Pro",
    description: "Cámara compacta para capturar cada detalle con estilo y precisión.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    name: "Drift Charger",
    slug: "drift-charger",
    category: "accessories",
    price: 89,
    originalPrice: 119,
    tag: "Minimal",
    description: "Cargador USB-C de diseño sobrio, eficiente y elegante para uso diario.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    name: "Flux Desk Lamp",
    slug: "flux-desk-lamp",
    category: "home-tech",
    price: 119,
    originalPrice: 149,
    tag: "New",
    description: "Lámpara de escritorio con iluminación cálida y diseño refinado para espacios modernos.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    name: "Mira Mouse",
    slug: "mira-mouse",
    category: "peripherals",
    price: 79,
    originalPrice: 99,
    tag: "Essential",
    description: "Mouse ergonómico con acabado premium y sensación de uso ligera.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    name: "Halo Dock",
    slug: "halo-dock",
    category: "accessories",
    price: 199,
    originalPrice: 239,
    tag: "Studio",
    description: "Dock compacto para conectar todo tu setup con un diseño elegante y ordenado.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 13,
    name: "Prism Webcam",
    slug: "prism-webcam",
    category: "video",
    price: 149,
    originalPrice: 189,
    tag: "Work",
    description: "Webcam 4K con cristal fino y diseño discreto para reuniones y streaming.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    name: "Cinder Speaker Mini",
    slug: "cinder-speaker-mini",
    category: "audio",
    price: 99,
    originalPrice: 129,
    tag: "Compact",
    description: "Altavoz pequeño pero potente con estética sobria y audio envolvente.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    name: "Peak Tablet",
    slug: "peak-tablet",
    category: "computing",
    price: 699,
    originalPrice: 799,
    tag: "New",
    description: "Tableta ligera y elegante para trabajo, estudio y entretenimiento.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 16,
    name: "Bloom Stand",
    slug: "bloom-stand",
    category: "accessories",
    price: 69,
    originalPrice: 89,
    tag: "Desk",
    description: "Soporte sofisticado para teléfono y tablet con acabado premium.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 17,
    name: "Vela Drone",
    slug: "vela-drone",
    category: "photography",
    price: 799,
    originalPrice: 899,
    tag: "Creator",
    description: "Drone compacto con grabación estable y diseño ultra ligero.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 18,
    name: "Aster Projector",
    slug: "aster-projector",
    category: "home-tech",
    price: 579,
    originalPrice: 669,
    tag: "Cinema",
    description: "Proyector moderno para cine en casa con imagen clara y diseño discreto.",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 19,
    name: "Solis Router",
    slug: "solis-router",
    category: "network",
    price: 169,
    originalPrice: 199,
    tag: "Smart Home",
    description: "Router de alta velocidad con diseño limpio y conectividad estable.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 20,
    name: "Tempo Backpack",
    slug: "tempo-backpack",
    category: "travel",
    price: 159,
    originalPrice: 199,
    tag: "Travel",
    description: "Mochila premium para trabajo y viajes con compartimentos inteligentes.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 21,
    name: "Kairo Hub",
    slug: "kairo-hub",
    category: "accessories",
    price: 129,
    originalPrice: 159,
    tag: "Desk",
    description: "Hub de conectividad elegante para centralizar periféricos y carga.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 22,
    name: "Echo Mini",
    slug: "echo-mini",
    category: "audio",
    price: 89,
    originalPrice: 109,
    tag: "Mini",
    description: "Altavoz mínimo con claridad, volumen y diseño impecable para tu hogar.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 23,
    name: "Pulse Gaming Pad",
    slug: "pulse-gaming-pad",
    category: "peripherals",
    price: 99,
    originalPrice: 129,
    tag: "Gaming",
    description: "Alfombrilla premium para gaming con acabado suave y alto rendimiento.",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 24,
    name: "Luma Desk Mat",
    slug: "luma-desk-mat",
    category: "desk",
    price: 59,
    originalPrice: 79,
    tag: "Workspace",
    description: "Alfombrilla para escritorio con textura elegante y gran sensación premium.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 25,
    name: "Velvet Case",
    slug: "velvet-case",
    category: "case",
    price: 79,
    originalPrice: 99,
    tag: "Travel",
    description: "Estuche elegante y resistente para portar tus dispositivos con estilo.",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 26,
    name: "Atlas USB-C Hub",
    slug: "atlas-usb-c-hub",
    category: "accessories",
    price: 109,
    originalPrice: 139,
    tag: "Essential",
    description: "Hub USB-C multifunción con conectividad limpia y acabado premium.",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 27,
    name: "Drift Power Bank",
    slug: "drift-power-bank",
    category: "power",
    price: 99,
    originalPrice: 129,
    tag: "Portable",
    description: "Power bank compacto con carga rápida y diseño discreto ideal para viajar.",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 28,
    name: "Nox Air Purifier",
    slug: "nox-air-purifier",
    category: "home-tech",
    price: 249,
    originalPrice: 299,
    tag: "Wellness",
    description: "Purificador elegante para mejorar el aire del hogar con un diseño sofisticado.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 29,
    name: "Meridian Scanner",
    slug: "meridian-scanner",
    category: "office",
    price: 429,
    originalPrice: 489,
    tag: "Office",
    description: "Escáner compacto para documentos con precisión y estética premium.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 30,
    name: "Zenith ANC Headphones",
    slug: "zenith-anc-headphones",
    category: "audio",
    price: 349,
    originalPrice: 429,
    tag: "Pro",
    description: "Auriculares con cancelación activa y diseño refinado para una experiencia de sonido premium.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
  },
]