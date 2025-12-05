import PrimeiraSecao from "./Primeira-secao/PrimeiraSecao";
import QuartaSecao from "./Quarta-secao/QuartaSecao";
import SegundaSecao from "./Segunda-secao/SegundaSecao";
import TerceiraSecao from "./Terceira-secao/TerceiraSecao";


export default function Home() {
  return (
    <div className="">
      <PrimeiraSecao />
      <SegundaSecao />
      <TerceiraSecao />
      <QuartaSecao />
    </div>
  );
}
