import { useState } from 'react'
import { Section } from './feedback-components/Section'
import { FeedbackOptions } from './feedback-components/FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './feedback-components/Statistics'
import { Notification} from './feedback-components/Notification'

function FeedbackNew(props) { 
  const [state, setState] = useState({
    good: 0,
    bad: 0,
    neutral: 0
  })
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);


  const handleClick = e => { 
    setState((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1
    }))
  }

  // const handleClick = e => {
  //   let { name, value } = e.target
  //   switch (name) { 
  //     case "good":
  //       setGood(value+=1)
  //       break
  //     case "bad":
  //       setBad(value+=1)
  //       break
  //     case "neutral":
  //       setNeutral(value+=1)
  //       break
  //     default: return
  //   }
  // }

  const countTotalFeedback = () => {
    return  state.good + state.bad + state.neutral
  }

  const countPositiveFeedbackPercentage = () => {
    return   (state.good /  countTotalFeedback() * 100).toFixed(2)
  }

return (<>
  <Section title = 'Please leave feedback'>
    <FeedbackOptions buttons={ state } onLeaveFeedback={handleClick} />
  </Section>
  <Section title="Statistic">
    {countTotalFeedback() === 0 ? 
      <Notification message='There is no feedback' /> : 
      < Statistics
        good={state.good}
        bad={state.bad}
        neutral={state.neutral}
        total={countTotalFeedback()}
        positivePercentage={ countPositiveFeedbackPercentage() }/>
    }
  </Section>
</>
) 
}
export default FeedbackNew
