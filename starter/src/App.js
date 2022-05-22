import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotal, getCartItems } from "./features/cart/cartslice";
import { useEffect } from 'react'
import Modal from "./components/Modal";


function App() {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </main>
  );
}
export default App;
