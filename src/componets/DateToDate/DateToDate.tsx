import { DatePicker } from 'antd';
import './DateToDate.scss'
const { RangePicker } = DatePicker;

interface Props {
    style: any
}
const DateToDate:React.FC<Props>=({style}) => {
    return ( 
        <>
            <div className='d-flex flex-column align-items-center date-container' style={style}>
                <RangePicker format={'DD-MM-YYYY'} placeholder={['Check-in','Check-Out']} className='date'/>
            </div>     
        </>
    );
}

export default DateToDate;