import React from "react";

export default function(loadingMessage = "로딩 중"){
    return function withLoading(WrappedComponent){
        const { displayName, name: componentName } = WrappedComponent;
        const wrappedComponentName = displayName || componentName;

        function WithLoading({isLoading, ...otherProps}) {
            if(isLoading) return loadingMessage;
            return (
                <WrappedComponent {...otherProps} />
            );
        };
        WithLoading.displayName = `withLoading(${wrappedComponentName})`;
        return WithLoading;
    }
}

/*
    하이어오더 컴포넌트를 만들 때는 암묵적으로 "컴포넌트 인자 하나만 전달한다" 라는 규칙이 있음
    이 규칙을 지키기 위해서 첫 function을 통해 출력 메세지를 전달받아 내부에 전달함 
*/