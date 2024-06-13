import React from "react";
import "./InvoiceProgressBar.css";
import { Card } from "antd";
function SkillsBar() {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          width: "400px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 className="title-text">Invoice</h1>

          <div className="skill-box">
            <span className="title">Draft</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Pending</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Overdue</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Paid</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Unpaid</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Partially</span>
            <div className="skill-bar">
              <span className="skill-per expressjs">
                <span className="tooltip">75%</span>
              </span>
            </div>
          </div>
        </div>
       


        <div>
          <h1 className="title-text">Top Expenses</h1>

          <div className="skill-box">
            <span className="title">Data And Subscription</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">47%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">GPU Services</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">32%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Office Rent</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">10%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Office Furniture</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">5%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Pre-Incorporation Expenses</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">2%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Cloud Usege Charges</span>
            <div className="skill-bar">
              <span className="skill-per expressjs">
                <span className="tooltip">1%</span>
              </span>
            </div>
          </div>
        </div>





        <div>
          <h1 className="title-text">Offers</h1>

          <div className="skill-box">
            <span className="title">Draft</span>
            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">33%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Pending</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">17%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Sent</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">33%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Advanced</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">17%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Declined</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">0%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Expired</span>
            <div className="skill-bar">
              <span className="skill-per expressjs">
                <span className="tooltip">0%</span>
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </Card>
  );
}

export default SkillsBar;
