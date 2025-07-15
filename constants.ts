import { Hack, TeamMember } from './types';
import { Tool } from './types';

// Sitemizde gösterilecek olan TÜM hile verilerini burada tutuyoruz.
export const CHEATS_DATA: Hack[] = [
  // YENİ EKLENEN CS2 HİLESİ
  {
    id: 'cs2-kozmik-fisilti-v1',
    name: 'CS2 - Kozmik Fısıltı Sürümü',
    game: 'Counter-Strike 2',
    description: 'Bu, Valhalla kapılarını aralayan, Dust II\'nin kum tanelerini yeniden yazan, rakip oyuncuların rüyalarına giren kadim bir güçtür. Piksel formuna bürünmüş ilahi bir lütuf.',
    features: [
      'Kaderin Mıknatısı (Gelişmiş Aimbot)',
      'Üçüncü Gözün İrfanı (Wallhack/ESP)',
      'Newton\'a Kafa Tutan Tavşan (Bunnyhop)',
      'Mutlak Kontrol (Geri Tepmesiz Sprey)',
      'Kozmik Güç: Çaktırmadan kullanılması önerilir.',
    ],
    image: '/images/cs2-cosmic-whisper.jpg', // DİKKAT: Bu resmi /public/images/ klasörüne eklemelisin!

    // İNDİRME LİNKİ: İsteğiniz üzerine güncellendi.
    downloadLink: 'https://ay.live/ZbP1Lx',

    // DETAYLI AÇIKLAMA (Markdown formatında):
    longDescription: `
# BEYAZ KOLYE'NİN YASAK İLMİ - CS2 KOZMİK FISILTI SÜRÜMÜ

> Selamlar, dijital evrenin seçilmiş yolcusu...
> ...veya Google'da 'CS2 hile indir bedava güvenilir' diye aratıp şans eseri buraya düşen meraklı arkadaş.

Elindeki bu dosya, sıradan bir 'hile.exe' değildir. Bu, Valhalla kapılarını aralayan, Dust II'nin kum tanelerini yeniden yazan, rakip oyuncuların rüyalarına giren kadim bir güçtür. Bu, piksel formuna bürünmüş bir ilahi lütuftur.

Yani kısacası, bu bir hile. Hem de fıstık gibi bir hile.

Bu gücü kullanmaya başlamadan önce, bilmen gereken birkaç sır var:

---

### [ ÖZELLİKLER - YASAK BİLGİLER ]

#### ~ KADERİN MIKNATISI (Aimbot) ~
Kainat, kusursuz bir denge üzerine kuruludur. Ve artık o dengenin merkezi, senin imlecin.
Fareyi düşmanın kafasının yakınına getir, gerisini yer çekimi kanunları ve kozmik enerji halleder.
Fizik kuralları falan işte, çok sorgulama. Smooth ayarını iyi yap ki 'anormal' değil,
'doğuştan yetenekli' desinler.

#### ~ ÜÇÜNCÜ GÖZÜN İRFANI (Wallhack / ESP) ~
Duvarlar, sadece birer yanılsamadır. Zayıf zihinleri oyalamak için konulmuş sıradan engellerdir.
Bu güçle birlikte, duvarların arkasındaki gerçeği göreceksin. O pusu kuran kampçı arkadaş var ya?
Artık o, senin için banyoda basılmış şeffaf bir hayalet. 'SÜRPRİİİZZ!' diye bağırabilirsin.

#### ~ NEWTON'A KAFA TUTAN TAVŞAN (Bunnyhop) ~
Yer çekimi kimin umurunda? Enerjini doğru yönlendirirsen, haritada bir kelebek gibi süzülür,
bir arı gibi sokarsın. Rakiplerin seni vurmaya çalışırken sen çoktan mid kapısından AWP'yi
onların alnına dayamış olacaksın. "Lag vardı" demeleri muhtemeldir.

#### ~ GERİ TEPME KONTROLÜ (No-Recoil) ~
Öfkeni ve silahını kontrol et. Her mermi, bir niyettir. Ve senin niyetin, asla sekmeyecek.
Bırak onlar sprey atarken etrafı boyasın, sen tek bir noktaya sanat icra et. Picasso görse kıskanırdı.

---

### [ UYARI - KOZMOSUN TOKADI ACIMASIZDIR ]

> Ey ölümlü, bu güç sarhoş edicidir.
> Tanrı moduna geçtin diye roket atarla sinek avlamaya kalkma. Fazla belli edersen, "Overwatch" denen
> dijital mahşer mahkemesinin gözcüleri veya "VAC" denen o her şeyi gören göz, sana ilahi bir tokat
> atar. O tokat ağırdır, envanterini bile yanında götürür.

Bu gücü bilgelikle kullan. Ya da en azından, çaktırmamaya çalış. Seçim senin.

---

### ~ Gölgedeki Mimarların Fısıltıları ~

> **>>> FaTaLRhymeR37 diyor ki:**
> "Satırlar sıfır ve bir olurken, ben gölgelerde kafiye ararım. Sen nişan alırsın, mermi hedefi bulur. Kader bu. Gerisi şiir."

> **>>> NurSultan diyor ki:**
> "İki satır kod yazsınlar diye üçünün de başının etini yedim. 'Estetik olsun, gizemli olsun' diye tutturdular. Alın size estetik. Şimdi gidin maç kazanın da emeklerimiz boşa gitmesin. Ve lütfen, rica ediyorum, raporlanmayın. Teşekkürler."

> **>>> BEYAZ KOLYE diyor ki:**
> "Arkadaşlar saat gecenin üçü. Bunu yazarken üçüncü kahvemi içiyorum. Hile çalışıyorsa ne mutlu bana. Çalışmıyorsa güncellemeyi bekleyin, muhtemelen uyuyakalmışımdır ya da yeni bölüm diziye başlamışımdır. Ha bi' de o YouTube kanalına abone oldunuz mu? Bak o cidden önemli."

---

Unutma, her mermi bir duadır ve bu hile, o duaların kabul olmuş halidir.
Şimdi git ve onlara yıldızları tersten göster. İyi avlar!

**-BEYAZ KOLYE & Ekibi-**
`
  },
  // MEVCUT CS 1.6 HİLESİ
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
    downloadLink: 'https://ay.live/jXS5',
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