import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id_comidas = params.id;
    const cantidad = await conn.query(
      `SELECT * FROM cat_comidas where id_comidas=?`,
      [id_comidas]
    );
    if (!cantidad[0])
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 500 }
      );
    return NextResponse.json(cantidad[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
