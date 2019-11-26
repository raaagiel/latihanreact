import React, { Component } from 'react'

class Content extends Component {

    renderStnk = () => {
        return this.props.stnk.map((val, index) => {
            return (
                <div key={index} className='col-md-4 Table'>
                    <div>{val.nama}</div>
                    <div>{val.kendaraan}</div>
                    <div>{val.warna}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='row mx-5'>
                {this.renderStnk()}
                <div className='d-flex'>
                    <button onClick={() => this.props.tambahangka(1)}>+</button>
                    <button>-</button>
                </div>
            </div>
        );
    }
}
export default Content