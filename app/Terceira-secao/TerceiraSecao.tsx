import Image from "next/image";
import img from "@/public/primeiraimagem.jpeg";
export default function TerceiraSecao() {
    return (
        <section className="h-screen p-10 flex justify-center gap-50" >
            <div className="" >
                <Image src={img} alt="img" width={360} height={260} />
            </div>

            <div className="flex flex-col justify-center " >
                <span>Eu busco ser</span>
                <span>a melhor versão de mim.</span>
                <span>PRA VOCÊ!</span>
            </div>
        </section>
    )
}