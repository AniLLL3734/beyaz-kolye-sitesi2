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
    downloadLink: 'https://ay.live/dOTDC',
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
  {
    id: 'cs16-spectre-client-v1',
    name: 'Spectre Client - CS 1.6 Modülü',
    game: 'Counter-Strike 1.6',
    description: 'Piyasada gördüğünüz her şeyi unutun. Bu bir hile değil, Counter-Strike 1.6\'yı yeniden tanımlayan bir kontrol arayüzüdür. En ince detayına kadar ayarlanabilir, tamamen kişiselleştirilebilir ve mutlak hakimiyet için tasarlanmıştır.',
    features: [
      'Cerrahi Hassasiyet (Legit & Rage Aimbot)',
      'Taktiksel Üstünlük (Tam Detaylı ESP)',
      'Fizik Kurallarını Bükme (Bunny Hop & Hızlı Durma)',
      'Gelişmiş Geri Tepme Kontrolü',
      'Anti-Aimbot ve Sahte Gecikme (Fake Lag)',
      'Tamamen Güvenli ve HWID Korumalı Platform',
      'RAR ŞİFRESİ 123'
    ],
    image: '/images/cs16-spectre-client.png', // DİKKAT: Yeni ve havalı bir görsel ekle!

    downloadLink: 'https://ay.live/GxQOa0',

    longDescription: `
# Spectre Client - Counter-Strike 1.6 Hükümdarlık Paketi

> *"Kontrol, bir yanılsama değildir. O, doğru araçlara sahip olmaktır."*
> **Biz, o araçları üretiyoruz.**

Eğer buradaysan, sıradan bir oyuncu değilsin. Rekabetin bir adım ötesini, potansiyelinin sınırlarını arıyorsun. Piyasayı dolduran, tek tuşla çalışan, ban garantili ve virüs dolu "çözümleri" bir kenara bırak.
Spectre Client, bir hile yazılımı değil, **bir komuta merkezidir.**

Oyunun her dinamiğini, silahın her tepmesini, hareketinin her salisesini **senin kontrol etmen için** tasarlandı. Bu bir "her şeyi aç, oyunu kazan" aracı değildir. Bu, bir Formula 1 aracının kokpiti gibidir; ustalaştığında, seni rakipsiz yapar.

---

### [ İKİ SEVİYE, TEK FELSEFE: KONTROL ]

Her oyuncunun ihtiyacı farklıdır. Biz de Spectre Client'ı iki katmanlı bir deneyim olarak tasarladık.

#### ~ STANDART SÜRÜM (Ücretsiz Erişim) ~
Bu, Spectre Client dünyasına attığın ilk adımdır. Platformumuzun ne kadar **stabil, güvenli ve profesyonel** olduğunu görmen için bir davetiye.
*   **Temel ESP:** Düşman konumu, kutusu ve temel bilgiler. Rakibi okumak için ihtiyacın olan her şey.
*   **Temel Aimbot:** Akıllı ve "Legit" (belli etmeyen) nişan desteği. Reflekslerine küçük bir takviye.
*   **HWID Koruması:** Ücretsiz sürümde bile hesabın ve emeğin güvende.

> Bu, çoğu ücretli hilenin sunamadığı bir başlangıç paketidir. Biz buna "giriş seviyesi" diyoruz.

---

### [ 👑 PREMIUM SÜRÜM - Tam Potansiyel 👑 ]

Bu, zincirlerini kırdığın yer. Bu, oyunu bir piyon gibi oynamaktan çıkıp, bir **satranç ustası gibi yönetmeye** başladığın yer. Standart sürümdeki her şeye ek olarak, oyunun her zerresini kontrol etmeni sağlayacak tam cephaneliğe erişim:

*   **GELİŞMİŞ AIMBOT (Rage & Legit):** Sadece "nişan al" değil. Hedef önceliği, hitbox seçimi (kafa, göğüs), "Sessiz Aim", "Otomatik Penetrasyon"... Her senaryo için mükemmel ayarı sen yaparsın.
*   **TAM DETAYLI ESP:** Sadece düşmanı değil, silahını, mesafesini, bombayı, patlama yörüngesini... Haritadaki her taktiksel bilgiyi gör. Bilgi güçtür ve sen artık her şeyi biliyorsun.
*   **TRIGGERBOT:** "Kusursuz Sessiz" seçeneği ile insan reflekslerinin ötesinde bir tepki süresi.
*   **HAREKET KONTROLÜ (KREEDZ):** "Bunny Hop", "Hızlı Durma + Çömelme"... Hareket, bir silahtır ve sen artık bir ninjasın.
*   **SİLAH KONTROLÜ:** "Geri Tepmeme", "Dağılma Önleme"... Silahın artık senin bir uzvun gibi çalışır.
*   **GİZLENME (STEALTH):** "Fake Lag", "Anti-Aimbot" özellikleri ile hareketlerini tahmin edilemez kıl. Bir hayalet ol.

> **Premium üyelik, sadece daha fazla özellik açmaz. O, oyunun kurallarını yeniden yazma yetkisi verir.**

---

### [ ERİŞİM PAKETLERİ - Kulübe Katıl ]

Bu bir ürün değil, bir hizmettir. Sürekli güncellenen, desteklenen ve geliştirilen bir platforma erişim biletin.

**Başlangıç Paketi (Haftalık)**
*   **25 TL:** Platformu bir hafta boyunca test et. Farkı kendi gözlerinle gör.

**Standart Paket (Aylık)**
*   **75 TL:** Ciddi oyuncular için bir aylık kesintisiz hakimiyet. (Haftalığa göre %25 daha avantajlı!)

**⭐ Usta Paketi (3 Aylık) - EN POPÜLER ⭐**
*   **150 TL:** Oyuncuların tercihi. Üç ay boyunca hem zihinsel hem de finansal olarak rahat et. **(Aylık alıma göre %33 indirim!)**

**💎 EFSANEVİ PAKET (SINIRSIZ) - NİHAİ YATIRIM 💎**
*   **350 TL:** Tek seferlik ödeme, **ömür boyu hakimiyet.** Güncelleme derdi yok, yenileme stresi yok. Spectre Client var oldukça, sen varsın. Uzun vadede en akıllıca seçim.

---

**Şimdi bir karar ver.** Sıradan oyuncular arasında kalmaya devam mı edeceksin, yoksa oyunu kendi şartlarına göre mi oynayacaksın?

Seçim senin. Biz sadece kapıyı aralıyoruz.
**-Spectre Client Ekibi-**
`
  }
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