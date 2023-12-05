import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await conn.query("select * from cat_tipos");
    const tot = { tipos: [...result[0]] };
    const ingrediente = tot;
    return NextResponse.json(ingrediente);
  } catch (error) {
    return NextResponse.json(
      { message: "Ups ha ocurrido un error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const res = await conn.query(
      `update cat_comidas set cantidad=${data.cantidad} where id_comidas=${data.id_comidas}`
    );
    return NextResponse.json(res[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
