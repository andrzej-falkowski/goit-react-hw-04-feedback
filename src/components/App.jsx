import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import styles from "./App.module.css";

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onLeaveFeedback = options => {
    switch (options) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;

      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case "bad":
        setBad(prevBad => prevBad + 1);
        break;

      default: break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    console.log(`Total:${countTotalFeedback()}`)
    console.log(`Good:${good}`)
    return (Math.round(good / countTotalFeedback() * 100));

  };

  const options = ["good", "neutral", "bad"];
  return (
    <div className={styles.container}>
      <Section title="Please leave feedback!">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={options}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            percentPositive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
