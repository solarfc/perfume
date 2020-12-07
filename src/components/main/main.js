import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../pages";
import {connect} from "react-redux";
import {perfumeLoader} from "../../reducers/perfume-reducer";
import Spinner from "../spinner";
import {addPerfumeToCartThunkCreator} from "../../reducers/cart-reducers";
import CardContainer from "../pages/card";
import CartContainer from "../pages/cart";

const Main = ({perfume, addPerfumeToCartThunkCreator}) => {

    return (
        <main role="main">
            <Switch>
                <Route exact path="/" component={() => <Home perfume={perfume} addPerfumeToCart={addPerfumeToCartThunkCreator}/>}></Route>
                <Route path="/woman-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "woman")} addPerfumeToCart={addPerfumeToCartThunkCreator}/>}></Route>
                <Route path="/man-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "man")} addPerfumeToCart={addPerfumeToCartThunkCreator}/>}></Route>
                <Route path="/cart" component={CartContainer}></Route>
                <Route path="/card/:id?" component={CardContainer}></Route>
            </Switch>
        </main>
    )
}

class MainContainer extends Component {

    componentDidMount() {
        this.props.perfumeLoader();
    }

    render() {
        const {perfume, loading, addPerfumeToCartThunkCreator} = this.props;

        if(loading) {
          return <Spinner />
        }

        return (
            <Main perfume={perfume} addPerfumeToCartThunkCreator={addPerfumeToCartThunkCreator}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        perfume: state.homePage.perfume,
        loading: state.homePage.loading,
    }
}

export default connect(mapStateToProps, {perfumeLoader, addPerfumeToCartThunkCreator})(MainContainer)

// class Main extends Component {
//
//     componentDidMount() {
//         getPerfume()
//             .then((data) => {
//                 this.props.perfumeLoader(data);
//             })
//     }
//
//     render() {
//         const {perfume, loading, addPerfumeToCart} = this.props;
//
//         if(loading) {
//             return <Spinner />
//         }
//
//         return (
//             <main role="main">
//                 <Switch>
//                     <Route exact path="/" component={() => <Home perfume={perfume} addPerfumeToCart={addPerfumeToCart}/>}></Route>
//                     <Route path="/woman-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "woman")}/>}></Route>
//                     <Route path="/man-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "man")}/>}></Route>
//                     <Route path="/cart" component={Cart}></Route>
//                     <Route path="/card/:id?" component={Card}></Route>
//                 </Switch>
//             </main>
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         perfume: state.homePage.perfume,
//         loading: state.homePage.loading
//     };
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         perfumeLoader: (perfume) => {
//             dispatch(perfumeLoaded(perfume));
//         },
//         addPerfumeToCart: (perfume) => {
//             dispatch(addPerfumeToCart(perfume));
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Main);