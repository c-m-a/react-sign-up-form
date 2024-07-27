const InputField = ({ register, name, type, placeholder, errors }) => {
  const hasError = errors[name];
  const baseClass =
    "block p-2.5 w-full text-sm rounded-lg focus:ring focus:border";
  const errorClass =
    "placeholder-red-700 text-red-900 bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500 dark:placeholder-red-500 dark:text-red-500 dark:bg-gray-700 dark:border-red-500";
  const normalClass =
    "text-gray-900 bg-gray-50 border-gray-300 shadow-sm dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light";

  return (
    <div className="mb-4">
      <input
        {...register(name)}
        type={type}
        className={`${baseClass} ${hasError ? errorClass : normalClass}`}
        placeholder={placeholder}
      />
      {hasError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default InputField;
