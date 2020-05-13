import React from "react";
import { storiesOf } from "@storybook/react";
import ReduxApp01 from "../07/ReduxApp01";
import ReduxApp02 from "../07/ReduxApp02";
import ReduxApp03 from "../07/ReduxApp03";
import AdvReduxApp01 from "../07/AdvReduxApp01";
import AdvReduxApp02 from "../07/AdvReduxApp02";

storiesOf("ReduxApp", module)
    .addWithJSX("리덕스 예제", () => <ReduxApp01 />)
    .addWithJSX("리덕스 예제2", () => <ReduxApp02 />)
    .addWithJSX("리덕스 예제3", () => <ReduxApp03 />)
    .addWithJSX("AvdReduxApp1", () => <AdvReduxApp01 />)
    .addWithJSX("AvdReduxApp2", () => <AdvReduxApp02 />);