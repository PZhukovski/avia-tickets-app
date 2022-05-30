import aside from './aside.scss'
import { Sort } from './Sort.js';
import  FilterTransfer  from './FilterTranser.js';
import SortedPrice from './SortedPrice.js';
import SelectedAirLines from './SelectedAirlines.js';

const Aside = () => {

    return (
        <>
            <Sort />
            <FilterTransfer />
            <SortedPrice/>
            <SelectedAirLines/>
        </>

    )
}
export default Aside;