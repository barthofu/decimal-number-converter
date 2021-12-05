<h1 align="center" font-weight="bold">Decimal / Roman number converter</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <img src="https://img.shields.io/npm/dt/decimal-number-converter">
  <img src="https://img.shields.io/tokei/lines/github/barthofu/decimal-number-converter">
  <img src="https://img.shields.io/npm/v/decimal-number-converter">
</p>

> #### Realised while a technical code interview for [AXOPEN](https://www.axopen.com/)

#### Table of content:

* **[Installation](#installation)**
* **[Usage](#use)**
* **[Methods](#methods)**
  * [toRoman()](#toRoman())
  * [(toDecimal)](#toDecimal())
* **[License](#license)**

## Installation
```
$ npm install decimal-roman-converter
```

## Usage
```js
const { toDecimal, toRoman } = require('decimal-roman-converter')

```

## Methods

### toRoman()

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| number | int |  | Number to convert |

###### *Returns: **roman string***

### toDecimal()

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| romanString | string |  | Roman number string to convert |

###### *Returns: **number***

## License
MIT License

Copyright (c) barthofu