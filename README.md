# MLIRS - Multi Language Invoice Request System

Modern ve kullanıcı dostu bir fatura talep yönetim sistemi. Tailwind CSS v4 ile geliştirilmiştir.

## 🚀 Özellikler

- 📝 Fatura talebi oluşturma
- 📋 Talep listesi ve detay görüntüleme
- ✅ Onay süreçleri
- 🌓 Dark/Light mode desteği
- 🌍 Çoklu dil desteği (TR, EN, DE)
- 📱 Responsive tasarım
- 🎨 Modern UI/UX

## 🛠️ Teknolojiler

- **Tailwind CSS v4** - Modern CSS framework
- **i18next** - Çoklu dil desteği
- **HTML5** - Yapılandırma
- **JavaScript** - İnteraktif özellikler

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/m-ensr/MLIRS.git
cd MLIRS
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. CSS'i derleyin (geliştirme modu - otomatik güncelleme):
```bash
npm run build-css
```

veya tek seferlik derleme için:
```bash
npm run build
```

## 🎯 Kullanım

1. `npm run build-css` komutu ile CSS izlemeyi başlatın
2. `templates/` klasöründeki HTML dosyalarını tarayıcıda açın
3. Ana sayfa için `index.html` dosyasını kullanın

## 📁 Proje Yapısı

```
fatura_talep/
├── assets/
│   ├── css/
│   │   ├── input.css      # Tailwind CSS kaynak dosyası
│   │   └── output.css     # Derlenmiş CSS (otomatik oluşturulur)
│   ├── i18n/              # Dil dosyaları
│   │   ├── tr.json
│   │   ├── en.json
│   │   └── de.json
│   ├── images/            # Görseller
│   │   ├── avatar/
│   │   ├── background/
│   │   ├── favicon/
│   │   └── logo/
│   └── js/
│       └── main.js        # Ana JavaScript dosyası
├── templates/             # HTML sayfaları
│   ├── index.html         # Ana sayfa
│   ├── auth1_giris.html   # Giriş sayfası
│   ├── p1a_talep_olustur.html
│   ├── p2_taleplerim.html
│   └── ...
├── package.json
└── README.md
```

## 🎨 Sayfalar

- **Auth Sayfaları**
  - Giriş
  - Şifremi Unuttum
  - Şifre Sıfırlama
  
- **Talep Sayfaları**
  - Talep Oluştur
  - Taleplerim
  - Talep Detay
  
- **Yönetim Sayfaları**
  - Onay Listesi
  - Sonlanan Talepler

## 🌐 Dil Desteği

Proje şu dilleri desteklemektedir:
- 🇹🇷 Türkçe
- 🇬🇧 İngilizce
- 🇩🇪 Almanca

## 📝 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Yazar

**Ensar Özdemir**

- GitHub: [@m-ensr](https://github.com/m-ensr)
- Email: ensarozdm@gmail.com
