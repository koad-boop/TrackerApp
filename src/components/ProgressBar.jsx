// components/ProgressBar.jsx
export const ProgressBar = ({ percentage }) => (
  <div className="progress-section p-3">
    <h5 className="mb-2">Progress: {percentage}%</h5>

    <div className="progress" style={{ height: '20px' }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${percentage}%`,
          backgroundColor: percentage === 100 ? 'green' : '#0d6efd', // green on complete
        }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>

    {percentage === 100 && (
      <h6 className="mt-3 text-success">🎉 Congratulations! All tasks completed!</h6>
    )}
  </div>
);
