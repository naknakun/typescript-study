import { useTodoDispatch } from '../App';
import type { Todo } from '../types';

type Props = Todo

function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();


  const onClickButton = () => {
    dispatch.onClickRemove(props.id);
  }
  return (
    <>
      <div>{props.id} {props.content}</div>
      <button onClick={onClickButton}>삭제</button>
    </>    
  )
}

export default TodoItem;