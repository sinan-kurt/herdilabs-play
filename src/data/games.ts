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
    tagline: "Plazanın 14 katına çay yetiştir.",
    description: ["Yakında."],
    status: "soon",
    genre: "Zamanlama · İşletme",
    session: "—",
    art: { bg: "#c94f3a", fg: "#fff3e6", icon: "tea" },
  },
  {
    slug: "dolmus-duragi",
    title: "Dolmuş Durağı",
    tagline: "Arkadakiler biraz sıkışsın.",
    description: ["Yakında."],
    status: "soon",
    genre: "Bulmaca · Kaos",
    session: "—",
    art: { bg: "#e2a62a", fg: "#3b3226", icon: "bus" },
  },
];

export const liveGames = GAMES.filter((g) => g.status === "live");
