import Select from "react-select";

const CustomSelect = ({
  id,
  placeholder,
  required,
  className,
  name,
  options,
  defaultValue = [],
  onChange,
  isLoading,
  isSearchable = true,
  isMulti,
  disabled,
}) => {
  return (
    <Select
    id={id}
    placeholder={placeholder}
    name={name}
    className={className}
    options={options}
    defaultValue={defaultValue}
    onChange={onChange}
    isSearchable={isSearchable}
    isMulti={isMulti}
    required={required}
    isDisabled={disabled}
    isLoading={isLoading}
      loadingMessage={() => "Searching..."}
      noOptionsMessage={() => "Result not found."}
    />
  );
};

export default CustomSelect;
