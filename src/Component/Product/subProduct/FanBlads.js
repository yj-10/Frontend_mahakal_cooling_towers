import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import FooterDegin from "../../Footer/FooterDegin";
import Fram from "../../../assets/Img/Fram.png";
import FRPFanBlads from "../../../assets/Img/FRP Fan Blads.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Weburls from "../../../Redux/ApI/Weburls";
import MCard from "../../../utility/MCard";

function FanBlads() {
  // hook define

  const [FanBladsData, setFanBladsData] = useState([]);
  console.log(".......", FanBladsData);
  const api = async () => {
    const result = await axios.get(Weburls.ProductFRP, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await result.data.msg;
    setFanBladsData(data);
  };

  //api calling

  //api load after render
  useEffect(() => {
    api();
  }, [0]);
  return (
    <>
      <div id="productimgbox">
      
        <img src={Fram} className="w-100 img-fluid " alt="fram" />
      </div>
      <MDBContainer className="my-4">
        <MDBRow className="mb-3 ">
          <MDBCol id="boxtwo" lg={"12"} md={"12"} sm={"12"}>
            <div id="LetfSideproduct">
              <div>
                <h1 className="text-start text-capitalize my-5" id="title">
                  FRP Fan Blades
                </h1>
              </div>
              <div id="body-product">
                <p>
                  Aerodynamic axial flow FRP supplied by Mahakal cooling tower
                  are specifically designed for Cooling Towers and other
                  efficiency critical applications To ensure that the best
                  performance is achieved and the power consumption and noise
                  levels are as low as possible,it is of the most importants
                  that the right fan is chosen Axial flow fans are delta’s
                  business. With an extensive product range and with a high
                  level of technical support 'Mahakal cooling tower’are
                  specifically designed for cooling towers and other efficiency
                  critical applications. 'Mahakal cooling tower’energy
                  efficient fan saves upto 30% power as compared to conventional
                  aluminium fans.
                </p>
              </div>

              <div id="imgProduct">
                <MDBRow className=" d-flex justify-content-start flex-wrap">
                  {FanBladsData.map((item) => {
                    return (
                      <MDBCol
                        sm={12}
                        md={4}
                        lg={4}
                        className="my-2 bg-image hover-zoom "
                      >
                        <img
                          src={item.image}
                          className="img-fluid w-100 mb-2"
                          style={{ height: "250px", filter: "contrast(100%)" }}
                          alt="no-img"
                        />
                        <p
                          style={{
                            textTransform: "capitalize",
                            fontSize: "25px",
                            fontFamily: "poppins Sans-serif",
                          }}
                        >
                          {item.title}
                        </p>
                      </MDBCol>
                    );
                  })}
                </MDBRow>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterDegin />
    </>
  );
}

export default FanBlads;