import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';

import { NavigationItem } from "./layout/Navigation.tsx";
import Home from './pages/Home.jsx';

export type RouterItem = {
    path: string;
    element: React.ReactNode;
    icon: React.ReactNode;
    label?: string;
};

const router: RouterItem[] = [
    {
        path: "/",
        element: <Home />,
        icon: <FontAwesomeIcon icon={faGear} />,
        label: 'Done',
    },
];

export const routes = router.map(({ path, element }) => ({ path, element }));

export const navigationItems = router.map(({ path, icon, label }) => ({ path, icon, label }));
