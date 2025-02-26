import React from "react";
import "./Word.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { fetchWords } from "../../redux/features/wordSlice";
import { useDispatch } from "react-redux";

const Word = () => {

  const {register,handleSubmit, formState: {errors},reset} = useForm();
  const dispatch = useDispatch();
  const onSubmit = async(data) => {
    console.log(data);
      try {
        const response = await axios.post("http://localhost:7108/api/Word/AddWord",data);
        console.log(response.data);

        Swal.fire({
          icon: 'success',
          title: 'Başarılı!',
          text: 'Kelime başarıyla eklendi.',
        });
        
        dispatch(fetchWords());

        reset({
          wordText:'',
          turkishMeaning:''
        });

      } catch (error) {
        if (error.response?.data?.code === '23505') {
          Swal.fire({
            icon: 'error',
            title: 'Hata!',
            text: error.response.data.message || 'Bu kelime zaten eklenmiş. Eklenmiş kaydı tekrar ekleyemezsiniz.',
          });

          reset({
            wordText:'',
            turkishMeaning:''
          });
          
        } else {
          // Diğer hatalar için genel hata mesajı
          Swal.fire({
            icon: 'error',
            title: 'Hata!',
            text: error.response?.data?.message || 'Kelime eklenirken bir hata oluştu.',
          });
        }
      }
  }

  return (
    <div className="word-container">
      <h1 className="word-h1">İngilizce Kelime Defteri</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="word-form">
       
        <div className="form-group">
          <label className="label-word">İngilizce Kelime(eng)</label>
          <input id="wordText" className="word-text" type="text"
           {...register('wordText', {required:'Kelime alanı zorunludur.'})}></input>
           {errors.wordText && <p  className="error">{"*"+errors.wordText.message}</p>}
        <div className="form-group">
          <label className="label-word">Türkçe Anlamı(tr)</label>
          <input id="turkishMeaning" className="word-text" type="text"
           {...register('turkishMeaning', {required:'Türkçe anlam alanı zorunludur.'})}></input>
           {errors.turkishMeaning && <p className="error">{"*"+errors.turkishMeaning.message}</p>}
        </div>
        </div>
        
        <button type="submit" className="word-text-button">Ekle</button>
       
       
      </form>
      <hr style={{ color: "#fff" }}></hr>
    </div>
  );
};

export default Word;
