import { useState, useCallback } from 'react'
import { Section } from './feedback-components/Section'
import { FeedbackOptions } from './feedback-components/FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './feedback-components/Statistics'
import { Notification} from './feedback-components/Notification'

function FeedbackNew(props) { 
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClick = useCallback(e => {
    const value = e.target.textContent.toLowerCase()
    switch (value) { 
      case "good":
        setGood(prev => prev + 1)
        break
      case "bad":
        setBad(prev => prev + 1)
        break
      case "neutral":
        setNeutral(prev => prev + 1)
        break
      default: 
        throw new Error();
    }
  }, [])

  const countTotalFeedback = () => {
    return  good + bad + neutral
  }

  const countPositiveFeedbackPercentage = () => {
    return   (good /  countTotalFeedback() * 100).toFixed(2)
  }

return (<>
  <Section title = 'Please leave feedback'>
    <FeedbackOptions
      states={['good', 'bad', 'neutral']}
      onLeaveFeedback={handleClick} />
  </Section>
  <Section title="Statistic">
    {countTotalFeedback() === 0 ? 
      <Notification message='There is no feedback' /> : 
      < Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={countTotalFeedback()}
        positivePercentage={ countPositiveFeedbackPercentage() }/>
    }
  </Section>
</>
) 
}
export default FeedbackNew
