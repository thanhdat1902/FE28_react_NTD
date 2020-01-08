import React, { Component } from 'react';
import { connect } from 'react-redux';
class Trailer extends Component {
    render() {
        return (
            <div className="modal fade" id="trailer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <iframe src={this.props.trailer} style={{height:300}} title="myFrame"/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        trailer: state.movieReducer.trailer
    }
}
export default connect(mapStateToProps, null)(Trailer);