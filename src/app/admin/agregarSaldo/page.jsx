"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function AgregarSaldoAdmin() {
  const [datos, setDatos] = useState({
    saldoMas: 0,
    id: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmacion = await Swal.fire({
      title: "¿Son correctos los datos?",
      icon: "question",
      html: `
        <p>Correo: ${datos.id}</p>
        <p>Saldo ingresado: ${datos.saldoMas}</p>
      `,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    if (confirmacion.isConfirmed) {
      try {
        const res = await axios.put(`/api/apiCafeteria/agregarSaldo`, datos);

        if (res.data.status === 200) {
          sweetAlert();

          await Swal.fire({
            title: "¡Éxito!",
            text: "La solicitud se ha completado exitosamente.",
            icon: "success",
          });
        } else {
          console.error("Error en la respuesta:", res.data);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
      window.location.reload();
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-gray-300 via-gray-400 to-white p-8 items-center justify-center min-h-screen bg-bg-[#25a18ee6]">
      <div className="bg-white w-[600px] h-[500px] shadow-lg rounded-[50px] relative">
        <div className="bg-white absolute w-[600px] h-[500px] shadow-lg rounded-[50px] font-nunito">
          <div className="absolute text-black w-[431px] top-[20px] left-[70px] text-4xl font-bold text-center leading-normal tracking-normal">
            Agregar Saldo
          </div>

          <div className="absolute top-[245px] left-[185px] font-normal text-black text-[30px] text-center leading-normal tracking-normal whitespace-nowrap">
            $
          </div>

          <form onSubmit={handleSubmit}>
            <div className="absolute w-[450px] h-[48px] top-[160px] left-[60px] bg-white border border-[#797979] items-center">
              <input
                className="absolute h-[40px] text-[40px] w-[400px] left-[10px] top-[2px] block mb-2 text-sm font-medium  text-gray-900 dark:text-black outline-none"
                placeholder="Correo electronico"
                name="id"
                onChange={handleChange}
              />
            </div>

            <div className="absolute w-[206px] h-[49px] top-[240px] left-[267px] rounded-[10px]">
              <select
                className="w-[100px] h-[49px] text-[28px] cursor-pointer py-2 px-3 h-[42px] outline-none border-0 rounded-none bg-[#f0f0f0] text-black text-base font-nunito border-2 border-[rgba(0,0,0,0.2)] focus:border-[#47cdb8] rounded-[12px] relative transition-all duration-200 ease-in"
                name="saldoMas"
                onChange={handleChange}
              >
                <option selected>20</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>
            </div>

            <button className="absolute w-[460px] h-[65px] top-[370px] left-[70px] bg-[#25a18ee6] rounded-full border-none cursor-pointer">
              <div className="absolute w-[523px] h-[10px] top-[20px] left-[-30px] font-poppins-bold text-white text-[22px] text-center leading-[20px]">
                Agregar
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarSaldoAdmin;
