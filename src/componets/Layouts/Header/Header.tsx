import React, { useState } from 'react';
import './Header.scss';
import logo from '../../../assets/img/logoweb.svg'
import { Input } from 'antd';
import { BellFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../../pages/Home/redux/slice';

const { Search } = Input;
function Header() {
    const [search, setSearch] = useState('');
    const dispath = useDispatch()
    const handleSearch = () => {
        dispath(setQuery(search))
    }
    return (
        <>
            <div className='header d-flex align-items-center justify-content-between'>
                <div>
                    <img src={logo} alt="abc" className='header-logo' />
                </div>
                <div>
                <Search placeholder="Bạn muốn đi đâu?" value={search} onChange={e => setSearch(e.target.value)} onSearch={handleSearch} enterButton className='header-search' />
                </div>
                <div >
                    <BellFilled className='header-notify'/>
                </div>
            </div>
        </>
     );
}

export default Header;