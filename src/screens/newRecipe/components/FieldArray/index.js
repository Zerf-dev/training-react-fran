import { arrayOf, element, func, shape, string } from 'prop-types';
import React from 'react';

import AddFieldButton from '../AddFieldButton';

import { getEmptyObject } from './utils';

const FieldArray = ({
  arrayFieldName,
  values,
  keyName,
  setValue,
  addField,
  emptyObject,
  addButtonClassName,
  component: Component,
  ...extraProps
}) => {
  const handleAdd = () => {
    setValue(arrayFieldName, addField(getEmptyObject(emptyObject, arrayFieldName, values?.length)));
  };
  return (
    <>
      {values.map(({ name: childrenName, ...props }, index) => (
        <Component
          {...props}
          {...extraProps}
          arrayFieldName={arrayFieldName}
          key={childrenName}
          name={childrenName}
          index={index}
          setValue={setValue}
        />
      ))}
      <AddFieldButton className={addButtonClassName} fieldName={keyName} onClick={handleAdd} />
    </>
  );
};

FieldArray.propTypes = {
  addButtonClassName: string,
  addField: func,
  arrayFieldName: string,
  component: element,
  emptyObject: shape({}),
  keyName: string,
  setValue: func,
  values: arrayOf(shape({}))
};

export default FieldArray;
