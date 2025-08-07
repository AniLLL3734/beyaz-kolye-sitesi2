
export interface Hack {
  id: string;
  name: string;
  game: string;
  description: string;
  features: string[];
  image: string;
  downloadLink: string; // <-- BU SATIR ÖNEMLİ
}

export interface TeamMember {
  name: string;
  handle: string;
  role: string;
}
