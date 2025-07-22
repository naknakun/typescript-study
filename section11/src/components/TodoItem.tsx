import type { Todo } from '../types';

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

function TodoItem(props: Props) {

  const onClickButton = () => {
    props.onClickDelete(props.id);
  }
  return (
    <>
      <div>{props.id} {props.content}</div>
      <button onClick={onClickButton}>삭제</button>
    </>    
  )
}

export default TodoItem;