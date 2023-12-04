"use client";
import CardPedidos from "@/components/CardPedidos";
import axios from "axios";
import { Link } from "lucide-react";
import { useState, useEffect } from "react";
function Pedidos() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const fetchData = async () => {
    try {
      const res1 = await axios.get(`/api/apiCafeteria/pedidos/2`);
      const res2 = await axios.get(`/api/apiCafeteria/pedidos/3`);
      const res3 = await axios.get(`/api/apiCafeteria/pedidos/4`);
      const res4 = await axios.get(`/api/apiCafeteria/pedidos/5`);

      setData1(res1.data);
      setData2(res2.data);
      setData3(res3.data);
      setData4(res4.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data4);

    const interval = setInterval(() => {
      fetchData();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white h-full flex flex-row justify-center w-full">
      <div className="w-full max-w-[1440px] h-full flex flex-wrap justify-around bg-white relative">
        <div className="h-[120px] w-[120px] flex flex-col items-center justify-center font-nunito font-bold text-black text-center leading-normal tracking-normal">
          <div className="absolute text-[36px]">Pedidos</div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 w-full max-w-screen-2xl h-full flex flex-wrap items-center justify-center">
          {data4.map((detalle) => {
            <CardPedidos
              key={detalle.id_pedido}
              nombres_comidas={detalle.nombres_comidas}
              cantidades_detalles={detalle.cantidades_detalles}
              id_cuenta={detalle.id_cuenta}
              estado_siguiente_nombre={detalle.estado_siguiente_nombre}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
