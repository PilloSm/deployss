import { conn } from "@/libs/db";
import { NextResponse } from "next/server";
import { processImage } from "@/libs/processImage";
import cloudinary from "@/libs/cloudinary";
export async function POST(request) {
  try {
    const data = await request.formData();
    const imagen = data.get("imagen");
    if (!imagen) {
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }

    const buffer = await processImage(imagen);

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
          },
          async (err, result) => {
            if (err) {
              reject(err);
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const result = await conn.query("INSERT INTO cat_comidas SET ?", {
      nombre: data.get("nombre"),
      tipo: data.get("tipos"),
      descripcion: data.get("descripcion"),
      precio: data.get("precio"),
      imagen: res.secure_url,
      cantidad: data.get("cantidad"),
      tiempo_estimado: data.get("tiempo_estimado"),
    });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const res = await conn.query("SELECT * FROM cat_comidas");
    return NextResponse.json(res[0]);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
