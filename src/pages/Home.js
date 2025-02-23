import React from "react";
import Alphabet from "../components/Alphabet/Alphabet";
import Vocabulary from "../components/Vocabulary";

const Home = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"black"}}>
      <div className="row">
        <div className="col-3">
          <Alphabet />
        </div>
        <div className="col-9">
          <Vocabulary />
        </div>
      </div>
    </div>
  );
};

export default Home;
