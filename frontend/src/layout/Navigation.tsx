import React from "react";
import classNames from 'classnames';

export type NavigationItem = {
    label?: string;
    icon: React.ReactNode;
    path: string;
    placement?: 'default' | 'end';
};
export type NavigationProps = {
    items?: NavigationItem[];
    className?: string;
};

const NavigationItem = ({ icon, path, label }: NavigationItem) => {
    return (
        <div>
            {icon}
        </div>
    )
};

export default function Navigation({ items, className }: NavigationProps) {
    const navigationClassName = classNames(
        "h-full flex-col",
        className,
    );

    const defaultPlacementItems = React.useMemo(() => {
        return (items || []).filter(({ placement }) => {
           return placement === 'default' || !placement;
        });
    }, [items]);

    const endPlacementItems = React.useMemo(() => {
        return (items || []).filter(({ placement }) => {
            return placement === 'end';
        });
    }, [items]);

    return (
        <div className={navigationClassName}>
            {defaultPlacementItems.map((item) => (
                <NavigationItem key={item.path} {...item} />
            ))}

            {endPlacementItems.map((item) => (
                <NavigationItem key={item.path} {...item} />
            ))}
        </div>
    );
}
