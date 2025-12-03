export default function PrimeiraSecao() {
    return (
        <section className="relative w-full h-screen flex item-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/primeiraimagem.jpeg')" }} >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 qtext-center px-6" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-xl flex items-center justify-center gap-3" >Muito obrigado <span>❤️❤️</span></h1>
                <h3 className=" text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg " >Obrigado por escolher me amar mesmo com os meus defeitos!</h3>
            </div>
        </section>
    )
}