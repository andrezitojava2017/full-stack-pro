import Search from "../../components/search/Search";

const Home = () => {
  return (
    <>
      <Search />
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2018/02/20071235/2-dacia_duster_gt2.png"
            alt="sea"
          />
          <p className="font-bold mt-1 mb-2 px-2">DUSTER 2024</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 30.350 km</span>
            <strong className="text-black font-medium text-xl">R$ 89.900,00</strong>
          </div>

          <div className="w-full h-px bg-slate-300 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700 ">Goiania - GO</span>
          </div>
        </section>

    <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2018/02/20071235/2-dacia_duster_gt2.png"
            alt="sea"
          />
          <p className="font-bold mt-1 mb-2 px-2">DUSTER 2024</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 30.350 km</span>
            <strong className="text-black font-medium text-xl">R$ 89.900,00</strong>
          </div>

          <div className="w-full h-px bg-slate-300 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700 ">Goiania - GO</span>
          </div>
        </section>
            <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2018/02/20071235/2-dacia_duster_gt2.png"
            alt="sea"
          />
          <p className="font-bold mt-1 mb-2 px-2">DUSTER 2024</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 2024/2024 | 30.350 km</span>
            <strong className="text-black font-medium text-xl">R$ 89.900,00</strong>
          </div>

          <div className="w-full h-px bg-slate-300 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700 ">Goiania - GO</span>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
