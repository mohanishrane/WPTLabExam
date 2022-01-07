import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Component />
    </>
  );
}

function Component() {
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const handlemsg = (e) => {
    setmsg(e.target.value);
  };

  const addmsg = async () => {
    let url = "http://localhost:4000/addmsg";
    let data = { msg: msg };

    await axios.post(url, data);

    setmsg("");

    let newlist = [msg, ...list];

    setlist(newlist);
  };

  return (
    <div className="container-fluid">
      <h2 className="bg-info">Chwitter by Mohanish (210940320065)</h2>
      <div>
        <div className="form-control fa-text-width">
          <input
            type="text"
            value={msg}
            onChange={handlemsg}
            placeholder="Chweet here...."
            required
          />
        </div>
        <div className="btn btn-primary m-2">
          <input type="button" value="Chweet" onClick={addmsg} />
        </div>
      </div>
      <div className="bg-warning m-2">
        {list.map((item) => (
          <h3 className="m-2">{item}</h3>
        ))}
      </div>
    </div>
  );
}
