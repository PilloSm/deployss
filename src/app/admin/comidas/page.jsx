"use client";

import BtnOpcionesAdmin from "@/components/BtnOpcionesAdmin";
import AlimentoCrear from "@/components/AlimentoCrear";

export default function IngresarComida() {
  return (
    <div className="min-h-screen bg-[#D9DEDF] p-8 flex flex-row h-screen justify-center w-full">
      <div className="w-[1440px] h-full relative">
        <AlimentoCrear />
      </div>
    </div>
  );
}
