import React from "react";
import Link from "next/link";
import Image from "next/image";
const CardCocina = ({ comidas }) => {
  return (
    <Link href={`/client/comida?comida=${comidas.id_comidas}`}>
      <div className="relative mx-2 w-[303px] h-[402px] top-[30px] transition-transform transform hover:scale-102 cursor-pointer">
        <div className="relative h-full">
          <div className="w-[303px] h-[350px] top-[52px] bg-white rounded-[40px] shadow-md relative transition-transform transform hover:scale-110 left-0"></div>
          <img
            className="w-[227px] h-[227px] left-[38px] absolute top-0 object-cover rounded-full"
            width={277}
            height={277}
              src={comidas.imagen}
            alt={comidas.nombre}
          />
          <div className="absolute w-[204px] top-[249px] left-[40px] font-nunito font-normal text-black text-[28px] text-center leading-normal tracking-normal">
            {comidas.nombre}
          </div>
          <button className="absolute w-[240px] h-[40px] bottom-[20px] left-[30px] bg-[#25a18ee6] hover:bg-[#5cc0b1e6] rounded-[20px] border-none cursor-pointer leading-normal text-center flex items-center justify-center text-white text-[16px]">
            <div className="pedir">Ver</div>
          </button>
        </div>
      </div>
      <br />
      <br />
    </Link>
  );
};

export default CardCocina;
