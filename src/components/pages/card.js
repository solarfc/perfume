import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setPerfumeId} from "../../reducers/card-reducers";
import Spinner from "../spinner";
import {addPerfumeToCart} from "../../reducers/cart-reducers";

class Card extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const {match: {params: {id}}} = this.props;
        this.props.setPerfumeId(id);
        setTimeout(() => {
            this.setState({loading: false})
        }, 500);
    }

    render() {
        const [perfumeInfo] = this.props.perfume.filter(item => item.id === +this.props.card.id);
        const {addPerfumeToCart} = this.props;

        if(perfumeInfo === undefined || this.state.loading === true) {
            return <Spinner />
        }

        return (
            <>
                <h3>{perfumeInfo.name}</h3>
                <button onClick={() => addPerfumeToCart(perfumeInfo)}>Заказать</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        perfume: state.homePage.perfume,
        card: state.cardPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPerfumeId: (id) => {
            dispatch(setPerfumeId(id))
        },
        addPerfumeToCart: (perfume) => {
            dispatch(addPerfumeToCart(perfume));
        }
    }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Card);