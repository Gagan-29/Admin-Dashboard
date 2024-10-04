import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Karnam Gagan</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">gagan@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9382484848</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Chittoor,Andhra paradesh
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
