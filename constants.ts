import { Hack, TeamMember } from './types';

// HİLENİN VE TANITIMININ EKLENDİĞİ ANA VERİ YAPISI
export const CHEATS_DATA: Hack[] = [
  {
    id: 'cs16-hackerhub-v1337',
    name: 'CS 1.6 - HackerHub v1.337 "Protokol Kırıldı"',
    game: 'Counter-Strike 1.6',
    
    // ----- İSTEDİĞİNİZ TÜM TANITIM METNİ BURAYA EKLENDİ -----
    description: `
# ▋HackerHub v1.337 :: "Protokol Kırıldı" ▋

> _"Bazı kapılar sadece içeriden açılır... Biz levyeyle girmeyi tercih ettik."_

Tebrikler, dijital yeraltı dünyasının en seçkin köşelerinden birine erişim sağladınız. Eğer bu satırları okuyorsan, ya doğru parolayı biliyordun ya da ağ güvenlik duvarımızı aşacak kadar yeteneklisin. Her iki durumda da... **hoş geldin.**

Bu sıradan bir uygulama değil. Bu, kod satırları ve veritabanı sorgularıyla örülmüş bir isyan manifestosu. Klavyenin tuşlarına basarak skor kazandığınız, sohbet odalarında F5 tuşuna basanları aşağıladığınız ve arada sırada... ufak tefek "sistem anomalileri" yarattığınız bir sığınak.

---

## █ DOSYA BÜTÜNLÜĞÜ VE KULLANIM TALİMATLARI

### ► Başlatma Prosedürü
1.  **\`BEYAZKOLYECS16HACK.exe\`**'yi çalıştır. Eğer "Windows bu dosyayı çalıştırmaktan pek hoşlanmadı" diye bir uyarı alırsan, bu işlerin doğru gittiğinin ilk işaretidir. "Yine de çalıştır" de ve sisteme kimin patron olduğunu göster.
2.  **Kimlik Doğrulama:** Ana terminal ekranında senden bir **Kullanıcı Adı** ve **Şifre** istenecek. Unutma, burası internetin arka sokağı. "123456" gibi şifreler burada pek hoş karşılanmaz. Yaratıcı ol.
3.  **Kayıt:** Eğer yeni bir ajan isen, bilgileri girip "Kayıt Ol" butonuna basarak dijital kimliğini oluştur. Sistem, varlığını veritabanımızın en karanlık köşelerine kazıyacaktır.
4.  **Giriş:** Eğer eski bir "üye" isen, bilgilerini gir ve "Giriş Yap" protokolünü başlat. Arka plandaki Matrix animasyonunun keyfini çıkar; o sırada biz senin gerçekten sen olduğundan emin olmaya çalışıyoruz.

### ► Ana Panel Fonksiyonları (\`Form2.cs\`)
*   **Skor Tablosu:** Dijital alemdeki şöhretin burada listelenir. Her 5 dakikada bir sistem, varlığını onurlandırmak için hesabına 100 skor puanı ekler. Zirve soğuktur, ama manzarası güzeldir.
*   **Sohbet Odası (\`Form3.cs\`):** Diğer operatörlerle strateji planlayabileceğin, geyik yapabileceğin veya sadece klavyenin sesini dinletebileceğin kutsal mekân. Unutma, büyük birader (\`Big Brother\`) her zaman dinliyor olabilir... ya da olmayabilir. Bu riski alacak mısın?
*   **Hile Paneli:**
    *   Bu panelin kilidini açmak, bir sabır ve metanet testidir. Sistem, senin sadece bir "script kiddie" olup olmadığını anlamak için birkaç görevi tamamlamanızı ister.
    *   **"Hileyi Aktifleştir"** butonu, vaat edilen topraklara açılan kapıdır. \`hl.exe\` işlemine, ustaca modlanmış bir parazit (\`.dll\`) enjekte eder. Eğer çalışmazsa, ya yönetici olarak çalıştırmıyorsundur ya da antivirüs yazılımın bizden daha paranoyaktır. Antivirüsü bir süreliğine tatile gönder. Hak etti.

---

## ███ YAPIMCILAR KÖŞKÜ ███
### "KODUN ARKASINDAKİ HAYALETLER"

Burası, bu dijital anarşiyi yaratan üç aklın sığınağıdır. Onlar ne kahramandır ne de kötü adam. Onlar sadece sistemin "nasıl çalıştığını" değil, "nasıl daha *eğlenceli* çalışabileceğini" merak edenlerdir. Saygıyla yaklaş.

| ALIAS | GÖREV TANIMI | SÖZÜ |
| :--- | :--- | :--- |
| **BEYAZKOLYE** | _DLL Baş Mimarı & Modifikasyon Uzmanı_ | "Eğer bir kural bükülebiliyorsa, kırılmak için yalvarıyordur. Ben sadece isteğini yerine getiriyorum." |
| **NurSultan** | _C# Formları Baş Büyücüsü & Arayüz Sihirbazı_ | "Kullanıcı arayüzü, kaosun içindeki düzendir. Benim görevim, o düzenin ne kadar... 'esnek' olabileceğini göstermek." |
| **FaTaLRhymeR37**| _C# Altyapı Stratejisti & Veritabanı Kâhyası_ | "Veri asla yalan söylemez. Ama doğru sorgularla istediğin her şeyi itiraf ettirebilirsin." |

<br>

> _Bu köşke sadece kodla değil, bol miktarda kahve, uykusuz geceler ve "Bu neden çalışmıyor?!" diye atılan sayısız çığlıkla girilmiştir. Gördüğünüz her pikselin arkasında, çözülmüş bir düzine hata vardır. Selam olsun o hatalara..._

---

### █ UYARI VE YASAL FERAGATNAME

Bu yazılım "olduğu gibi" sunulmaktadır. Kullanımından doğacak sistem çökmeleri, oyundan yasaklanmalar, kız arkadaşınızın sizi terk etmesi, kedinizin size garip bakması veya evrenin gizemlerini bir anda çözmeniz gibi durumlardan yapımcılar sorumlu tutulamaz.

Eğer bu dosyayı bir antivirüs taramasından geçirdiysen ve 10'dan fazla uyarı aldıysan, tebrikler. Bu, programın işini ne kadar iyi yaptığının bir kanıtıdır. O uyarılar birer hata değil, onur madalyasıdır.

**Şimdi git ve kaosu kucakla.**
    `,
    // ----------------------------------------------------------------

    features: [
        'Aimbot', 
        'Wallhack (ESP)', 
        'Bunnyhop Script', 
        'No Recoil', 
        'DLL Injector', 
        'Skor ve Sohbet Paneli'
    ],
    image: 'https://i.imgur.com/G5iA5A3.jpeg' // Temaya uygun bir görsel
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