"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCocina from "@/components/CardCocina";
export default function YourComponent() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await axios.get(
          "/api/apiCliente/menu"
        );
        setMenuData(res.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <form className="bg-white flex flex-col items-center justify-center w-full overflow-hidden min-h-screen">
      <div className="w-full max-w-screen-2xl h-full flex flex-wrap justify-around bg-white relative">
        <div className="absolute top-4 md:top-8 lg:top-12 left-1/2 transform -translate-x-1/2 font-nunito font-normal text-black text-4xl md:text-5xl lg:text-6xl text-center leading-normal tracking-normal">
          Menú
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 w-full max-w-screen-2xl h-full flex flex-wrap items-center justify-center">
          {menuData.map((item) => (
            <CardCocina key={item.id} comidas={item} />
          ))}
        </div>
      </div>
    </form>
  );
}
