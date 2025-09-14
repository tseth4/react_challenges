import React, { useState, useEffect } from 'react';
import styles from "./FlightBooking.module.scss"

type FlightBookingProps = {}

type TripType = 'OneWay' | 'Round';
type FlightForm = {
  trip: TripType,
  departureDate: string,
  returnDate?: string
}

type FlightFormErrors = {
  departureDateError?: string,
  returnDateError?: string,
}

const FlightBooking: React.FC<FlightBookingProps> = () => {
  const [formData, setFormData] = useState<FlightForm>({
    trip: 'OneWay',
    departureDate: '',
    returnDate: ''
  })
  const [error, setError] = useState<FlightFormErrors>({})
  const [validForm, setValidForm] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>("")

  const validate = (formData: FlightForm) => {
    const error: FlightFormErrors = {}
    const today = new Date()
    if (formData.departureDate.length > 0) {
      const fdepart = new Date(formData.departureDate)
      if (fdepart < today) {
        error.departureDateError = "Departure dates cannot be in the past"
      }
    } else {
      error.departureDateError = "Departure date required"
    }
    if (formData.returnDate && formData.returnDate.length > 0) {
      if (formData.departureDate.length > 0) {
        const fdepart = new Date(formData.departureDate);
        const freturn = new Date(formData.returnDate)
        if (freturn < fdepart) {
          error.returnDateError = "Return date cannot be before the departure date"
        }
      }
    } else if (formData.trip == "Round" && !formData.returnDate) {
      error.returnDateError = "Return date required"

    }
    return { isValid: Object.values(error).length == 0, error }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { isValid } = validate(formData)
    if (!isValid) {
      return
    }
    // validate
    console.log("submitted")
    if (formData.trip == "OneWay") {
      setSuccess(`You have booked a one-way flight on ${formData.departureDate}`)
    } else {
      setSuccess(`You have booked a round-trip flight, departing on ${formData.departureDate} and returning on ${formData.returnDate}`)
    }

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  useEffect(() => {
    // TODO: validate, setErrors, displayErrors, setValid, handle button enabled
    const { isValid, error } = validate(formData)
    setSuccess("")
    setValidForm(isValid)
    setError(error)
    console.log("formData: ", formData)
    console.log("error: ", error)
  }, [formData])

  return (
    <div className={styles.flight_booking}>
      <h2>Flight Booking Form</h2>
      {/* Your flight booking form will go here */}
      <form onSubmit={handleSubmit}>
        <select name="trip" onChange={handleChange}>
          <option value={"OneWay"}>one way</option>
          <option value={"Round"}>round trip</option>
        </select>
        <div>
          <label>Departure date</label>
          <input
            onChange={handleChange}
            name="departureDate"
            type="date"
            value={formData.departureDate}
            required
          ></input>
          {error.departureDateError ? (
            <div aria-description='departure error'><span style={{ "color": "darkred" }} >{error.departureDateError}</span></div>
          ) : ""}
        </div>
        {formData.trip == "Round" ? (
          <>
            <div>
              <label>Return date</label>
              <input
                onChange={handleChange}
                name="returnDate"
                type="date"
                value={formData.returnDate}
                required
              ></input>
              {error.returnDateError ? (
                <div aria-description='departure error'><span style={{ "color": "darkred" }} >{error.returnDateError}</span></div>
              ) : ""}
            </div>
          </>
        ) : ""}
        <button disabled={!validForm} aria-label='submit'>Submit</button>
      </form>
      {success.length > 0 ? (
        <div>{success}</div>
      ) : ""}
    </div>
  );
};

export default FlightBooking; 