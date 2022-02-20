import React, { Component } from "react";
import PhoneItem from "./PhoneItem";

export default class PhoneList extends Component {
  dataDanhSachDienThoai = this.props.dataDanhSachDienThoai;
  renderDSDT = () => {
    return this.dataDanhSachDienThoai.map((item, i) => {
      return (
        <PhoneItem
          key={i}
          dataDT={item}
          handleRenderChiTietDT={this.props.handleRenderChiTietDT}
          handleThemDT={this.props.handleThemDT}
        />
      );
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-around ">{this.renderDSDT()}</div>
    );
  }
}
