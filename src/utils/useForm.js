import {useState} from 'react';

export const useForm = initialValue => {
  //initialValue Value awal yang dikirim yang masih kosong
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};
