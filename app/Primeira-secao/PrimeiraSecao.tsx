export default function PrimeiraSecao() {
    return (
        <section className="relative w-full min-h-screen flex pt-52 justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/primeiraimagem.jpeg')" }} >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-white glow-soft font-display font-bold text-6xl md:text-6xl lg:text-7xl drop-shadow-xl flex items-center justify-center" ><span>❤️</span>Muito obrigado <span  >❤️</span></h1>
                <h3 className=" text-white font-cormorant text-center p-1 mt-4 text-4xl md:text-xl max-w-2xl mx-auto drop-shadow-lg " >Obrigado por escolher me amar mesmo com os meus defeitos!</h3>
            </div>
        </section>
    )
}