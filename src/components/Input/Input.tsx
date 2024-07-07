import React from 'react';
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';

export interface InputProps<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<U>;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder = '',
  errors = {},
  label = '',
  name,
  register,
  ...rest
}: InputProps<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
        {label}
        {rest.required && <span className="text-red"> *</span>}
      </label>
      <input
        className="w-full my-2 rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        placeholder={placeholder}
        disabled={disabled}
        {...(register && register(name))}
        {...rest}
      />
    </div>
  );
};

export default Input;
