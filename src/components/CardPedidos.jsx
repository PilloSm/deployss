"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function CardPedidos({
  id_pedido,
  nombres_comidas,
  cantidades_detalles,
  id_cuenta,
  nombre,
  estado_siguiente_nombre,
  estado_actual_nombre,
  estado_actual_id,
  saldo,
}) {
  const router = useRouter();
  const handleEditar = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `/api/apiCafeteria/cambiarEstadoPedido/${id_pedido}`,
      { estado: estado_actual_id, id_cuenta: nombre }
    );
    window.location.reload();
  };
  const handleCancelar = async (e) => {
    try {
      const res = await axios.put(
        `/api/apiCafeteria/cambiarEstadoPedido/${id_pedido}`,
        { estado: 1, saldo: saldo, id_cuenta: nombre }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative mx-2 w-[303px] h-[402px] top-[30px]">
      <div className="relative h-full">
        <div className="w-[303px] h-[350px] top-[52px] bg-[#f4f5f6] rounded-[40px] shadow-md relative left-0 transition-transform transform hover:scale-110"></div>
        <div className="absolute w-[204px] top-[59px] left-[40px] font-nunito font-normal text-black text-[28px] text-center leading-normal tracking-normal">
          <p className="relative top-[20px] font-bold">{nombres_comidas}</p>
          <p className="absolute left-[25px] w-[220px] top-[110px] text-left">
            Cantidad: {cantidades_detalles}
          </p>
          <p className="absolute left-[25px] w-[220px] top-[160px] text-[20px] text-left">
            Usuario: {id_cuenta}
          </p>
        </div>
        <form onSubmit={handleEditar}>
          <button className="absolute w-[120px] h-[100px] bottom-[20px] left-[10px] bg-[#25a18ee6] rounded-[20px] border-none cursor-pointer leading-normal text-center flex items-center justify-center text-white text-[16px]">
            <div className="pedir">{estado_siguiente_nombre}</div>
          </button>
        </form>
        {estado_actual_nombre == "Pedido" ? (
          <button
            onClick={handleCancelar}
            className="absolute w-[120px] h-[100px] bottom-[20px] left-[160px] bg-[#c22323e6] rounded-[20px] border-none cursor-pointer leading-normal text-center flex items-center justify-center text-white text-[16px]"
          >
            <div className="pedir">Cancelar Pedido</div>
          </button>
        ) : (
          <h1 className="absolute w-[120px] h-[100px] bottom-[0px] left-[185px] left-1px font-bold text-[40px]">
            {/* NO */}
          </h1>
        )}
      </div>
    </div>
  );
}
