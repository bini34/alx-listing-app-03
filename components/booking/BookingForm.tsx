import React, { useState } from "react";

const BookingForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic client-side validation
    if (!form.firstName || !form.lastName || !form.email) {
      alert("Please fill in your name and email.");
      return;
    }

  // Simulate payment processing / booking confirmation
  alert("Booking confirmed (demo).\nDetails sent to console.");
  // In a real app, we'd call an API here.
  console.log("Booking form submitted:", form);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">First Name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">Last Name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label className="block">Card Number</label>
          <input name="cardNumber" value={form.cardNumber} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Expiration Date</label>
            <input name="expiration" value={form.expiration} onChange={handleChange} type="text" placeholder="MM/YY" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">CVV</label>
            <input name="cvv" value={form.cvv} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label className="block">Street Address</label>
          <input name="street" value={form.street} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="mt-4">
          <label className="block">Apt / Suite</label>
          <input name="apt" value={form.apt} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">City</label>
            <input name="city" value={form.city} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">State</label>
            <input name="state" value={form.state} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Zip Code</label>
            <input name="zip" value={form.zip} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">Country</label>
            <input name="country" value={form.country} onChange={handleChange} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
