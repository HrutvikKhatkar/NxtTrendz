import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const totalAmount = cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div>
                  <h1 className="cart-heading">My Cart</h1>
                  <button type="button" onClick={onClickRemoveAll}>
                    Remove All
                  </button>
                </div>

                <CartListView />
                <p>{totalAmount}</p>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
