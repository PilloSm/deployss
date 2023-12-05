"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Nosts({ id }) {
  const [notis, setNotis] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post(`/api/apiCliente/extras`, { id_cuenta: id });
      setNotis(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const markAsSeen = async (id_pedido) => {
    try {
      await axios.put(`/api/apiCliente/extras`, { id_pedido: id_pedido });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Utiliza useEffect para ver los cambios en el estado
  useEffect(() => {
    console.log("Estado actualizado:", notis);
  }, [notis]); // Solo se activará cuando notis cambie

  return (
    <div className="text-black">
      <table>
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Estado Anterior</th>
            <th>Estado Actual</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notis.map((noti) => (
            <tr key={noti.id_pedido}>
              <td>{noti.id_pedido}</td>
              <td>{noti.estado_anterior}</td>
              <td>{noti.estado_actual}</td>
              <td>{noti.fecha}</td>
              <td>
                <button onClick={() => markAsSeen(noti.id_pedido)}>
                  Marcar como Visto
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
