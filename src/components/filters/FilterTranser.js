import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { filterTansferChange } from '../fligths/FlightsSlice.js'

const FilterTransfer = () => {

    const [filter, setFilter] = useState({
        oneTransfer: false,
        nonTransfer: false
    })
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(filterTansferChange(filter))
    }, [filter])

    const filterChange = (e) => {

        setFilter(prevState => {
            return {
                ...prevState,
                [e.target.value]: !prevState[e.target.value]
            }
        });
    }

    return (
        <>
            <div className="filter-transfer">
                <div className="title">Фильтровать</div>
                <div className="checkbox">
                    <input type="checkbox"
                        id="oneTransfer"
                        name="oneTransfer"
                        value='oneTransfer'
                        onChange={filterChange}
                    />
                    <label htmlFor="oneTransfer"> - 1 пересадка </label>
                </div>
                <div className="checkbox">
                    <input type="checkbox"
                        id="nonTransfer"
                        name="nonTransfer"
                        value="nonTransfer"
                        onChange={filterChange}
                    />
                    <label htmlFor="nonTransfer"> - без пересадок </label>
                </div>
            </div>

        </>
    )
}
export default FilterTransfer;