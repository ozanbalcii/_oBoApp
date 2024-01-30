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
  styles,
}) => {
  const handleChange = (selectedOption) => {
    onChange({
      target: {
        name: name,
        value: isMulti ? selectedOption : selectedOption.label,
      },
    });
  };

  return (
    <Select
      id={id}
      placeholder={placeholder}
      name={name}
      className={className}
      options={options}
      defaultValue={defaultValue}
      onChange={handleChange}
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
