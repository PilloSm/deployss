"use client";

import BtnOpcionesAdmin from "@/components/BtnOpcionesAdmin";
import AlimentoCrear from "@/components/AlimentoCrear";

export default function IngresarComida() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-white p-8 flex flex-row h-screen justify-center w-full">
      <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-white p-8 w-[1440px] h-full relative">
        <AlimentoCrear />
      </div>
    </div>
  );
}
