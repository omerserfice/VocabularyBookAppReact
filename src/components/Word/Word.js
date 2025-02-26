import React from "react";
import "./Word.css";
const Word = () => {
  return (
    <div className="word-container">
      <h1 className="word-h1">İngilizce Kelime Defteri</h1>
      <form className="word-form">
       
        <div className="form-group">
          <label className="label-word">İngilizce Kelime(eng)</label>
          <input className="word-text" type="text"></input>
       
        <div className="form-group">
          <label className="label-word">Türkçe Anlamı(tr)</label>
          <input className="word-text" type="text"></input>
        </div>
        </div>
        
        <button className="word-text-button">Ekle</button>
       
       
      </form>
      <hr style={{ color: "#fff" }}></hr>
    </div>
  );
};

export default Word;
