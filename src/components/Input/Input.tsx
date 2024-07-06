import { InputHTMLAttributes } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'register'> {
  name: string;
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
  name = '',
  value = '',
  required = false,
  register,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 block text-body-sm font-medium text-dark dark:text-white">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <input
        className="w-full my-2 rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...(register && register(name as Path<T>))}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="text-red mb-4 text-sm">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
