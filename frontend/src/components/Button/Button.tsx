import React from "react";
import {IconType} from "react-icons";
import classNames from "classnames";

import {noop} from "../../utils/noop";

type ButtonProps = {
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
    const buttonClassName = classNames(
        "bg-black text-white border border-transparent hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-black flex flex-col justify-center items-center px-3 py-2",
        className,
    );

    const Icon = React.useMemo(() => {
        return icon;
    }, [icon]);

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            {children ? children : null}
            { icon ? <Icon /> : null }
        </button>
    );
}
