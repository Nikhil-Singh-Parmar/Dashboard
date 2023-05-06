import "./Progressbar.css"
const Progress = ({ percentage }) => {
    const strokeWidth = 10;
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
  
    const progress = circumference - (percentage / 100) * circumference;
  
    return (
      <svg className="progress" width="100" height="100">
        <circle
          className="progress__background"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="progress__bar"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{ strokeDashoffset: progress, strokeDasharray: circumference }}
        />
        <text x="50%" y="50%" textAnchor="middle" className="details"dy="0.3em">
          {percentage}%
        </text>
      </svg>
    );
  };
  
function Progressbar(props){
    return(
        <>
        <Progress percentage={props.percentage} />
        </>
    )
}
export default Progressbar;