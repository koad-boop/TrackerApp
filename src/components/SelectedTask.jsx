import "../css/home.css";
import "../App.css";


export const SelectedTasks = ({ selectedTasks, completedTasks, handleTaskToggle, handleRemoveTask }) => {
  return (
    <section className="selected-tasks-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 font color">📋 Your Selected Tasks</h2>

        {Object.entries(selectedTasks).map(([skill, tasks]) =>
          tasks.length > 0 ? (
            <div key={skill} className="mb-4">
              <h4 className="text-capitalize text-primary font color">{skill}</h4>
              <div className="task-list  p-3 rounded shadow-sm">
                {tasks.map((task) => (
                  <div key={task} className="task-row d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={completedTasks[skill]?.includes(task) || false}
                        onChange={() => handleTaskToggle(skill, task)}
                      />
                      <span className={completedTasks[skill]?.includes(task) ? "text-decoration-line-through text-muted" : " font"}>
                        {task}
                      </span>
                    </div>
                    <button className="btn btn-sm btn-danger" onClick={() => handleRemoveTask(skill, task)}>
                      ❌ Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};
