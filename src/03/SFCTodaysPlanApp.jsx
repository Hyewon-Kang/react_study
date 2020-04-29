function TodaysPalnApp(props){
    const { onButtonClick, hasPlan } = props;
    return(
        <div className="body">
            {hasPlan? <TodaysPlan /> : null}
            <button onClick={onButtonClick}>
                No Plan
            </button>
        </div>
    );
}

export default TodaysPalnApp;