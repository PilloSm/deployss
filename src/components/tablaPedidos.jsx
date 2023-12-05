"use client";
import axios from "axios";
import { useState, useEffect } from "react";
export default function TablaPedidos({ id_cuenta }) {
  const [pedidos, setPedidos] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/apiCliente/pedido/${id_cuenta}`);
      setPedidos(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id_cuenta]);

  return (
    <div className="flex justify-center items-center">
      <table className="absolute min-w-full max-w-md bg-white border border-gray-300 top-[180px] mx-5 mr-5">
        <thead className="bg-[#25a18ee6]">
          <tr>
            <th className="py-2 px-2 md:px-4 border-b text-white">ID Pedido</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Total</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Estado</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Fecha</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Cantidades Detalles</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Precios Detalles</th>
            <th className="py-2 px-2 md:px-4 border-b text-white">Nombres Comidas</th>
          </tr>
        </thead>
        <tbody className="h-[1000px] overflow-y-auto w-[100%]">
          {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.id_pedido}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.total}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.estado_nombre}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.fecha}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.cantidades_detalles.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.precios_detalles.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black">
                {pedido.nombres_comidas.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
