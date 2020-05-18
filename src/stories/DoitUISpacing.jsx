import React from "react";
import { storiesOf } from "@storybook/react";
import Spacing from "../doit-ui/Spacing";
import { css } from "../doit-ui/withStyle";

function RedBox({ children }) {
    return <div {...css({ border: "1px red solid", minHeight: 100 })}>{children}</div>;
}

storiesOf("Doit-UI/Spacing", module).addWithJSX("기본 설정", () => (
    <RedBox>
        <Spacing top={1}>
            <RedBox>top: 1</RedBox>
        </Spacing>
        <Spacing bottom={2}>
            <RedBox>bottom: 2</RedBox>
        </Spacing>
        <Spacing left={3}>
            <RedBox>left: 3</RedBox>
        </Spacing>
        <Spacing right={4}>
            <RedBox>right: 4</RedBox>
        </Spacing>
        <Spacing vertical={5}>
            <RedBox>vertical: 5</RedBox>
        </Spacing>
        <Spacing horizontal={6}>
            <RedBox>horizontal: 6</RedBox>
        </Spacing>
    </RedBox>
));