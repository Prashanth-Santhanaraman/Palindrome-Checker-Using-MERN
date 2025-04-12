import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";

export default function Palindrome() {
  const [palindromeText, setPalindromeText] = useState("");
  const [data, setData] = useState([]);

  const handleCheck = async(e) => {
    e.preventDefault();
    if(palindromeText.length === 0){
        
    }
    console.log(palindromeText);
    await axios
      .post("http://localhost:4000/newPalindromeString", {
        palindromeText: palindromeText,
      })
      .then((res) =>{
        setData(res.data)
        if(res.data.state === "true"){
            Swal.fire({
                icon: "success",
                title: `${res.data.message}`,
              });
          }else{
            Swal.fire({
                icon: "error",
                title: `${res.data.message}`,
                text: "Try with other text",
              });
          }
          setPalindromeText("")
      } )
      .catch((err) => console.error(err));



      console.log(data)
  };
  return (
    <>
      <div className="bg-amber-200 p-2">
        <h1 className="text-2xl pl-4 p-2">Palindrome Checker using Backend</h1>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-amber-300 p-4 flex flex-col rounded-md border-2">
          <form className="flex flex-col p-2">
            <label htmlFor="palindromeString">Enter a Word:</label>
            <input
              type="text"
              id="palindromeString"
              className="bg-white p-2 mt-2 rounded-md w-64"
              placeholder="Enter the text"
              onChange={(e) => setPalindromeText(e.target.value)}
            />
            <button
              className="btn p-2 bg-black mt-4 rounded-md text-white cursor-pointer"
              onClick={handleCheck}
            >
              Check
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
