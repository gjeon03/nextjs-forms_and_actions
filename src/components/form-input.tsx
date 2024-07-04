import { ReactNode } from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
  icon?: ReactNode;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
  icon,
}: FormInputProps) {
  const hasError = errors.length > 0;

  return (
    <div className="flex flex-col gap-2 relative">
      <input
        name={name}
        className={`bg-transparent rounded-full px-9 text-sm w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-gray-300 border-none placeholder:text-neutral-400 ${
          hasError
            ? "ring-red-400 focus:ring-red-400 border-red-400"
            : "ring-neutral-200 focus:ring-gray-300 border-none"
        }`}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {icon && (
        <div className="absolute left-3 top-0 h-10 flex items-center">
          {icon}
        </div>
      )}
      {errors.map((error, index) => (
        <span key={index} className="text-red-400 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
