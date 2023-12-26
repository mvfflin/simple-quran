import { Surah } from "@/types/surah";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSolidSpeaker,
} from "react-icons/bi";

const ReadQuran = ({
  surahMeta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [surah, setSurah] = useState<Surah | null>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [audioStatus, setAudioStatus] = useState<boolean>(false);

  const nextSurah = (number: number) => {
    window.location.href = `${window.location.origin}/read/${number}`;
  };

  const playAudio = (boolean: boolean) => {};

  useEffect(() => {
    setSurah(surahMeta);
    console.log(surahMeta.audioFull["01"]);
  }, [router.isReady, router.query.number]);

  return (
    <>
      <Head>
        <title>{surahMeta.namaLatin}</title>
        <meta name="og:title" content={`Surah ${surahMeta.namaLatin}`} />
        <meta
          name="og:description"
          content={`Baca surah ${surahMeta.namaLatin} di website Al-Qur\'an simple ini!`}
        />
        <link rel="shortcut icon" href="./alquran.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./alquran.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./alquran.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./alquran.png" />
      </Head>
      <main className="mt-52">
        <div className="text-center">
          {loading ? (
            <h1 className="text-4xl">Loading...</h1>
          ) : (
            <>
              {surah ? (
                <>
                  <h1 className="text-3xl">
                    {surah?.nama}
                    <br />
                    {surah?.namaLatin}
                  </h1>
                  <h2 className="text-xl">{surah.jumlahAyat} Ayat</h2>

                  <div className="mx-auto mt-5 col-3 block">
                    <audio controls className="mx-auto">
                      <source src={surahMeta.audioFull["05"]} />
                    </audio>

                    <br />
                    <button
                      onClick={() => nextSurah(surah?.nomor! - 1)}
                      className="btn mr-2"
                      hidden={surah?.nomor == 1}
                    >
                      <BiLeftArrowAlt />
                    </button>
                    <button
                      className="btn"
                      onClick={() => nextSurah(surah?.nomor! + 1)}
                      hidden={surah?.nomor == 114}
                    >
                      <BiRightArrowAlt />
                    </button>
                  </div>

                  <div className="my-12">
                    {surah?.namaLatin == "Al-Fatihah" ||
                    surah?.namaLatin == "At-Taubah" ? null : (
                      <div
                        key={"1"}
                        className="mt-2 py-10 p-5 w-full text-right even:bg-neutral-100 odd:bg-neutral-200 even:dark:bg-neutral-700 odd:dark:bg-neutral-800"
                      >
                        <h1 className="text-2xl">
                          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </h1>
                        <h2 className="text-lg mt-2 dark:text-slate-300 text-neutral-700">
                          bismillāhir-raḥmānir-raḥīm(i).
                        </h2>
                        <h3 className="text-sm mt-2 dark:text-slate-400 text-neutral-500">
                          Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                        </h3>
                      </div>
                    )}
                    {surah?.ayat?.map((ayat, index) => {
                      return (
                        <div
                          key={index}
                          className="p-5 py-10 w-full justify-between flex even:bg-neutral-100 odd:bg-neutral-200 even:dark:bg-neutral-700 odd:dark:bg-neutral-800"
                        >
                          <div className="justify-start">
                            <div className="surah-number">{ayat.nomorAyat}</div>
                          </div>
                          <div className="justify-end text-right">
                            <h1 className="text-2xl">{ayat.teksArab}</h1>
                            <h2 className="text-lg mt-2 dark:text-slate-300 text-neutral-700">
                              {ayat.teksLatin}
                            </h2>
                            <h3 className="text-sm mt-2 dark:text-slate-400 text-neutral-500">
                              {ayat.teksIndonesia}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold">Surah tidak ditemukan!</h1>
                  <h2 className="text-xl">
                    Mohon masukkan nomor surah yang benar di input URL
                  </h2>
                  <a href="/read">
                    <button className="btn mt-2">Kembali ke menu surah</button>
                  </a>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = (async (context) => {
  const toNum = Number(context.query.number);

  const res = await fetch(`https://equran.id/api/v2/surat/${toNum}`);
  const data = await res.json();
  const surahMeta: Surah = data.data;
  return { props: { surahMeta } };
}) satisfies GetServerSideProps<{ surahMeta: Surah }>;

export default ReadQuran;
