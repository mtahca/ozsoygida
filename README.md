# Özsoy Gıda — statik site

19 içerik sayfası, 268 yerel görsel dosyası, yalnızca HTML/CSS/vanilla JavaScript. WordPress, PHP, veritabanı, npm veya derleme gerektirmez. Eski sayfa yolları korunur; göreli bağlantılar GitHub Pages depo yolunda çalışır. AJAX ile yüklenen galeriler de yerel HTML olarak aktarılmıştır.

## Görünüm ve işlevler

Mevcut logo, mavi renk düzeni, sayfa içerikleri ve görseller korunur. PT Sans ve Montserrat fontları Türkçe karakterlerle yerel WOFF2 dosyalarıdır; lisanslar assets/fonts altındadır. Metinler okunaklı boyutlarda, Hakkımızda yazısı paragraf düzeninde sunulur. Mobil alt menüler ve klavye destekli fotoğraf penceresi vanilla JS ile çalışır. JavaScript kapalıyken menü açık kalır ve fotoğraf bağlantıları doğrudan açılır. İletişim formu kaldırılmış; telefon, e-posta ve harita bağlantıları eklenmiştir. Kaynaktaki Lorem ipsum örnek paragrafları kaldırılmıştır.

Ana sayfadaki tek görsel korunur; orijinal YouTube tanıtımı açık bir izleme bağlantısıyla erişilir. Otomatik yüklenen video yerine isteğe bağlı izleme kullanılır. Yanmar Solis sayfasındaki 2024 tarihli kampanya görseli kaynakta olduğu gibi aktarılmıştır; kampanya güncelliği şirket tarafından kontrol edilmelidir.

## Yerel önizleme

```sh
python3 -m http.server 8011
```

## Yayın

Depo: https://github.com/mtahca/ozsoygida

GitHub Pages: https://mtahca.github.io/ozsoygida/

main dalına gönderim GitHub Actions ile yayını günceller. Özel alan adı ve DNS değiştirilmemiştir; CNAME dosyası yoktur. ozsoygida.com.tr alan adının taşınması ayrı bir DNS işlemidir. .github ve .nojekyll dosyaları pakete dahildir.

## Düzenleme

İlgili klasörde index.html, ortak stiller assets/style.css, etkileşimler assets/site.js. Menü ve iletişim bilgileri her HTML sayfasında ayrı bulunur; ortak değişiklikler tüm sayfalara uygulanmalıdır.

## Doğrulama

Yerel dosya bağlantıları, 19 içerik sayfasının bütünlüğü, AJAX galerilerinin aktarımı, fontların Türkçe karakterleri ve JavaScript sözdizimi kontrol edildi. Bu ortamda Chrome başlatılamadığı için gerçek tarayıcıda görsel doğrulama tamamlanmadı.

Kaynak: https://www.ozsoygida.com.tr/ — 5 Ekim 2026.
