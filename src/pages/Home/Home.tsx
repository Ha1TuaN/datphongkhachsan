import './Home.scss'
import logo from '../../assets/img/trip.svg'
import {  Button, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setQuery } from './redux/slice';


function Home() {
    const [search, setSearch] = useState('');
    const dispath = useDispatch()
    const handleSearch = () => {
        dispath(setQuery(search))
    }
    return (
        <div className='home-container d-flex flex-column align-items-center'>
            <div className='home-logo'>
                <img src={logo} alt="" className='home-logo__img'/>
            </div>
                <div className='home-search'>
                    <Input placeholder="Bạn muốn đi đâu?" variant="filled" className='search' value={search} onChange={e => setSearch(e.target.value)}/>
                    <Link to={`khachsan?address=${search}`}>
                        <Button type="text" onClick={handleSearch} icon={<SearchOutlined className='text-white' />}/>
                    </Link>
                </div>
        </div >
    );
}

export default Home;