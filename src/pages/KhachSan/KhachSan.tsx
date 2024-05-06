import './KhachSan.scss'
// import { useState, useEffect } from 'react';
import Header from "../../componets/Layouts/Header/Header";
//import KhachSanNav from './components/KhachSanNav';
import KhachSanItem from './components/KhachSanItem';
import SearchHotel from '../../features/SearchHotel/SearchHotel';
import { useScrollContext } from '../../lib/context/context';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSearchVal } from '../../features/SearchHotel/redux/slice';

function KhachSan() {
    const {isFixed} = useScrollContext()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSearchVal(""));
    }, []);

    return (
        <>
            <Header/>
            <div className={`search-hotel ${isFixed ? 'fixed' : ''}`}>
                <SearchHotel />
            </div>
            <div className='bg-light pt-5' style={{height:'1000vh'}}>
                <div className='d-flex justify-content-start'>
                    {/* <div className=''>
                        <KhachSanNav/>
                    </div> */}
                    <div className='flex-grow-1'>
                        <KhachSanItem/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KhachSan;