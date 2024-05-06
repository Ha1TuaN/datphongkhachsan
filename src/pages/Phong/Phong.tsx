import { useParams } from "react-router-dom";
import Header from "../../componets/Layouts/Header/Header";
import ChiTietKhachSan from "../ChiTietKhachSan/ChiTietKhachSan";
import SearchHotel from "../../features/SearchHotel/SearchHotel";
import { useScrollContext } from "../../lib/context/context";
import PhongItem from "./components/PhongItems";
import { useDispatch } from "react-redux";

function Phong() {
    let {param} = useParams()
    const {isFixed} = useScrollContext()
    return (
        <div className="w-100">
            <Header />
            <div className={`search-hotel ${isFixed ? 'fixed' : ''}`}>
                <SearchHotel />
            </div>
            <div className="d-flex flex-column align-items-center" style={{width:"90%", margin: 'auto'}}>
                    <ChiTietKhachSan hotelId={Number(param)}/>
                    <PhongItem param={Number(param)}/>
                </div>
        </div>
    );
}

export default Phong;