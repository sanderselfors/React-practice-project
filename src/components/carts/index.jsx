/** @module CartsHOC component */

import { useEffect, useState } from "react";
// import { useAllUsers } from "../../lib/my-api";
import CartsUI from "./ui";

/**
 * @typedef {import('../products/index.jsx').Product} Product
 */

/**
 * A Cart sold on the website which end-users can add their Cart.
 * @typedef  {object} Cart
 * @property {Number} id - an ID.
 * @property {Number} total - total of the Cart.
 * @property {Number} discountedTotal - discountTotal on the Cart price.
 * @property {Number} userId - The ID of the user who owns this cart.
 * @property {Number} totalProducts - Total number of products in the cart.
 * @property {Number} totalQuantity - Total quantity of products in the cart.
 * @property {Product[]} products - list of products in the cart.
 */

/**
 * This is a higher-order component that fetches the list of Carts and displays them.
 * @returns {object} the list of Carts to display
 * @requires module:CartsUI
 */
export default function Carts() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  /**
   * @typedef {object} Data
   * @property {Cart[]} Carts
   * @property {Number} total=100
   * @property {Number} skip=0
   * @property {Number} limit=10
   */
  /** @type {[Data, React.Dispatch<Data>]} */
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error?.message}</span>;
  }

  return <CartsUI carts={data?.carts} />;
}
