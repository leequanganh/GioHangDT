import React, { Component } from "react";

export default class PhoneItem extends Component {
  handleRenderChiTietDT = this.props.handleRenderChiTietDT;
  handleThemDT = this.props.handleThemDT;
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.props.dataDT;
    return (
      <div>
        <div className="card " style={{ width: "18rem" }}>
          <img
            src={hinhAnh}
            className="card-img-top"
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h3 className="card-title">{tenSP}</h3>
            <p className="card-text">{giaBan}</p>
            <button
              onClick={() => {
                return this.handleRenderChiTietDT(this.props.dataDT);
              }}
              className="btn btn-success"
            >
              xem chi tiết
            </button>
            <button
              onClick={() => {
                return this.handleThemDT(this.props.dataDT);
              }}
              className="btn btn-info ml-4"
            >
              Thêm vào
            </button>
          </div>
        </div>
      </div>
    );
  }
}
