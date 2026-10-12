# Herdilabs · Mola Oyunları

play.herdilabs.com — Herdilabs'ın tarayıcı oyunları rafı. Astro ile statik site.

## Çalıştır
```
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
```

## Yeni oyun eklemek
1. Oyunu `public/games/<slug>/index.html` olarak koy (tek dosya ya da klasör; giriş dosyası `index.html`).
2. Kapak görselini `public/covers/<slug>.webp` olarak ekle (1200×750).
3. `src/data/games.ts` içine kaydını yaz, `status: "live"` yap.
   Oyun sayfası (`/oyun/<slug>/`) otomatik oluşur, ana sayfadaki rafa da eklenir.

"Yakında" kartları (`status: "soon"`) şimdilik yer tutucu: adlarını ve fikirlerini değiştir ya da sil.

## Ayarlar
`src/site.ts`: site adı, slogan, adres ve Instagram kullanıcı adı (boşsa footer'da görünmez).

## Dokploy ile yayın
1. Projeyi bir Git deposuna (GitHub) gönder.
2. Dokploy'da **Create Application** → kaynak olarak depoyu seç → Build Type: **Dockerfile**.
3. Domains kısmına `play.herdilabs.com` ekle, port **80**, HTTPS açık.
4. DNS'te `play` için sunucunun IP'sine bir A kaydı aç.
Her `git push` sonrası Dokploy'dan Deploy (ya da otomatik deploy) yeterli.

## Sırada (2. aşama)
- Supabase: skor tablosu, cihazlar arası kayıt.
- Ziyaret istatistikleri: Dokploy üzerinde Umami ya da Plausible (çerezsiz).

## GitHub Pages
`docs/` klasörü yayındaki sitenin derlenmiş halidir (göreli linklerle, alt dizinde çalışır).
Sitede değişiklik yapınca `npm run build` sonrası çıktıyı göreli linklere çevirip `docs/`'a koymak gerekir
(ya da Claude'a "siteyi güncelle" de).

## Oyunlar
Üç oyun da tek dosyalık HTML (`public/games/<slug>/index.html`). Çay Ocağı ve Dolmuş Durağı, Flush Rush ile aynı ortak motordan (karakter rig'i, müzik, HUD, kayıt) derlenir.
Sinan'ın ilk Çay Ocağı / Dolmuş Durağı denemeleri git geçmişinde duruyor: `e2c1a8e`.

## Yayın
`npm run build:pages` siteyi derler ve göreli bağlantılarla `docs/` içine hazırlar (GitHub Pages: main /docs).
