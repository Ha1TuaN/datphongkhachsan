import { MenuProps } from 'antd';
import { StarOutlined,StarFilled, CheckSquareFilled, CheckSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Nav, { MenuItem } from '../../../componets/Layouts/Nav/Nav';


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function KhachSanNav() {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({
    OneStar: false,
    TwoStar: false,
    ThreeStar: false,
    FourStar: false,
    FiveStar: false,
  });

  // const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000000]);
  // const formatCurrency = (value: number) => {
  //   return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  // };

  // const onChange = (value: number | number[]) => {
  //   console.log('onChange: ', value);
  //   if (typeof value === 'number') {
  //     setPriceRange([priceRange[0], value]);
  //   } else {
  //     setPriceRange(value as [number, number]);
  //   }
  // };
  
  // const onChangeComplete = (value: number | number[]) => {
  //   console.log('onChangeComplete: ', value);
  // };
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<StarFilled className='text-warning'/>);
    }
    return stars;
};
const items: MenuProps['items'] = [
  getItem('Hạng sao', 'sub1', <StarOutlined />, [
    getItem('', 'OneStar', <span>{selectedItems['OneStar']  ? <CheckSquareFilled className='text-primary'/> : <CheckSquareOutlined className='text-primary' />}{renderStars(1)}</span>),
    getItem('', 'TwoStar', <span>{selectedItems['TwoStar'] ? <CheckSquareFilled className='text-primary'/> : <CheckSquareOutlined className='text-primary'/>}{renderStars(2)}</span>),
    getItem('', 'ThreeStar', <span>{selectedItems['ThreeStar'] ? <CheckSquareFilled className='text-primary'/> : <CheckSquareOutlined className='text-primary'/>}{renderStars(3)}</span>),
    getItem('', 'FourStar', <span>{selectedItems['FourStar'] ? <CheckSquareFilled className='text-primary'/> : <CheckSquareOutlined className='text-primary'/>}{renderStars(4)}</span>),
    getItem('', 'FiveStar', <span>{selectedItems['FiveStar'] ? <CheckSquareFilled className='text-primary'/> : <CheckSquareOutlined className='text-primary'/>}{renderStars(5)}</span>),
  ]),
];
  
    // getItem('Bảng giá', 'sub2', <AppstoreOutlined />, [
    //   getItem('','',<div className='d-flex justify-content-between'>
    //   <p>{formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}</p>
    // </div>),
    //   getItem('','',
    //   <div style={{ width: '100%' }}>
    //       <Slider
    //         style={{ width: '100%' }}
    //         range
    //         step={10}
    //         defaultValue={priceRange}
    //         min={0}
    //         max={200000000}
    //         onChange={onChange}
    //         onChangeComplete={onChangeComplete}
    //       />
    //     </div>
    //   )
    // ]),
    const onClick: MenuProps['onClick'] = (clickedItem) => {
      const key = clickedItem.key as string;
      setSelectedItems(prevState => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    };

    
  return ( 
    <Nav onClick={onClick} items={items}/>
  );
}

export default KhachSanNav;
