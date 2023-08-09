import "./App.css";
import Title from "./Components/Title";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Paragraph from "./Components/Paragraph";
import Result from "./Components/Result";
import { useEffect, useState } from "react";

let randomNumber = Math.floor(Math.random() * 100) + 1;

function App() {
  const [number, setNumber] = useState<number>(-Infinity);
  const [result, setResult] = useState<string>();
  const [attempts, setAttempts] = useState<number>(0);
  const [value, setvalue] = useState<string>();

  useEffect(() => {
    if (number === -Infinity) {
      setResult("");
    } else if (number == randomNumber) {
      setResult("¡Felicitaciones! ¡Adivinaste el número!");
    } else if (number < 1 || number >= 100) {
      setResult(
        "El numero ingresado es invalido, ingesa un numero entre 1 y 100."
      );
    } else if (number < randomNumber) {
      setResult("Intenta con un número más alto.");
    } else {
      setResult("Intenta con un número más bajo.");
    }
  }, [attempts]);

  const adivinar = () => {
    console.log(randomNumber);
    setAttempts(attempts + 1);
  };

  const reiniciar = () => {
    setAttempts(-Infinity);
    randomNumber = Math.floor(Math.random() * 100) + 1;
    setResult("");
    setvalue("");
  };

  return (
    <div className="bg-[url('/img/background.jpg')] bg-100% w-screen h-screen mx-auto text-center font-['Roboto']">
      <Title></Title>
      <Paragraph></Paragraph>
      <Input onChange={setNumber} value={value}></Input>
      <Button buttonText="Adivinar" onClickFunction={adivinar}></Button>
      {attempts != 0 ? (
        <p className="mb-3">Cantidad de Intentos: {attempts}</p>
      ) : null}
      <Result result={result}></Result>
      <div>
        <Button buttonText="Reiniciar" onClickFunction={reiniciar}></Button>
      </div>
    </div>
  );
}

export default App;
