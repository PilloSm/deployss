import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { id_cuenta } = await request.json();
    const res = await conn.query(
      `SELECT * FROM registro_estados where id_cuenta=? and estado_recibido=0`,
      [id_cuenta]
    );
    return NextResponse.json(res[0]);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
