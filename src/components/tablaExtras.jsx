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
    <div>
      <h2>Tabla de Extras</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Tipo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {extras.map((extra) => (
            <tr key={extra.id}>
              <td>{extra.nombre_ingrediente}</td>
              <td>{extra.cantidad}</td>
              <td>
                {extra.tipo === 1
                  ? "Entrada de ingrediente"
                  : "Salida de ingrediente"}
              </td>
              <td>{extra.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
