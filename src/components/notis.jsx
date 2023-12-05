"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Nosts({ id }) {
  const [notis, setNotis] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.put(`/api/apiCliente/extras`, { id_cuenta: id });
      setNotis(res.data);
      // console.log(notis); // Esto no mostrará inmediatamente el cambio
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
      <h2>Notificaciones:</h2>
      <ul>
        {notis.map((noti) => (
          <li key={noti.id_pedido}>
            <strong>ID Pedido:</strong> {noti.id_pedido}
            <br />
            <strong>Estado Anterior:</strong> {noti.estado_anterior}
            <br />
            <strong>Estado Actual:</strong> {noti.estado_actual}
            <br />
            <strong>Fecha:</strong> {noti.fecha}
            <br />
            <strong>Estado Recibido:</strong> {noti.estado_recibido}
            <br />
            <strong>ID Cuenta:</strong> {noti.id_cuenta}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
