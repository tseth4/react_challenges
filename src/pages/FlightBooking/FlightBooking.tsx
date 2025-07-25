import React from 'react';
import styles from "./FlightBooking.module.scss"

type FlightBookingProps = {

}

const FlightBooking: React.FC<FlightBookingProps> = () => {
  return (
    <div className={styles.flight_booking}>
      <h2>Flight Booking Form</h2>
      {/* Your flight booking form will go here */}
    </div>
  );
};

export default FlightBooking; 