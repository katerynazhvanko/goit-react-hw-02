import { useState, useEffect } from "react";

import Descriptions from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification";

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("clicks");

  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks);

  useEffect(() => {
    window.localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.bad + clicks.neutral;

  const positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          clicks={clicks}
          sum={totalFeedback}
          percent={positiveFeedback}
        />
      )}
    </>
  );
}
