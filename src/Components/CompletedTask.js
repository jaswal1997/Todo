function CompletedTask(props) {
  return (

    <div className="complete-task">
      <h3 className="task-list-header"> Completed Task </h3>
      {props.checkbox.map((completed, index) => {
        return (
          <div className="task-list-item" key={index}>
            <img src="/undo.png" onClick={() => props.undo(index)} />
            <p className="task-name">{completed}</p>
            <img src="assets/delete.png" onClick={() => props.callback(index, "completetask")} />


          </div>)
      }
      )
      }
    </div>

  );
}

export default CompletedTask;