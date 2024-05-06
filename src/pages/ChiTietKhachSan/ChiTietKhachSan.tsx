import { useEffect, useState } from "react";
import './ChiTietKhachSan.scss'
import { requestGet2 } from "../../api/api";
import { Tooltip } from "antd";
import { renderStars } from "../../value/value";
import { EnvironmentFilled, RightOutlined, StarFilled } from "@ant-design/icons";
import GthieuKs from "../../features/GthieuKs/GthieuKs";

interface Props{
    hotelId: number;
}

const ChiTietKhachSan : React.FC<Props> = ({ hotelId }) => {
    const [isModal, setIsModal] = useState(false);
    const [hotel, setHotel] = useState<any[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
            const respone = await requestGet2("GetHotel", {
                id: hotelId
            });
            setHotel(respone);
        };
        fetchData();
    }, [hotelId]);

    hotel.forEach((hotel) => {
        if (typeof hotel.imageUrl === 'string') {
            hotel.imageUrl = hotel.imageUrl.split(';').filter((url: string) => url.trim() !== '');
        }
        if (typeof hotel.utilities === 'string') {
            hotel.utilities = hotel.utilities.split(',');
        }
    });
    const showModal = () => {
        setIsModal(true)
    }
    return ( 
        <div className="mt-3 d-flex justify-content-center">
            {hotel.map((hotel) => (
                <div className="content-detail-ks">
                    <div>
                        <div className="d-flex flex-column align-items-start">
                            <h1>{hotel.name}</h1>
                            <div className="detail-type">
                                <div className="">
                                    Khách sạn
                                </div>
                                <div className="">
                                    {renderStars(hotel.type, <StarFilled className='text-warning'/>)}
                                </div>
                            </div>
                            <div className="mt-2">
                                <p><EnvironmentFilled className='text-muted' /> {hotel.address}</p>
                            </div>
                        </div>
                        <div>
                           <div className="d-flex justify-content-center w-100">
                               <Tooltip title="Show tất cả ảnh" color='#000' placement="left">
                                    <div className="img-desc">
                                        <img src={hotel.imageUrl[0]} alt={hotel.name} />
                                    </div> 
                               </Tooltip>   
                                <div className="d-flex flex-column flex-wrap img-items">
                                    {hotel.imageUrl.slice(1, 7).map((url:string, index:number) => (
                                        <Tooltip title="Show tất cả ảnh" color='#000' placement="right">
                                            <img key={index} src={url} alt={hotel.name} />
                                        </Tooltip>
                                   ))}
                               </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                            <div className="detail-util">
                                <h5>Tiện ích chính</h5>
                                <ul>
                                    {hotel.utilities.map((util:string, key:any)=>
                                         <li key={key}>{util.trim()}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="desc-hotel">
                                <div className="desc-title">
                                    <h5>Giới thiệu về khách sạn</h5>
                                    <h6 onClick={showModal}>Xem thêm <RightOutlined/></h6>
                                    {isModal ? <GthieuKs hotelName={hotel.name} isModalOpenGthieuKs={isModal} setIsModalOpenGthieuKs={setIsModal} descHotel={hotel.descHotel} descLocation={hotel.descLocation}/> : <></>}
                                </div>
                                <div className="desc">
                                    <span>{hotel.descLocation} </span>
                                    <span>{hotel.descHotel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChiTietKhachSan;