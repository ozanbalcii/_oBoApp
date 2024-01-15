import { forwardRef } from "react";

const Button = forwardRef(function SideBarButton(
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
  const classNames = `flex cursor-pointer items-center justify-center transition-all pl-[9.5px] pr-[9.5px] rounded-[0.2rem] ${style} ${activeButtonClass}`;
  return (
    <>
      {type === "button" ? (
        <button
          type={method === "" ? "button" : method}
          className={`${classNames}` + className}
          onClick={onClick}
          disabled={loading}
          onMouseEnter={onMouseEnter}
          text={text}
        >
          {children}
          <div className="flex items-center ">
            <div>{<i className="text-[18px]">{icon}</i>}</div>
            <div className="pl-2 text-gray-200">{text}</div>
          </div>
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
