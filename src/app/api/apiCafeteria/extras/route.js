import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res =
      await conn.query(`SELECT extras_ingredientes.*, cat_ingredientes.nombre AS nombre_ingrediente
    FROM extras_ingredientes
    JOIN cat_ingredientes ON extras_ingredientes.id_ingredientes = cat_ingredientes.id_ingrediente;
    `);
    return NextResponse.json(res[0]);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
