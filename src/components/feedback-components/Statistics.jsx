function Statistics({ good, bad, neutral, total, positivePercentage }) {
    return (
        <>
           <p >Good: {good}</p>
            <p>Bad: { bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total} </p>
            <p>Positive feedback: { positivePercentage} % </p> 
        </>
    )
}

export { Statistics}