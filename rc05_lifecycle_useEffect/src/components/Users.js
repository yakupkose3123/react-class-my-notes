
import React, {useState, useEffect} from 'react'
import axios from "axios"

const Users = () => {
  const [users, setusers] = useState([])
  //useState() içinde array kullanmazsam aşağıdaki return içindeki map daha veri çekilmeden çalışmaya çalışır ve hata verir.yada oraya bir koşul koymak gerelir

/*   const getUsers = () =>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setusers(res.data))
    .catch(err =>console.log(err))

  } */

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setusers(res.data))
    .catch(err =>console.log(err))
    
  },[])
  //buraya bir bağımlılık değişkeni verdiğim için bir defa çalışır, yoksa sürekli her render da çalılır sonsuz döngüye girer 

  return (
    <div className='users'>
      <h2>Users</h2>  
        {/* <button onClick={getUsers}>GET USERS</button>     */}
      <div className="users-cards">
        {/* bu alt satırdaki ? eğer users true ise çalış demek */}
        {users?.map((user) =>(
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
