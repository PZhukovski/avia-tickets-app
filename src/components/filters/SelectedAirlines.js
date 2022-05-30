import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { selectedAirlinesChange } from '../fligths/FlightsSlice';
import { fetchAirlines, allAirlines } from '../airlines/AirlinesSlice'
import { store } from '../../store/index';


const SelectedAirLines = () => {
    const state = store.getState();

    const dispatch = useDispatch();
    const airlines = useSelector(allAirlines);
    const [select, setSelect] = useState('');

    useEffect(() => {
        dispatch(fetchAirlines());
    }, []);

    useEffect(() => {
        const transformSelect = airlinesTransform(select);
        dispatch(selectedAirlinesChange(transformSelect))
           
    }, [select]);


const selectChange = (e) => {
    setSelect(prevState => {
        return {
            ...prevState,
            [e.target.name]: !prevState[e.target.name]
        }
    });
}

const airlinesTransform = (obj) => {
    let array = []
    for (const key in obj) {
        if (obj[key]) {
            array.push(key)
        }
    }
    return array
}

return (
    <div className="filter-airlines">
        <div className="title">Фильтровать</div>
        {airlines.map((item, i) => {
            return (
                <div key={i} className="checkbox-airline" >
                    <input type="checkbox"
                        id={item.carrier}
                        name={item.carrier}
                        value={item.carrier}
                        onChange={selectChange}
                    />
                    <label htmlFor={item.carrier}>
                        {item.carrier.length > 12 ?
                            `- ${item.carrier.slice(0, 12)}...`
                            : `- ${item.carrier}`} от {item.price}p.</label>
                </div>
            )

        })}

    </div>
)
}
export default SelectedAirLines; 