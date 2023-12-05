import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const res = await conn.query(
      `SELECT * FROM registro_estados where id_cuenta=? and estado_recibido=0`,
      [data.id_cuenta]
    );
    const result = await conn.query("SELECT * FROM cat_estados");
    const respuesta = {
      pedidos: [...res[0]],
      estados: [...result[0]],
    };
    return NextResponse.json(respuesta);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PUT(req) {
  try {
    const data = await req.json();
    const res = await conn.query(
      "UPDATE registro_estados set estado_recibido=1 where id_pedido=?",
      data.id_pedido
    );

    return NextResponse.json(rse[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
