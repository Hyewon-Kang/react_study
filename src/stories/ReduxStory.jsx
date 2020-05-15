import React from "react";
import { storiesOf } from "@storybook/react";
import ReduxApp01 from "../07/ReduxApp01";
import ReduxApp02 from "../07/ReduxApp02";
import ReduxApp03 from "../07/ReduxApp03";
import AdvReduxApp01 from "../07/AdvReduxApp01";
import AdvReduxApp02 from "../07/AdvReduxApp02";
import AdvReduxApp03 from "../07/AdvReduxApp03";
import AdvReduxApp04 from "../07/AdvReduxApp04";
import AdvReduxApp05 from "../07/AdvReduxApp05";
import AdvReduxApp06 from "../07/AdvReduxApp06";
import AdvReduxApp07 from "../07/AdvReduxApp07";
import AdvReduxApp08 from "../07/AdvReduxApp08";
import SearchFilterReduxApp from "../07/SearchFilterReduxApp";

storiesOf("ReduxApp", module)
    .addWithJSX("리덕스 예제", () => <ReduxApp01 />)
    .addWithJSX("리덕스 예제2", () => <ReduxApp02 />)
    .addWithJSX("리덕스 예제3", () => <ReduxApp03 />)
    .addWithJSX("AvdReduxApp1", () => <AdvReduxApp01 />)
    .addWithJSX("AvdReduxApp2", () => <AdvReduxApp02 />)
    .addWithJSX("AvdReduxApp3", () => <AdvReduxApp03 />)
    .addWithJSX("AvdReduxApp4", () => <AdvReduxApp04 />)
    .addWithJSX("AvdReduxApp5", () => <AdvReduxApp05 />)
    .addWithJSX("AvdReduxApp6", () => <AdvReduxApp06 />)
    .addWithJSX("AvdReduxApp7", () => <AdvReduxApp07 />)
    .addWithJSX("AvdReduxApp8", () => <AdvReduxApp08 />)
    .addWithJSX("SearchFilterReduxApp", () => <SearchFilterReduxApp />);