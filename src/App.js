// The CSS inside a module is available only for the component that imported it,
// and you do not have to worry about name conflicts. (Like Angular component styling )
import styles  from './App.module.css';
import React from "react";

const App = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div>
      <div className={styles.title}>Let's get started !</div>
      <div style={{
        color: 'red',
        textAlign: 'center',
        backgroundColor: "white",
        padding: "15px",
        margin: 15,
      }}>Hello ReactJS !</div>
      <div style={mystyle}>Style exemple 2</div>
    </div>
  );
}

export default App;
