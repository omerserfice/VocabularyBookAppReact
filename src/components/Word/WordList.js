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
      <h1 className="word-list-h1">Kelime Listesi - {selectedLetter}</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{width:'20%'}}>Kelime</th>
            <th>Anlamı</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((word) => (
              <tr key={word.id}>
                <td>{word.wordText}</td>
                <td>{word.turkishMeaning}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                Kelime Bulunamadı!
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* <ul className="list-group list-group-flush word-list-ul">
       
        {filteredData.length > 0 ? (
          filteredData.map((word) => <li className="list-group-item" key={word.id}>{word.wordText} - <small className="mean">{word.turkishMeaning}</small></li>)
        ) : (
          <p className="list-info">Kelime Bulunamadı!</p>
        )}
      </ul> */}
    </div>
  );
};

export default WordList;
