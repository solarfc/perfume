import "./card.css"
import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setPerfumeIdThunkCreator} from "../../reducers/card-reducers";
import Spinner from "../spinner";
import {addPerfumeToCartThunkCreator} from "../../reducers/cart-reducers";

const Card = ({perfumeInfo, addPerfumeToCartThunkCreator}) => {
    const {gender, country, brand, name, description, availability, sale, id} = perfumeInfo;

    return (
        <div className="card">
            <div className="container">
                <div className="card__content">
                    <h4>{brand}</h4>
                    <h3>{name}</h3>
                    <p className="country">Страна: <span>{country}</span></p>
                    <p className="art">Туалетная вода. Арт: <span>{id}</span></p>
                    <img src="https://m.buro247.ru/images/625poster_poison-girl_moodpack_0.jpg" alt=""/>
                    <p className="gender">Пол: <span>{gender === "man" ? "мужской" : "женский"}</span></p>
                    <p className="description">{description}</p>
                    <p className="sale">sale -{sale}%</p>
                    <span>{availability === "true" ? "Есть в наличии" : "Ждем поступления"}</span>
                    <button onClick={() => {addPerfumeToCartThunkCreator(perfumeInfo); alert('Товар добавлен в корзину')}}>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
}

class CardContainer extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const {match: {params: {id}}} = this.props;
        if(id) {
            this.props.setPerfumeIdThunkCreator(id);
            setTimeout(() => {
                this.setState({loading: false})
            }, 500);
        }
    }

    render() {
        console.log(this.props);
        const [perfumeInfo] = this.props.perfume.filter(item => item.id === +this.props.card.id);

        if(this.state.loading) {
            return <Spinner />
        }

        if(perfumeInfo === undefined) {
            return <h1>Sorry, this page don't work now</h1>
        }

        return <Card perfumeInfo={perfumeInfo} addPerfumeToCartThunkCreator={this.props.addPerfumeToCartThunkCreator}/>
    }
}

const mapDispatchToProps = (state) => {
    return {
        perfume: state.homePage.perfume,
        card: state.cardPage
    }
}

export default compose(withRouter, connect(mapDispatchToProps, {setPerfumeIdThunkCreator, addPerfumeToCartThunkCreator}))(CardContainer);