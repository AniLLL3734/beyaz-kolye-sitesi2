
import { Hack, TeamMember } from './types';

export const CHEATS_DATA: Hack[] = [
  {
    id: 'valorant-aimbot',
    name: 'VALORANT - Nexus Aimbot',
    game: 'Valorant',
    description: 'Piksel mükemmelliğinde nişan alma ve duvar arkası görme özellikleri ile rekabette bir adım öne geçin.',
    features: ['Pixel-Perfect Aimbot', 'Wallhack (ESP)', 'Triggerbot', 'Skin Changer', 'Undetected'],
    image: 'https://picsum.photos/seed/valorant/800/450'
  },
  {
    id: 'csgo-multihack',
    name: 'CS:GO - Overload Multihack',
    game: 'CS:GO',
    description: 'Tüm özellikleri bir arada sunan bu paketle sunucunun hakimi olun. Tamamen özelleştirilebilir.',
    features: ['Aimbot', 'ESP', 'Bunnyhop Script', 'Glow', 'Radar Hack'],
    image: 'https://picsum.photos/seed/csgo/800/450'
  },
  {
    id: 'apex-predator',
    name: 'Apex Legends - Predator Suite',
    game: 'Apex Legends',
    description: 'Düşman konumlarını anında tespit edin ve mermilerinizin her zaman hedefini bulmasını sağlayın.',
    features: ['Silent Aim', 'Player ESP', 'Item ESP', 'No Recoil', 'Speed Hack'],
    image: 'https://picsum.photos/seed/apex/800/450'
  },
  {
    id: 'pubg-survivor',
    name: 'PUBG - Survivor Kit',
    game: 'PUBG',
    description: 'Geniş arazilerde hayatta kalmak için ihtiyacınız olan her şey. Ekipmanları ve düşmanları anında görün.',
    features: ['Wallhack', 'Aimbot', 'Magic Bullet', 'Vehicle ESP', 'Loot ESP'],
    image: 'https://picsum.photos/seed/pubg/800/450'
  },
  {
    id: 'fortnite-phantom',
    name: 'Fortnite - Phantom Mod',
    game: 'Fortnite',
    description: 'İnşa savaşlarında ve ani çatışmalarda üstünlük kurun. Rakipsiz nişan yardımı ve ESP.',
    features: ['Aimbot', 'Player ESP', 'Building Hack', 'Weak-Point Aimbot'],
    image: 'https://picsum.photos/seed/fortnite/800/450'
  },
  {
    id: 'rust-dominator',
    name: 'Rust - Dominator',
    game: 'Rust',
    description: 'Hayatta kalma mücadelenizde kaynakları ve düşmanları kolayca bulun, üssünüzü koruyun.',
    features: ['Always Day', 'Admin Flags', 'Resource ESP', 'Aimbot', 'Debug Camera'],
    image: 'https://picsum.photos/seed/rust/800/450'
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: 'ANIL',
      handle: 'BEYAZ KOLYE',
      role: 'Kurucu & Baş Geliştirici'
    },
    {
      name: 'FaTaLRhymeR37',
      handle: 'FaTaLRhymeR37',
      role: 'Tersine Mühendislik Uzmanı'
    },
    {
      name: 'NurSuLTaNN37',
      handle: 'NurSuLTaNN37',
      role: 'UI/UX Tasarım & Ön Yüz Geliştirici'
    }
];
