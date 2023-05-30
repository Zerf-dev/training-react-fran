import React, { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import TrashCan from "../../assets/TrashCan.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function FormWrapper({
  onSubmit,
  components,
  defaultValues,
  formMode,
  containerClassName,
  formContainerClassName,
  separateButtons = false,
}) {
  const {
    handleSubmit,
    control,
    watch,
    clearErrors,
    setValue,
    register,
    formState,
  } = useForm({
    defaultValues: defaultValues,
    mode: formMode,
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

  const ingredientsParent = useAutoAnimate();
  const stepsParent = useAutoAnimate();

  const Container = separateButtons ? "div" : Fragment;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={containerClassName}>
        <div className="text-riquissima font-bold text-lg">
          TÍTULO DE RECETA
        </div>
        <div className={!separateButtons && formContainerClassName}>
          <Container>
            {components.map(
              ({
                name,
                component: Component,
                hide,
                stepNumber,
                stepTitle,
                ...otherProps
              }) =>
                !hide && (
                  <div key={name}>
                    {stepNumber && stepTitle && (
                      <div className="flex flex-row text-black items-center mt-8 font-bold">
                        <div className="rounded-full mr-2 text-white bg-zerf-purpleHeart p-1 w-6 h-6  flex flex-col items-center justify-center">
                          {stepNumber}
                        </div>
                        {stepTitle}
                      </div>
                    )}
                    <Component
                      control={control}
                      name={name}
                      formState={formState}
                      errors={formState.errors}
                      watch={watch}
                      setValue={setValue}
                      clearErrors={clearErrors}
                      register={register}
                      {...otherProps}
                    />
                  </div>
                )
            )}
          </Container>
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
                <textarea
                  {...register(`steps[${index}].description`, {
                    required: true,
                  })}
                  rows={3}
                  placeholder="Escriba la descripción del paso"
                  className="resize-none w-full  my-1 p-3 border border-riquissima rounded-lg bg-transparent"
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
  );
}

export default FormWrapper;
