
const Todo = ({task,isDone}) => {
  return (
    // <div>
    //   <li>{isDone ? 'Finished': 'work on'} : {task} </li>
    // </div>

    // <div>
    //   <li>
    //     {task} : {isDone && 'Done'}
    //   </li>
    // </div>

    <div>
      <li>
        {isDone && task}
      </li>
    </div>
  );
}

export default Todo
   
