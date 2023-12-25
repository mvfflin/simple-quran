import { Surah } from "@/types/surah";
import { useEffect, useState } from "react";

export const FullRead = () => {
  const [surahs, setSurahs] = useState<Array<Surah>>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuran = async () => {
      try {
        const res = await fetch("https://equran.id/api/v2/surat");
        const data = await res.json();

        console.log(data.data);
        return setSurahs(data.data);
      } catch (error) {
        console.log(error);
        return setSurahs([]);
      }
    };
    setLoading(true);
    fetchQuran();
    setLoading(false);
  }, []);

  useEffect(() => {
    return setSurahs(surahs.filter((e) => e.namaLatin == search.toString()));
  }, [search]);

  return (
    <>
      <main className="mt-52">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {loading ? "Loading" : "Baca Al-Qur'an"}
          </h1>
          <input
            className="my-2 rounded-md p-2"
            placeholder="Cari nama surah..."
          ></input>
          <div className="my-12 justify-center">
            {surahs?.map((surah: Surah, index: number) => {
              return (
                <a href={`/read/${surah.nomor}`} key={index}>
                  <div className="dark:bg-neutral-800 bg-neutral-100 my-2 rounded-md p-5 w-96 mx-auto text-left hover:scale-125 hover:shadow-md hover:rotate-6 hover:shadow-white transition-all">
                    <h1 className="text-xl">{surah.nama}</h1>
                    <h2 className="text-md dark:text-neutral-300 text-neutral-900">
                      {surah.namaLatin} ({surah.arti})
                    </h2>
                    <h3 className="text-sm dark:text-neutral-400 text-neutral-800">
                      {surah.jumlahAyat} Ayat
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default FullRead;
