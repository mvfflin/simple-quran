import Link from "next/link";

const Support = () => {
  const ytlogo = "";
  return (
    <>
      <main className="mt-52">
        <div className="lg:flex flex-col flex lg:flex-row w-full lg:w-max mx-auto">
          <div className="mx-auto w-max gap-20 inline-block">
            <div className="bg-white dark:bg-neutral-800 p-5 text-center rounded-md w-max mx-auto">
              <img
                className="rounded-full w-[250px] h-[250px] mb-5 mx-auto"
                src="https://github.com/mvfflin.png"
              />
              <h1 className="text-3xl font-bold">mvfflin</h1>
              <h3 className="text-md">as</h3>
              <h3 className="text-xl">Founder & Developer</h3>
              <div className="flex-row flex mt-5 justify-center">
                <a>
                  <img
                    src="./discordwb.png"
                    className="w-12 h-12 rounded-full hover:scale-110 transition-all cursor-pointer"
                  />
                </a>
                <Link href="https://github.com/mvfflin" target="_blank">
                  <img
                    src="./githubwb.png"
                    className="w-12 h-12 rounded-full mx-5 mr-0 hover:scale-110 transition-all cursor-pointer"
                  />
                </Link>
                <Link href={"https://instagram.com/mvfflinn_"} target="_blank">
                  <img
                    src="./instagram.png"
                    className="w-12 h-12 rounded-full mx-5 hover:scale-110 transition-all cursor-pointer"
                  />
                </Link>
                <Link href={"https://youtube.com/@mvfflin"} target="_blank">
                  <img
                    src="./ytwb.png"
                    className="w-12 h-12 rounded-full hover:scale-110 transition-all cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 mx-auto px-20 my-20">
            <h1 className="text-xl w-auto">
              Hai! makasih udah mau pakai website buatanku!
              <br /> website ini free to use untuk semua orang. siapa tau mau
              support boleh kali. <br />
              ini link kalau mau support ya xixi
            </h1>
            <h1 className="text-3xl font-bold mt-5">Support</h1>
            <h1 className="text-xl mt-2">
              <strong>Saweria -{">"}</strong>{" "}
              <Link href="https://saweria.co/mvfflin" target="_blank">
                <span className="btn px-2 py-1">
                  https://saweria.co/mvfflin
                </span>
              </Link>
            </h1>
            <h1 className="text-xl mt-5">
              <strong>Trakteer -{">"}</strong>{" "}
              <Link href="https://trakteer.id/mvlin" target="_blank">
                <span className="btn px-2 py-1">https://trakteer.id/mvlin</span>
              </Link>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Support;
