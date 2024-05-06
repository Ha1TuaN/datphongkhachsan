import React, { useState } from 'react';
import { EnvironmentFilled, SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/store';
import { setDate, setSearchVal } from './redux/slice';

import './SearchHotel.scss';

const { RangePicker } = DatePicker;

const SearchHotel = () => {
    const searchAddress = useSelector((state: RootState) => state.checkInCheckOut.searchAddress);
    const dateInDateOut = useSelector((state: RootState) => state.checkInCheckOut.dateInDateOut);
    const dispatch = useDispatch();

    const [dateRange, setDateRange] = useState(dateInDateOut);
    const [search, setSearch] = useState(searchAddress);

    React.useEffect(() => {
        setDateRange(dateInDateOut);
        setSearch(searchAddress);
    }, [dateInDateOut, searchAddress]);
    
    const handleDateRangeChange = (dates: any) => {
        if (dates[0] && dates[1] && dates[0].isAfter(dates[1])) {
            setDateRange([dates[1], dates[0]]);
        } else {
            setDateRange(dates);
        }
        dispatch(setDate(dates));
    };

    
    const handleSubmit = () => {
        dispatch(setSearchVal(search));
    };

    return (
        <div className={`search-hotel`}>
            <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearch('')}
                className='search-place'
                placeholder="Thành phố, khách sạn, điểm đến"
                prefix={<EnvironmentFilled className='text-light' />}
            />
            <RangePicker
                className='checkIn-checkOut'
                value={dateRange}
                onChange={handleDateRangeChange}
                size="large"
                format={'DD-MM-YYYY'}
                placeholder={['Check-in','Check-Out']}
            />
            <Button className='btn-search' onClick={handleSubmit}>
                <SearchOutlined/> Tìm kiếm
            </Button>
        </div>
    );
};

export default SearchHotel;
