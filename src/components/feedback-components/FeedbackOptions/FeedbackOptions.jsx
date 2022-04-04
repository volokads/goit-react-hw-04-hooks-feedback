function FeedbackOptions({states, onLeaveFeedback }) {
    return (
            <ul>
                {states.map(state => {
                    return (
                        <li>
                            <button
                                key={state}
                                onClick={e=> onLeaveFeedback(e)}
                                name={state}
                            >
                                {state}
                            </button>
                        </li>
                    )}
                )}
            </ul>
    )
}

export { FeedbackOptions}