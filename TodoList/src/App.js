import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ 
    show: false, 
    type: "", 
    msg: "" });

  const handeCLick = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Alan boş bırakılamaz');
    } 

    else if (name && isEditing) {
      setList(
        list.map((item)=>{
          if(item.id===editID){
            return{...item,title:name};
          }
          return item;
          
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'success','Başarı ile değiştirildi.');

    } 
    
    else {
      showAlert(true,"success","Başarı ile eklendi.")
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };




  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList =()=>{
    showAlert(true,"success","Liste Temizlendi")
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Listeden çıkarıldı.');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);




  


  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handeCLick}>
      {alert.show && <Alert {...alert} removeAlert={showAlert}  list={list} />}
        <h3>Yapılacaklar Listesi</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="Yapılacaklar"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn">
            {isEditing ? "Düzenle" : "Kaydet"}
          </button>
        </div>
      </form>
      {list.length > 0 ? (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem= {editItem} />
          <button className="clear-btn" onClick={clearList}>Listeyi Temizle</button>
        </div>
      ) : null}
    </section>
  );
}

export default App;
