import { Modal } from "antd";

interface Props {
    hotelName: string,
    isModalOpenGthieuKs: boolean,
    setIsModalOpenGthieuKs: React.Dispatch<React.SetStateAction<boolean>>,
    descHotel: string,
    descLocation: string
}

const GthieuKs:React.FC<Props> = ({hotelName,isModalOpenGthieuKs,setIsModalOpenGthieuKs, descHotel, descLocation}) => {
    const handleCancel = () => {
        setIsModalOpenGthieuKs(false)
    }
    return (  
        <>
            <Modal title={hotelName} open={isModalOpenGthieuKs} footer={null} onCancel={handleCancel} width='80%'> 
                <h4 className="text-primary">Vị trí</h4>
                <p>{descLocation}</p>
                <h4 className="text-primary">Mô tả khách sạn</h4>
                <p>{descHotel}</p>
            </Modal>
        </> 
    );
}

export default GthieuKs;