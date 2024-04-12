import './KhachSan.scss'
import { useState, useEffect } from 'react';
import Header from "../../componets/Layouts/Header/Header";
import KhachSanNav from './components/KhachSanNav';
import KhachSanItem from './components/KhachSanItem';
import DateToDate from '../../componets/DateToDate/DateToDate';

function KhachSan() {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setIsFixed(true); 
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header/>
            {isFixed && <DateToDate style={{ position: 'fixed', top: '0', left: '0', boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.5)', }} />}
            <div className='bg-light pt-5 mt-5' style={{height:'1000vh'}}>
                <div className='d-flex justify-content-start'>
                    <div className=''>
                        <KhachSanNav/>
                    </div>
                    <div className='w-100'>
                        <KhachSanItem/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KhachSan;