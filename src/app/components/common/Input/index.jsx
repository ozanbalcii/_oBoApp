const Input = ({id, type, placeholder, required, className, onChange, value, name, disabled, autoComplete}) => {
    return (
      <>
        <input
          id={id ? id : ""}
          className={'!rounded-[4px]' + className}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
        />
      </>
    )
  }
  export default Input
  