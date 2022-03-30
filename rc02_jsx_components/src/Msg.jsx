import "./Msg.css";

function Msg() {
  return (
    <div>
        <h1>Welcome to our react Courses</h1>
        <img 
        className="msg-img"
        src="data:image/jpeg;base64,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" alt="" />
    </div>
  )
}

export default Msg