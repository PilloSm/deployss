"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { esNumero, soloLetras } from "@/libs/val";

export default function Ingredientes() {
  const [datos, setDatos] = useState({
    nombre: "",
    cantidad: 0,
    precio: 0,
    unidad: 0,
  });
  const [unidades, setUnidades] = useState([]); // Estado para almacenar las unidades
  const router = useRouter();

  useEffect(() => {
    const cargarUnidades = async () => {
      const unidadesData = await dats();
      setUnidades(unidadesData);
    };
    cargarUnidades();
  }, []);

  const handleCahnge = (e) => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    if (!datos.nombre || !datos.cantidad || !datos.precio || !datos.unidad) {
      console.error("Por favor, completa todos los campos del formulario.");
      return;
    }
    if (esNumero(datos.cantidad) || datos.precio < 0) {
      alert("Ingrese bien los datos");
      return;
    }
    if (esNumero(datos.precio) || datos.precio < 0) {
      alert("Ingrese bien los datos");
      return;
    }
    if (!unidades.some((unidad) => unidad.id_unidad === datos.unidad)) {
      console.error("El valor de unidad seleccionado no es válido.");
      return;
    }
    if (soloLetras(datos.nombre)) {
      alert("No es un nombre valido");
      return;
    }
    const res = await axios.post(`/api/apiCafeteria/crearIngrediente`, datos);
    if (res.data) {
      const conf = Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "La creación del ingrediente fue exitosa.",
      });
      router.push("/admin/pedidos");
    }
  };

  const dats = async () => {
    const res = await axios.get("/api/apiCafeteria/crearIngrediente");
    return res.data;
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full lg:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%]">
      <div className="bg-white relative p-8 lg:p-16 xl:p-20 2xl:p-24 rounded-[50px] shadow-lg">
        <div className="font-nunito font-normal text-black text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center leading-normal tracking-normal mb-8">
          Crear Ingrediente
        </div>
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-[#09090999] text-[16px] mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-[438px] h-[35px] font-nunito font-normal text-black bg-[white] text-[24px] leading-normal tracking-normal border border-[#797979] outline-none px-3"
              onChange={handleCahnge}
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="unidad" className="text-[#09090999] text-[16px] mb-1">
              Unidad
            </label>
            <select
              name="unidad"
              className="w-[438px] h-[35px] font-nunito font-normal bg-[white] text-black text-[24px] leading-normal tracking-normal border border-[#797979] outline-none px-3"
              onChange={handleCahnge}
            >
              <option value="">Seleccionar Unidad</option>
              {unidades.map((unidad) => (
                <option key={unidad.id_unidad} value={unidad.id_unidad}>
                  {unidad.nombre}
                </option>
              ))}
            </select>
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="cantidad" className="text-[#09090999] text-[16px] mb-1">
              Cantidad
            </label>
            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad"
              className="w-[438px] h-[35px] font-nunito font-normal text-black bg-[white] text-[24px] leading-normal tracking-normal border border-[#797979] outline-none px-3"
              onChange={handleCahnge}
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="precio" className="text-[#09090999] text-[16px] mb-1">
              Precio
            </label>
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              className="w-[438px] h-[35px] font-nunito font-normal text-black bg-[white] text-[24px] leading-normal tracking-normal border border-[#797979] outline-none px-3"
              onChange={handleCahnge}
            />
          </div>
  
          <button className="w-[438px] h-[77px] bg-[#25a18ee6] rounded-full border-none cursor-pointer">
            <div className="w-[338px] h-[16px] font-poppins font-bold text-white text-[24px] text-center leading-[20px]">
              Crear Ingrediente
            </div>
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
