"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TablaExtras() {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/apiCafeteria/extras");
        setExtras(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
  <div className="text-center text-2xl font-nunito font-bold text-black mb-2">Tabla de Extras</div>
  <table className="w-full mt-5 border-collapse">
    <thead>
      <tr>
        <th className="border bg-[#25a18ee6] text-white py-2 px-3">
          Nombre
        </th>
        <th className="border bg-[#25a18ee6] text-white py-2 px-3">
          Cantidad
        </th>
        <th className="border bg-[#25a18ee6] text-white py-2 px-3">
          Tipo
        </th>
        <th className="border bg-[#25a18ee6] text-white py-2 px-3">
          Fecha
        </th>
      </tr>
    </thead>
    <tbody>
      {extras.map((extra) => (
        <tr key={extra.id}>
          <td className="border px-3 py-2">{extra.nombre_ingrediente}</td>
          <td className="border px-3 py-2">{extra.cantidad}</td>
          <td className="border px-3 py-2">
            {extra.tipo === 1 ? "Entrada de ingrediente" : "Salida de ingrediente"}
          </td>
          <td className="border px-3 py-2">{extra.fecha}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}
