// src/components/TaskSelector.jsx
import { useEffect, useRef } from "react";
import skillsData from "../data/skillsData";
import "../css/home.css";
import "../App.css";

export const TaskSelector = ({
  taskSelectorSkill,
  selectedTasks,
  onClose,
  handleSelectTask,
}) => {
  const offcanvasRef = useRef(null);
  let offcanvasInstance = useRef(null);

  useEffect(() => {
    if (taskSelectorSkill && offcanvasRef.current) {
      // Destroy previous instance if exists
      if (offcanvasInstance.current) {
        offcanvasInstance.current.hide();
      }

      // Create and show new instance
      offcanvasInstance.current = new bootstrap.Offcanvas(offcanvasRef.current, {
        backdrop: false, // ✅ Prevents dull background
      });

      offcanvasInstance.current.show();
    }
  }, [taskSelectorSkill]);

  if (!taskSelectorSkill) return null;

  const taskList = skillsData[taskSelectorSkill] || [];
  const alreadySelected = selectedTasks[taskSelectorSkill] || [];

  return (
    <div
      className="offcanvas offcanvas-end "
      tabIndex="-1"
      ref={offcanvasRef}
      id="taskSelectorOffcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title font color " id="offcanvasLabel">
          Select tasks for {taskSelectorSkill}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>

      <div className="offcanvas-body">
        {taskList.map((task, idx) => (
          <div
            key={idx}
            className="d-flex justify-content-between align-items-center mb-2"
          >
            <span>{task}</span>
            <button
              className="btn btn-sm btn-primary"
              disabled={alreadySelected.includes(task)}
              onClick={() => {
                handleSelectTask(taskSelectorSkill, task);
                console.log("Added Task:", task); // ✅ Check if click works
              }}
            >
              {alreadySelected.includes(task) ? "Added" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
