import { getTransformTime } from '../../helpers/getTransformTime'
import arrow from './arrow-right.svg';
import { getFlyTime } from '../../helpers/getFlyTime';

const FlightItem = ({ carrier, price, departure, arrival }) => {
    
    const arrivalDate1 = getTransformTime(arrival.departureDate);
    const arrivalDate2 = getTransformTime(departure.arrivalDate);
    const departureDate1 = getTransformTime(arrival.arrivalDate);
    const departureDate2 = getTransformTime(departure.departureDate);
     const departureFlyTime1 = getFlyTime(arrival.departureDate, arrival.arrivalDate);
     const departureFlyTime2 = getFlyTime(departure.departureDate, departure.arrivalDate );
  
    return (

        <div className='ticket'>
            <div className='ticket-info-title'>
                <div className='ticket-info-price'>
                    {price} P
                </div>
                <div className='ticket-info-price-for-one'>Стоимость для одного взрослого пассажира</div>
            </div>
            <div className='ticket-info-data'>
                <div className="ticket-info-airoport">
                    <div className="ticket-info-airoport-departure">
                        {arrival.departureCity.caption}, {arrival.departureAirport.caption} ({arrival.departureAirport.uid})
                    </div>
                    <div className="img-arrow" >
                        <img src={arrow} alt="" />
                    </div>
                    <div className="ticket-info-airoport-departure">
                        {arrival.arrivalCity.caption}, {arrival.arrivalAirport.caption} ({arrival.arrivalAirport.uid})
                    </div>
                </div>
                <div className='gray-border' />
                <div className='ticket-info-time'>
                    <div className='ticket-info-time-departure'>
                        <div className='ticket-info-time-time'>
                            {arrivalDate1.time}
                        </div>
                        <div className='ticket-info-day'>
                            {arrivalDate1.day}
                        </div>

                    </div>
                    <div className='ticket-info-time-duration'>
                        {departureFlyTime1.hours}:{departureFlyTime1.minutes}
                    </div>
                    <div className='ticket-info-time-arrival'>
                        <div className='ticket-info-day'>
                            {departureDate1.day}
                        </div>
                        <div className='ticket-info-time-time'>
                            {departureDate1.time}
                        </div>

                    </div>
                </div>
                <div className='ticket-info-tranfer'>
                    {arrival.transfers ?
                        <div className='ticket-info-transfer-info'>{arrival.transfers} пересадка</div>
                        : <div className='ticket-info-transfer-info'>Прямой рейс</div>}
                </div>
                <div className='ticket-info-airline'>
                    Рейс выполняет: {arrival.carrier}
                </div>
            </div>
            <div className='border-ticket-info'></div>
            <div className='border'></div>
            <div className='ticket-info-data'>
                <div className="ticket-info-airoport">
                    <div className="ticket-info-airoport-departure">
                        {departure.departureCity.caption},{departure.departureAirport.caption}({departure.departureAirport.uid})
                    </div>
                    <div className="img-arrow" >
                        <img src={arrow} alt="" />
                    </div>
                    <div className="ticket-info-airoport-departure">
                        {departure.arrivalCity.caption},{departure.arrivalAirport.caption}({departure.arrivalAirport.uid})
                    </div>
                </div>
                <div className='gray-border' />
                <div className='ticket-info-time'>
                    <div className='ticket-info-time-departure'>
                        <div className='ticket-info-time-time'>
                            {departureDate2.time}
                        </div>
                        <div className='ticket-info-day'>
                            {departureDate2.day}
                        </div>
                    </div>
                    <div className='ticket-info-time-duration'>
                    {departureFlyTime2.hours}:{departureFlyTime2.minutes}
                    </div>
                    <div className='ticket-info-time-arrival'>
                        <div className='ticket-info-day'>
                            {arrivalDate2.day}
                        </div>
                        <div className='ticket-info-time-time'>
                            {arrivalDate2.time}
                        </div>

                    </div>
                </div>
                <div className='ticket-info-tranfer'>
                    {arrival.transfers ?
                        <div className='ticket-info-transfer-info'>{departure.transfers} пересадка</div>
                        : <div className='ticket-info-transfer-info'>Прямой рейс</div>}
                </div>
                <div className='ticket-info-airline'>
                    Рейс выполняет: {departure.carrier}
                </div>
                <button className='button-primary'>Выбрать</button>
            </div>
        </div >


    )

}
export default FlightItem;
