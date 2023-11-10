import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState(""); // 초기값에 아무값이나 넣어주는게 좋다.
  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
