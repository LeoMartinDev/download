import React from "react";
import ButtonGroup from "./ButtonGroup";
import { ToggleButtonProps } from "./ToggleButton";

export type ToggleButtonGroupProps = {
  children:
    | React.ReactElement<ToggleButtonProps>
    | React.ReactElement<ToggleButtonProps>[];
  onChange?: (value: string | number) => void;
  value?: string | number | string[] | number[];
};

export default function ToggleButtonGroup({
  children,
  value,
}: ToggleButtonGroupProps) {
  const [selectedValue, setSelectedValue] = React.useState<
    ToggleButtonGroupProps["value"]
  >(value !== undefined ? value : null);

  const buttonsElements = React.useMemo(() => {
    if (!children) {
      return [];
    }

    return Array.isArray(children) ? children : [children];
  }, [children]);

  return (
    <ButtonGroup>
      {buttonsElements.map((child) => {
        return React.cloneElement(child, {
          onChange: (value: boolean) => {
            child.props.onChange && child.props.onChange(value);
          },
        });
      })}
    </ButtonGroup>
  );
}
