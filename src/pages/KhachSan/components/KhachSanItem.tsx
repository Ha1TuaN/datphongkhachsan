import '../KhachSan.scss'
import { useState, useEffect } from 'react';
import { requestGet2 } from '../../../api/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/redux/store';
import { Link } from 'react-router-dom';
import { renderStars } from '../../../value/value';
import { StarFilled } from '@ant-design/icons';
function KhachSanItem() {
    const [hotels, setHotels] = useState<any[]>([]);
    const address = useSelector((state: RootState) => state.searchAddress.query)
    useEffect(() => {
        const fetchData = async () => {
            const respone = await requestGet2("GetHotel", {
                address: address
            });
            setHotels(respone);
        };
        fetchData();
    }, []);

    hotels.forEach((hotel) => {
        if (typeof hotel.imageUrl === 'string') {
            hotel.imageUrl = hotel.imageUrl.split(';').filter((url: string) => url.trim() !== '');
        }
        if (typeof hotel.description === 'string') {
            hotel.description = hotel.description.split(',');
        }
    });
    
    console.log(hotels)
    return ( 
        <>
            <div className='w-100 flex-column'>
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="list-item d-flex bg-light">
                      <div className="item-image">
                          <img src={hotel.imageUrl[0]} alt={hotel.name} />
                      </div>
                      <div className="item-content">
                          <div className="item-title d-flex justify-content-start">
                              <Link to={`/phong/${hotel.id}`}><h1>{hotel.name}</h1></Link>
                              <div className="item-type mt-1 ml-2">
                                  <div className="five-star">
                                      {renderStars(hotel.type, <StarFilled className='text-warning'/>)}
                                  </div>
                              </div>
                          </div>
                          <div className="item-address">
                              <span>Địa chỉ: {hotel.address}</span>
                          </div>
                          <div className="item-desc">
                              <ul>
                                  {hotel.description.map((desc:string, key:any)=>
                                      <div className='item-list'>
                                          <li key={key}>{desc.trim()}</li>
                                      </div>
                                  )}
                              </ul>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </>
    
     );
}

export default KhachSanItem;