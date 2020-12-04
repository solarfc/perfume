import "./cart.css";
import React, {Component} from "react"
import {connect} from "react-redux";
import Spinner from "../spinner";
import {NavLink} from "react-router-dom";

const Cart = ({cart}) => {

    if(cart.length === 0) {
        return (
            <div className="cart">
                <div className="container">
                    <div className="cart__content">
                        <h1>Извините, Ваша корзина пуста</h1>
                        <NavLink to="/">Вернуться на главную страницу</NavLink>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__content">
                    {cart.map(item => {
                        return (
                            <>
                                <div className="cart__content-block" key={item.id}>
                                    <div className="cart__content-block__info">
                                        <p>{item.brand}</p>
                                        <p>{item.name}</p>
                                        <p>240 грн</p>
                                        <p>{item.count}</p>
                                    </div>
                                    <div className="cart__content-block__change">
                                        <p>+1</p>
                                        <p>-1</p>
                                        <p>del</p>
                                    </div>
                                </div>
                                <h2>Здесь будет форма заказа</h2>
                            </>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

class CartContainer extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
        }, 500)
    }

    render() {
        const {cart} = this.props;

        if(this.state.loading) {
            return <Spinner />
        }

        return (
            <Cart cart={cart}></Cart>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartPage.cart,
    };
}

export default connect(mapStateToProps)(CartContainer)