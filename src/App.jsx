import { useState } from "react";

import Descriptions from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.bad + clicks.neutral;
  const positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Descriptions />
      <Options onClick={() => updateFeedback("good")}>Good</Options>
      <Options onClick={() => updateFeedback("neutral")}>Neutral</Options>
      <Options onClick={() => updateFeedback("bad")}>Bad</Options>
      <Options>Reset</Options>
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
