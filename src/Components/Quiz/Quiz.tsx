import "./Quiz.scss";
export const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="grid grid-cols-1">
        <div className="quiz-title">Quiz</div>
        <div className="p-11">
          <div>
            <h3 className="submit h-auto">Submit you assessment</h3>
            <span className="attemps h-auto">Attempts : 3 times</span>
          </div>
        </div>
        <div>
          <div className="divider pr-10 pl-10"></div>
        </div>
        <div className="p-11">
          <div>
            <h3 className="grade h-auto">Receive grade</h3>
            <span className="pass h-auto">To Pass : 80% or higher</span>
          </div>
        </div>

        <div className="flex justify-end pr-8">
          <div className="letsStart">Let’s start Assessment</div>
        </div>
      </div>
    </div>
  );
};
