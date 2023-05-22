import Footer from "@/components/footer";
import Header from "@/components/header";

export default function NewRecipeScreen() {
  return (
    <>
      <Header />
      <div className="px-7 py-10 border-y-2 border-gray-300 md:px-32">
        <div className="text-riquissima font-extrabold text-xl">CREACIÓN DE RECETA</div>
        <form>
          <div className="border p-7 border-gray-300 rounded-xl">
            <div className="text-riquissima font-bold text-lg">TÍTULO DE RECETA</div>
            <div className="grid grid-cols-2">
              <div className="m-4">
                <div>NOMBRE DE RECETA</div>
                <input className="w-full" />
                <div>Maximo 46 Caracteres</div>
              </div>
              <div className="m-4">
                <div>CATEGORÍA</div>
                <input />
              </div>
              <div className="m-4"> 
                <div>IMAGEN DEL PLATO TERMINADO</div>
                <input />
                <div>
                  Solo archivos en formato .jpg, .png o .bmp. Máximo de 2mb y
                  resolución de 1000x1000px.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
