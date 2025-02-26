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

      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{width:'20%'}}>İngilizce Kelime</th>
            <th style={{width:'20%'}}>Türkçe Karşılığı</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((word) => (
              <tr key={word.id}>
                <td style={{fontWeight:"bold"}}>{word.wordText}</td>
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
      </div>

    </div>
  );
};

export default WordList;
