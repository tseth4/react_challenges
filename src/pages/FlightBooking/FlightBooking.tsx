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

interface FormErrors {
  departDate?: string
  returnDate?: string
}

const FlightBooking: React.FC<FlighBookingProps> = () => {
  const [isValid, setIsValid] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FlightFormData>({
    trip: 'OneWay',
    departDate: '',
    returnDate: ''
  })

  const validate = (data: FlightFormData): { isValid: boolean; errors: FormErrors } => {
    const errs: FormErrors = {}
    
    // Validate departure date
    if (!data.departDate) {
      errs.departDate = "Departure date is required"
    } else {
      const depart = new Date(data.departDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0) // Reset time to compare dates only
      
      if (depart < today) {
        errs.departDate = "Departure date cannot be in the past"
      }
    }
    
    // Validate return date for round trips
    if (data.trip === 'Round') {
      if (!data.returnDate) {
        errs.returnDate = "Return date is required for round trips"
      } else if (data.departDate) {
        const returnDate = new Date(data.returnDate)
        const departDate = new Date(data.departDate)
        
        if (returnDate < departDate) {
          errs.returnDate = "Return date must be after departure date"
        }
      }
    }
    
    return { isValid: Object.keys(errs).length === 0, errors: errs }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      console.log("Form is invalid")
      return
    }
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      }
      
      // Clear return date when switching to one-way trip
      if (name === 'trip' && value === 'OneWay') {
        newData.returnDate = ''
      }
      
      return newData
    })
  }

  // Validate form whenever formData changes
  useEffect(() => {
    const { isValid: valid, errors: errs } = validate(formData)
    setIsValid(valid)
    setErrors(errs)
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
      {formData.trip === "Round" && (
        <label>
          Return Date
          <input name="returnDate" type="date" value={formData.returnDate} onChange={handleChange}></input>
          {errors.returnDate && <span style={{ color: "red" }}>{errors.returnDate}</span>}
        </label>
      )}
      <button disabled={!isValid} type="submit">Book</button>
    </form>
  );
};

export default FlightBooking; 