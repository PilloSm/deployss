import Nosts from "@/components/notis";
import TablaPedidos from "@/components/tablaPedidos";
import ValUsu from "@/components/validarUsu";

export default function pagina({ params }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="absolute top-[20px] md:top-[40px] lg:top-[60px] left-[50%] transform translate-x-[-50%] font-nunito font-normal text-black text-[40px] md:text-[50px] lg:text-[60px] text-center leading-normal tracking-normal">
        Notificaciones
      </div>
      <ValUsu params={params.id}>
        <Nosts id={params.id} />
      </ValUsu>
    </div>
  );
}
