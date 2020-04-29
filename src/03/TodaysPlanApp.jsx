class TodaysPlanApp extends React.Component{
    render() {
        return(
            <div className="body">
                {hasPlan? <TodaysPlan /> : null}
                <button onClick={onButtonClick}>
                    계획없음
                </button>
            </div>
        );
    }
}

export default TodaysPlanApp;
