"use client";
import CardPedidos from "@/components/CardPedidos";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
function Pedidos() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/apiCafeteria/pedidos/4`);
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
    console.log("separacions");
    console.log(data);
    const interval = setInterval(() => {
      fetchData();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white h-screen flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] h-full flex flex-wrap justify-around bg-white relative">
        <div className="h-[120px] w-[120px] flex flex-col items-center justify-center font-nunito font-bold text-black text-center leading-normal tracking-normal">
          <div className="absolute text-[36px]">Pedidos</div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 w-full max-w-screen-2xl h-full flex flex-wrap items-center justify-center">
          {data.map((item, index) => (
            <CardPedidos
              key={index} // Agrega una clave única para cada elemento en el array
              id_pedido={item.id_pedido}
              nombres_comidas={item.nombres_comidas}
              cantidades_items={item.cantidades_items}
              id_cuenta={item.nombre_usuario}
              estado_siguiente_nombre={item.estado_siguiente_nombre}
              estado_actual_nombre={item.estado_actual_nombre}
              estado_actual_id={item.estado_actual_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
