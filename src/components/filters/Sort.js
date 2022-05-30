import { useState } from "react"
import { useDispatch } from "react-redux";
import {sortFlightsChange} from '../fligths/FlightsSlice'

export const Sort = () => {

    const [value, setValue] = useState('low-to-high');
    const dispatch = useDispatch()
  

    const sortChange =(e) =>{
        setValue(e.target.value);
        dispatch(sortFlightsChange(e.target.value))
    }

    return (
        <>
            <div className="sort-radio">
                <div className="title">Сортировать</div>
                <div className="radio">
                    <input
                        className="custom-radio"
                        id="price-to-high"
                        name="custom-radio"
                        type="radio" 
                        value = 'low-to-high'
                        onChange ={sortChange}
                        defaultChecked={'checked'}
                        />
                    <label htmlFor="price-to-high" className="radio-label"> - по возрастанию цены</label>
                </div>
                <div className="radio">
                    <input
                        className="custom-radio"
                        id="price-to-low"
                        name="custom-radio"
                        type="radio"
                        value = 'high-to-low'
                        onChange={sortChange}
                        />
                    <label htmlFor="price-to-low" className="radio-label"> - по убыванию цены</label>
                </div>
                <div className="radio">
                    <input
                        className="custom-radio"
                        id="time-fly"
                        name="custom-radio"
                        type="radio"
                        value = 'fast-time-fly'
                        onChange = {sortChange}
                        />
                    <label htmlFor="time-fly" className="radio-label"> - по временени в пути</label>
                </div>
            </div>
        </>
    )

}