import React from "react";
import "./PastelCheckout.css";

function PastelCheckout() {
  return (
    <div className="pastel-checkout-container">
      <div className="pastel-checkout-section">
        <div className="pastel-checkout-two-col">
          {/* Billing Details */}
          <form className="pastel-billing-form">
            <div className="pastel-title">Billing Details</div>
            <label>
              First Name *
              <input className="pastel-input" placeholder="First Name" />
            </label>
            <label>
              Last Name *
              <input className="pastel-input" placeholder="Last Name" />
            </label>
            <label>
              Company Name (optional)
              <input className="pastel-input" placeholder="Company Name" />
            </label>
            {/* <label>
              Country / Region *
              <select className="pastel-input" defaultValue="United States">
                <option>INDIA</option>
                <option>Canada</option>
                <option>UK</option>
              </select>
            </label> */}
            <label>
              Street Address *
              <input className="pastel-input" placeholder="Street Address" />
              <input className="pastel-input" placeholder="Apartment, suite, etc." />
            </label>
            <label>
              Town / City *
              <input className="pastel-input" placeholder="Town / City" />
            </label>
            <label>
              State *
              <input className="pastel-input" placeholder="State" />
            </label>
            <label>
              Country *
              <input className="pastel-input" placeholder="Country" />
            </label>
            <label>
              Zip Code *
              <input className="pastel-input" placeholder="Zip Code" />
            </label>
            <label>
              Phone *
              <input className="pastel-input" placeholder="Phone" />
            </label>
            <label>
              Email Address *
              <input className="pastel-input" placeholder="Email address" />
            </label>
          </form>
          {/* Side: Additional & Cart */}
          <div>
            <div className="pastel-title">Additional Information</div>
            <label>
              <span>Order notes (optional)</span>
              <textarea
                className="pastel-input pastel-textarea"
                placeholder="Notes about your order. Like special notes for delivery."
              />
            </label>
            <div className="pastel-cart-totals-section">
              <div className="pastel-title pastel-cart-title">Cart Totals</div>
              <div className="pastel-cart-totals-box">
                <div>
                  <span>SUBTOTAL</span>
                  <span className="pastel-cart-value">$2,370.00</span>
                </div>
                <div>
                  <span>TOTAL</span>
                  <span className="pastel-cart-value">$2,370.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className="pastel-label">Payment Methods</div>
              <div className="pastel-payment-methods">
                <label>
                  <input type="radio" name="payment" defaultChecked />
                  <span>Direct Bank Transfer</span>
                  <div className="pastel-payment-desc">
                    Make your payment directly into our bank account. Please use your Order ID.
                  </div>
                </label>
                <label>
                  <input type="radio" name="payment"/>
                  <span>Check Payments</span>
                  <div className="pastel-payment-desc">
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </div>
                </label>
                <label>
                  <input type="radio" name="payment"/>
                  <span>Cash on Delivery</span>
                  <div className="pastel-payment-desc">
                    Pay with cash upon delivery.
                  </div>
                </label>
                <label>
                  <input type="radio" name="payment"/>
                  <span>PayPal</span>
                  <div className="pastel-payment-desc">
                    Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                  </div>
                </label>
              </div>
            </div>
            <button className="pastel-btn">PLACE AN ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastelCheckout;
