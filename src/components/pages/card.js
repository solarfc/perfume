import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {setPerfumeId, setPerfumeInfo} from "../../reducers/card-reducers";

class Card extends Component {
    componentDidMount() {
        this.props.perfumeId(this.props.match.params.id);
        this.props.cardLoad(this.props.perfume.filter(item => item.id === 63189));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('update');
    }

    render() {
        // console.log(this.props.card.perfume);
        // const {gender, country, brand, name, description, sale, id} = this.props.card.perfume;
        return (
            <div className="card-description">
                {/*<h1>{description}</h1>*/}
                {/*<h1>{this.props.card.description}</h1>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.cardReducer,
        perfume: state.perfumeReducer.perfume
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardLoad: (perfume) => {
            dispatch(setPerfumeInfo(perfume))
        },
        perfumeId: (id) => {
            dispatch(setPerfumeId(id));
        }
    }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Card);