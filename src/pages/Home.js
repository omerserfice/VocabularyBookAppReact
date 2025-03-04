import React,{useState} from "react";
import Alphabet from "../components/Alphabet/Alphabet";
import WordList from "../components/Word/WordList";
import Word from "../components/Word/Word";
import './Home.css'

const Home = () => {

  const [selectedLetter, setSelectedLetter] = useState("A"); 
  return (
    <div className="home container-fluid">
      <div className="row">
        <div className="col-lg-2 col-sm-6 col-xs-6" style={{padding:0}}>
          <Alphabet selectedLetter={selectedLetter} onLetterSelect={setSelectedLetter} />
        </div>
        <div className="col-lg-10 col-sm-6 col-xs-6">
          <Word/>
          <WordList selectedLetter={selectedLetter}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
