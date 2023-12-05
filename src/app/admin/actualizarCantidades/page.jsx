"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BtnOpcionesAdmin from "@/components/BtnOpcionesAdmin";
import { esNumero } from "@/libs/val";

export default function Actualizar() {
  const [error, setError] = useState("");
  const [comidaN, setComidaN] = useState([]);
  const [comidasActualizadas, setComidasActualizadas] = useState([]);

  useEffect(() => {
    axios.get(`/api/apiCafeteria/Comida`).then((res) => {
      const comidas = res.data;
      setComidaN(comidas);
      console.log(comidaN);
    });
  }, []);
  const handleChangeCantidad = (e, index) => {
    if (!esNumero(parseInt(e.target.value, 10))) {
      setError("dka");
      return;
    }

    const updatedComidaN = [...comidaN];
    updatedComidaN[index] = {
      ...updatedComidaN[index],
      cantidad: parseInt(e.target.value, 10),
    };
    setComidaN(updatedComidaN);

    // Actualiza el estado comidasActualizadas
    const updatedComidasActualizadas = [...comidasActualizadas];
    const foundIndex = updatedComidasActualizadas.findIndex(
      (item) => item.id_comidas === updatedComidaN[index].id_comidas
    );

    if (foundIndex !== -1) {
      updatedComidasActualizadas[foundIndex].cantidad =
        updatedComidaN[index].cantidad;
    } else {
      updatedComidasActualizadas.push({
        id_comidas: updatedComidaN[index].id_comidas,
        cantidad: updatedComidaN[index].cantidad,
      });
    }

    setComidasActualizadas(updatedComidasActualizadas);
  };

  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-300 via-gray-400 to-white p-8 items-center justify-center h-screen">
        <div className="w-[600px] text-black bg-white shadow-lg rounded-[50px] p-8">
          <h1 className="text-center text-2xl font-nunito font-bold text-black mb-2">
            Actualizar Cantidad
          </h1>

          <div className="flex flex-col space-y-4">
            {comidaN.map((ingrediente, index) => (
              <div className="flex flex-col space-y-1 items-center" key={index}>
                <p className="text-lg font-nunito font-semibold">
                  {ingrediente.nombre}
                </p>
                <p className="text-base font-nunito text-black">Cantidad:</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    name={ingrediente.nombre}
                    onChange={(e) => handleChangeCantidad(e, index)}
                    placeholder={ingrediente.cantidad}
                    className="border border-gray-300 p-1 rounded"
                  />
                  <button
                    className="bg-[#25a18ee6] text-white p-1 rounded ml-2"
                    onClick={async () => {
                      console.log(comidasActualizadas);
                      const com = comidasActualizadas.find(
                        (item) => item.id_comidas == ingrediente.id_comidas
                      );
                      try {
                        // Puedes enviar comidasActualizadas al backend utilizando axios o la librería que prefieras
                        const res = await axios.put(
                          "/api/apiCafeteria/ingredientes",
                          com
                        );

                        // Manejar la respuesta del backend según tus necesidades
                        console.log(res.data);

                        // Limpiar el estado comidasActualizadas después de enviar al backend
                        setComidasActualizadas([]);
                        alert("Se actualizó exitosamente");
                        window.location.reload();
                      } catch (error) {
                        console.error("Error al actualizar:", error);
                        alert("Error al actualizar");
                      }
                    }}
                  >
                    Actualizar Cantidad
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
