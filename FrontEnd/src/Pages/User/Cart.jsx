import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../Store/Reducer/Actions/userAction";

const Cart = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userSlice);

    const IncreaseQuantity = (index) => {
        const copyUser = { ...users, cart: [...users.cart] };
        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1,
        };
        dispatch(asyncUpdateUser(users.id, copyUser));
    };

    const DecreaseQuantity = (index) => {
        const copyUser = { ...users, cart: [...users.cart] };

        if (copyUser.cart[index].quantity == 1) {
            copyUser.cart.splice(index, 1);
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1,
            };
        }
        dispatch(asyncUpdateUser(users.id, copyUser));
    };

    // let x = user.cart.reduce((ac, cv) => {
    //     return ac + Number(cv.product.price) * cv.quantity;
    // }, 0);
    // console.log(x);

    return (
        <div className="p-5 h-screen flex flex-col mt-50 justify-center bg-gray-800 w-screen">
            {users?.cart?.map((ci, i) => {
                // If ci is valid but ci.product is missing, this check prevents rendering the item
                if (!ci || !ci.product) {
                    return null; 
                }
                
                return (
                    <div
                        className="mb-3 w-2/3 bg-gray-700  p-2 flex  justify-between items-center h-fit rounded-lg"
                        key={i} 
                    >
                        <img
                            className="h-[10vmax]"
                            
                            src={ci.product?.image} 
                            alt={ci.product?.title || "Cart Item"}
                        />
                        <h1 className="text-3xl">{ci.product?.title}</h1>
                        <h2 className="text-3xl">{ci.product?.price}</h2>
                        <div>
                            <button
                                onClick={() => IncreaseQuantity(i)}
                                className="text-3xl cursor-pointer"
                            >
                                +
                            </button>
                            <span className="mx-3 text-3xl bg-gray-600 p-2 rounded-xl">{ci.quantity}</span>
                            <button
                                onClick={() => DecreaseQuantity(i)}
                                className="text-3xl cursor-pointer"
                            >
                                -
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;