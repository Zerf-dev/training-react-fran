export const getEmptyObject = (emptyObject, name, index) => ({
  ...emptyObject,
  name: `${name}.${index}`,
  isNew: true,
  editable: true
});
