import React, { useContext, useEffect, useReducer, useRef } from 'react';
import './App.css'
import Editor from './components/Editor'
import TodoItem from './components/TodoItem';
import type { Todo } from './types';
import _ from 'lodash';

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

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickRemove: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('에러 발생');

  return dispatch;
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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onClickRemove,
        }}>
          <Editor  >
          </Editor>
          <div>
            {
              todos.map((todo) => 
                (
                  <TodoItem key={todo.id} {...todo} />
                )
              )
            }
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
