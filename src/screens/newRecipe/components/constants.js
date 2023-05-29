import FieldInput from "../FieldInput";

export const DEFAULT_VALUES = {
  startupName: "",
  logoImage: "",
  productDescription: "",
  instagram: "",
  twitter: "",
  firstFeatureName: "",
  firstFeatureImage: "",
  secondFeatureName: "",
  secondFeatureImage: "",
  thirdFeatureName: "",
  thirdFeatureImage: "",
  primaryColor: "",
  secondaryColor: "",
};

export const FORM_FIELDS = [
  {
    stepNumber: 1,
    stepTitle: "Your startup",
    id: "startupName",
    component: FieldInput,
    label: "Startup name",
  },
  {
    id: "logoImage",
    component: FieldInput,
    label: "Logo image URL",
  },
  {
    stepNumber: 2,
    stepTitle: "Your product",
    id: "productDescription",
    component: FieldInput,
    label: "Product description",
    type: "textarea",
  },
  {
    id: "instagram",
    component: FieldInput,
    label: "Instagram URL",
  },
  {
    id: "twitter",
    component: FieldInput,
    label: "Twitter URL",
  },
  {
    stepNumber: 3,
    stepTitle: "Features",
    id: "firstFeatureName",
    component: FieldInput,
    label: "Feature 1: Name",
  },
  {
    id: "firstFeatureImage",
    component: FieldInput,
    label: "Feature 1: Image",
  },
  {
    id: "secondFeatureName",
    component: FieldInput,
    label: "Feature 2: Name",
  },
  {
    id: "secondFeatureImage",
    component: FieldInput,
    label: "Feature 2: Image",
  },
  {
    id: "thirdFeatureName",
    component: FieldInput,
    label: "Feature 3: Name",
  },
  {
    id: "thirdFeatureImage",
    component: FieldInput,
    label: "Feature 2: Image",
  },
  {
    stepNumber: 4,
    stepTitle: "Style",
    id: "primaryColor",
    component: FieldInput,
    label: "Primary color",
  },
  {
    id: "secondaryColor",
    component: FieldInput,
    label: "Secondary color",
  },
];
