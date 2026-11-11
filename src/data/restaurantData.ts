export interface LovableMenuItem {
  name: string;
  price: string;
  priceNum?: number;
  desc: string;
  category: string;
  image: string;
  recommended?: boolean;
  list?: string[];
}

export interface LovableNaskot {
  name: string;
  goreng: string;
  bakar: string;
  desc: string;
  isi: string[];
  image: string;
}

export interface LovablePromo {
  title: string;
  desc: string;
  period: string;
  terms: string;
  badge: string;
}

export const OUTLET_INFO = {
  name: 'Penyetan 234 Bandung',
  tagline: 'Halal Lagi Thayyib',
  whatsapp: '6281167051693',
  whatsappDisplay: '+62 811 6705 1693',
  waMessage: 'Halo Penyetan 234 Bandung, saya ingin melakukan pemesanan.',
  waMessageNasiKotak: 'Halo Penyetan 234 Bandung, saya ingin memesan Nasi Kotak. Boleh minta info paket dan harganya?',
  hours: '09.00 - 22.00 WIB',
  address: 'Jl. K.H. Ahmad Dahlan No.66, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+K.H.+Ahmad+Dahlan+No.66%2C+Malabar%2C+Kec.+Lengkong%2C+Kota+Bandung%2C+Jawa+Barat+40262',
  mapsEmbed: 'https://www.google.com/maps?q=Jl.+K.H.+Ahmad+Dahlan+No.66%2C+Malabar%2C+Kec.+Lengkong%2C+Kota+Bandung%2C+Jawa+Barat+40262&output=embed',
  instagram: 'https://instagram.com/penyetan234.bandung',
  tiktok: 'https://tiktok.com/@penyetan234.bandung',
  socialHandle: '@penyetan234.bandung',
  goFoodUrl: 'https://gofood.link/a/Ti8qVzb',
  grabFoodUrl: 'https://app.grab.com/s/ijVN1nkG',
  shopeeFoodUrl: 'https://shopee.co.id/universal-link/now-food/shop/23182165?deep_and_deferred=1&shareChannel=copy_link',
  mapsReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Penyetan+234+Jl.+K.H.+Ahmad+Dahlan+No.66+Bandung',
  rating: 4.7,
  reviewCount: 268,
};

export interface GoogleReview {
  id: string;
  author: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  relativeTime: string;
  text: string;
  favoriteDish?: string;
  highlightBadge?: string;
  verifiedLocalGuide?: boolean;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Rian Pratama',
    avatarText: 'RP',
    avatarBg: 'bg-[#2a6b50]',
    rating: 5,
    relativeTime: '1 minggu lalu',
    text: 'Penyetan terenak dan paling worth it di Bandung! Sambal bawang & dabu-dabunya juara banget. Konsep ambil nasi, sambal, dan lalapan sepuasnya beneran bikin puas. Ayam bakar madunya manis gurih pas meresap sampai ke tulang.',
    favoriteDish: 'Ayam Broiler Bakar & Sambal Dabu-Dabu',
    highlightBadge: 'Porsi Puas & Murah',
    verifiedLocalGuide: true,
  },
  {
    id: 'rev-2',
    author: 'Siti Nurhaliza',
    avatarText: 'SN',
    avatarBg: 'bg-[#cc2e35]',
    rating: 5,
    relativeTime: '2 minggu lalu',
    text: 'Tempatnya bersih, nyaman banget buat makan siang bareng temen kantor di daerah Lengkong. Pilihan nasinya ada liwet dan daun jeruk yang harum banget. Bebek gorengnya renyah gurih gak bau amis sama sekali. Pasti balik lagi!',
    favoriteDish: 'Bebek Goreng + Nasi Liwet',
    highlightBadge: 'Tempat Nyaman & Bersih',
    verifiedLocalGuide: true,
  },
  {
    id: 'rev-3',
    author: 'Dimas Aditya',
    avatarText: 'DA',
    avatarBg: 'bg-amber-700',
    rating: 5,
    relativeTime: '3 minggu lalu',
    text: 'Kemarin pesen nasi kotak 60 box buat pengajian dan syukuran keluarga. Datang tepat waktu, packaging rapi, sambalnya gak tumpah, dan semua tamu memuji ayam pejantannya yang empuk. Rekomendasi katering terbaik!',
    favoriteDish: 'Paket Nasi Kotak Pejantan',
    highlightBadge: 'Katering Nasi Kotak Mantap',
    verifiedLocalGuide: false,
  },
  {
    id: 'rev-4',
    author: 'Fitri Handayani',
    avatarText: 'FH',
    avatarBg: 'bg-emerald-800',
    rating: 5,
    relativeTime: '1 bulan lalu',
    text: 'Surganya pecinta pedas! 8 varian sambalnya fresh diulek tiap hari. Sambal kecombrang dan cibiuknya wangi khas banget. Pelayanan mas & mbaknya ramah dan gercep. Parkiran luas juga buat mobil dan motor.',
    favoriteDish: 'Nila Bakar & Sambal Kecombrang',
    highlightBadge: '8 Pilihan Sambal Segar',
    verifiedLocalGuide: true,
  },
  {
    id: 'rev-5',
    author: 'Budi Santoso',
    avatarText: 'BS',
    avatarBg: 'bg-blue-800',
    rating: 5,
    relativeTime: '1 bulan lalu',
    text: 'Beneran halal dan higienis. Fasilitas musholla bersih dan tempat wudhu nyaman. Konsep free refill nasi dan lalapannya gak main-main, timun dan kemanginya selalu segar. Harga sangat terjangkau untuk kualitas rasa seperti ini.',
    favoriteDish: 'Ayam Pejantan Bakar',
    highlightBadge: 'Halal & Musholla Nyaman',
    verifiedLocalGuide: false,
  },
  {
    id: 'rev-6',
    author: 'Anisa Maharani',
    avatarText: 'AM',
    avatarBg: 'bg-purple-800',
    rating: 5,
    relativeTime: '2 bulan lalu',
    text: 'Gak pernah bosen makan di sini kalau lagi main ke Lengkong Bandung. Gurame goreng tepung dan tahu krispinya renyah pol. Sambal dadak hijaunya nendang banget!',
    favoriteDish: 'Gurame Goreng & Sambal Dadak Hijau',
    highlightBadge: 'Cita Rasa Nusantara Asli',
    verifiedLocalGuide: true,
  },
];

export const LOVABLE_IMAGES = {
  logo: '/src/assets/lovable/logo.jpg',
  outlet: '/src/assets/lovable/outlet.png',
  resto: '/src/assets/lovable/resto.jpg',
  heroFood: '/src/assets/lovable/hero-food.jpg',
  menuAyamBakar: '/src/assets/lovable/menu-ayam-bakar.jpg',
  menuBebek: '/src/assets/lovable/menu-bebek.jpg',
  menuIkan: '/src/assets/lovable/menu-ikan.jpg',
  menuSambal: '/src/assets/lovable/menu-sambal.jpg',
  menuNasi: '/src/assets/lovable/menu-nasi.jpg',
  naskotBroiler: '/src/assets/lovable/naskot-broiler.jpg',
  naskotPejantan: '/src/assets/lovable/naskot-pejantan.jpg',
  naskotBebek: '/src/assets/lovable/naskot-bebek.jpg',
  naskotNila: '/src/assets/lovable/naskot-nila.jpg',
  naskotLele: '/src/assets/lovable/naskot-lele.jpg',
  naskotGurame: '/src/assets/lovable/naskot-gurame.jpg',
};

export const MENU_CATEGORIES = [
  'Semua',
  'Ayam & Bebek',
  'Ikan',
  'Nasi',
  'Sambal',
  'Tambahan',
];

export const MENU_ITEMS: LovableMenuItem[] = [
  {
    name: 'Ayam Broiler Goreng',
    price: 'Rp18.000',
    priceNum: 18000,
    desc: 'Ayam broiler goreng renyah dengan kremesan gurih, disajikan hangat.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.heroFood,
    recommended: true,
  },
  {
    name: 'Ayam Broiler Bakar',
    price: 'Rp20.000',
    priceNum: 20000,
    desc: 'Dibakar dengan bumbu meresap, manis gurih khas Penyetan 234.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.menuAyamBakar,
  },
  {
    name: 'Ayam Pejantan Goreng',
    price: 'Rp20.000',
    priceNum: 20000,
    desc: 'Daging ayam kampung pejantan yang padat dan gurih.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.heroFood,
  },
  {
    name: 'Ayam Pejantan Bakar',
    price: 'Rp22.000',
    priceNum: 22000,
    desc: 'Ayam pejantan bakar dengan aroma smoky dan bumbu rempah.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.menuAyamBakar,
  },
  {
    name: 'Bebek Goreng',
    price: 'Rp28.000',
    priceNum: 28000,
    desc: 'Bebek empuk diungkep rempah, digoreng garing di luar.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.menuBebek,
    recommended: true,
  },
  {
    name: 'Bebek Bakar',
    price: 'Rp30.000',
    priceNum: 30000,
    desc: 'Bebek bakar bumbu spesial, favorit pecinta rasa kuat.',
    category: 'Ayam & Bebek',
    image: LOVABLE_IMAGES.menuBebek,
  },
  {
    name: 'Lele Goreng',
    price: 'Rp15.000',
    priceNum: 15000,
    desc: 'Lele segar goreng garing, pasangan sempurna sambal bawang.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
    recommended: true,
  },
  {
    name: 'Lele Bakar',
    price: 'Rp17.000',
    priceNum: 17000,
    desc: 'Lele bakar bumbu kecap dengan aroma arang.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
  },
  {
    name: 'Nila Goreng',
    price: 'Rp22.000',
    priceNum: 22000,
    desc: 'Ikan nila utuh digoreng renyah sampai ke sirip.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
    recommended: true,
  },
  {
    name: 'Nila Bakar',
    price: 'Rp24.000',
    priceNum: 24000,
    desc: 'Nila bakar bumbu kuning, gurih dan tidak amis.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
  },
  {
    name: 'Gurame Goreng',
    price: 'Rp35.000',
    priceNum: 35000,
    desc: 'Gurame segar digoreng garing, daging tebal dan manis alami.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
    recommended: true,
  },
  {
    name: 'Gurame Bakar',
    price: 'Rp37.000',
    priceNum: 37000,
    desc: 'Gurame bakar bumbu spesial dengan aroma arang.',
    category: 'Ikan',
    image: LOVABLE_IMAGES.menuIkan,
  },
  {
    name: '3 Pilihan Nasi',
    price: 'Free Refill',
    priceNum: 0,
    desc: 'Nasi putih pulen, nasi liwet Sunda gurih, atau nasi daun jeruk wangi — ambil sepuasnya.',
    category: 'Nasi',
    image: LOVABLE_IMAGES.menuNasi,
    list: ['Nasi Putih', 'Nasi Liwet Sunda', 'Nasi Daun Jeruk'],
  },
  {
    name: '8 Pilihan Sambal',
    price: 'Free Refill',
    priceNum: 0,
    desc: 'Delapan sambal segar pilihan, ambil sepuasnya sesuai selera pedasmu.',
    category: 'Sambal',
    image: LOVABLE_IMAGES.menuSambal,
    list: [
      'Sambal Bawang Merah',
      'Sambal Kecombrang',
      'Sambal Dabu-Dabu',
      'Sambal Cibiuk',
      'Sambal Dadak Hijau',
      'Sambal Tempe',
      'Sambal Terasi',
      'Sambal Solo',
    ],
  },
  {
    name: 'Jukut Goreng',
    price: 'Rp8.000',
    priceNum: 8000,
    desc: 'Sayuran goreng renyah pendamping penyetan.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
  {
    name: 'Tempe Bacem',
    price: 'Rp5.000',
    priceNum: 5000,
    desc: 'Tempe bacem manis gurih yang meresap sampai dalam.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
  {
    name: 'Tahu Krispi',
    price: 'Rp6.000',
    priceNum: 6000,
    desc: 'Tahu dengan lapisan krispi, renyah di setiap gigitan.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
  {
    name: 'Sayur Asem',
    price: 'Rp8.000',
    priceNum: 8000,
    desc: 'Kuah segar asam manis, penyeimbang rasa pedas.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
  {
    name: 'Tumis Kangkung',
    price: 'Rp9.000',
    priceNum: 9000,
    desc: 'Kangkung tumis bawang, sederhana dan nikmat.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
  {
    name: 'Pepes Ayam',
    price: 'Rp12.000',
    priceNum: 12000,
    desc: 'Ayam berbumbu dibungkus daun pisang, wangi dan lembut.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuAyamBakar,
  },
  {
    name: 'Es Jeruk',
    price: 'Rp6.000',
    priceNum: 6000,
    desc: 'Es jeruk peras segar, pelengkap wajib penyetan.',
    category: 'Tambahan',
    image: LOVABLE_IMAGES.menuNasi,
  },
];

export const NASI_KOTAK_LIST: LovableNaskot[] = [
  {
    name: 'Naskot Ayam Broiler',
    goreng: 'Rp28.000',
    bakar: 'Rp30.000',
    desc: 'Pilihan ayam broiler dengan olahan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Ayam broiler',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotBroiler,
  },
  {
    name: 'Naskot Ayam Pejantan',
    goreng: 'Rp34.000',
    bakar: 'Rp36.000',
    desc: 'Ayam pejantan gurih dengan pilihan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Ayam pejantan',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotPejantan,
  },
  {
    name: 'Naskot Bebek',
    goreng: 'Rp43.000',
    bakar: 'Rp44.000',
    desc: 'Bebek berbumbu dengan pilihan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Bebek',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotBebek,
  },
  {
    name: 'Naskot Nila',
    goreng: 'Rp27.000',
    bakar: 'Rp28.000',
    desc: 'Ikan nila dengan pilihan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Ikan nila',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotNila,
  },
  {
    name: 'Naskot Lele',
    goreng: 'Rp26.000',
    bakar: 'Rp27.000',
    desc: 'Ikan lele gurih dengan pilihan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Ikan lele',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotLele,
  },
  {
    name: 'Naskot Gurame',
    goreng: 'Rp39.000',
    bakar: 'Rp40.000',
    desc: 'Ikan gurame dengan pilihan goreng atau bakar.',
    isi: [
      'Nasi putih',
      'Ikan gurame',
      'Terong goreng',
      'Tahu goreng',
      'Jukut goreng',
      '2 pilihan sambal',
    ],
    image: LOVABLE_IMAGES.naskotGurame,
  },
];

export const PROMO_LIST: LovablePromo[] = [
  {
    title: 'Bonus 1 Box / Voucher 25K',
    desc: 'Setiap pembelian 25 box (dan kelipatannya) dapatkan bonus 1 box gratis atau voucher Rp25.000.',
    period: 'Berlaku saat ini',
    terms: 'Berlaku kelipatan (misal beli 50 box dapat 2 box / voucher 50k). Konfirmasi via WhatsApp.',
    badge: 'Beli 25 Gratis 1',
  },
  {
    title: 'Paket Hemat Berdua',
    desc: '2 Ayam Broiler + 2 Nasi + Es Jeruk, cocok untuk makan bareng.',
    period: 'Berlaku setiap hari, 14.00 - 17.00',
    terms: 'Dine-in & take away. Tidak dapat digabung dengan promo lain.',
    badge: 'Hemat 20%',
  },
  {
    title: 'Gratis Es Jeruk Segar',
    desc: 'Setiap pembelian minimal Rp50.000 dapat 1 Es Jeruk gratis langsung di outlet.',
    period: 'Sampai akhir bulan ini',
    terms: 'Berlaku untuk santap dine-in langsung di outlet.',
    badge: 'Bonus Minum',
  },
];

export const DELIVERY_PLATFORMS = [
  {
    name: 'GoFood',
    url: 'https://gofood.link/a/Ti8qVzb',
    color: '#E23744',
    logo: '/assets/aistudio/GoFood_Logo_-_Colored_-_zonalogo.com_2d436443.svg',
    tagline: 'Pesan cepat via Gojek',
  },
  {
    name: 'GrabFood',
    url: 'https://app.grab.com/s/ijVN1nkG',
    color: '#00B14F',
    logo: '/assets/aistudio/GrabFood_Logo_-_Colored_-_zonalogo.com_6e38165e.svg',
    tagline: 'Diskon & promo via Grab',
  },
  {
    name: 'ShopeeFood',
    url: 'https://shopee.co.id/universal-link/now-food/shop/23182165?deep_and_deferred=1&shareChannel=copy_link',
    color: '#EE4D2D',
    logo: '/assets/aistudio/Shopee_Food_Logo_-_Colored_-_zonalogo.com_feecee96.svg',
    tagline: 'Gratis ongkir via Shopee',
  },
];

export const RICE_OPTIONS: string[] = [
  'Nasi Putih Pulen',
  'Nasi Liwet Sunda',
  'Nasi Daun Jeruk',
];

export const SAMBAL_OPTIONS: string[] = [
  'Sambal Bawang Merah',
  'Sambal Kecombrang',
  'Sambal Dabu-Dabu',
  'Sambal Cibiuk',
  'Sambal Dadak Hijau',
  'Sambal Tempe',
  'Sambal Terasi',
  'Sambal Solo',
];

export function getWhatsAppLink(message?: string) {
  const msg = message || OUTLET_INFO.waMessage;
  return `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function getWhatsAppItemLink(itemName: string) {
  const msg = `Halo Penyetan 234 Bandung, saya ingin memesan menu: *${itemName}*. Boleh info ketersediaan dan cara pemesanannya?`;
  return `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function getWhatsAppNaskotLink(packageName: string) {
  const msg = `Halo Penyetan 234 Bandung, saya ingin memesan *${packageName}*. Boleh info paket dan minimal pemesanannya?`;
  return `https://wa.me/${OUTLET_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
}
