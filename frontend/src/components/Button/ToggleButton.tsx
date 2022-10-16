import classNames from "classnames";
import React from "react";
import Button, { ButtonProps } from "./Button";

export type ToggleButtonProps = {
  selected?: boolean;
  onChange?: (value: boolean) => void;
  value: string | number;
} & Omit<ButtonProps, "onClick">;

export default function ToggleButton({
  selected,
  onChange,
  className,
  ...props
}: ToggleButtonProps) {
  const [isSelected, setIsSelected] = React.useState(selected || false);

  React.useEffect(() => {
    setIsSelected(selected || false);
  }, [selected]);

  const toggleButtonClassName = React.useMemo(
    () =>
      classNames(
        {
          "bg-white text-black border border-black": isSelected,
        },
        className
      ),
    [className, isSelected]
  );

  const handleClick = React.useCallback(() => {
    const newValue = !isSelected;

    setIsSelected(newValue);
    onChange && onChange(newValue);
  }, [isSelected, onChange]);

  return (
    <Button
      {...props}
      className={toggleButtonClassName}
      onClick={handleClick}
    />
  );
}
