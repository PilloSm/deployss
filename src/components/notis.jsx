"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Nosts({ id }) {
  const [notis, setNotis] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.post(`/api/apiCliente/extras`, { id_cuenta: id });
      console.log(res.data.estados);
      const notisConNombres = res.data.pedidos.map((pedido, index) => ({
        ...pedido,
        estado_anterior: getEstadoNombre(
          pedido.estado_anterior,
          res.data.estados
        ),
        estado_actual: getEstadoNombre(pedido.estado_actual, res.data.estados),
      }));
      setNotis(notisConNombres);
    } catch (error) {
      console.log(error);
    }
  };

  const getEstadoNombre = (estadoId, datos) => {
    console.log(datos);
    console.log(estadoId);
    const estado = datos.find((estado) => estado.id_estado === estadoId);
    console.log(estado);
    return estado ? estado.nombre_estado : "Estado Desconocido";
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

  useEffect(() => {
    console.log("Estado actualizado:", notis);
  }, [notis]);
  return (
    <div className="text-black">
<<<<<<< HEAD
      <table className="text-black">
=======
      <table className="absolute text-center top-[160px] w-1/2 mt-5 border-collapse left-1/2 transform -translate-x-1/2">
>>>>>>> cdffcac6101ae815db132a6309d0adaa36e71477
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Estado Anterior</th>
            <th>Estado Actual</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="text-black">
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
