import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {count : 0}
  // }
  state = {count : 0}
  increase = ()=> this.setState({count : this.state.count+1})
  nameadd = ()=> this.setState({name : "jacop joseph"})
/* class yapılarda state üzerine eklerken functional yapılarda eski state kaldırıp yenisini ekliyor replace yapıyor */

// component oluştuktan sonra gerçekleşecek eylem.Sadece bir kere çalışır
  componentDidMount(){
      this.nameadd()
    }

// component güncellendiğinde gerçekleşecek eylem. Burada prevProps ve prevState ile bir önceki prop ve state de ulaşabilirisn
  componentDidUpdate(prevProps, prevState){
    prevState.count !== this.state.count && window.alert(prevState.count);
  }


  // coponent öldüğünde gerçekleşecek eylem
  componentWillUnmount () {
    alert("class Comp Will Unmount Bye Bye")
  }
  
  
  render(){
    return(
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count : {this.state.count}</h3>
        <h3>Name : {this.state.name}</h3>
        <button onClick = {this.increase}> INCREASE</button>
        

      </div>
    )
  }  
}

export default ClassComponent
