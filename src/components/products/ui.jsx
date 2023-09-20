/** @module productsUI component */
import PropTypes from "prop-types";

/**
 * @typedef {import('./index.jsx').Product} Product
 */

/**
 * displays a list of products
 * @param {Object} params The list of products to display
 * @param {Product[]} params.products The list of products to display
 * @requires module:productsHOC
 */
export default function ProductsUI({ products = [] }) {
  return (
    <article className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h4 className="text-2xl font-bold tracking-tight text-gray-900">
          list of Products
        </h4>

        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.description}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

ProductsUI.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
