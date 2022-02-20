import React, { Component } from "react";

export default class ChiTieliT extends Component {
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraliuoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.props.dataChiTiet;
    return (
      <div className="border border-light" style={{ width: "860px" }}>
        <div className="row">
          <div className="col-6" style={{ overFlow: "hidden" }}>
            <img
              src={hinhAnh}
              style={{
                height: "400px",
                width: "400px",
                objectFit: "cover",
                margin: "auto",
              }}
            />
          </div>
          <div className="col-6">
            <ul>
              <li>Mã: {maSP}</li>
              <li>{tenSP}</li>
              <li>{manHinh}</li>
              <li>{heDieuHanh}</li>
              <li>{cameraliuoc}</li>
              <li>{cameraSau}</li>
              <li>{rom}</li>
              <li>{ram}</li>
              <li>{giaBan} VND</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
