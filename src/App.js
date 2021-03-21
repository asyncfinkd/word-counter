import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <form className="w-1-3 el-center flex-direction form-responsive mt-3 max-w-full">
        <div className="form-ai w-full max-w-full">
          <input
            type="text"
            className="input form-ai-control max-w-full"
            placeholder=" "
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label>Your Text</label>
          <div className="absolute top-1 right-1-5">{text.length}</div>
        </div>
      </form>
    </>
  );
}

export default App;
