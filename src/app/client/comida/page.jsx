import FormComida from "@/components/formComida";

export default async function Comida(request) {
  const { searchParams } = request;
  const comidaId = searchParams.comida;

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-white min-h-screen flex flex-row justify-center w-full">
      <div className="bg-white top-[50px] w-[1440px] h-[864px] relative shadow-xl rounded-[50px]">
        <div className="absolute top-[29px] h-[500px]">
          <FormComida comidas={comidaId} />
        </div>
      </div>
    </div>
  );
}
