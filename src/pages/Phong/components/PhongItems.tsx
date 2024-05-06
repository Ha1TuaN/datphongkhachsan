import React, { useEffect, useState } from "react"
import { requestGet2 } from "../../../api/api";
import { Card, notification } from "antd";
import Slider from "../../../componets/Slider/Slider";
import { CustomerServiceOutlined, RightOutlined } from "@ant-design/icons";
import { formatCurrency } from "../../../value/value";
import Booking from "../../../features/Booking/Booking";
import { useSelector } from "react-redux";
import { RootState } from "../../../lib/redux/store";

interface Props{
    param:number
}

const PhongItem : React.FC<Props> = ({param}) =>{
    const [api, contextHolder] = notification.useNotification();
    const [rooms, setRoom] = useState<any[]>([])
    const [isModalOpenBooking, setIsModalOpenBooking] = useState(false);
    const [id, setID] = useState(0)
    const date = useSelector((state: RootState) => state.checkInCheckOut.dateInDateOut)
    useEffect(() => {
        const fetchData = async () => {
            const respone = await requestGet2("GetRoom", {
                hotelID: param
            });
            setRoom(respone);
        };
        fetchData();
    }, []);
    rooms.forEach((room) => {
        if (typeof room.imageUrl === 'string') {
            room.imageUrl = room.imageUrl.split(';').filter((url: string) => url.trim() !== '');
        }
        if (typeof room.utilities === 'string') {
            room.utilities = room.utilities.split(',');
        }
        if (typeof room.services === 'string') {
            room.services = room.services.split(',');
        }
    });
    const handleClick = (id:number) => {
        if(date[0] == null && date[1] == null){
            api['error']({
                message: '',
                description:
                  'Vui lòng chọn ngày đặt phòng và ngày trả phòng',
                  duration: 1.5,
              });
        }
        else{
            setIsModalOpenBooking(true)
            setID(id)
        }
    }
    return(
        <>
            {contextHolder}
            {rooms.map((room) =>(
                <div className="mt-3 w-100" style={{height:"300pt", borderRadius:'10px'}}>
                    <div className="w-100 bg-light d-flex justify-content-around">
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Slider images={room.imageUrl} name={room.name}/>
                            }
                        >
                            <div className="d-flex flex-column align-items-start">
                                <h6>Diện tích: {room.description}</h6>
                                <button className="text-primary link-secondary btn btn-outline-light" style={{backgroundColor:'transparent'}}>Xem thêm chi tiết phòng <RightOutlined/></button>
                            </div>
                        </Card>
                        <div className="room-detail m-3">
                            <h4 className="text-primary">{room.name}</h4>
                            <div className="room-services">
                                <h5 className="text-warning"><CustomerServiceOutlined/> Dịch vụ phòng</h5>
                                <ul className="container list-group">
                                   <div className="row">
                                        {room.services.map((service:string, key:any) => (
                                            <li key={key} style={{color:"#0bc175"}} className="col-4 list-group-item">{service}</li>
                                        ))}
                                   </div>
                                </ul>
                            </div>
                            <div className="room-util mt-3">
                                <h5 className="text-warning"><CustomerServiceOutlined/> Tiện ích phòng</h5>
                                <ul className="container list-group">
                                   <div className="row">
                                        {room.utilities.map((service:string, key:any) => (
                                            <li key={key} style={{color:"#0bc175"}} className="col-4 list-group-item">{service}</li>
                                        ))}
                                   </div>
                                </ul>
                            </div>
                        </div>
                        <div className="room-price d-flex flex-column justify-content-end mb-2" style={{margin:"0 10px 50px 0"}}>
                            <h4 style={{color:"#ff7640"}}>{formatCurrency(room.price)}</h4>
                            <button type="button" className="btn" style={{color:"#fff", backgroundColor:'#ff7640'}} onClick={() => handleClick(room.id)}>Đặt ngay</button>
                            {isModalOpenBooking ? <Booking id={id} isModalOpenBooking={isModalOpenBooking} setIsModalOpenBooking={setIsModalOpenBooking}/> : <></>}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PhongItem