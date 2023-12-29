import { forwardRef } from "react";

const DesktopButton = forwardRef(function ButtonComponent(
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
  const classNames = ` ${style} ${activeButtonClass}`;
  return (
    <>
      {type === "button" ? (
        <button
  type={method === "" ? "button" : method}
  className={`${classNames} ${className}`}
  onClick={onClick}
  disabled={loading}
  onMouseEnter={onMouseEnter}
>
  <div className="flex flex-row items-center">
    <div>    {<i className="text-[18px]">{icon}</i>}</div>
    <div className="ml-2">{/* Adjust margin as needed */}
      <div>{text}</div>
    </div>
  </div>
  {children}
</button>

      ) : (
        <Link prefetch={prefetch} href={url} target={target} s>
          {children}
        </Link>
      )}
    </>
  );
});

export default DesktopButton;
