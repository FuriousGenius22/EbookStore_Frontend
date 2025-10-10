import { type FC } from "react";

import { Button } from "@heroui/react";
interface Props {}

const App: FC<Props> = () => {
  return (
    <div>
      <h1 className="text-5xl font-light text-red-700">
        I am the very first title
      </h1>
      <Button>23456789</Button>
    </div>
  );
};
export default App;
