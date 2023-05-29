import Footer from "@/components/footer";
import Header from "@/components/header";
import TrashCan from "./assets/TrashCan.svg";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import recipes from "@/services/recipes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ROUTES } from "@/components/constants";
import FieldInput from "./components/FieldInput";

export default function NewRecipeScreen() {
  const router = useRouter();
  const { setValue, register, control, watch, handleSubmit } = useForm({
    defaultValues: {
      ingredients: [{}],
      steps: [{ number: 1 }],
    },
  });
  const {
    fields: ingredientsFields,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({
    control,
    name: "ingredients",
  });
  const {
    fields: StepsFields,
    append: stepsAppend,
    remove: stepsRemove,
  } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = (data) => {
    console.log(data);
    recipes.createRecipe(data);
    router.push(ROUTES.HOME);
  };

  const ingredientsParent = useAutoAnimate();
  const stepsParent = useAutoAnimate();

  return (
    <>
      <Header />
      <div className="px-7 py-10 border-y-2 border-gray-300 md:px-32 bg-background">
        <div className="text-2xl text-riquissima font-extrabold md:text-xl mb-6">
          CREACIÓN DE RECETA
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border mb-10 p-7 border-gray-300 rounded-xl">
            <div className="text-riquissima font-bold text-lg">
              TÍTULO DE RECETA
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/*<div className="m-4 ml-0">
                <label className="font-semibold">NOMBRE DE RECETA</label>
                <input
                  type="text"
                  {...register("name", { required: true, maxLength: 46 })}
                  className="w-full my-2 p-3 border border-riquissima rounded-lg bg-transparent"
                  placeholder="Escriba el nombre de la receta"
                />
                <div className="text-xs">Maximo 46 Caracteres</div>
              </div>*/}
              <FieldInput
                label={"NOMBRE DE RECETA"}
                config={{ required: true, maxLength: 46 }}
                name={"name"}
                placeholder={"Escriba el nombre de la receta"}
                register={register}
                underText={"Maximo 46 Caracteres"}
              />
              <div className="m-4 ml-0">
                <label className="font-semibold">CATEGORÍA</label>
                <select
                  name="category"
                  required
                  {...register("category", { required: true })}
                  defaultValue={""}
                  className="w-full my-2 p-3  border border-riquissima rounded-lg bg-transparent"
                >
                  <option disabled={true} value="">
                    Elija una categoría para la receta
                  </option>
                  <option value="breakfast">Desayuno</option>
                  <option value="lunch">Almuerzo</option>
                  <option value="tea_hour">Hora del té</option>
                  <option value="dinner">Cena</option>
                </select>
              </div>
              <div className="m-4 ml-0">
                <label className="font-semibold">
                  URL DE IMAGEN DEL PLATO TERMINADO
                </label>
                <input
                  type="text"
                  placeholder="Coloque el URL"
                  {...register("image", { required: true })}
                  className="w-full my-2 p-3 border border-riquissima rounded-lg bg-transparent"
                />
                <div className="text-xs">
                  Solo archivos en formato .jpg, .png o .bmp. Máximo de 2mb y
                  resolución de 1000x1000px.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={ingredientsParent}
            className="border mb-10 p-7 border-gray-300 rounded-xl"
          >
            <div className="text-riquissima font-bold text-lg mb-5">
              LISTA DE INGREDIENTES
            </div>
            {ingredientsFields.map((field, index) => {
              return (
                <div
                  key={field.id}
                  className="border mb-5 px-1 py-7 md:p-7 border-gray-300 rounded-xl flex flex-col md:flex-row md:justify-start"
                >
                  <div className="flex flex-row mb-5 md:w-1/2">
                    <div className="w-1/2 px-2 md:w-full">
                      <label className="font-semibold">UNIDAD</label>
                      <input
                        type="text"
                        {...register(`ingredients.${index}.unit`, {
                          required: true,
                        })}
                        placeholder="Escriba una unidad"
                        className="w-full my-1 p-3 border border-riquissima rounded-lg bg-transparent"
                      />
                    </div>
                    <div className="w-1/2 px-2 md:w-full">
                      <label className="font-semibold">CANTIDAD</label>
                      <input
                        type="number"
                        step={0.01}
                        {...register(`ingredients.${index}.quantity`, {
                          required: true,
                          valueAsNumber: true,
                        })}
                        placeholder="Escriba la cantidad"
                        className="w-full my-1 p-3 border border-riquissima rounded-lg bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 px-2">
                    <label className="font-semibold">NOMBRE</label>
                    <input
                      type="text"
                      {...register(`ingredients.${index}.name`, {
                        required: true,
                      })}
                      placeholder="Escriba el nombre del ingrediente"
                      className="w-full my-1 p-3 border border-riquissima rounded-lg bg-transparent"
                    />
                  </div>
                  {watch("ingredients").length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        {
                          ingredientsRemove(index);
                        }
                      }}
                      className="flex self-center relative top-1"
                    >
                      <TrashCan />
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => {
                {
                  ingredientsAppend({});
                }
              }}
              className="w-full px-4 py-2 md:w-auto font-bold text-riquissima border border-riquissima rounded-lg"
            >
              + agregar ingrediente
            </button>
          </div>
          <div
            ref={stepsParent}
            className="border mb-10 p-7 border-gray-300 rounded-xl"
          >
            <div className="text-riquissima font-bold text-lg mb-5">
              PASOS DE LA RECETA
            </div>
            {StepsFields.map((field, index) => {
              return (
                <div key={field.id} className="mb-10">
                  <div className="w-full">
                    <label className="font-semibold">PASO {index + 1}</label>
                    <input
                      type="text"
                      {...register(`steps[${index}].description`, {
                        required: true,
                      })}
                      placeholder="Escriba la descripción del paso"
                      className="w-full pb-20 my-1 p-3 border border-riquissima rounded-lg bg-transparent"
                    />
                  </div>
                  {watch("steps").length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        {
                          stepsRemove(index);
                          watch("steps").map((step, index) => {
                            setValue(`steps.${index}.number`, index + 1);
                          });
                        }
                      }}
                      className="flex m-auto relative md:m-0 md:left-3 top-2.5"
                    >
                      <TrashCan />
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => {
                {
                  stepsAppend({});
                  watch("steps").map((step, index) => {
                    setValue(`steps.${index}.number`, index + 1);
                  });
                }
              }}
              className="w-full px-4 py-2 md:w-auto font-bold text-riquissima border border-riquissima rounded-lg"
            >
              + agregar paso
            </button>
          </div>
          <div className="flex justify-around md:justify-end">
            <Link href={ROUTES.HOME}>
              <button
                type="button"
                className="mx-2 mt-6 px-10 py-3 md:px-7 md:py-2 md:mt-0 font-semibold text-riquissima border border-riquissima rounded-xl"
              >
                CANCELAR
              </button>
            </Link>
            <button
              type="submit"
              className="mx-2 mt-6 px-10 py-3 text-white md:py-2 md:px-7 md:mt-0 bg-riquissima rounded-xl font-semibold"
            >
              PUBLICAR
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
