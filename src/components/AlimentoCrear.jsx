"use client";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { esNumero, soloLetras, soloLetrasDescripcion } from "@/libs/val";
function AlimentoForm() {
  const [error, setError] = useState("");
  const [comidaN, setComidaN] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    cantidad: 0,
    tipo: "",
  });
  const [datos, setDatos] = useState({
    tipo: [],
  });
  const [file, setFile] = useState(null);
  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setComidaN({
      ...comidaN,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get(`/api/apiCafeteria/ingredientes`).then((res) => {
      const { tipos } = res.data;
      setDatos({
        tipo: tipos,
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (esNumero(comidaN.precio)) {
      alert("2");

      setError("ds");
      return;
    }
    if (!file) {
      alert("3");

      setError("dsa");
      return;
    }
    const r = datos.tipo.find((tipo) => {
      console.log(datos.tipo);
      tipo.id_tipos === datos.tipo;
    });
    if (!datos.tipo.find((tipo) => tipo.id_tipos == comidaN.tipo)) {
      setError("Seleccione un tipo válido.");
      alert("6");

      return;
    }

    const formData = new FormData();
    formData.append("nombre", comidaN.nombre);
    formData.append("descripcion", comidaN.descripcion);
    formData.append("precio", comidaN.precio);
    if (file) {
      formData.append("imagen", file);
    }
    formData.append("cantidad", comidaN.cantidad);
    formData.append("tipos", comidaN.tipo);

    try {
      const resultado = await axios.post(`/api/apiCafeteria/Comida`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      form.current.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      console.log(error);
      console.error("Error al enviar la comida:", error);
    }
  };

  return (
    <div className="absolute left-[400px] top-[60px] font-nunito">
      <h1 className="text-4xl text-black font-bold text-center mb-8">
        Crear Nueva Comida
      </h1>
      <form
        className="bg-white shadow-md rounded-[20px] px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <label
          htmlFor="nombre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre de la comida:
        </label>
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          value={comidaN.nombre}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 flex flex-row"
          autoFocus
        />
        <br />
        <label
          htmlFor="descripcion"
          className="block text-gray-700 text-sm font-bold mb-2 flex flex-row"
        >
          Descripción de la comida:
        </label>
        <textarea
          name="descripcion"
          rows={3}
          placeholder="Descripción"
          onChange={handleChange}
          value={comidaN.descripcion}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 flex flex-row resize-none"
        />
        <br />
        <label className="text-black">Cantidad</label>
        <input
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 flex flex-row"
          autoFocus
          onChange={handleChange}
          name="cantidad"
          type="number"
        />
        <br />
        <label
          htmlFor="precio"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Precio de la comida:
        </label>
        <input
          name="precio"
          type="number"
          placeholder="Precio"
          onChange={handleChange}
          value={comidaN.precio}
          className="shadow text-black appearance-none border rounded w-full py-2 px-3"
        />
        <br />
        <div className="text-black">
          <br />
        </div>
        <br />
        <select className="text-black" name="tipo" onChange={handleChange}>
          <br />

          <option value="" className="text-black">
            Seleccionar tipo
          </option>
          {datos.tipo.map((item) => (
            <>
              <br />
              <option
                className="pt-4"
                key={item.id_tipos}
                value={item.id_tipos}
              >
                {item.nombre}
              </option>
              <br />
            </>
          ))}
          <br />
        </select>
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
          Imagen del Producto:
        </label>
        <input
          type="file"
          accept="img/*"
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 mb-2"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <br />

        {file && (
          <img
            className="w-96 object-contain mx-auto my-4"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
        <br />
        <button
          onClick={handleSubmit}
          className="bg-[#25a18ee6] hover:bg-[#3AAA91] w-full text-white font-bold py-2 px-4 rounded"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
}

export default AlimentoForm;
