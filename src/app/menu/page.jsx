"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCocina from "@/components/CardCocina";
export default function YourComponent() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await axios.get("/api/apiCliente/menu");
        setMenuData(res.data || null);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, []);

  return (
    <div className="max-w-[1120px] w-[95%] mx-auto">

        <div className="my-12">
          <img src="https://i.ibb.co/Gxgd5KQ/banner.jpg" className="max-w-full" alt="" />
        </div>

        <div className="text-2xl font-medium mb-8">
            Menú
          </div>
    
      <form className="flex flex-col items-center justify-center w-full overflow-hidden min-h-screen">
        <div className="w-full max-w-screen-2xl h-full flex flex-wrap justify-around bg-white relative">
          
          <div className="mt-16 md:mt-24 lg:mt-32 w-full max-w-screen-2xl h-full flex flex-wrap items-center justify-center">
            {menuData ? (
              menuData.map((item) => {
                return <CardCocina comidas={item} key={item.id} />;
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
