import React from "react";
import classNames from "classnames";

import Button, { ButtonProps } from "./Button.js";

type ButtonGroupProps = {
  className?: string;
  children?:
    | React.ReactElement<ButtonProps>
    | React.ReactElement<ButtonProps>[];
};

export default function ButtonGroup({ className, children }: ButtonGroupProps) {
  const buttonGroupClassName = classNames("flex flex-row", className);
  const buttonsElements = React.useMemo(() => {
    if (!children) {
      return [];
    }

    return Array.isArray(children) ? children : [children];
  }, [children]);

  const renderButtons = React.useCallback(
    () =>
      buttonsElements.map((el, index) => {
        let buttonClassName = "rounded-none";

        if (index === 0) {
          buttonClassName = `${buttonClassName} border-l rounded-l-md`;
        }

        if (index === buttonsElements.length - 1) {
          buttonClassName = `${buttonClassName} border-r rounded-r-md`;
        }

        return React.cloneElement(el, {
          key: `button-${index}`,
          className: buttonClassName,
        });
      }),
    [buttonsElements]
  );

  return <div className={buttonGroupClassName}>{renderButtons()}</div>;
}
