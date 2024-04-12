import { Menu } from 'antd';
import type { MenuProps } from 'antd';
export type MenuItem = Required<MenuProps>['items'][number];

interface NavProps {
    onClick: (param: any) => void;
    items: MenuItem[];
}

const Nav: React.FC<NavProps> = ({ onClick, items }) => {
    return ( 
        <>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </> 
    );
}

export default Nav;