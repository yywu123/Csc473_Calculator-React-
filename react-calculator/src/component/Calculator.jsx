import "./Calculator.css";
import * as math from "mathjs";
import { useState, useRef } from "react";

const Calculator = () => {
  let [board, setBoard] = useState("");
  let [result, setResult] = useState("");
  const ref = useRef(null);

  function getVal(text) {
    switch (text) {
      case "+":
        return "+";
      case "x":
        return "*";
      case "√":
        return "sqrt(";
      case "x!":
        return "!";
      case "−":
        return "-";
      case "÷":
        return "/";
      case "tan":
        return "tan( ";
      case "cos":
        return "cos( ";
      case "x y":
        return "^";
      case "sin":
        return "sin( ";
      case "log":
        return "log(";
      case "ln":
        return "ln(";
      case "EXP":
        return "*10^";
      default:
        return text;
    }
  }

  function ln2log() {
    const ln = "ln(",
      closure = ")",
      val = board;
    let start = val.indexOf(ln);
    let end = val.indexOf(closure, start);
    let num = val.substring(start + 3, end);

    if (start !== -1) {
      setBoard(
        val.substring(0, start) +
          "log(" +
          num +
          ",e)" +
          val.substring(end + 1, val.length)
      );
    }
  }

  return (
    <div ref={ref} class="main">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.3.1/math.js"
        integrity="sha512-Q1qOFs0DNtp9bviP8uSyPm0d1ES7zw8BXZ7AF2XCWIVKHObK6U7mkMZ+SGOf1vF71zI/60lO+FjBTrzaYGRqnw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>

      <h1 class="title">My Google Calculator</h1>
      <div class="cal">
        <div class="container">
          <div class="display">
            <input type="text" id="result" value={result} disabled="disabled" />
            <input
              type="text"
              id="board"
              value={board}
              class="input-box"
              disabled="disabled"
              placeholder="0"
            />
          </div>

          <div class="btns">
            <div class="row">
              <button
                disabled
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                Deg
              </button>

              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                x!
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                (
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                )
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                %
              </button>
              <button
                class="function"
                onClick={() => {
                  setResult("");
                  setBoard("");
                }}
              >
                AC
              </button>
            </div>

            <div class="row">
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                sin
              </button>
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                ln
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                7
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                8
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                9
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                ÷
              </button>
            </div>

            <div class="row">
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                cos
              </button>
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                log
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                4
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                5
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                6
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                x
              </button>
            </div>

            <div class="row">
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                tan
              </button>
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                √
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                1
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                2
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                3
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                −
              </button>
            </div>

            <div class="row">
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                EXP
              </button>
              <button
                class="function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                x <span class="exponent">y</span>
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                0
              </button>
              <button
                class="btn number"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                .
              </button>
              <button
                class="equal"
                onClick={() => {
                  try {
                    ln2log();
                    let res = math.evaluate(board);
                    math.format(res, { precision: 10 });
                    setResult(board + "=");
                    setBoard(res);
                  } catch (error) {
                    setResult("err");
                    setBoard("");
                  }
                }}
              >
                =
              </button>
              <button
                class="btn function"
                onClick={(e) => {
                  setBoard(board + getVal(e.target.innerText));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <script src="app.js"></script>
      </div>
    </div>
  );
};

export default Calculator;
