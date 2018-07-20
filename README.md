# @wtjs/tooltip

<p style="font-size:72px;text-align:center">🌀</p>

Light-weight tooltip component for react powered by portals 🌀

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

## Installation

```bash
yarn add @wtjs/tooltip
```

## Usage

```js
import tooltip from '@wtjs/tooltip';

<Tooltip render="Hi, I'm a tooltip">
    Hover me
</Tooltip>

<Tooltip render={() => <div>Hi I am a tooltip</div>}>
    Hover me
</Tooltip>
```
