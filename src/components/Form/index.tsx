import React from "react";
import { toast } from "react-toastify";

import * as C from "./styles";
import axios from "axios";

const Form: React.FC = () => {
  const [message, setMessage] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState<string[]>([]);
  const [getNumber, setGetNumber] = React.useState("");

  const addNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // Verificação dos valores
    if (!message) {
      return toast.error("Por favor, insira ao menos uma mensagem.");
    }
    if (!getNumber) {
      return toast.error("Por favor, insira ao menos um whatsApp válido.");
    }

    if (!getNumber.startsWith("55")) {
      return toast.warning(
        "Por favor, insira o DDI do seu pais e DDD referente ao seu estado. Ex: '5521...'"
      );
    }

    // Criação da lista
    const newList = [...phonenumber];

    newList.push(getNumber);

    setPhoneNumber(newList);

    // Limpar o state
    setGetNumber("");
  };

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3333/api/send-text", {
        phonenumber,
        message,
      });
      
      setMessage("")
      setPhoneNumber([]);
      return toast.success(data.message)

    } catch (error: any) {
        console.log(error)
    }
  };

  return (
    <C.Container>
      <form>
        <C.InputGroupArea>
          <label>Message</label>
          <textarea
            rows={10}
            cols={50}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </C.InputGroupArea>
        <C.InputGroupArea className="bottom">
          <label>Phone number</label>
          <input
            type="text"
            name="phonenumber"
            value={getNumber}
            onChange={(e) => setGetNumber(e.target.value)}
          />
        </C.InputGroupArea>
        <C.ContentButton>
          <button onClick={addNumber}>ADD</button>
          <button onClick={sendMessage}>SEND</button>
        </C.ContentButton>
      </form>
      <C.ContentContacts>
        {phonenumber.map((number, index) => (
          <div className="content-area" key={index}>
            <p>{number}</p>
          </div>
        ))}
      </C.ContentContacts>
    </C.Container>
  );
};

export default Form;
