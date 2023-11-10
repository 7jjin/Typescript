import { Todo } from "../tpyes";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번은 {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
