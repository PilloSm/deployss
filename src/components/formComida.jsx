"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { esNumero } from "@/libs/val";
import Image from "next/image";
export default function FormComida({ comidas }) {
  const router = useRouter();
  const [error, setError] = useState("");

  const [comida, setComida] = useState({
    cantidad: 1,
    id_comida: comidas,
  });

  const [platillo, setPlatillo] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    cantidad: 0,
    tiempo_estimado: "",
  });
  const { data: session, update } = useSession();
  const fetchData = () => {
    try {
      axios
        .get(`/api/apiCliente/menu/${comidas}`)
        .then((response) => {
          const data = response.data;
          if (data) {
            console.log(data)
            setPlatillo(data[0]);
          } else {
            console.error("La respuesta no contiene datos válidos.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, comidas.id_comida, session]);

  const handleChange = (e) => {
    setComida({
      ...comida,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (esNumero(comida.cantidad) || !comida.cantidad > 0) {
      setError("Como asi");
      alert("dkjas");
      return;
    }
    if (comida.cantidad > platillo.cantidad) {
      alert("sasda");
      return;
    }
    if (session) {
      const existingItemIndex = session.user.carrito.comidas.findIndex(
        (item) => item.id_comida === comida.id_comida
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...session.user.carrito.comidas];
        const existingItem = updatedCart[existingItemIndex];
        const existingQuantity = parseInt(existingItem.cantidad, 10);
        const newQuantity = parseInt(comida.cantidad, 10);
        existingItem.cantidad = existingQuantity + newQuantity;
        existingItem.subtotal += platillo.precio * newQuantity;
        const updatedTotal =
          session.user.carrito.total + platillo.precio * newQuantity;
        const carritoActualizado = {
          total: updatedTotal,
          comidas: updatedCart,
        };
        update({
          carrito: carritoActualizado,
        });
        router.push("/client/carrito");
      } else {
        const precioT =
          session.user.carrito.total + platillo.precio * comida.cantidad;
        const nuvo = {
          nombre: platillo.nombre,
          subtotal: platillo.precio * comida.cantidad,
          cantidadM: platillo.cantidad_preparable,
        };
        const elemento = { ...comida, ...nuvo };
        const cart = [...session.user.carrito.comidas, elemento];
        const carritoF = {
          total: precioT,
          comidas: cart,
        };
        update({ carrito: carritoF });
        router.push("/client/carrito");
      }
    }
  };

  return (
    <>
      {error && <div className="flex bg-red-400 align-baseline">{error}</div>}
      <div className="absolute w-[325px] top-[-8px] left-[119px] font-nunito font-semibold text-black text-[54px] rounded-[40px] leading-normal tracking-normal whitespace-nowrap">
        {platillo.nombre}
      </div>
      <p className="absolute w-[595px] top-[101px] h-[250px] left-[115px] border border-black p-4 text-black rounded-[50px]">
        {platillo.descripcion}
      </p>

      <p className="absolute w-[325px] top-[487px] left-[119px] font-nunito text-black">
      <img src="https://i.ibb.co/hZGB6c6/icons8-tiempo-24.png" alt="Tiempo:" />
      </p>
      
      <p className="absolute w-[325px] top-[487px] left-[149px] font-nunito text-black text-[30px]">
        {platillo.tiempo_estimado}
      </p>

      <p className="absolute w-[325px] top-[387px] left-[119px] font-nunito font-nunito font-bold text-black text-[64px] leading-normal tracking-normal">
        $
      </p>
      <input
        className="absolute w-[325px] top-[387px] left-[159px] font-nunito font-nunito font-bold text-black text-[64px] leading-normal tracking-normal bg-[white] text-black"
        disabled
        name="precio"
        value={platillo.precio}
        onChange={handleChange}
      />

      <div className="absolute w-[274px] h-[84px] top-[452px] left-[583px] rounded-[10px]">
        <input
          type="number"
          className="text-center text-[42px] absolute w-[274px] h-[84px] top-0 left-0 bg-white rounded-[10px] border-4 text-black border-black"
          name="cantidad"
          placeholder="1"
          min={1}
          max={platillo.cantidad}
          onChange={handleChange}
          required
        />
      </div>

      <div className="absolute w-[589px] h-[373px] top-[59px] left-[790px] bg-white">
        <img
          className="absolute w-[406px] h-[250px] top-[37px] left-[24px] rounded-[10px] object-cover;"
          src={platillo.imagen}
          alt={platillo.nombre}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="absolute w-[698px] h-[95px] top-[650px] left-[371px] bg-[#25a18ee6] rounded-full border-none cursor-pointer"
      >
        <div className="absolute w-[523px] h-[20px] top-[37px] left-[87px] font-poppins-bold text-[white] text-[32px] text-center leading-[20px]">
          Agregar
        </div>
      </button>
    </>
  );
}
