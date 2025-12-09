import Image from "next/image";
import img from "@/public/primeiraimagem.jpeg";
export default function TerceiraSecao() {
    return (
        <section className="h-screen p-10 flex flex-col justify-center gap-35" >
            <div className=" grid grid-cols-2 gap-9 border-6 border-[#4e2929] " >
                {/* <Image src={img} alt="img" width={350}  className=" rounded-[100px] border-2 border-solid border-black" /> */}
                <img src={"/primeiraimagem.jpeg"} alt="img"  className="  " />
                <img src={"/primeiraimagem.jpeg"} alt="img"  className="  " />
                <img src={"/primeiraimagem.jpeg"} alt="img"  className="  " />
                <img src={"/primeiraimagem.jpeg"} alt="img"  className="  " />
            </div>

            <div className="flex flex-col justify-center " >
                <span className="text-4xl font-cormorant  " data-aos="fade-left" data-aos-duration="4000" >Eu busco ser</span>
                <span className="text-5xl font-cormorant " data-aos="fade-left" data-aos-duration="1000" >a melhor versão de mim.</span>
                <span className="text-6xl font-display " data-aos="fade-left" data-aos-duration="2000" >PRA VOCÊ!</span>
            </div>
        </section>
    )
}