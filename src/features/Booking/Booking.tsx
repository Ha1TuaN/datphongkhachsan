import { Form, Row, Col, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { requestGet2, requestPOST } from "../../api/api";
import Slider from "../../componets/Slider/Slider";
import { formatCurrency } from "../../value/value";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/redux/store";
import { message } from 'antd';

interface Props {
    id: number,
    isModalOpenBooking: boolean,
    setIsModalOpenBooking: React.Dispatch<React.SetStateAction<boolean>>;
}

const Booking:React.FC<Props> = ({id,isModalOpenBooking,setIsModalOpenBooking}) => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Đặt phòng thành công',
      });
    };
  
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'Đặt phòng thất bại',
      });
    };
  
    // const warning = () => {
    //   messageApi.open({
    //     type: 'warning',
    //     content: 'This is a warning message',
    //   });
    // };
    const date = useSelector((state: RootState) => state.checkInCheckOut.dateInDateOut)
    const [room, setRoom] = useState<any[]>([])
    const [name, setName] = useState('')
    const [sdt, setSdt] = useState('')
    const [email, setEmail] = useState('')
    const [CCDD, setCCDD] = useState('')
    let nameRoom
    const checkIn = date[0].$D + '-' + (date[0].$M+1) + '-' + date[0].$y 
    const checkOut = date[1].$D + '-' + (date[1].$M+1) + '-' + date[1].$y
    console.log(date[0].$d)
    useEffect(() => {
        const fetchData = async () => {
            const respone = await requestGet2("GetRoom", {
                id:id
            });
            setRoom(respone);
        };
        fetchData();
    }, []);
    room.forEach((room) => {
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
    if (room.length > 0 && typeof room[0].name === 'string') {
        nameRoom = room[0].name;
    }
    const handleCancel = () => {
        setIsModalOpenBooking(false);
    };
    const handleBooking = async () => {
        try {
            const response = await requestPOST('PostBooking', {
                roomId: id,
                name: name,
                sdt: sdt,
                email: email,
                cccd: CCDD,
                dateStart: date[0].$d,
                dateEnd: date[1].$d
            });
            console.log('Response:', response);
            setName('')
            setCCDD('')
            setEmail('')
            setSdt('')
            success()
            setTimeout(()=>{
                setIsModalOpenBooking(false)
            },1000)
        } catch (err) {
            error()
            console.error('Error:', err);
        }
    }
    
    return (  
        <>
            {contextHolder}
            <Modal title={nameRoom} open={isModalOpenBooking} onCancel={handleCancel} width='80%' okText="Đặt phòng" onOk={handleBooking}> 
                 {room.map((room) => (
                            <div>
                                <Row gutter={[8, 8]}>
                                    <Col md={16} span={12}><Slider images={room.imageUrl} name={room.name}/></Col>
                                    <Col md={8} span={12}>
                                        <div>
                                            <h6 style={{color:"#ff7640", marginTop:'10px'}}>Giá: {formatCurrency(room.price)}/1 đêm</h6>
                                            <h4 style={{color:"#ff7640", marginTop:'10px'}}>Tổng tiền: {formatCurrency(room.price*(Math.abs(date[1].$D - date[0].$D)))}</h4>
                                           <span>Check-in: {checkIn} Check-out: {checkOut}</span> 
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}    
                <Form layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col md={12} span={12}>
                                    <Form.Item label="Tên khách hàng" name="Ten" >
                                        <Input value={name} onChange={(e) => setName(e.target.value)}  />
                                    </Form.Item>
                                </Col>
                                <Col md={12} span={12}>
                                    <Form.Item label="Số Điện Thoại" name="SDT" >
                                        <Input value={sdt} onChange={(e) => setSdt(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col md={12} span={12}>
                                    <Form.Item label="Email" name="Email" >
                                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Item>
                                </Col>
                                <Col md={12} span={12}>
                                    <Form.Item label="CCCD" name="CCCD" >
                                        <Input value={CCDD} onChange={(e) => setCCDD(e.target.value)} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
            </Modal>
        </> 
    );
}

export default Booking;