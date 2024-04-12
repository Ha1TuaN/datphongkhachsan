import { useParams } from "react-router-dom";
import Header from "../../componets/Layouts/Header/Header";
import ChiTietKhachSan from "../ChiTietKhachSan/ChiTietKhachSan";

function Phong() {
    let {param} = useParams()
    return (
        <div>
            <Header />
            <ChiTietKhachSan hotelId={Number(param)}/>
        </div>
    );
}

export default Phong;