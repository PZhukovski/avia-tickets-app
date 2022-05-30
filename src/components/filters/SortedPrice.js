import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { filterPriceChange } from '../fligths/FlightsSlice'

const SortedPrice = () => {

    const [price, setPrice] = useState({
        min: '0',
        max: '1000000'
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterPriceChange(price))
    }, [price])

    const priceChange = (e) => {
        setPrice(prevState => {
            if (e.target.name === 'min') {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            }
            if (e.target.name === 'max') {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    return (
        <div className="sort-prices">
            <div className="title">Цена</div>
            <div className="sort-price">
                <label htmlFor="min">От</label>
                <input type="text"
                    name='min'
                    id="min"
                    value={price.min}
                    placeholder="0"
                    onChange={priceChange}
                />
            </div>

            <div className="sort-price">
                <label htmlFor='max'>До</label>
                <input type="text"
                    name='max'
                    id='max'
                    value={price.max}
                    placeholder="1000000"
                    onChange={priceChange}
                />
            </div>
        </div>

    )
}
export default SortedPrice;
