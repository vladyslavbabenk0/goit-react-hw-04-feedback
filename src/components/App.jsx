import React from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import { useState } from 'react';


const App = ()=> {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = state => {
    setState(prevState => {
      return { ...prevState, [state]: prevState[state] + 1 };
    });
  };

 const countTotalFeedback=()=> {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage=()=> {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const positive = (good / total) * 100;
    return Math.round(positive) || 0;
  }

    const { good, neutral, bad } = state;
    const keys = Object.keys(state);
    return (
      <div>
        <Section title={'Please, leave feedback'}>
          <Feedback options={keys} onLeaveFeedback={onLeaveFeedback} />
        </Section>
         <Section title={'Statistics'}>
            {good || neutral || bad ? (
            
             <Statistics
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onTotal={countTotalFeedback()}
                onPositive={countPositiveFeedbackPercentage()}
              />
              
            ) : (
             <Notification message="There is no feedback" />
            )}
         </Section>
      </div>
    );
  }

export default App;