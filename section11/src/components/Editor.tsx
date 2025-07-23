import { useState } from 'react';
import { useTodoDispatch } from '../App';



function Editor() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState('');
  
  const onChangeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = () => {
    dispatch.onClickAdd(text);
    setText('');
  }

  return (
    <div>
      <input value={text} onChange={onChangeButton} />
      <button onClick={onClickAdd}>추가</button>
    </div>
  )
}

export default Editor;