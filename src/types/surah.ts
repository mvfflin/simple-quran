import { Ayat } from "./ayat";

export interface Surah {
  arti?: string;
  ayat?: Array<Ayat>;
  audioFull?: Array<string>;
  deskripsi?: string;
  jumlahAyat?: number;
  nama?: string;
  namaLatin?: string;
  nomor?: number;
  tempatTurun?: string;
  suratSebelumnya?: Surah | boolean;
  suratSelanjutnya?: Surah | boolean;
}
