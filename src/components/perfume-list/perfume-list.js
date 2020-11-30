import "./perfume-list.css";
import React, {Component} from "react";
import PerfumeListItem from "../perfume-list-item";
import {connect} from "react-redux";
import {perfumeLoaded} from "../../reducers/perfume-reducer";
import {getPerfume} from "../../services/service";
import Spinner from "../spinner";

class PerfumeList extends Component {

    componentDidMount() {
        getPerfume()
            .then((data) => {
                this.props.perfumeLoader(data);
            });
        // this.props.loading = false;
    }

    render() {
        const {perfume, loading} = this.props;
        const perf = loading ? <Spinner/> : perfume.filter(items => items.availability === "true").map(item => {
            return <div className="catalog__content-card" key={item.id}><PerfumeListItem perfume={item}/></div>
        });

        return (
            perf
        )
    }
}

const mapStateToProps = (state) => {
    return {
        perfume: state.perfumeReducer.perfume,
        loading: state.perfumeReducer.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        perfumeLoader: (perfume) => {
            dispatch(perfumeLoaded(perfume))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfumeList);