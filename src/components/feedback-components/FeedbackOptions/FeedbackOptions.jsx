import s from './FeedbackOption.module.css'
function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            <ul>
                {Object.keys(options).map(key => {
                    return (
                        <li className={s.list} key={key}>
                            <button
                                name={key}
                                onClick={onLeaveFeedback}
                                type="button">
                                {key}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
}

export { FeedbackOptions}