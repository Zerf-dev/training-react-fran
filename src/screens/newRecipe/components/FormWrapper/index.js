import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

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

  const Container = separateButtons ? "div" : Fragment;

  return (
    <div className={containerClassName}>
      <form
        className={!separateButtons && formContainerClassName}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container className={separateButtons && formContainerClassName}>
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
        <button
          className="bg-zerf-purpleHeart w-full p-3 rounded-xl mt-8"
          type="submit"
        >
          Create landing
        </button>
      </form>
    </div>
  );
}

export default FormWrapper;
