import React, { Component } from "react";
import { Modal, Button } from "antd";
export default class ModalGioHang extends Component {
  state = {
    isOpen: false,
  };
  renderGioHang = () => {
    return this.props.dataGioHang.map((item, i) => {
      return (
        <tbody key={i}>
          <tr>
            <td>{item.maSP}</td>
            <td>{item.tenSP}</td>
            <td>{item.giaBan}</td>
            <td>
              <img src={item.hinhAnh} style={{ width: "100px" }} />
            </td>
            <td>
              <button
                onClick={() => {
                  return this.props.handleThayDoiSoLuong(item.maSP, +1);
                }}
                className="btn btn-success"
              >
                +
              </button>
              {item.soLuong}
              <button
                onClick={() => {
                  return this.props.handleThayDoiSoLuong(item.maSP, -1);
                }}
                className="btn btn-danger"
              >
                -
              </button>
            </td>
            {/* <td>{item.maSP}</td> */}
          </tr>
        </tbody>
      );
    });
  };
  renderTotalDT = () => {
    return this.props.dataGioHang.reduce((total, item) => {
      return total + item.soLuong;
    }, 0);
  };

  setVisible = (param) => {
    this.setState({
      isOpen: param,
    });
  };
  render() {
    return (
      <>
        <Button
          style={{ position: "absolute", right: "0" }}
          type="primary"
          onClick={() => this.setVisible(true)}
        >
          Giỏ Hàng({this.renderTotalDT()})
        </Button>
        <Modal
          title="Modal 1000px width"
          centered
          visible={this.state.isOpen}
          onOk={() => this.setVisible(false)}
          onCancel={() => this.setVisible(false)}
          width={1000}
        >
          <table className="table">
            <thead>
              <tr>
                <td>Mã</td>
                <td>Tên</td>
                <td>Giá</td>
                <td>Hình ảnh</td>
                <td>Số lượng</td>
                <td></td>
              </tr>
            </thead>
            {this.renderGioHang()}
          </table>
        </Modal>
      </>
    );
  }
}
