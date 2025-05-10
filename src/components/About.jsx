import "../css/about.css"
import "../App.css";

export const About = () => {
  return (
    <section id="Features" className="features font">
    <div className="container text-center common-title ">
      <h2 className="common-heading fw-bold"> Our Features</h2>
      <hr className="w-25 mx-auto"/>
      <div className="row justify-content-center mb-4 ">

        <div className="col-md-6 d-flex">
          <div className="card mb-3 shadow-lg  w-100 h-100">
            <div className="row g-3">
              <div className="col-md-4">
                <img src="selecttask.png" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body lh-lg text-start fw-semibold">
                  <h5 className="card-title">Select Daily Tasks</h5>
                  <hr className="w-25"/>
                  <p className="card-text ">
                      Choose your learning goals every day based on your selected skills like HTML, CSS, JavaScript, or React. Stay focused with clear daily objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex">
          <div className="card mb-3 shadow-lg w-100 h-100">
            <div className="row g-3">
              <div className="col-md-4">
                <img src="trackpro.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body lh-lg text-start fw-semibold">
                  <h5 className="card-title">Track Your Progress</h5>
                  <hr className="w-25"/>
                  <p className="card-text">
                     Monitor your task completion status daily. View how much you've completed using progress bars, charts, and task checklists.
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row justify-content-center ">

        <div className="col-md-6 d-flex">
          <div className="card mb-3 shadow-lg w-100 h-100">
            <div className="row g-3 ">
              <div className="col-md-4">
                <img src="streak.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body lh-lg text-start fw-semibold">
                  <h5 className="card-title">Build a Learning Streak</h5>
                  <hr className="w-25"/>
                  <p className="card-text">
                     Earn streaks by completing your daily tasks consistently. Track your progress using a GitHub-style streak calendar to stay motivated.
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex">
          <div className="card mb-3 shadow-lg w-100 h-100">
            <div className="row g-3">
              <div className="col-md-4">
                <img src="dashboard.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body lh-lg text-start fw-semibold">
                  <h5 className="card-title">Personalized Dashboard</h5>
                  <hr className="w-25 "/>
                  <p className="card-text">
                       Access your selected tasks, daily goals, progress charts, and streak calendar — all in one centralized, beautifully designed dashboard.
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
};
