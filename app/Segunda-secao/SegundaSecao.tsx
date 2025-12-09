
import Image from "next/image";
import img1 from "@/public/primeiraimagem.jpeg";
import img2 from "@/public/segundaimagem.jpeg";
import img3 from "@/public/terceiraimagem.jpeg";
import img4 from "@/public/quartaimagem.jpeg";
import img5 from "@/public/quintaimagem.jpeg";
import img6 from "@/public/sextaimagem.jpeg";
import img7 from "@/public/setimaimagem.jpeg";
import img8 from "@/public/oitavaimagem.jpeg";
import img9 from "@/public/nonaimagem.jpeg";
import img10 from "@/public/decimaimagem.jpeg";
import img11 from "@/public/decimaprimeiraimagem.jpeg";
import img12 from "@/public/decimasegundaimagem.jpeg";
//import img2 from "@/public/segunda.jpeg"; // se tiver outras, coloque
// você pode repetir o mesmo img1 várias vezes se só tiver uma

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]; // coloque quantas quiser / ou troque por img2, img3...

export default function SegundaSecao() {
  // duplicamos o array para fazer o loop contínuo
  const loop = [...imagens, ...imagens];

  return (
    <section className="w-full h-screen bg-black py-12 overflow-hidden">
      <div className="relative">
        {/* track: largura infinita (conteúdo em linha) */}
        <div className="flex items-center gap-4 animate-slide">
          {loop.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 260 }} // largura fixa por item (ajuste como quiser)
>
              <Image
                src={src}
                alt={`memoria-${idx}`}
                width={260}
                height={160} // proporção 260x160 -> ajuste para ficar do jeito que quiser
                className="object-cover w-full h-full"
                priority={idx < imagens.length} // primeira passada pode ser prioritária
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 qtext-center p-12" data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-white font-display font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-xl flex items-center justify-center gap-3" >Nunca é tarde para se auto conhecer.</h1>
                <h3 className=" text-white font-cormorant mt-4 text-4xl md:text-xl max-w-2xl mx-auto drop-shadow-lg " >Saiba que você está fazendo parte desse processo.</h3>
            </div>
    </section>
  );
}