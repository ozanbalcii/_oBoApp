import { forwardRef } from "react";

const Button = forwardRef(function ButtonComponent(
  {
    children,
    isActive = false,
    type = "button",
    url = "/",
    style = "",
    method = "",
    prefetch = true,
    target = "_self",
    className,
    onClick,
    loading,
    icon,
    text,
    onMouseEnter,
  },
  ref
) {
  const activeButtonClass = isActive
    ? "!border-blue-100 !bg-blue-100 !text-white-100"
    : "";
  const classNames = `font-bold relative flex cursor-pointer items-center justify-center transition-all pl-[9.5px] pr-[9.5px]  hover:bg-opacity-70 rounded-[0.2rem] ${style} ${activeButtonClass}`;
  return (
    <>
      {type === "button" ? (
        <button
          type={method === "" ? "button" : method}
          className={`${classNames}` + className}
          onClick={onClick}
          disabled={loading}
          onMouseEnter={onMouseEnter}
        >
          {children}
          {<i className="text-[18px]">{icon}</i>}
          {text}
        </button>
      ) : (
        <Link prefetch={prefetch} href={url} target={target} s>
          {children}
        </Link>
      )}
    </>
  );
});

export default Button;
