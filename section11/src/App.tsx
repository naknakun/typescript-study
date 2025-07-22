import { useEffect, useReducer, useRef } from 'react';
import './App.css'
import Editor from './components/Editor'
import TodoItem from './components/TodoItem';
import type { Todo } from './types';

type Action = {
  type: 'CREATE',
  data: {
    id: number;
    content: string;
  }
} | { type: 'DELETE', data: number }


function reducer(state: Todo[], action: Action) {
  switch(action.type){
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((x) => x.id !== action.data);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  useEffect(() => {
    console.log(todos);
  }, [todos])

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text
      }
    })
  }

  const onClickRemove = (id: number) => {
    dispatch({
      type: 'DELETE',
      data: id
    })
  }

  return (
    <div className='App'>
      <h1>Todo</h1>
      <Editor oncClickAdd={onClickAdd} >
      </Editor>
      <div>
        {
          todos.map((todo) => 
            (
              <TodoItem key={todo.id} {...todo} onClickDelete={onClickRemove}/>
            )
          )
        }
      </div>
    </div>
  )
}

export default App
