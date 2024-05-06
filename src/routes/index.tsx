// routes.tsx
import { RouteObject } from "react-router-dom";
import KhachSan from "../pages/KhachSan/KhachSan";
import Phong from "../pages/Phong/Phong";

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <KhachSan />
    },
    {
        path: '/khachsan/:address', 
        element: <KhachSan />
    },
    {
        path: '/Phong/:param', 
        element: <Phong />
    },
];

const privateRoutes: RouteObject[] = [];

export { publicRoutes, privateRoutes };
