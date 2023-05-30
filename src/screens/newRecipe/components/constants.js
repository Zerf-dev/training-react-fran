import FieldInput from "./FieldInput";
import FieldSelect from "./FieldSelect";

export const DEFAULT_VALUES = {
  name: "",
  category: "",
  imageURL: "",
  ingredients: [{}],
  steps: [{ number: 1 }],
};

export const FORM_FIELDS = [
  {
    id: "name",
    component: FieldInput,
    label: "NOMBRE DE RECETA",
    placeholder: "Escriba el nombre de la receta",
    underText: "Maximo 46 Caracteres",
    maxCharacters: 46,
  },
  {
    id: "category",
    component: FieldSelect,
    label: "CATEGORIA",
    defaultValue: "",
    options: [
      {
        value: "",
        optionName: " Elija una categoría para la receta",
        disabled: true,
      },
      { value: "breakfast", optionName: "Desayuno" },
      { value: "lunch", optionName: "Almuerzo" },
      { value: "tea_hour", optionName: "Hora del té" },
      { value: "dinner", optionName: "Cena" },
    ],
  },
  {
    id: "image",
    component: FieldInput,
    label: "URL DE IMAGEN DEL PLATO TERMINADO",
    placeholder: "Coloque el URL",
    underText:
      "Solo archivos en formato .jpg, .png o .bmp. Máximo de 2mb y resolución de 1000x1000px.",
  },
];
