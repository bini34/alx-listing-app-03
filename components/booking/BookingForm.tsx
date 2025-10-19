import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  cardNumber: z.string().min(12, "Enter a valid card number"),
  expiration: z.string().min(3, "Enter expiration (MM/YY)"),
  cvv: z.string().min(3, "Enter CVV"),
  street: z.string().optional(),
  apt: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    // Simulate submission
    alert("Booking confirmed (demo). Check console for submitted data.");
    console.log("Submitted booking:", data);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block">First Name</label>
            <input {...register("firstName")} type="text" className="border p-2 w-full mt-2" />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block">Last Name</label>
            <input {...register("lastName")} type="text" className="border p-2 w-full mt-2" />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Email</label>
            <input {...register("email")} type="email" className="border p-2 w-full mt-2" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block">Phone Number</label>
            <input {...register("phone")} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label className="block">Card Number</label>
          <input {...register("cardNumber")} type="text" className="border p-2 w-full mt-2" />
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Expiration Date</label>
            <input {...register("expiration")} type="text" placeholder="MM/YY" className="border p-2 w-full mt-2" />
            {errors.expiration && <p className="text-red-500 text-sm mt-1">{errors.expiration.message}</p>}
          </div>
          <div>
            <label className="block">CVV</label>
            <input {...register("cvv")} type="text" className="border p-2 w-full mt-2" />
            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>}
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label className="block">Street Address</label>
          <input {...register("street")} type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="mt-4">
          <label className="block">Apt / Suite</label>
          <input {...register("apt")} type="text" className="border p-2 w-full mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">City</label>
            <input {...register("city")} type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">State</label>
            <input {...register("state")} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block">Zip Code</label>
            <input {...register("zip")} type="text" className="border p-2 w-full mt-2" />
          </div>
          <div>
            <label className="block">Country</label>
            <input {...register("country")} type="text" className="border p-2 w-full mt-2" />
          </div>
        </div>

        {/* Submit Button */}
        <button disabled={isSubmitting} type="submit" className="mt-6 bg-green-500 disabled:opacity-60 text-white py-2 px-4 rounded-md w-full">
          {isSubmitting ? "Processing..." : "Confirm & Pay"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
