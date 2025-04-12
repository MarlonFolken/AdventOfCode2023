'use client'
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import styles from "./page.module.css"

export default function Challenge01 (){
  const [userInput, setUserInput] = useState("");
  const [sentences, setSentences] = useState<string[]>([])

  const handleAdd = () => {
    if(userInput.length > 0){
      if(sentences.length > 0){
        const nextSentence = [...sentences, userInput]
        setSentences(nextSentence);
      }else{
        setSentences([userInput])
      }
      setUserInput("");
    }
  }
  const deleteAdd = () => {
    setSentences([]);
  }
  const pullsNumericArray = () => {
    //Creates an Array of numbers found separated by row.
    //uses regex /[^0-9]/g to acquire only numbers available.
    let numericArray :number[];
    if(sentences.length > 0){
      numericArray = sentences.map( sentence => parseInt(sentence.replace(/[^0-9]/g, '')) )
    }else{
      numericArray = []
    }
    return numericArray;
  }
  const getSumOfAns = (numericArray :number[]) => {
    if(numericArray.length > 0){
      //Retur final sum
      //First assembles an array with only 2 digits
      const twoDigitArray = numericArray.map(evalnum => {
        if(evalnum < 10){
          //When row had one number, proceeds to duplicate it. 
          //Notice: parseInt() from pullsNumericArray() ignores leading zeros, therefore 07 value is saved as 7
          return (evalnum * 10) + evalnum
        }else{
          if(evalnum > 99){
            let stringevalnum = evalnum + ""
            stringevalnum = stringevalnum.slice(0,1) + stringevalnum.slice(-1)
            return parseInt(stringevalnum);
          }else{
            return evalnum;
          }
        }
      })
      return twoDigitArray.reduce((a, b) => a + b)
    }else{
      return 0;
    }
  }

  return (
    <div className={styles.page}>
      <Link href="/">
        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            
          />
        Back to index
      </Link>
      <h1>Challenge01 - Finding 2 numbers</h1>
      <section className="explanation">
        <article>
          {/* Animated Lore */}
        </article>
        <article>
          <p>Considering every line, the calculation requires to find the first and last numeric digits within the line and in case only one numeric digit is available, duplicate it.
            Then combine every two digits and display the sum of all values.</p>
          <p>For example, in the case with these 4 lines:</p>
          <div className={styles.examplecode}>
            <code>
              1abc2<br/>
              pqr3stu8vwx<br/>
              a1b2c3d4e5f<br/>
              treb7uchet<br/>
            </code>
          </div>
          <p>Given lines result in values 12, 38, 15 and 77. The sum of all values gives 142.</p>
        </article>
      </section>
      <section className="userinput">
        <p>You may copy/paste the example above line by line, or insert your own lines of code</p>
        <article className="userinput-left">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleAdd}
          >Add</button>
          <button
            onClick={deleteAdd}
          >Delete all</button>
        </article>
        <article className="userinput-right">
          {(sentences.length > 0) && sentences.map((sentence, i) => {
            return <p key={i}>{sentence}</p>
          })}
        </article>
      </section>
      <section>
        <div className={styles.result}><strong>
        Answer: {getSumOfAns(pullsNumericArray())}
        </strong></div>
      </section>
    </div>
  );
}