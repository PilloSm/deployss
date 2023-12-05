import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { estado, id_cuenta } = await request.json();

    await conn.query("UPDATE m_pedidos SET estado=? where id_pedido=?", [
      estado + 1,
      params.id,
    ]);
    const rse = {
      id_pedido: params.id,
      estado_anterior: estado,
      estado_actual: estado + 1,
      estado_recibido: false,
      id_cuenta: id_cuenta,
    };
    await conn.query("insert into registro_estados set ?", rse);
    const res = await conn.query("SELECT * FROM m_pedidos");
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
export async function PUT(request, { params }) {
  try {
    const { estado, saldo, id_cuenta } = await request.json();
    await conn.query(
      "UPDATE cat_usuarios set saldo=saldo+? where id_cuenta=?",
      [saldo, id_cuenta]
    );

    await conn.query("UPDATE m_pedidos SET estado=? where id_pedido=?", [
      estado,
      params.id,
    ]);
    const rse = {
      id_pedido: params.id,
      estado_anterior: estado,
      estado_actual: 1,
      estado_recibido: false,
      id_cuenta: id_cuenta,
    };
    await conn.query("insert into registro_estados set ?", rse);
    const res = await conn.query(
      "SELECT * FROM m_pedidos where estado=?",
      estado + 1
    );
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
