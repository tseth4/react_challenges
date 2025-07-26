
# Flight Booking Component

A simple flight booking component that allows users to book either a **one-way** or **round-trip** flight for specified dates.

## ✈️ Features

* Choose between:

  * **One-way flight**
  * **Round-trip flight**
* Date input fields:

  * **Departure date** (always visible)
  * **Return date** (only visible for round-trip bookings)
* Uses native `<input type="date">` for selecting dates

## ✅ Form Validation

Validation occurs on form submission:

* ❌ Dates cannot be in the **past**
* ❌ Return date cannot be **before** the departure date

## 📩 Success Message

Upon successful submission:

* **One-way flight**
  `"You have booked a one-way flight on YYYY-MM-DD"`

* **Round-trip flight**
  `"You have booked a round-trip flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"`

