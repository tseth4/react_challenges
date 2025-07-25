import React, { useState, useEffect } from 'react';
import styles from "./FlightBooking.module.scss"

type FlighBookingProps = {

}

type TripType = 'OneWay' | 'Round';

interface FlightFormData {
  trip: TripType
  departDate: string
  returnDate?: string
}

const FlightBooking: React.FC<FlighBookingProps> = () => {
  const [isValid, setIsValid] = useState(false)
  const [errors, setErrors] = useState<{ trip?: TripType, departDate?: string, returnDate?: string }>({});
  const [formData, setFormData] = useState<FlightFormData>({
    trip: 'OneWay',
    departDate: '',
    returnDate: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(formData)) {
      console.log("invalid")
      return
    }
    console.log("eee: ", e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = (data: FlightFormData) => {
    const errs: typeof errors = {}
    const depart = new Date(data.departDate)
    const today = new Date()
    if (depart < today) {
      errs.departDate = "Dates are in the past"
    }
    if (data.returnDate) {
      const returnDate = new Date(data.returnDate)
      if (returnDate < depart) {
        errs.returnDate = "Return date is before the departure date."
      }
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  useEffect(() => {
    console.log("formData: ", formData)
    setIsValid(validate(formData))
  }, [formData])
  return (
    <form onSubmit={handleSubmit} className={styles.flight_booking}>
      <select name="trip" value={formData.trip} onChange={handleChange}>
        <option value="OneWay">One-way</option>
        <option value="Round">Round-trip</option>
      </select>
      <br />
      <label>
        Depart Date
        <input name="departDate" type="date" value={formData.departDate} onChange={handleChange}></input>
        {errors.departDate && <span style={{ color: "red" }}>{errors.departDate}</span>}
      </label>
      <br />
      {formData.trip == "Round" && (
        <label>
          Return Date
          <input name="returnDate" type="date" value={formData.returnDate} onChange={handleChange}></input>
          {errors.returnDate && <span style={{ color: "red" }}>{errors.returnDate}</span>}
        </label>
      )}
      <button disabled={isValid} type="submit">Book</button>
    </form>
  );
};

export default FlightBooking; 