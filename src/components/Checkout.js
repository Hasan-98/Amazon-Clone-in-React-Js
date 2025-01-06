import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1322020_1301508_US_us_gw_pc_dhm_1x_en_3796358_1500x300_en_US.jpg"
          alt="Advertisement"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <div className="checkout__title">
              <h2>Your Shopping Basket</h2>
            </div>
            {/* List out all the Checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
            
          <SubTotal />
        </div>
      )}
    </div>
  );
}
