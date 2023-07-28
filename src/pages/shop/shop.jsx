import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Rolling Bay Skateshop</h1>
        <h5>Rolling since 1995</h5>
        <h5>Join Our Mailing List!</h5>
        <h3>Subscribe</h3>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
