"use client";
import CardPedidos from "@/components/CardPedidos";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
function Pedidos() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/apiCafeteria/pedidos/2`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] h-full flex flex-wrap justify-around bg-white relative">
        <div className="h-[120px] w-[120px] flex flex-col items-center justify-center font-nunito font-bold text-black text-center leading-normal tracking-normal">
          <div className="absolute text-[36px]">Pedidos Entrantes</div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 w-full max-w-screen-2xl h-full flex flex-wrap items-center justify-center">
          {data.map((item, index) => (
            <CardPedidos
              key={index}
              id_pedido={item.id_pedido}
              nombres_comidas={item.nombres_comidas}
              cantidades_detalles={item.cantidades_detalles}
              id_cuenta={item.nombre_usuario}
              nombre={item.id_cuenta}
              estado_siguiente_nombre={item.estado_siguiente_nombre}
              estado_actual_nombre={item.estado_actual_nombre}
              estado_actual_id={item.estado_actual_id}
              saldo={item.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
