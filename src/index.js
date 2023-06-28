import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as actions from './store/actions';
import { initiateStore } from './store/store';

const store = initiateStore();
const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    })
  }, []);

  const compliteTask = (taskId) => {
    store.dispatch(actions.taskComplited(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChanged(taskId));
  }
  const deleteTask = (taskId) => {
    store.dispatch(actions.taskDeleted(taskId));
  }

  return <>
    <h1>APP</h1>
    <ul>
      {state.map(el => <li key={el.id}>
        <p>{el.title}</p>
        <p>{`Complited: ${el.complited}`}</p>
        <button onClick={() => compliteTask(el.id)}>Complete</button>
        <button onClick={() => changeTitle(el.id)}>Change Title</button>
        <button onClick={() => deleteTask(el.id)}>Delete Task</button>
        <hr />
      </li>)}
    </ul>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
