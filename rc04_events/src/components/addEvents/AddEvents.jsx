import React from "react";

const AddEvents = ()=> {
  function shoot(e,name){
    alert(`GREAT ${name}`)
  };

  
  return(
    <div>
      {/* <button onClick = {shoot}> Take the Shoot</button> */}
      {/* Burada parantez içinde function olark çağırsaydık sayfa yükleniz yüklenmez çlışmaya başlardı */}
      <button onClick = {(e)=>shoot(e,"ARROW")}> Take the Shoot</button>
      {/* Arrow func oalrak çağırıyorsak içeride func olarak çağırıyoruz.Arrow func yer kaplayacağı için sadece parametre göndereceksek mecbur kullanıyoruz */}
    </div>
  );

};

export default AddEvents;
