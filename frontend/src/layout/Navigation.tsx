import React from "react";
import classNames from 'classnames';
import {useMatch, useNavigate} from "react-router-dom";
import {IconType} from "react-icons";

export type NavigationItem = {
    label?: string;
    icon: React.ComponentType<IconType>;
    path: string;
    placement?: 'default' | 'end';
};

type NavigationItemProps = {
    className?: string;
} & Pick<NavigationItem, 'path' | 'icon' | 'label'>;

const NavigationItem = ({icon, className, path, label}: NavigationItemProps) => {
    const navigate = useNavigate();
    const isActive = useMatch(path);
    const Icon = React.useMemo(() => icon ? icon : null, [icon]);

    const goToPath = React.useCallback(() => {
        if (!path) {
            return;
        }

        navigate(path);
    }, [path]);

    const navigationItemClassName = React.useMemo(() =>
        classNames(
            "transition duration-150 ease-in-out flex flex-col justify-center items-center h-[56px] border-l-2 hover:cursor-pointer hover:text-gray-800",
            className,
            {
                "border-blue-500 text-gray-800": isActive,
                "border-transparent text-gray-400": !isActive,
            },
        ), [isActive])

    return (
        <div onClick={goToPath} className={navigationItemClassName}>
            <Icon className="text-3xl -ml-[4px]" />
        </div>
    );
};

type NavigationProps = {
    items?: NavigationItem[];
    className?: string;
};

export default function Navigation({items, className}: NavigationProps) {
    const navigationClassName = classNames(
        "h-full flex flex-col",
        className,
    );

    const defaultPlacementItems = React.useMemo(() => {
        return (items || []).filter(({placement}) => {
            return placement === 'default' || !placement;
        });
    }, [items]);

    const endPlacementItems = React.useMemo(() => {
        return (items || []).filter(({placement}) => {
            return placement === 'end';
        });
    }, [items]);

    return (
        <div className={navigationClassName}>
            {defaultPlacementItems.map((item) => (
                <NavigationItem key={item.path} {...item} />
            ))}

            {endPlacementItems.map((item) => (
                <NavigationItem
                    key={item.path}
                    className="mt-auto"
                    {...item}
                />
            ))}
        </div>
    );
}
