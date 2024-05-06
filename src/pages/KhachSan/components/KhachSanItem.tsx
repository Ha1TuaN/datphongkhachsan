import '../KhachSan.scss'
import { useState, useEffect } from 'react';
import { requestGet2 } from '../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/store';
import { Link } from 'react-router-dom';
import { renderStars } from '../../../value/value';
import { EnvironmentFilled, StarFilled } from '@ant-design/icons';
import Slider from '../../../componets/Slider/Slider';
import { setSearchVal } from '../../../features/SearchHotel/redux/slice';
function KhachSanItem() {
    const [hotels, setHotels] = useState<any[]>([]);
    const address = useSelector((state: RootState) => state.checkInCheckOut.searchAddress)
    // const date = useSelector((state: RootState) => state.checkInCheckOut.dateInDateOut)
    // console.log(address, date)
    const dispath = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const respone = await requestGet2("GetHotel", {
                address: address
            });
            setHotels(respone);
        };
        fetchData();
    }, [address]);
    hotels.forEach((hotel) => {
        if (typeof hotel.imageUrl === 'string') {
            hotel.imageUrl = hotel.imageUrl.split(';').filter((url: string) => url.trim() !== '');
        }
        if (typeof hotel.utilities === 'string') {
            hotel.utilities = hotel.utilities.split(',');
        }
    });

    const handleClick = (id:number) => {
        const hotelName = (hotels.filter((hotel) => hotel.id === id))[0].name
        dispath(setSearchVal(hotelName))
    }
    return ( 
        <>
            <div className='w-100 flex-column'>
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="list-item d-flex">
                        <div className="item-image">
                            <Slider images={hotel.imageUrl} name={hotel.name}/>
                        </div>
                        <Link className='link-to-room' to={`/phong/${hotel.id}`} onClick={() => handleClick(hotel.id)}>
                        <div className="item-content d-flex flex-column align-items-start" >
                            <div className="item-title d-flex justify-content-start">
                                <h1>{hotel.name}</h1>
                            </div>
                            <div className="hotel-type">
                                <div className="">
                                    Khách sạn
                                </div>
                                <div className="">
                                    {renderStars(hotel.type, <StarFilled className='text-warning'/>)}
                                </div>
                            </div>
                            <div className="item-address">
                                <span><EnvironmentFilled/> {hotel.address}</span>
                            </div>
                            <div className="item-utility">
                                <ul className=''>
                                    {hotel.utilities.map((util:string, key:any)=>
                                        <div className='item-list'>
                                            <li key={key}>{util.trim()}</li>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                        </Link>
                </div>
                ))}
            </div>
        </>
    
     );
}

export default KhachSanItem;