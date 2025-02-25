import React, { useEffect } from "react";
import "./WordList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "../../redux/features/wordSlice";
const WordList = ({ selectedLetter }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.words);

  console.log(data);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredData = data.filter((word) =>
    word.wordText.toLowerCase().startsWith(selectedLetter.toLowerCase())
  );

  return (
    <div>
      <h1 className="word-list-h1">Words related to the letter</h1>
      <h2 className="word-list-h2">{selectedLetter}</h2>
      <hr style={{ color: "white" }}></hr>
      <ul className="list-group list-group-flush word-list-ul">
       
        {filteredData.length > 0 ? (
          filteredData.map((word) => <li className="list-group-item" key={word.id}>{word.wordText} - <small className="mean">{word.turkishMeaning}</small></li>)
        ) : (
          <p className="list-info">Henüz {selectedLetter}  ile başlayan kelime girişi yapılmamış!</p>
        )}
      </ul>
    
      
    
    </div>
  );
};

export default WordList;
