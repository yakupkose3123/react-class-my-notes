import React, { useState, useEffect }  from 'react'


const UseEffectComp = () => {
  const [count, setcount] = useState(0)
  const [age, setage] = useState(4)


//? sade iken her update çalışır, didUpdate gibi
  /* useEffect(() => {  
    console.log("useEffect!")
  }) */

//? içi boş bağımlılık değişkeni verirsek sadece bir kere çalışır, didMount gibi
/*   useEffect(() => {  
    console.log("useEffect!")
  },[]) */

//? bağımlılık değişkeni atadıysam ona göre çalışır. 
//burada count değiştiğinde çalış demek
/*   useEffect(() => {  
    console.log("useEffect!")
    // count !== 0 && alert(`new notification, total:${count}`)
  },[count]) */
  useEffect(() => {  
    console.log("useEffect!")
    let timer = setTimeout(() => {
      alert("hello")
    }, 3000);
    return () => {
      console.log("Functional Component Unmounted");
      clearTimeout(timer)
      //!clear up func
    }
  },[count])


// burada her yer render
  console.log("Func Comp Rendered");


 

  
  const increase = () => setcount(count + 1) //Alttakiyle aynı işlemi yapar buda diğer gösterim.
  const increaseAge = () => setage((age)=> age+1)
 

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <h3>count:{count}</h3>
      <button onClick={increase}>INCREACE COUNT</button>
      <h3>count:{age}</h3>
      <button onClick={increaseAge}>INCREACE AGE</button>   

      
    </div>
  )
}

export default UseEffectComp
