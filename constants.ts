import { Hack, TeamMember } from './types';
import { Tool } from './types'; 

// Sitemizde gösterilecek olan TÜM hile verilerini burada tutuyoruz.
export const CHEATS_DATA: Hack[] = [
  {
    id: 'cs16-hackerhub-v1337',
    name: 'CS 1.6 - HackerHub v1.337',
    game: 'Counter-Strike 1.6',
    description: 'Bazı kapılar sadece içeriden açılır... Biz levyeyle girmeyi tercih ettik. Protokolü kırmak için ihtiyacınız olan her şey bu pakette.',
    features: [
      'DLL Enjeksiyonu ile Tam Entegrasyon',
      'Kullanıcı Adı/Şifre ile Güvenli Giriş Paneli',
      'Skor Sıralama Sistemi',
      'Entegre Sohbet Odası',
      'Antivirüs Tarafından Onur Madalyası Almaya Aday',
      'RAR ŞİFRESİ 123',
    ],
    image: '/images/cs16-hackerhub.jpg',

    // İNDİRME LİNKİ: Butona tıklandığında gidilecek olan adres.
    downloadLink: 'https://ay.live/jXS5', // <-- DİKKAT: BURAYI KENDİ LİNKİNLE DEĞİŞTİR!

    // DETAYLI AÇIKLAMA (Markdown formatında):
    longDescription: `
# ▋HackerHub v1.337 :: "Protokol Kırıldı" ▋

> _"Eğer bir kural bükülebiliyorsa, kırılmak için yalvarıyordur. Biz sadece isteğini yerine getiriyoruz."_

Dijital yeraltı dünyasına hoş geldin. Bu, kod satırlarıyla yazılmış bir isyan manifestosudur. Sisteme kimin patron olduğunu gösterme zamanı.

---

### ► Kullanım Talimatları

1.  **\`BEYAZKOLYECS16HACK.exe\`** dosyasını çalıştır. Windows uyarısı alırsan "Yine de çalıştır" de. Bu işlerin doğru gittiğinin ilk işaretidir.
2.  Uygulama içinde **Kayıt Ol** veya **Giriş Yap**. Unutma, burası internetin arka sokağı, şifren güçlü olsun.
3.  Ana panele ulaştığında **"Hileyi Aktifleştir"** butonunu bul. Bu buton, \`hl.exe\` işlemine modlanmış parazitimizi (\`.dll\`) enjekte eder.
4.  **Sorun mu var?** Programı yönetici olarak çalıştırdığından emin ol ve antivirüs yazılımını bir süreliğine tatile gönder. Hak etti.

---

### ► "Kodun Arkasındaki Hayaletler"

| ALIAS | GÖREV TANIMI |
| :--- | :--- |
| **BEYAZKOLYE** | _DLL Baş Mimarı & Modifikasyon Uzmanı_ |
| **NurSultan** | _C# Arayüz Sihirbazı_ |
| **FaTaLRhymeR37**| _C# Altyapı Stratejisti_ |

<br>

> Gördüğünüz her pikselin arkasında, bolca kahve, uykusuz geceler ve çözülmüş bir düzine hata vardır. Selam olsun o hatalara!

---

#### █ Yasal Feragatname
Bu yazılım "olduğu gibi" sunulmaktadır. Kullanımından doğacak yasaklanmalar veya sistem sorunlarından yapımcılar sorumlu tutulamaz. Antivirüs yazılımın onlarca uyarı verirse tebrikler, bu programın işini ne kadar iyi yaptığının bir kanıtıdır. Onlar hata değil, onur madalyasıdır.

**Şimdi git ve kaosu kucakla.**
`
  },
];

// Takım üyeleri listesi
export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: 'ANIL (BEYAZ KOLYE)',
      handle: 'BEYAZ KOLYE',
      role: 'Kurucu & DLL Baş Mimarı'
    },
    {
      name: 'FaTaLRhymeR37',
      handle: 'FaTaLRhymeR37',
      role: 'C# Altyapı Stratejisti & Veritabanı Kâhyası'
    },
    {
      name: 'NurSuLTaNN37',
      handle: 'NurSuLTaNN37',
      role: 'C# Arayüz Sihirbazı & UI/UX Tasarım'
    }
];

export const TOOLS_DATA: Tool[] = [
  {
    id: 'jpg-to-png-converter',
    name: 'JPG to PNG Çevirici',
    description: 'Resim dosyalarınızı kaliteden ödün vermeden anında PNG formatına dönüştürün. Hızlı ve güvenli.',
    image: '/images/tool-image-converter.png', // Bu resmi public/images klasörüne eklemeyi unutma!
    link: 'https://github.com/AniLLL3734/ImageForge', // Kendi aracının linkini buraya koy
    tags: ['Resim', 'Çevirici'],
  },
  {
    id: 'md5-hash-generator',
    name: 'MD5 Hash Oluşturucu',
    description: 'Metinleriniz veya dosyalarınız için anında güvenli MD5 hash değerleri oluşturun. Veri bütünlüğü için ideal.',
    image: '/images/tool-hash-generator.png', // Bu resmi public/images klasörüne eklemeyi unutma!
    link: '#', // Kendi aracının linkini buraya koy
    tags: ['Güvenlik', 'Utility'],
  },
  {
    id: 'port-scanner',
    name: 'Basit Port Tarayıcı',
    description: 'Belirli bir IP adresindeki açık portları hızla tespit edin. Ağ güvenliği analizi için temel bir araç.',
    image: '/images/tool-port-scanner.png', // Bu resmi public/images klasörüne eklemeyi unutma!
    link: '#', // Kendi aracının linkini buraya koy
    tags: ['Ağ', 'Güvenlik'],
  },
];