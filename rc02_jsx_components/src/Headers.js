//! We can create a Component in React via 2 ways.
//! 1-) Function-based (state of the art )
//! 2-) Class-based (more complex and less effective)
//? React uses JSX.
//? In JSX, we can directly use HTML elements in JS
//! Components can return a combined HTML,CSS,JS code.
//! But, it must return a single containered (like div, section, article, <> etc.) element
//*******************************************************************************************/
//* In JSX, Styling can be performed in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet.
//! NOTES:
//* For styling, property-value(object) structure is used.
//* camelCase is used for property name,
//* className is used for class definitions
//* 3rd parties libraries like Material UI, Styled Component, Sass, Bootstrap etc.
//* can also be used for styling



const pStyle = {
    fontFamily:"Tahoma",
    fontSize:"2rem",
    color:"purple"
}
function Headers() {
    return(
    <div style={{backgroundColor:"yellow",textAlign:"center"}}>
        <h1 style={{color:"red"}}>CLARUSWAY</h1>
        <p style={{border:"1px solid red"}}>Reinvent Yourself</p>
        <p style={pStyle}>GLOBAL DEĞİŞKEN İLE STYLE</p>
    </div>)
}
export default Headers;