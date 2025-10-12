import { Button } from "@heroui/react";
import Book from "../svg/Book";
import { Input } from "@heroui/react";
import { useState } from "react";
import {type FormEventHandler} from "react";

interface Props{}

const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [invalidForm, setInvalidForm] = useState(false);

  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) => {
    
    e.preventDefault();
    if (!emailRegex.test(email)) return setInvalidForm(true);

    setInvalidForm(false);
    console.log(email);
  }

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 p-5 rounded-md  bg-white shadow-md">
        <Book className="w-44 h-44"></Book>
        <h1 className="text-2xl font-light text-blue-700 text-center">
          Books are the keys of countless doors. Sign up and unlock your
          potential
        </h1>
        <form className="w-full space-y-6 mt-6" onSubmit={e => handleSubmit(e)}>
          <Input
            
            label="Email"
            placeholder="John Doe"
            variant="bordered"
            className="w-full"
            value={email}
            isInvalid = {invalidForm}
            errorMessage="Invalid Email"
            onChange={({target}) => {
              setEmail(target.value)
            }}
          ></Input>
          <Button
            color="primary"
            variant="shadow"
            type="submit"
            className="w-full"
          >
            Send me the link
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
