import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);
    const res = await conn.query(
      `SELECT * FROM registro_estados where id_cuenta=? and estado_recibido=0`,
      [data.id_cuenta]
    );
    console.log(res);
    return NextResponse.json(res[0]);
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
