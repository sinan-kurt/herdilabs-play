export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  status: "live" | "soon";
  cover?: string;          // /covers/... (live games)
  genre: string;
  session: string;         // typical play session
  released?: string;       // YYYY-MM-DD
  controls?: string[];
  features?: string[];
  art?: { bg: string; fg: string; icon: string };   // placeholder art for upcoming games
};

export const GAMES: Game[] = [
  {
    slug: "flush-rush",
    title: "Flush Rush",
    tagline: "İstasyonun en kaotik tuvaletini sen işlet.",
    description: [
      "Boğaz Hattı Yenikapı istasyonunun umumi tuvaleti artık senin. Her tren perona yeni bir kalabalık döküyor ve herkes aynı yere koşuyor.",
      "Tıkanan kabini pompala, yerdeki birikintileri sil, kağıdı ve sabunu bitirme. Aceleci, Pasaklı, Tıkayıcı Amca, Telefoncu ve Titiz VIP'in her biri işini farklı zorlaştırır. Gün sonunda kazancınla dükkanı geliştir.",
    ],
    status: "live",
    cover: "/covers/flush-rush.webp",
    genre: "İşletme · Komedi",
    session: "Gün başına 3 dk",
    released: "2026-10-11",
    controls: [
      "Dokun ya da tıkla: karakter oraya yürür ve işi kendisi yapar",
      "WASD / ok tuşları ile yürü, Boşluk basılıyken yanındaki işi yap",
      "Alttaki 'Sıradaki' butonu seni en acil işe götürür",
    ],
    features: ["Telefonda oynanır", "İlerleme kaydedilir", "6 müşteri tipi", "Yükseltmeler"],
  },
  {
    slug: "cay-ocagi",
    title: "Çay Ocağı",
    tagline: "Plazanın katlarına çayı tavında yetiştir.",
    description: [
      "Levent'teki plazanın bodrum katındaki çay ocağı senin. Demliği demle, tepsiyi doldur, asansörle katlara çık ve herkesin çayını tavında yetiştir.",
      "Muhasebeci acı çayı fark eder, Patron hemen ister, toplantı odası dört bardağı aynı anda bekler. Bardaklar biter, elektrik kesilir. Gün sonunda kazancınla ocağı büyüt.",
    ],
    status: "live",
    cover: "/covers/cay-ocagi.webp",
    genre: "Zamanlama · İşletme",
    session: "Gün başına 3 dk",
    released: "2026-10-12",
    controls: [
      "Dokun ya da tıkla: çaycı oraya gider ve işi kendisi yapar",
      "Demliğe dokun: demle ya da tepsiye doldur; masaya dokun: çayı ver",
      "Alttaki 'Sıradaki' butonu seni en acil işe götürür",
    ],
    features: ["Telefonda oynanır", "İlerleme kaydedilir", "Toplantı ve kesinti olayları", "Yükseltmeler"],
  },
  {
    slug: "dolmus-duragi",
    title: "Dolmuş Durağı",
    tagline: "Arkadakiler biraz sıkışsın.",
    description: [
      "Karaköy iskelesinin önündeki durağın çığırtkanı sensin. Vapur yanaştıkça kalabalık gelir, herkesi kendi hattının dolmuşuna oturt.",
      "Çocuk cam kenarı ister, valizli teyze iki koltuk kaplar ve kapıya yakın oturmak ister, çiftler yan yana. Tam dolu kalkan dolmuş daha çok kazandırır ama şoförün sabrı sınırlı.",
    ],
    status: "live",
    cover: "/covers/dolmus-duragi.webp",
    genre: "Bulmaca · Kaos",
    session: "Gün başına 3 dk",
    released: "2026-10-12",
    controls: [
      "Sıradaki yolcuya dokun, sonra yeşil yanan koltuğa dokun",
      "İstersen sürükle bırak: yolcuyu tutup koltuğa taşı",
      "Dolmuş dolunca 'Yolla!' butonuna bas",
    ],
    features: ["Telefonda oynanır", "İlerleme kaydedilir", "4 yolcu tipi", "Yükseltmeler"],
  },
];

export const liveGames = GAMES.filter((g) => g.status === "live");
