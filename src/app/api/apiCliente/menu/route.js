import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [comidasResultados] = await conn.query(`
      SELECT *
      FROM cat_comidas WHERE cantidad >0
    `);

    return NextResponse.json(comidasResultados);
  } catch (error) {
    console.error("Error al ejecutar las consultas:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
