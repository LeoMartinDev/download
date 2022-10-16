import React from "react";
import {MdOutlineDownloading, MdSettings} from "react-icons/md";
import {IconType} from "react-icons";

import Home from './pages/Home.jsx';
import {NavigationItem} from "./layout/Navigation";

export type RouterItem = {
    path: string;
    element: React.ReactNode;
} & NavigationItem;

const router: RouterItem[] = [
    {
        path: "/",
        element: <Home/>,
        icon: MdOutlineDownloading,
        label: 'Done',
    },
    {
        path: "/settings",
        element: <div>settings</div>,
        icon: MdSettings,
        label: 'Settings',
        placement: 'end',
    },
];

export const routes = router.map(({path, element}) => ({path, element}));

export const navigationItems = router.map(({path, icon, label, placement}) => ({path, icon, label, placement}));
