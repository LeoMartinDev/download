import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

import { noop } from "../../utils/noop";

export type ButtonProps = {
  icon?: React.ComponentType<IconType>;
  children?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick = noop,
  icon,
  className,
}: ButtonProps) {
  const buttonClassName = React.useMemo(
    () =>
      classNames(
        "transition duration-150 ease-in-out bg-black text-white border border-transparent hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-black flex flex-col justify-center items-center px-3 py-2 rounded-md",
        className
      ),
    [className]
  );

  const Icon = React.useMemo(() => {
    return icon;
  }, [icon]);

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children ? children : null}
      {icon ? <Icon /> : null}
    </button>
  );
}
