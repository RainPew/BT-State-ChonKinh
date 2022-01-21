import React, { Component } from "react";

import "./Style.css";

export default class BTChonkinh extends Component {
  arrGlass = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/BT_ChonKinh/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/BT_ChonKinh/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/BT_ChonKinh/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/BT_ChonKinh/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/BT_ChonKinh/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/BT_ChonKinh/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/BT_ChonKinh/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/BT_ChonKinh/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/BT_ChonKinh/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    glassDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/BT_ChonKinh/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderButton = () => {
    return this.arrGlass.map((glass, index) => {
      return (
        <div className="col-2 py-3" key={index}>
          <button
            onClick={() => {
              this.xemThongTin(glass);
            }}
          >
            <img className="img-fluid" src={glass.url} alt="" />
          </button>
        </div>
      );
    });
  };

  xemThongTin = (newGlass) => {
    console.log("click xem");
    this.setState({
      glassDetail: newGlass,
    });
  };

  render() {
    let bg = {
      height: "100vh",
      position: "absolute",
    };
    let bgModel = {
      backgroundImage: "url(./img/BT_ChonKinh/model.jpg)",
      backgroundSize: "cover",
      height: "18rem",
      border: "1px solid white",
    };
    let { glassDetail } = this.state;
    return (
      <div className="container-fluid" style={bg}>
        <div className="row posRow">
          <div className="col-2">
            <div className="item" style={bgModel}>
              {/* {this.renderGlassList()} */}
              <div className="content">
                <img
                  src="./img/BT_ChonKinh/v1.png"
                  className="imgGlass"
                  alt="..."
                />
                <h5 className="">GUCCI G8850U</h5>
                <p>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="item" style={bgModel}>
              <div className="content">
                <img src={glassDetail.url} className="imgGlass" alt="..." />
                <h5 className="">{glassDetail.name}</h5>
                <p>{glassDetail.desc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row posRow mt-5">
          <div className="col-8 bgRow">
            <div className="row py-5">{this.renderButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}
