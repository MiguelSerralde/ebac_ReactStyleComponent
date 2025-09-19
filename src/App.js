import { useState } from "react";
import Library from "./component/Library/Library";
import Searchartist from "./component/Search/searchartist";
import { Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./themes/GlobalStyle";


function App() {
  const [bandName, setBandName] = useState("")

  const handlePrompt = (sendPrompt) => {
    setBandName(sendPrompt)    
  }

  return (
    <div className="App">
    <GlobalStyle/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Searchartist sendPrompt={handlePrompt}/>}/>            
          <Route path="/artist" element={<Library artistName={bandName}/>} />          
        </Routes>

      </header>
    </div>
  );
}

export default App;
