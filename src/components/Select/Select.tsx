import React from 'react';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  register: any;
  required?: boolean;
  errors: any;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  name,
  options,
  register,
  required = false,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        {...register(name, { required })}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Select;
