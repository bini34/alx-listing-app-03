import React from "react";
import Image from "next/image";

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee?: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price;
  const bookingFee = bookingDetails.bookingFee || 0;
  const grandTotal = subtotal + bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4">
        <div className="w-32 h-32 relative rounded-md overflow-hidden">
          <Image src="/assets/ListingImages/property.jpg" alt="Property" fill className="object-cover" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
