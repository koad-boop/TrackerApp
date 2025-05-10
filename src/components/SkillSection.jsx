
import "../css/home.css";
import "../App.css";
export const SkillSection = ({ selectedSkill, handleAddTask }) => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        {selectedSkill.map((skill) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={skill}>
            <div className="card shadow-lg h-100">
              <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="card-title text-center  font color">{skill}</h5>
                <button
                  className="btn btn-sm btn-primary mt-3 font"
                  onClick={() => handleAddTask(skill)}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
