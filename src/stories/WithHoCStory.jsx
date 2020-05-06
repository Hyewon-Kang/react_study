import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHoC";

const buttonWithHoC = withHoC(Button);
const textWithHoC = withHoC(Text);

storiesOf("WithHoC", module)
    .addWithJSX("기본 설정", () => (
        <div>
            <buttonWithHoC>사지 마세요</buttonWithHoC>
            <textWithHoC>입양하세요</textWithHoC>
        </div>
    ))
    .addWithJSX("large 예제", () => (
        <div>
            <buttonWithHoC large>사지 마세요</buttonWithHoC>
            <textWithHoC large>입양하세요</textWithHoC>
        </div>
    ));