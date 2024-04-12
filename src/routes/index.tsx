// routes.tsx
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import KhachSan from "../pages/KhachSan/KhachSan";
import Phong from "../pages/Phong/Phong";
import ChiTietPhong from "../pages/ChiTietPhong/ChiTietPhong";

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/khachsan',
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
    {
        path: '/chitietphong', 
        element: <ChiTietPhong />
    }
];

const privateRoutes: RouteObject[] = [];

export { publicRoutes, privateRoutes };
