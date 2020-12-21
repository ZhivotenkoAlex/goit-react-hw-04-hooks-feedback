// import React, { Component } from 'react';
import { useState} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import NotificationMessage from './components/NotificationMessage/NotificationMessage';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import './App.css';


export default function App() {
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad] = useState(0);

  const options =  ['good', 'neutral', 'bad'] ;

  const feedbackIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default: return;
      }
  }

  const totalQuantityOfFeedbacks = () => good + neutral + bad;
  
  const percentageOfGoodFeedbacks = () => Math.round((good / totalQuantityOfFeedbacks()) * 100)||0;

  return (
     <>
       <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onFeedback={feedbackIncrement}
          options={options}>
         </FeedbackOptions>
      </Section>
      
       <Section title={'Statistics'}>
         {totalQuantityOfFeedbacks() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalQuantityOfFeedbacks()}
            percentageOfGoodFeedbacks={percentageOfGoodFeedbacks()}>
          </Statistics>
        ) : (
            <NotificationMessage message='There is no one feedback yet' />
          )}
      </Section>
    </>)
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

  // totalQuantityOfFeedbacks = () => {
  //   const { good, neutral, bad } = this.state;

  //   const total = good + neutral + bad;
  //   return total;
  // };

  // percentageOfGoodFeedbacks = () => {
  //   const total = this.totalQuantityOfFeedbacks();
  //   const { good } = this.state;
  //   const percentageOfGood = total ? Math.round((good / total) * 100) : 0;
  //   return percentageOfGood;
  // };

//   onFeedbackIncrease = ({ target }) => {
//     const type = target.dataset.action;
//     this.setState(prevState => {
//       return { [type]: prevState[type] + 1 };
//     });
//   };
   
//   render() {

//     const { good, neutral, bad } = this.state;
//     const options = ['good', 'neutral','bad'];
//     const totalFedbacks = this.totalQuantityOfFeedbacks();
//     const goodFeedbacks = this.percentageOfGoodFeedbacks();


//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions options={options} onFeedback={this.onFeedbackIncrease}>
//           </FeedbackOptions>
//         </Section>

//         <Section title={'Statistics'}>
//           {good || neutral || bad ? (
//             <Statistics good={good} neutral={neutral} bad={bad} total={totalFedbacks} percentageOfGoodFeedbacks={goodFeedbacks}/>): (<NotificationMessage message='There is no one feedback yet'/>)
//           }
//         </Section>
//       </>
//     );
//   }
// }



