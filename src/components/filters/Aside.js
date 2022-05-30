import aside from './aside.scss'
import { Sort } from './Sort';
import  FilterTransfer  from './FilterTranser';
import SortedPrice from './SortedPrice';
import SelectedAirLines from './SelectedAirlines';

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