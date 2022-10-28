import React, { useState, useEffect } from "react";
const MyButton = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "You clicked ${count} times";
  });
  return (
    <Button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </Button>
  );
};
export default MyButton;
