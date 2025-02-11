import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./styles.css";
import { addShortURL } from "./slice";

export default function App() {
  const [longUrl, setLongUrl] = useState([]);

  const [input, setInput] = useState("https://");
  const shortURLArray = useSelector((store) => store);
  console.log(shortURLArray);
  const dispatch = useDispatch();
  function handleSubmit() {
    setLongUrl((prev) => [...prev, input]);
    dispatch(addShortURL(Shortner(input)));
    setInput("https://");
  }
  function Shortner(longURL) {
    //const str = "qweryiopasdfghjklzxcvbnmQOPAFGHJKLZCVBNM"
    let url = longURL.split("//")[1].split(".com")[0];
    let short = "";
    const len = url.length;
    const expected = Math.ceil(len * 0.4);
    for (let i = 0; i < expected; i++) {
      const random = Math.floor(Math.random() * (len - 1));

      short += url[random];
    }
    return "https://" + short + ".com";
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <table>
        <tr>
          <th>Long URL</th>
          <th>Short URL</th>
        </tr>
        {longUrl?.map((item, index) => (
          <tr>
            <td>{item}</td>
            <td>{shortURLArray[index]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
