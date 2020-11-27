import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setPerfumeInfo} from "../../reducers/card-reducers";

class Card extends Component {
    componentDidMount() {
        this.props.cardLoad({
            "gender": "man",
            "country": "France",
            "brand": "Lalique",
            "name": "Hommage a L'Homme Voyageur",
            "description": "Парфюм для современных героев и рыцарей  -  Lalique Hommage a L'Homme Voyageur («Хомм Вояжер» от Лалик) стал новинкой 2014 года. Восточно-древесный аромат открывается свежими нотами бергамота и пряного кардамона. Центральные аккорды ветивера, пачули и папируса придают элегантность и утонченность композиции. Базовые ноты сладкой ванили, амбры и неподражаемого аромата дубового мха - шикарный и магический",
            "sale": "70",
            "availability": "true",
            "id": 63189
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="card-description">
                <h1>{this.props.card.description}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.cardReducer.perfume
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardLoad: (perfume) => {
            dispatch(setPerfumeInfo(perfume))
        }
    }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Card);