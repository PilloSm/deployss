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
        <thead className="bg-[#25a18ee6] block">
          <tr>
            <th className="py-2 px-2 md:px-4 border-b text-white block">ID Pedido</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Total</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Estado</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Fecha</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Cantidades Detalles</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Precios Detalles</th>
            <th className="py-2 px-2 md:px-4 border-b text-white block">Nombres Comidas</th>
          </tr>
        </thead>
        <tbody className="h-[230px] overflow-y-auto w-[100%] block">
          {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.id_pedido}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.total}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.estado_nombre}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.fecha}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.cantidades_detalles.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.precios_detalles.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block block">
                {pedido.nombres_comidas.split(",").map((detalle, index) => (
                  <div key={index} className="mb-1">
                    {detalle}
                  </div>
                ))}
              </td>
            </tr>
          ))}

          <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                ID_prueba
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Total_nombre
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                estado
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                10/10/10/10
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                1
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                30
              </td>
              <td className="py-2 px-2 md:px-4 border-b text-center text-black block">
                Sopa
              </td>
            </tr>

          
        </tbody>
      </table>
    </div>
  );
}
