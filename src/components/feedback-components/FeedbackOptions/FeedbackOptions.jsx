// import s from './FeedbackOption.module.css'
function FeedbackOptions({buttons, onLeaveFeedback }) {
    return (
        <div>
            {Object.keys(buttons).map((button, index) => ( 
            <button key={index} onClick={onLeaveFeedback} name={button}>{button}</button>
            ))}
        </div>
    )
}

export { FeedbackOptions}