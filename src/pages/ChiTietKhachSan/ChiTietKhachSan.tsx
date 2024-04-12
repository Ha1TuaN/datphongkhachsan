import { useEffect, useState } from "react";
import { requestGet2 } from "../../api/api";

interface Props{
    hotelId: number;
}

const ChiTietKhachSan : React.FC<Props> = ({ hotelId }) => {
    const [hotel, setHotel] = useState<any[]>([])
    const [indexImg, setIndexImg] = useState<number>(0);
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
        if (typeof hotel.description === 'string') {
            hotel.description = hotel.description.split(',');
        }
    });
    
    
    const handleClickImg = (value:number) =>{
        setIndexImg(value)
    }
    return ( 
        <div className="">
            {hotel.map((hotel) => (
                <div>
                    <h1>{hotel.name}</h1>
                    <div className="d-flex flex-column">
                        <img src={hotel.imageUrl[indexImg]} width={600} height={600}/>
                        <div className="d-flex">
                            {hotel.imageUrl.map((img:string, index:number) => (
                            <img key={index} src={img} alt={`Image ${index}`} width={200} height={100} onClick={()=>handleClickImg(index)}/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChiTietKhachSan;