import React, { Component } from "react";
import ChiTietDT from "./ChiTietDT";
import { datDanhSachDienThoai } from "./dataDT";
import ModalGioHang from "./ModalGioHang";
import PhoneList from "./PhoneList";
export default class Index extends Component {
  state = {
    dataChiTiet: {
      maSP: 1,
      tenSP: "Blackberry",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/sp_blackberry.png",
    },
    dataGioHang: [],
  };
  handleRenderChiTietDT = (data) => {
    this.setState({
      dataChiTiet: data,
    });
  };
  handleThemDT = (data) => {
    let dataGioHangClone = [...this.state.dataGioHang];
    dataGioHangClone.push(data);
    this.setState({
      dataGioHang: dataGioHangClone,
    });
  };
  render() {
    return (
      <div className=" bg-warning d-flex flex-column align-items-center">
        <ModalGioHang dataGioHang={this.state.dataGioHang} />
        <PhoneList
          dataDanhSachDienThoai={datDanhSachDienThoai}
          handleRenderChiTietDT={this.handleRenderChiTietDT}
          handleThemDT={this.handleThemDT}
        />
        <ChiTietDT dataChiTiet={this.state.dataChiTiet} />
      </div>
    );
  }
}
