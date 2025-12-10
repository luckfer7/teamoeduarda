import Image from "next/image";
import img from "@/public/primeiraimagem.jpeg";
export default function TerceiraSecao() {
    return (
        <section className="min-h-screen p-10 flex flex-col justify-center gap-20" >
            <div className=" grid grid-cols-2 gap-6 md:gap-10" >
                <div className="img-glow float-slow " data-aos="zoom-in" data-aos-duration="1200" >
                    <Image src="/favminha4.jpeg"
                        alt="img"
                        width={500}
                        height={500}
                        className="rounded-3xl img-glow " />
                </div>
                <div className="img-glow float-medium " data-aos="zoom-in" data-aos-duration="1500" >
                    <Image
                        src="/favdela2.jpeg"
                        alt="img"
                        width={500}
                        height={500}
                        className="rounded-3xl img-glow" />
                </div  >
                <div className="img-glow float-fast" data-aos="zoom-in" data-aos-duration="1800" >
                    <Image
                        src="/favdela3.jpeg"
                        alt="img"
                        width={500}
                        height={500}
                        className="rounded-3xl img-glow"
                    />
                </div>
                <div className="img-glow" data-aos="zoom-in" data-aos-duration="2200" >
                    <Image
                        src="/favdela1.jpeg"
                        alt="img"
                        width={500}
                        height={500}
                        className="rounded-3xl img-glow"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center text-center " >
                <span className="text-4xl font-cormorant  " data-aos="fade-left" data-aos-duration="2500" >Eu busco ser</span>
                <span className="text-5xl font-cormorant " data-aos="fade-left" data-aos-duration="1500" >a melhor versão de mim.</span>
                <span className="text-6xl font-display glow-soft " data-aos="fade-left" data-aos-duration="2000" >PRA VOCÊ!</span>
            </div>
        </section>
    )
}