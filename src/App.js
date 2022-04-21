import "./App.css";
const link=["Services","Project","About"];
const logo="LOGOBAKERY";

export default function App() {
  return (
    <div className="App">
    <div className="nav">
<div><h3>{logo}</h3></div>
<div className="link"> {link.map((e)=>{
         return <div><p>{e}</p></div>
         })}</div>
<div className="button"><button>connect</button></div>


    </div>
    </div>
  );
}
