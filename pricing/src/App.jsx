import { useState , useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {


  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="left">
            <div className="profile">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
            </div>
            <div className="info">
              <h3>vansh </h3>
              <p>Stanford</p>
            </div>
          </div>
          <div className="right">
            <h4>Norsk Bokmal</h4>
            <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" />
          </div>
        </div>
        <div className="main">
          <div className="up-left">
            <input type="text" placeholder="Search Article No. " />
            <input type="text" placeholder="Search Product " />
          </div>
          <div className="up-right">
            <button><img src="https://img.favpng.com/20/21/0/addition-plus-and-minus-signs-clip-art-png-favpng-ytTYGc5k8QRDC8QRJCetpN7vt.jpg" alt="" /></button>
            <button><img src="https://img.favpng.com/20/21/0/addition-plus-and-minus-signs-clip-art-png-favpng-ytTYGc5k8QRDC8QRJCetpN7vt.jpg" alt="" /></button>
            <button><img src="https://img.favpng.com/20/21/0/addition-plus-and-minus-signs-clip-art-png-favpng-ytTYGc5k8QRDC8QRJCetpN7vt.jpg" alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
