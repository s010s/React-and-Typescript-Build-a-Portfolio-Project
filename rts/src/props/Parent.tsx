import { ChildAsFC } from "./Child";

const handleClick = () => {
  console.log("click!");
};

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={handleClick}>
      1asdas
    </ChildAsFC>
  );
};

export default Parent;
