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
    let indexDT = this.state.dataGioHang.findIndex((item) => {
      return item.maSP == data.maSP;
    });
    let dataGioHangClone = [...this.state.dataGioHang];
    if (indexDT == -1) {
      data.soLuong = 1;
      dataGioHangClone.push(data);
    } else if (indexDT !== -1) {
      dataGioHangClone[indexDT].soLuong++;
    }
    this.setState({
      dataGioHang: dataGioHangClone,
    });
  };
  handleThayDoiSoLuong = (index, type) => {
    let cloneDataGioHang = [...this.state.dataGioHang];
    let indexSp = this.state.dataGioHang.findIndex((sp) => {
      return sp.maSP === index;
    });
    if (indexSp !== -1 && type === 1) {
      cloneDataGioHang[indexSp].soLuong++;
      console.log(cloneDataGioHang[indexSp].soLuong);
    }
    if (indexSp !== -1 && type === -1) {
      if (cloneDataGioHang[indexSp].soLuong === 1) {
        cloneDataGioHang.splice(indexSp, 1);
      } else {
        cloneDataGioHang[indexSp].soLuong--;
      }
    }
    this.setState({ dataGioHang: cloneDataGioHang });
  };
  render() {
    return (
      <div className=" bg-warning d-flex flex-column align-items-center">
        <ModalGioHang
          dataGioHang={this.state.dataGioHang}
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
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
