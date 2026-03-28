
const Home = () => {
    return (
        <main className="flex items-center justify-center">
            <aside className=" flex max-w-[80%] w-full mt-8 border-b-amber-400 border-b-2 pb-8 ">
                <div className=" flex-2">
                    <span className="font-500 text-xs tracking-widest text-amber-500">NOSSA LOJA</span>
                    <h1 className="font-900 text-5xl font-serif pt-2">Tudo que seu<br></br><span className="text-[#1a7a6e]">pet merece</span></h1>
                </div>
                <div className="flex-1 justify-center items-end-safe flex">
                    <p className="text-gray-400">Produtos selecionados com carinho para o bem-estar e felicidade do seu companheiro.</p>
                </div>
            </aside>
        </main>
    )
}
export default Home;