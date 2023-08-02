import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className=" bg-slate-800 flex items-center justify-center">
      <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li
              key={product.id}
              className=" flex flex-col justify-center items-center bg-slate-950 gap-4 m-4 py-3"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className=" w-[300px] h-[200px] object-cover "
              />
              <div>
                <strong>{product.title}</strong>- ${product.price}
              </div>
              <div className=" ">
                <button
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                  className={` py-2 px-3 rounded-md ${
                    isProductInCart ? "bg-red-400" : "bg-sky-400"
                  }`}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Products;
