import { Hack, TeamMember } from './types';

// HİLENİN VE TANITIMININ EKLENDİĞİ ANA VERİ YAPISI
// Sitemizde gösterilecek olan TÜM hile verilerini burada tutuyoruz.
export const CHEATS_DATA: Hack[] = [
  {
    // ID: Bu hilenin linklerde kullanılacak benzersiz kimliği.
    id: 'cs16-hackerhub-v1337',

    // İSİM: Ana sayfada ve hile listesinde görünecek başlık.
    name: 'CS 1.6 - HackerHub v1.337',
    
    // OYUN: Hilenin ait olduğu oyun.
    game: 'Counter-Strike 1.6',

    // KISA AÇIKLAMA: Ana sayfadaki kartlarda görünecek kısa ve öz tanıtım yazısı.
    description: 'Bazı kapılar sadece içeriden açılır... Biz levyeyle girmeyi tercih ettik. Protokolü kırmak için ihtiyacınız olan her şey bu pakette.',
    
    // ÖZELLİKLER: Hile detay sayfasında listelenecek temel özellikler.
    features: [
      'DLL Enjeksiyonu ile Tam Entegrasyon',
      'Kullanıcı Adı/Şifre ile Güvenli Giriş Paneli',
      'Skor Sıralama Sistemi',
      'Entegre Sohbet Odası',
      'Antivirüs Tarafından Onur Madalyası Almaya Aday',
    ],

    // RESİM: Hile kartında ve detay sayfasında görünecek görsel.
    // DİKKAT: Bu resmi "public/images/" klasörüne "cs16-hackerhub.jpg" adıyla kaydetmeyi unutma!
    image: '/images/cs16-hackerhub.jpg',

    // YENİ KISALTILMIŞ DETAYLI AÇIKLAMA (Markdown formatında):
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


// HİLENİN YAZARLARINA AİT EKİP ÜYELERİ BİLGİSİ
export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: 'BEYAZKOLYE',
      handle: 'BEYAZKOLYE',
      role: 'DLL Baş Mimarı & Modifikasyon Uzmanı'
    },
    {
      name: 'NurSultan',
      handle: 'NurSultan',
      role: 'C# Formları Baş Büyücüsü & Arayüz Sihirbazı'
    },
    {
      name: 'FaTaLRhymeR37',
      handle: 'FaTaLRhymeR37',
      role: 'C# Altyapı Stratejisti & Veritabanı Kâhyası'
    }
];


// ----- Gerekli Tür (Type) Tanımlamaları -----
// Eğer projenizde zaten 'types.ts' gibi bir dosya varsa bu kısım gereksiz olabilir.
// Ancak tam kod istediğiniz için buraya ekliyorum.
export interface Hack {
  id: string;
  name: string;
  game: string;
  description: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  handle: string;
  role: string;
}