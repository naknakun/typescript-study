import { useState } from 'react';

interface Props {
  oncClickAdd: (text: string) => void;
}


function Editor(props: Props) {
  const [text, setText] = useState('');
  
  const onChangeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = () => {
    props.oncClickAdd(text);
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