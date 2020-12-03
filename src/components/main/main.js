import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Card, Cart, Home} from "../pages";
import {connect} from "react-redux";
import {perfumeLoader} from "../../reducers/perfume-reducer";
import {getPerfume} from "../../services/service";
import Spinner from "../spinner";
import {addPerfumeToCart} from "../../reducers/cart-reducers";

const Main = ({perfume}) => {
    console.log(perfume);

    return (
        <main role="main">
            <Switch>
                <Route exact path="/" component={() => <Home perfume={perfume}/>}></Route>
                <Route path="/woman-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "woman")}/>}></Route>
                <Route path="/man-perfume" component={() => <Home perfume={perfume.filter(item => item.gender === "man")}/>}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/card/:id?" component={Card}></Route>
            </Switch>
        </main>
    )
}

class MainContainer extends Component {

    componentDidMount() {
        this.props.perfumeLoader();
    }

    render() {
        const {perfume, loading} = this.props;

        if(loading) {
          return <Spinner />
        }

        return (
            <Main perfume={perfume}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        perfume: state.homePage.perfume,
        loading: state.homePage.loading
    }
}

export default connect(mapStateToProps, {perfumeLoader})(MainContainer)

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