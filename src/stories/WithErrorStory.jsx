import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../04/InputWithStyle";
import withError from "../05/withError";

const InputWtihError = withError("올바르지 못한 값입니다.")(Input);

storiesOf("WithError", module)
    .addWithJSX("기본 설정", () => (
        <InputWtihError name="name" hasError />
    ))
    .addWithJSX("errorMessage 예제", () => (
        <InputWtihError name="name" hasError errorMessage="필수 항목입니다." />
    ));