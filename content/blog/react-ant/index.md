---
title: React with Ant-Design
date: "2019-08-15T22:12:03.284Z"
---

# React Front-End Development

### React + Typescript 프로젝트 셋팅

- 프로젝트 생성

  npm init react-fed --typescript

  create-react-app react-fed --typescript

[https://facebook.github.io/create-react-app/docs/getting-started](https://facebook.github.io/create-react-app/docs/getting-started)

- Craco(Create React App Configuration Override)

  npm install @craco/craco

[https://github.com/sharegate/craco/blob/master/packages/craco/README.md](https://github.com/sharegate/craco/blob/master/packages/craco/README.md)

package.json

    "scripts": {
    		...
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
    },

- Sass

  npm install node-sass

- less-loader

  npm install craco-less

craco.config.json

    const CracoLessPlugin = require("craco-less");

    module.exports = {
      plugins: [{ plugin: CracoLessPlugin }]
    };

- markdown-to-jsx

  npm i markdown-to-jsx

  import React from "react";
  import Markdown from "markdown-to-jsx";
  import mdContents from "./README.md";
  interface IProps {}

  class MarkdownView extends React.Component<IProps> {
  render() {
  return (

  <div>
  <Markdown>{mdContents}</Markdown>
  </div>
  );
  }
  }

  export default MarkdownView;

  npm i craco-raw-loader

craco.config.json

    const CracoLessPlugin = require("craco-less");
    const rawLoader = require("craco-raw-loader");

    module.exports = {
      plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              javascriptEnabled: true
            }
          }
        },
        { plugin: rawLoader, options: { test: /\.(md|txt)$/ } }
      ]
    };

### Ant Design 설치 및 환경 구성

[https://ant.design/docs/react/introduce](https://ant.design/docs/react/introduce)

antd component를 추가해준다.

    import React from "react";
    import { Button } from 'antd';

    const App: React.FC = () => {
      return <Button>test</Button>;
    };

    export default App;

실행결과 css가 적용이 안됨.

별도로 css 파일을 import

    @import "~antd/dist/antd.less";

1. 데모프로젝트 만들기
2. 스타일링/테마 다루기

### 효율적인 코드 작성(구조 분해할당, Async/Await, Type)

1. 효율적인 코드 작성(구조 분해할당, Async/Await, Type)
2. 드래그 & 리사이징(Resizing, ellipsis, Drag & drop, Sub Component auto resizing)
