export interface Card {
  id: string;
  sCardId: string | null;
  sourceId: string | null;
  front: string;
  pronunciation: string | null;
  back: string;
  hint: string;
  flipped: boolean;
  loopedAt: string;
  knownAt: string | null;
  knownUntil: string | null;
  knownCount: number;
  failCount: number;
  source: Source | null;
  svg: SVG | null;
}

interface Source {
  kind: string;
  course: boolean;
  id: string;
}

interface SVG {
  flatId: string;
  url: string;
  id: string;
}