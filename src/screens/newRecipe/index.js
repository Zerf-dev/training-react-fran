import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrashCan from "./assets/TrashCan.svg";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import recipes from "@/services/recipes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ROUTES } from "@/constants/routes";

import { DEFAULT_VALUES, FORM_FIELDS } from "./components/constants";
import FormWrapper from "./components/FormWrapper";

export default function NewRecipeScreen() {
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    recipes.createRecipe(data);
    router.push(ROUTES.HOME);
  };

  return (
    <>
      <Header />
      <div className="px-7 py-10 border-y-2 border-gray-300 md:px-32 bg-background">
        <div className="text-2xl text-riquissima font-archivo font-black md:text-xl mb-6">
          CREACIÓN DE RECETA
        </div>
        <FormWrapper
          onSubmit={onSubmit}
          defaultValues={DEFAULT_VALUES}
          components={FORM_FIELDS}
          formContainerClassName={"grid grid-cols-1 md:grid-cols-2"}
          containerClassName={"border mb-10 p-7 border-gray-300 rounded-xl"}
        />
      </div>
      <Footer />
    </>
  );
}
