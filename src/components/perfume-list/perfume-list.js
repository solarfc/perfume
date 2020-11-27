import "./perfume-list.css";
import React, {Component} from "react";
import PerfumeListItem from "../perfume-list-item";
import {connect} from "react-redux";
import {perfumeLoaded} from "../../reducers/perfume-reducer";
import {getPerfume} from "../../services/service";

class PerfumeList extends Component {

    componentDidMount() {
        this.props.perfumeLoader();
    }

    render() {
        const {perfume} = this.props;

        return (
            perfume.filter(items => items.availability === "true").map(item => {
                return <div className="catalog__content-card" key={item.id}>
                    <PerfumeListItem  perfume={item} />
                </div>
            })
        );
    }
}

const mapStateToProps = (state) => {
    return {
        perfume: state.perfumeReducer.perfume
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        perfumeLoader: () => {
            dispatch(perfumeLoaded(getPerfume()))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfumeList);