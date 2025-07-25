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
    <form onSubmit={handleSubmit} className={styles.flight_booking} aria-label="Flight booking form">
      <fieldset>
        <legend>Trip Details</legend>

        <div>
          <label htmlFor="trip-type">Trip Type:</label>
          <select
            id="trip-type"
            name="trip"
            value={formData.trip}
            onChange={handleChange}
            aria-describedby="trip-description"
          >
            <option value="OneWay">One-way</option>
            <option value="Round">Round-trip</option>
          </select>
          <div id="trip-description" className="sr-only">
            Select whether this is a one-way or round-trip flight
          </div>
        </div>

        <div>
          <label htmlFor="depart-date">
            Departure Date: <span aria-label="required">*</span>
          </label>
          <input
            id="depart-date"
            name="departDate"
            type="date"
            value={formData.departDate}
            onChange={handleChange}
            aria-describedby={errors.departDate ? "depart-error" : "depart-description"}
            aria-invalid={!!errors.departDate}
            required
          />
          <div id="depart-description" className="sr-only">
            Select your departure date. Must be today or a future date.
          </div>
          {errors.departDate && (
            <div
              id="depart-error"
              role="alert"
              aria-live="polite"
              style={{ color: "red", fontSize: "0.875rem" }}
            >
              {errors.departDate}
            </div>
          )}
        </div>

        {formData.trip === "Round" && (
          <div>
            <label htmlFor="return-date">
              Return Date: <span aria-label="required">*</span>
            </label>
            <input
              id="return-date"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleChange}
              aria-describedby={errors.returnDate ? "return-error" : "return-description"}
              aria-invalid={!!errors.returnDate}
              required
            />
            <div id="return-description" className="sr-only">
              Select your return date. Must be after your departure date.
            </div>
            {errors.returnDate && (
              <div
                id="return-error"
                role="alert"
                aria-live="polite"
                style={{ color: "red", fontSize: "0.875rem" }}
              >
                {errors.returnDate}
              </div>
            )}
          </div>
        )}
      </fieldset>

      <button
        disabled={!isValid}
        type="submit"
        aria-describedby={!isValid ? "submit-error" : undefined}
      >
        Book Flight
      </button>
      {!isValid && (
        <div id="submit-error" role="alert" aria-live="polite" className="sr-only">
          Please fix the form errors before submitting
        </div>
      )}
    </form>
  );
};

export default FlightBooking; 