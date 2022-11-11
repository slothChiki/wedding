import css from 'styled-jsx/css';

export default css.global`
    @charset "utf-8";
    @font-face {
        font-family: 'Metropolis Regular';
        font-style: normal;
        font-weight: 400;
        src: local('Metropolis Regular'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/Metropolis-Regular.woff2)
                format('woff2'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/Metropolis-Regular.woff)
                format('woff');
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
            U+003A-0040, U+005B-0060, U+007B-007E;
    }
    @font-face {
        font-family: 'Metropolis Bold';
        font-style: normal;
        font-weight: 400;
        src: local('Metropolis Bold'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/Metropolis-Bold.woff2)
                format('woff2'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/font/Metropolis-Bold.woff)
                format('woff');
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
            U+003A-0040, U+005B-0060, U+007B-007E;
    }
    @font-face {
        font-family: 'Metropolis Extra Bold';
        font-style: normal;
        font-weight: 400;
        src: local('Metropolis Extra Bold'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/Metropolis-ExtraBold.woff2)
                format('woff2'),
            url(https://hive-fn.qpyou.cn/markup/img/common/font/Metropolis/font/Metropolis-ExtraBold.woff)
                format('woff');
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
            U+003A-0040, U+005B-0060, U+007B-007E;
    }
    @font-face {
        font-family: SUIT-Regular;
        font-weight: 400;
        src: url(https://hive-fn.qpyou.cn/markup/img/common/font/SUIT/SUIT-Regular.woff2)
            format('woff2');
        unicode-range: U+AC00-D7AF;
    }
    @font-face {
        font-family: SUIT-ExtraBold;
        font-weight: 800;
        src: url(https://hive-fn.qpyou.cn/markup/img/common/font/SUIT/SUIT-ExtraBold.woff2)
            format('woff2');
        unicode-range: U+AC00-D7AF;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        border: 0;
        box-sizing: border-box;
    }
    html {
        -webkit-text-size-adjust: none;
        font-size: 10px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
    }
    body {
        background-color: #fff;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    body:lang(ko) {
        word-break: keep-all;
        word-wrap: break-word;
    }
    [data-dark='true'] body {
        background-color: #141416;
    }
    img {
        width: 100%;
        vertical-align: top;
    }
    b,
    strong {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    table {
        width: 100%;
        table-layout: fixed;
        border-spacing: 0;
        border-collapse: collapse;
        font-family: inherit;
    }
    a,
    button,
    input,
    label,
    select {
        cursor: pointer;
        outline: 0;
    }
    button {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: inherit;
        vertical-align: top;
        background: 0 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        text-align: center;
    }
    .flex_start {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .flex_end {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: end;
        -webkit-box-align: center;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        -webkit-align-items: center;
        align-items: center;
    }
    .flex_item {
        display: block;
        width: 100%;
    }
    input {
        font-family: inherit;
        font-size: inherit;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input::placeholder {
        font-size: inherit;
    }
    textarea {
        font-family: inherit;
        font-size: inherit;
        box-shadow: none;
    }
    textarea::placeholder {
        font-size: inherit;
    }
    .hide {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
    .wrap {
        overflow: hidden;
        margin: 0 auto;
        padding-top: 60px;
        color: #67737f;
        font-size: 14px;
        line-height: 1.29;
        transition: background-color 0.2s;
    }
    [data-dark='true'] .wrap {
        color: #b1b5c3;
    }
    .wrap.account {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .wrap .contents {
        position: relative;
        max-width: 768px;
        height: 100%;
        margin: 0 auto;
        padding: 50px 25px 60px;
    }
    .wrap .view-pc {
        display: none;
    }
    .wrap .view-dark {
        display: none;
    }
    [data-dark='true'] .wrap .view-light {
        display: none;
    }
    [data-dark='true'] .wrap .view-dark {
        display: block;
    }
    .wrap .tit {
        color: #1a2b3b;
        font-size: 24px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 30px;
    }
    [data-dark='true'] .wrap .tit {
        color: #fff;
    }
    .wrap [class^='subtit'] {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    [data-dark='true'] .wrap [class^='subtit'] {
        color: #fff;
    }
    .wrap [class^='btn-'] {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 1.29;
        text-align: center;
        transition: border-color 0.2s, background-color 0.2s, color 0.2s;
        box-sizing: border-box;
    }
    .wrap .btn-red--bg {
        border: 2px solid #00b1ff;
        background-color: #00b1ff;
        color: #fff;
    }
    .wrap .btn-red--bg:hover {
        border-color: #0099ea;
        background-color: #0099ea;
    }
    .wrap .btn-red--bg[disabled] {
        border-color: #e6e8ec;
        background-color: #e6e8ec;
        color: #b9c1c7;
    }
    .wrap .btn-red--bd {
        border: 2px solid #00b1ff;
        color: #00b1ff;
    }
    .wrap .btn-red--bd:hover {
        border-color: #0099ea;
    }
    .wrap .btn-red--color {
        border: 2px solid #e6e8ec;
        color: #00b1ff;
    }
    .wrap .btn-red--color:hover {
        border-color: #cfd1d6;
    }
    .wrap .btn-navy--bg {
        border: 2px solid #1a2b3b;
        background-color: #1a2b3b;
        color: #fff;
    }
    .wrap .btn-navy--bg:hover {
        border-color: #131c25;
        background-color: #131c25;
    }
    .wrap .btn-navy--bg[disabled] {
        border-color: #e6e8ec;
        background-color: #e6e8ec;
        color: #bdc1c6;
    }
    .wrap .btn-navy--bg[disabled].on {
        color: #1a2b3b;
    }
    .wrap .btn-navy--bd {
        border: 2px solid #485562;
        color: #1a2b3b;
    }
    .wrap .btn-navy--bd:hover {
        border-color: #131c25;
    }
    .wrap .btn-navy--color {
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
    }
    .wrap .btn-navy--color:hover {
        border-color: #cfd1d6;
    }
    .wrap .btn-go {
        display: inline-block;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        color: #00b1ff;
    }
    .wrap .btn-go:after {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-top: -1px;
        margin-left: 4px;
        background-color: #00b1ff;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%2300b1ff' fill-rule='evenodd' d='M12.924 6 17 10.076l-4.076 4.077-1.165-1.165 2.089-2.089L3 10.9V9.253h10.848l-2.089-2.089z'/%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%2300b1ff' fill-rule='evenodd' d='M12.924 6 17 10.076l-4.076 4.077-1.165-1.165 2.089-2.089L3 10.9V9.253h10.848l-2.089-2.089z'/%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
        vertical-align: top;
        transition: transform 0.2s;
        content: '';
    }
    .wrap .wrap-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .wrap .wrap-btn [class^='btn-'] {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        margin: 0 10px;
        padding: 0 26px;
        border-radius: 14px;
    }
    .wrap .wrap-btn.grid {
        margin-right: -5px;
        margin-left: -5px;
    }
    .wrap .wrap-btn.grid [class^='btn-'] {
        flex: 1;
        width: 0;
        margin: 0 5px;
        padding: 0 18px;
        line-height: 1.11;
    }
    .wrap .wrap-btn.column {
        flex-wrap: wrap;
    }
    .wrap .wrap-btn.column [class^='btn-'] {
        width: 100%;
        margin: 0;
    }
    .wrap .wrap-btn.column [class^='btn-']:nth-child(n + 2) {
        margin-top: 10px;
    }
    [data-dark='true'] .wrap .btn-red--bg {
        color: #141416;
    }
    [data-dark='true'] .wrap .btn-red--bg[disabled] {
        border-color: #2e2e33;
        background-color: #2e2e33;
        color: #505057;
    }
    [data-dark='true'] .wrap .btn-red--color {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .btn-red--color:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .btn-navy--bg {
        border-color: #d0d0d0;
        background-color: #d0d0d0;
        color: #141416;
    }
    [data-dark='true'] .wrap .btn-navy--bg:hover {
        border-color: #fff;
        background-color: #fff;
    }
    [data-dark='true'] .wrap .btn-navy--bg[disabled] {
        border-color: #2e2e33;
        background-color: #2e2e33;
        color: #505057;
    }
    [data-dark='true'] .wrap .btn-navy--bg[disabled].on {
        color: #fff;
    }
    [data-dark='true'] .wrap .btn-navy--bd {
        border-color: #d0d0d0;
        color: #fff;
    }
    [data-dark='true'] .wrap .btn-navy--bd:hover {
        border-color: #fff;
    }
    [data-dark='true'] .wrap .btn-navy--color {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .btn-navy--color:hover {
        border-color: #717580;
    }
    .wrap .fix-bot {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 25px;
        background-color: #fff;
        z-index: 20;
    }
    .wrap .fix-bot .box-bot {
        max-width: 718px;
        margin: 0 auto;
        padding: 20px 0;
        border-top: 1px solid #e6e8ec;
        text-align: center;
    }
    .wrap .fix-bot .wrap-btn {
        margin-top: 0;
    }
    [data-dark='true'] .wrap .fix-bot {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .fix-bot .box-bot {
        border-color: #28282b;
    }
    .wrap input[type='number'],
    .wrap input[type='text'] {
        display: block;
        width: 100%;
        height: 52px;
        border-radius: 12px;
        border: solid 2px #e6e8ec;
        background-color: transparent;
        color: #1a2b3b;
        transition: border-color 0.2s;
        box-shadow: none;
        appearance: none;
        -webkit-appearance: none;
    }
    .wrap input[type='number']::placeholder,
    .wrap input[type='text']::placeholder {
        color: #b9bcc1;
    }
    .wrap input[type='number']:focus,
    .wrap input[type='number']:hover,
    .wrap input[type='text']:focus,
    .wrap input[type='text']:hover {
        border-color: #c0c3cb;
    }
    .wrap input[type='checkbox'],
    .wrap input[type='radio'] {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
    .wrap input[type='checkbox'] + label {
        position: relative;
    }
    .wrap input[type='checkbox'] + label:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #bdc1c6
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        transition: background-color 0.2s;
        content: '';
    }
    .wrap input[type='checkbox']:checked + label:before {
        background-color: #00b1ff;
    }
    .wrap input[type='radio'] + label {
        position: relative;
    }
    .wrap input[type='radio'] + label:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #bdc1c6;
        box-sizing: border-box;
        content: '';
    }
    .wrap input[type='radio']:checked + label:before {
        border-width: 6px;
        border-color: #00b1ff;
    }
    .wrap textarea::placeholder {
        color: #b9bcc1;
    }
    [data-dark='true'] .wrap input[type='number'],
    [data-dark='true'] .wrap input[type='text'] {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap input[type='number']::placeholder,
    [data-dark='true'] .wrap input[type='text']::placeholder {
        color: #484c55 !important;
    }
    [data-dark='true'] .wrap input[type='number']:focus,
    [data-dark='true'] .wrap input[type='number']:hover,
    [data-dark='true'] .wrap input[type='text']:focus,
    [data-dark='true'] .wrap input[type='text']:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap input[type='checkbox'] + label:before {
        background-color: #33353b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23141416' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap input[type='checkbox']:checked + label:before {
        background-color: #00b1ff;
    }
    [data-dark='true'] .wrap input[type='radio'] + label:before {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap input[type='radio']:checked + label:before {
        border-color: #00b1ff;
    }
    [data-dark='true'] .wrap textarea::placeholder {
        color: #484c55 !important;
    }
    .wrap .box-name {
        position: relative;
    }
    .wrap .box-name .msg {
        display: none;
        position: relative;
        margin-top: 10px;
        padding-top: 1px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2340e282' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            10px 0 no-repeat;
        background-size: 20px 20px;
        color: #40e282;
        text-align: left;
    }
    .wrap .box-name .msg.on {
        display: block;
    }
    .wrap .box-name .msg.error {
        color: #f03e3e;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .tooltip {
        flex: 1;
        position: relative;
        display: block;
    }
    .wrap .tooltip > span {
        display: block;
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2367737f' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        font: 0/0 a;
        cursor: pointer;
    }
    .wrap .tooltip > span:before {
        position: absolute;
        max-width: 270px;
        padding: 20px 14px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
        opacity: 0;
        box-sizing: border-box;
        visibility: hidden;
        z-index: 10;
        content: attr(data-tooltip);
        transition: opacity 0.6s;
    }
    .wrap .tooltip > span:hover:before {
        opacity: 1;
        visibility: visible;
    }
    .wrap .tooltip > span:after {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        visibility: hidden;
        z-index: 10;
        content: '';
        transition: opacity 0.6s;
    }
    .wrap .tooltip > span:hover:after {
        opacity: 1;
        visibility: visible;
    }
    .wrap .tooltip > span:hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23000000' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .tooltip.on > span {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23000000' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .tooltip.on > span:after,
    .wrap .tooltip.on > span:before {
        opacity: 1;
        visibility: visible;
    }
    [data-dark='true'] .wrap .tooltip > span {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23B1B5C3' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .tooltip > span:before {
        background-color: rgba(255, 255, 255, 0.96);
        color: #141416;
    }
    [data-dark='true'] .wrap .tooltip > span:hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .tooltip.on > span {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zM9.167 12.5v1.667h1.666V12.5H9.167zm1.666-1.37A2.918 2.918 0 0 0 10 5.416c-1.39 0-2.588.98-2.86 2.344l1.634.327A1.25 1.25 0 1 1 10 9.583a.833.833 0 0 0-.833.834v1.25h1.666v-.538z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .tooltip.on > span:after,
    [data-dark='true'] .wrap .tooltip.on > span:before {
        opacity: 1;
        visibility: visible;
    }
    .wrap dt.has-tooltip {
        padding-left: 24px;
    }
    .wrap dt.has-tooltip .tooltip {
        flex: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
    .wrap dt.has-tooltip .tooltip > span:before {
        left: 0;
        bottom: 100%;
        margin-bottom: 6px;
        white-space: pre-wrap;
        word-break: break-word;
    }
    .wrap dt.has-tooltip .tooltip > span:after {
        left: 3px;
        bottom: 100%;
        border-top: 6px solid rgba(0, 0, 0, 0.9);
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
    }
    [data-dark='true'] .wrap dt.has-tooltip .tooltip > span:after {
        border-top: 6px solid rgba(255, 255, 255, 0.96);
    }
    .home:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M17.5 16.667c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.833V7.908c0-.257.119-.5.322-.658l6.666-5.185a.833.833 0 0 1 1.024 0l6.666 5.185a.833.833 0 0 1 .322.658v8.759zm-1.667-.834V8.315L10 3.778 4.167 8.315v7.518h11.666z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M17.5 16.667c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.833V7.908c0-.257.119-.5.322-.658l6.666-5.185a.833.833 0 0 1 1.024 0l6.666 5.185a.833.833 0 0 1 .322.658v8.759zm-1.667-.834V8.315L10 3.778 4.167 8.315v7.518h11.666z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .set:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zm-4.156-3.12A6.638 6.638 0 0 0 10 16.667a6.641 6.641 0 0 0 4.306-1.577 5.816 5.816 0 0 0-4.173-1.757 5.818 5.818 0 0 0-4.289 1.88zM4.68 14.017a7.48 7.48 0 0 1 5.453-2.35 7.477 7.477 0 0 1 5.302 2.195 6.667 6.667 0 1 0-10.755.155zM10 10.833a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm0-1.666a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666zm-4.156-3.12A6.638 6.638 0 0 0 10 16.667a6.641 6.641 0 0 0 4.306-1.577 5.816 5.816 0 0 0-4.173-1.757 5.818 5.818 0 0 0-4.289 1.88zM4.68 14.017a7.48 7.48 0 0 1 5.453-2.35 7.477 7.477 0 0 1 5.302 2.195 6.667 6.667 0 1 0-10.755.155zM10 10.833a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm0-1.666a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .wallet:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.333 5.833h.834v8.334h-.834v2.5c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v2.5zm-1.666 8.334h-5a4.167 4.167 0 1 1 0-8.334h5V4.167H3.333v11.666h13.334v-1.666zM17.5 12.5v-5h-5.833a2.5 2.5 0 1 0 0 5H17.5zm-5.833-3.333h2.5v1.666h-2.5V9.167z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.333 5.833h.834v8.334h-.834v2.5c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v2.5zm-1.666 8.334h-5a4.167 4.167 0 1 1 0-8.334h5V4.167H3.333v11.666h13.334v-1.666zM17.5 12.5v-5h-5.833a2.5 2.5 0 1 0 0 5H17.5zm-5.833-3.333h2.5v1.666h-2.5V9.167z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .history:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 1.667a8.333 8.333 0 1 1 0 16.666A8.333 8.333 0 0 1 1.667 10h1.666a6.667 6.667 0 1 0 1.154-3.75h2.18v1.667h-5v-5h1.666V5A8.317 8.317 0 0 1 10 1.667zm.833 4.166v3.821l2.703 2.703-1.18 1.179-3.19-3.192v-4.51h1.667z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 1.667a8.333 8.333 0 1 1 0 16.666A8.333 8.333 0 0 1 1.667 10h1.666a6.667 6.667 0 1 0 1.154-3.75h2.18v1.667h-5v-5h1.666V5A8.317 8.317 0 0 1 10 1.667zm.833 4.166v3.821l2.703 2.703-1.18 1.179-3.19-3.192v-4.51h1.667z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .noti:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.333 16.667H1.667V15H2.5V9.193c0-4.157 3.358-7.526 7.5-7.526 4.142 0 7.5 3.369 7.5 7.526V15h.833v1.667zM4.167 15h11.666V9.193c0-3.236-2.611-5.86-5.833-5.86s-5.833 2.624-5.833 5.86V15zm3.75 2.5h4.166a2.083 2.083 0 0 1-4.166 0z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.333 16.667H1.667V15H2.5V9.193c0-4.157 3.358-7.526 7.5-7.526 4.142 0 7.5 3.369 7.5 7.526V15h.833v1.667zM4.167 15h11.666V9.193c0-3.236-2.611-5.86-5.833-5.86s-5.833 2.624-5.833 5.86V15zm3.75 2.5h4.166a2.083 2.083 0 0 1-4.166 0z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .inven:before {
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M2.5 2.5h6.667v6.667H2.5V2.5zm0 8.333h6.667V17.5H2.5v-6.667zM10.833 2.5H17.5v6.667h-6.667V2.5zm0 8.333H17.5V17.5h-6.667v-6.667zM12.5 4.167V7.5h3.333V4.167H12.5zm0 8.333v3.333h3.333V12.5H12.5zM4.167 4.167V7.5H7.5V4.167H4.167zm0 8.333v3.333H7.5V12.5H4.167z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M2.5 2.5h6.667v6.667H2.5V2.5zm0 8.333h6.667V17.5H2.5v-6.667zM10.833 2.5H17.5v6.667h-6.667V2.5zm0 8.333H17.5V17.5h-6.667v-6.667zM12.5 4.167V7.5h3.333V4.167H12.5zm0 8.333v3.333h3.333V12.5H12.5zM4.167 4.167V7.5H7.5V4.167H4.167zm0 8.333v3.333H7.5V12.5H4.167z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    [class^='ico-'] {
        display: inline-block;
        padding: 0 8px;
        border-radius: 6px;
        font-size: 12px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 22px;
        vertical-align: middle;
    }
    .ico-live,
    .ico-sale {
        border: 2px solid #40e282;
        background-color: #e8fff1;
        color: #40e282;
    }
    .ico-sched {
        border: 2px solid #ffcd19;
        background-color: #fff9e3;
        color: #ffcd19;
    }
    .ico-ended {
        border: 2px solid #747f8d;
        background-color: #eef0f4;
        color: #747f8d;
    }
    [data-dark='true'] .wrap .ico-live,
    [data-dark='true'] .wrap .ico-sale {
        background-color: #183725;
    }
    [data-dark='true'] .wrap .ico-sched {
        background-color: #3d3825;
    }
    [data-dark='true'] .wrap .ico-ended {
        background-color: #1f242e;
    }
    .wrap .btn-like {
        display: inline-block;
        height: auto;
        padding: 0;
        border-radius: 0;
        color: #67737f;
        font-size: 12px;
        line-height: 1.5;
        white-space: nowrap;
    }
    .wrap .btn-like:before {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 4px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%2367737F' d='M12.6 1.5c2.43 0 4.4 2.027 4.4 4.865 0 5.676-6 8.919-8 10.135-2-1.216-8-4.46-8-10.135C1 3.527 3 1.5 5.4 1.5c1.488 0 2.8.81 3.6 1.622.8-.811 2.112-1.622 3.6-1.622zM9.747 14.152c.705-.45 1.341-.9 1.936-1.38 2.385-1.92 3.717-4.02 3.717-6.407 0-1.914-1.23-3.243-2.8-3.243-.86 0-1.792.462-2.469 1.146L9 5.415 7.869 4.268C7.192 3.584 6.26 3.122 5.4 3.122c-1.552 0-2.8 1.342-2.8 3.243 0 2.387 1.333 4.486 3.716 6.408a21.5 21.5 0 0 0 1.937 1.378c.239.153.476.3.747.464.271-.164.508-.31.747-.463z'/%3E%3C/svg%3E");
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        content: '';
    }
    .wrap .btn-like.on:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23f03e3e' d='M12.6 1.5c2.43 0 4.4 2.027 4.4 4.865 0 5.676-6 8.919-8 10.135-2-1.216-8-4.46-8-10.135C1 3.527 3 1.5 5.4 1.5c1.488 0 2.8.81 3.6 1.622.8-.811 2.112-1.622 3.6-1.622z'/%3E%3C/svg%3E");
        animation: heart 0.3s ease 1 forwards;
    }
    [data-dark='true'] .wrap .btn-like {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .btn-like:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23B1B5C3' d='M12.6 1.5c2.43 0 4.4 2.027 4.4 4.865 0 5.676-6 8.919-8 10.135-2-1.216-8-4.46-8-10.135C1 3.527 3 1.5 5.4 1.5c1.488 0 2.8.81 3.6 1.622.8-.811 2.112-1.622 3.6-1.622zM9.747 14.152c.705-.45 1.341-.9 1.936-1.38 2.385-1.92 3.717-4.02 3.717-6.407 0-1.914-1.23-3.243-2.8-3.243-.86 0-1.792.462-2.469 1.146L9 5.415 7.869 4.268C7.192 3.584 6.26 3.122 5.4 3.122c-1.552 0-2.8 1.342-2.8 3.243 0 2.387 1.333 4.486 3.716 6.408a21.5 21.5 0 0 0 1.937 1.378c.239.153.476.3.747.464.271-.164.508-.31.747-.463z'/%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .btn-like.on:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23f03e3e' d='M12.6 1.5c2.43 0 4.4 2.027 4.4 4.865 0 5.676-6 8.919-8 10.135-2-1.216-8-4.46-8-10.135C1 3.527 3 1.5 5.4 1.5c1.488 0 2.8.81 3.6 1.622.8-.811 2.112-1.622 3.6-1.622z'/%3E%3C/svg%3E");
    }
    .wrap .swiper {
        position: relative;
        width: calc(100% + 25px);
        max-width: 718px;
        margin: 0 auto;
    }
    .wrap .swiper .swiper-scrollbar {
        display: none;
    }
    .wrap .swiper .item-product {
        margin-left: 0;
    }
    .wrap .slide-bnn {
        width: 100%;
        max-width: 718px;
        margin: 0 auto;
        padding: 0 0 30px;
    }
    .wrap .slide-bnn .swiper-pagination {
        bottom: 0;
        height: 10px;
        text-align: center;
    }
    .wrap .slide-bnn .swiper-pagination > span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 5px;
        background-color: #dce2e8;
        opacity: 1;
        vertical-align: top;
        transition: width 0.2s;
    }
    .wrap .slide-bnn .swiper-pagination .swiper-pagination-bullet-active {
        width: 26px;
        background-color: #1a2b3b;
    }
    .wrap .slide-bnn .item-bnn {
        overflow: hidden;
        position: relative;
        border-radius: 20px;
    }
    [data-dark='true'] .wrap .slide-bnn .swiper-pagination > span {
        background-color: #2c2c31;
    }
    [data-dark='true']
        .wrap
        .slide-bnn
        .swiper-pagination
        .swiper-pagination-bullet-active {
        background-color: #fff;
    }
    .wrap .wrap-tab .swiper {
        width: 100%;
    }
    .wrap .wrap-tab .swiper:after {
        display: block;
        height: 1px;
        margin-top: -1px;
        background-color: #e6e8ec;
        content: '';
    }
    .wrap .wrap-tab .swiper-scrollbar {
        display: none;
    }
    .wrap .wrap-tab .swiper-wrapper {
        justify-content: center;
    }
    .wrap
        .wrap-tab
        .swiper-scrollbar:not(.swiper-scrollbar-lock)
        + .swiper-wrapper {
        justify-content: flex-start;
    }
    .wrap .wrap-tab .item-tab {
        width: auto;
    }
    .wrap .wrap-tab .item-tab:last-child {
        margin-right: 0 !important;
    }
    .wrap .wrap-tab .item-tab > a {
        display: block;
        padding: 0 8px 13px;
        border-bottom: 2px solid transparent;
        color: #485562;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        transition: border-color 0.2s;
    }
    .wrap .wrap-tab .item-tab > a:hover {
        border-color: #e6e8ec;
    }
    .wrap .wrap-tab .item-tab > a[target='_blank']:after {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 4px 0 0 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: top;
        content: '';
    }
    .wrap .wrap-tab .item-tab > a .count {
        display: inline-block;
        margin-left: 2px;
        padding: 0 6px;
        border-radius: 6px;
        background-color: #f1f3f5;
        font-size: 12px;
        line-height: 22px;
        vertical-align: middle;
    }
    .wrap .wrap-tab .item-tab.on > a {
        border-color: #1a2b3b;
        color: #1a2b3b;
    }
    .wrap .wrap-tab .item-tab.on > a .count {
        background-color: #1a2b3b;
        color: #fff;
    }
    .wrap .wrap-tab.has-count .item-tab > a {
        padding-bottom: 9px;
        font-size: 14px;
    }
    .wrap .wrap-tab .swiper-button-prev {
        display: none;
    }
    .wrap .wrap-tab .swiper-button-next {
        display: none;
    }
    [data-dark='true'] .wrap .wrap-tab .swiper:after {
        background-color: #28282b;
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab > a {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab > a:hover {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab > a[target='_blank']:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab > a .count {
        background-color: #212226;
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab.on > a {
        border-color: #fff;
        color: #fff;
    }
    [data-dark='true'] .wrap .wrap-tab .item-tab.on > a .count {
        background-color: #fff;
        color: #141416;
    }
    .wrap .item-product {
        width: 284px;
        height: 384px;
        border-radius: 20px;
        background-color: #fff;
        font-size: 14px;
        line-height: 1.29;
    }
    .wrap .item-product > a {
        position: relative;
        display: block;
        height: 100%;
        padding: 20px;
        color: inherit;
    }
    .wrap .item-product [href='#none'] {
        cursor: auto;
    }
    .wrap .item-product [href='#none']:hover {
        box-shadow: none !important;
    }
    .wrap .item-product.none > a:before {
        display: block;
        position: absolute;
        left: 8px;
        right: 8px;
        top: 8px;
        height: 196px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.61);
        z-index: 1;
        content: '';
    }
    .wrap .item-product .thumb .info {
        left: 8px;
        top: 8px;
        height: auto;
        margin-top: 0;
    }
    .wrap .item-product .thumb > img {
        border-radius: 10px;
    }
    .wrap .item-product.none .thumb > img {
        mix-blend-mode: luminosity;
    }
    .wrap .item-product .info {
        margin-top: 20px;
        line-height: 18px;
    }
    .wrap .item-product .info .category {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        margin-bottom: 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-style: normal;
        white-space: nowrap;
    }
    .wrap .item-product .info .product {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .wrap .item-product .bot {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        min-height: 24px;
        margin-top: 14px;
    }
    .wrap .item-product .bot .list-price > dt {
        display: none;
    }
    .wrap .item-product .bot .list-price .usd {
        display: block;
        font-size: 20px;
        line-height: 1.2;
    }
    .wrap .item-product .bot .list-price .point {
        font-size: 14px;
    }
    .wrap .item-product .bot .list-price .unit {
        font-size: 14px;
    }
    .wrap .item-product .bot .status {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .item-product[data-serial='true'] .info .category {
        margin-bottom: 2px;
    }
    .wrap .item-product[data-serial='true'] .info .serial {
        margin-top: 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .item-product[data-serial='true'] .bot {
        margin-top: 10px;
    }
    .wrap .item-product[data-serial='true'] .bot .list-price > dt {
        display: block;
        margin-bottom: 2px;
        font-size: 12px;
        line-height: 1.17;
    }
    .wrap .item-product[data-status] > a:hover {
        box-shadow: none !important;
    }
    .wrap .item-product[data-status] .dim {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 1.25;
        z-index: 10;
    }
    .wrap .item-product[data-status] .blur {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        filter: blur(64px);
        content: '';
    }
    .wrap .item-product[data-status] .msg {
        position: relative;
        display: block;
        font-style: normal;
        z-index: 1;
    }
    .wrap .item-product[data-status] .msg:before {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto 6px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .item-product[data-status] .ing .msg:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ing_light.png);
    }
    .wrap .item-product[data-status] .fail .msg {
        color: #f03e3e;
    }
    .wrap .item-product[data-status] .fail .msg:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm-1.25-6.25h2.5v2.5h-2.5v-2.5zm0-10h2.5v7.5h-2.5v-7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .item-product[data-status] .hidden .msg:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .item-product[data-status] .code {
        margin: 4px 0 14px;
        font-size: 12px;
        line-height: 14px;
    }
    .wrap .item-product[data-status] .dim .btns {
        display: flex;
        justify-content: center;
    }
    .wrap .item-product[data-status] .dim button {
        padding: 0 14px 0 34px;
        border-radius: 21px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        background-position: 12px 50%;
        background-repeat: no-repeat;
        background-size: 18px 18px;
        font-size: 14px;
        line-height: 38px;
    }
    .wrap .item-product[data-status] .dim button:hover {
        border-color: #cfd1d6;
    }
    .wrap .item-product[data-status] .dim .btn-retry {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M13.903 14.675a7.5 7.5 0 1 1 1.24-1.37L12.75 9H15a6 6 0 1 0-1.845 4.329l.748 1.346z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .item-product[data-status] .dim .btn-cancel {
        width: 42px;
        height: 42px;
        margin-left: 4px;
        padding: 0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E");
        background-position: 50% 50%;
    }
    .wrap .item-product[data-status] .dim .btn-del {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .item-product[data-status] .dim .btn-confirm {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23152B3D' fill-rule='nonzero' d='M9 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12zm-.748-3L5.07 8.818l1.06-1.06 2.122 2.121 4.242-4.243 1.062 1.06L8.252 12z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .item-product {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .item-product .category {
        color: #fff;
    }
    [data-dark='true'] .wrap .item-product[data-serial='true'] .serial {
        color: #fff;
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
    }
    [data-dark='true'] .wrap .item-product[data-status] .blur {
        background-color: rgba(0, 0, 0, 0.9);
    }
    [data-dark='true'] .wrap .item-product[data-status] .ing .msg:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ing_dark.png);
    }
    [data-dark='true'] .wrap .item-product[data-status] .hidden .msg:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim button {
        border-color: #33353b;
        background-color: #141416;
        color: #fff;
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim .btn-retry {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M13.903 14.675a7.5 7.5 0 1 1 1.24-1.37L12.75 9H15a6 6 0 1 0-1.845 4.329l.748 1.346z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim .btn-cancel {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim .btn-del {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .item-product[data-status] .dim .btn-confirm {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M9 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12zm-.748-3L5.07 8.818l1.06-1.06 2.122 2.121 4.242-4.243 1.062 1.06L8.252 12z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .thumb {
        position: relative;
        padding-bottom: 100%;
        border-radius: 10px;
    }
    .wrap .thumb.multiple:before {
        display: block;
        position: absolute;
        left: -8px;
        right: -8px;
        top: -8px;
        bottom: -8px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/frame_multiple_light.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .thumb[data-type]:after {
        display: block;
        position: absolute;
        right: 6px;
        top: 6px;
        width: 22px;
        height: 20px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        z-index: 1;
        content: '';
    }
    .wrap .thumb[data-type='1']:after {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_type_img.png);
    }
    .wrap .thumb[data-type='2']:after {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_type_video.png);
    }
    .wrap .thumb[data-type='3']:after {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_type_audio.png);
    }
    .wrap .thumb .info {
        position: absolute;
        left: 8px;
        top: 8px;
        z-index: 1;
    }
    .wrap .thumb .info .amount {
        display: inline-block;
        padding: 0 10px 0 26px;
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.7)
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m16.736 12.667 1.002.6a.417.417 0 0 1 0 .716l-7.309 4.384a.833.833 0 0 1-.858 0l-7.308-4.385a.417.417 0 0 1 0-.714l1.001-.601L10 16.708l6.736-4.041zm0-3.917 1.002.6a.417.417 0 0 1 0 .716L10 14.708l-7.737-4.642a.417.417 0 0 1 0-.715l1.001-.601L10 12.792l6.736-4.042zm-6.308-7.66 7.31 4.386a.417.417 0 0 1 0 .715L10 10.833 2.263 6.191a.417.417 0 0 1 0-.715L9.57 1.09a.833.833 0 0 1 .858 0zM10 2.778 4.906 5.833 10 8.89l5.094-3.057L10 2.777z'/%3E%3C/g%3E%3C/svg%3E")
            8px 50% no-repeat;
        background-size: 14px 14px;
        color: #000;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 11px;
        line-height: 28px;
        vertical-align: middle;
    }
    .wrap .thumb .info .amount + .grade {
        margin-left: 2px;
    }
    .wrap .thumb > img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        object-fit: contain;
    }
    .wrap .thumb video {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .wrap .thumb audio {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: contain;
        object-fit: contain;
    }
    .wrap .thumb .countdown {
        display: flex;
        align-items: center;
        position: absolute;
        left: 8px;
        bottom: 8px;
        height: 34px;
        padding-right: 8px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: linear-gradient(#fff, #fff) padding-box,
            linear-gradient(to right, #09d4ff, #6549ff) border-box;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 12px;
        line-height: 30px;
    }
    .wrap .thumb .countdown.fin {
        color: rgba(0, 0, 0, 0.3);
    }
    .wrap .thumb .countdown:before {
        display: block;
        width: 14px;
        height: 14px;
        margin: 0 4px 0 6px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_countdown.png)
            0 0 no-repeat;
        background-size: 14px 14px;
        content: '';
    }
    .wrap .thumb .countdown .colon {
        padding: 0 3px;
    }
    [data-dark='true'] .wrap .thumb.multiple:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/frame_multiple_dark.png);
    }
    [data-dark='true'] .wrap .thumb .countdown {
        background: linear-gradient(#141416, #141416) padding-box,
            linear-gradient(to right, #09d4ff, #6549ff) border-box;
        color: #fff;
    }
    .wrap .wrap-thumb .thumb {
        background-color: #000;
    }
    .wrap .wrap-thumb .thumb > img {
        position: absolute;
        left: 0;
        top: 0;
    }
    .wrap .grade {
        display: inline-block;
        padding: 0 12px;
        border-radius: 6px;
        color: #fff;
        font-size: 12px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 26px;
        z-index: 1;
    }
    .wrap .grade[data-grade='1'] {
        background-color: #9898a9;
    }
    .wrap .grade[data-grade='2'] {
        background-color: #2bbef2;
    }
    .wrap .grade[data-grade='3'] {
        background-color: #e737a1;
    }
    .wrap .grade[data-grade='4'] {
        background-color: #6b47fa;
    }
    [data-dark='true'] .wrap .grade {
        color: #141416;
    }
    .wrap .artist {
        overflow: hidden;
        position: relative;
        width: 100%;
    }
    .wrap .artist .pic {
        overflow: hidden;
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-right: 8px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .wrap .artist .name {
        display: inline-block;
        max-width: calc(100% - 46px);
        margin: 0 -2px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        text-align: left;
        word-break: break-word;
        vertical-align: middle;
    }
    .wrap .artist .name:first-child {
        margin: 0;
    }
    .wrap .artist .name > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
    .wrap .list-countdown {
        position: relative;
    }
    .wrap .list-countdown dt {
        position: relative;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .list-countdown dt .super {
        display: inline-block;
        position: absolute;
        right: 0;
        top: -4px;
        height: 26px;
        padding: 0 8px;
        border-radius: 6px;
        border: 2px solid #06f;
        background-color: #e1edff;
        color: #06f;
        font-size: 12px;
        font-style: normal;
        line-height: 22px;
    }
    .wrap .list-countdown .countdown {
        display: flex;
        align-items: center;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .list-countdown .countdown .time {
        width: 58px;
        height: 58px;
        padding-top: 10px;
        border-radius: 10px;
        background-color: #f6f7f9;
        color: #000;
        font-size: 20px;
        line-height: 1.2;
        text-align: center;
    }
    .wrap .list-countdown .countdown .time:after {
        display: block;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 12px;
        line-height: 1.17;
    }
    .wrap .list-countdown .countdown .time:nth-child(1):after {
        content: 'Days';
    }
    .wrap .list-countdown .countdown .time:nth-child(3):after {
        content: 'Hours';
    }
    .wrap .list-countdown .countdown .time:nth-child(5):after {
        content: 'Mins';
    }
    .wrap .list-countdown .countdown .time:nth-child(7):after {
        content: 'Secs';
    }
    .wrap .list-countdown .countdown .colon {
        color: #bdbdbd;
        font-size: 16px;
        text-align: center;
    }
    .wrap .list-countdown .countdown.deadline .time {
        background-color: #fff0f0;
        color: #f03e3e;
    }
    [data-dark='true'] .wrap .list-countdown dt .super {
        background-color: #0b2853;
    }
    [data-dark='true'] .wrap .list-countdown .countdown .time {
        background-color: #1c1d21;
        color: #fff;
    }
    [data-dark='true'] .wrap .list-countdown .countdown.deadline .time {
        background-color: #331313;
        color: #f03e3e;
    }
    .wrap .list-require > li {
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }
    .wrap .list-require > li.on {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2340E282' fill-rule='nonzero' d='m8.333 12.643 7.66-7.66 1.18 1.178L8.332 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .list-require > li.off {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .caption-tbl {
        color: #1a2b3b;
    }
    [data-dark='true'] .wrap .caption-tbl {
        color: #fff;
    }
    .wrap .wrap-tbl {
        overflow-x: auto;
        border-bottom: 1px solid #e6e8ec;
    }
    .wrap .wrap-tbl .tbl {
        width: auto;
        min-width: 100%;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        white-space: nowrap;
    }
    .wrap .wrap-tbl .tbl th {
        padding: 14px 20px 13px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        box-shadow: inset 0 2px 0 #1a2b3b, inset 0 -1px 0 #e6e8ec;
    }
    .wrap .wrap-tbl .tbl td {
        height: 61px;
        padding: 0 20px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .wrap-tbl .tbl tbody tr:first-child td {
        border-top: 0;
    }
    .wrap .wrap-tbl .tbl a {
        display: inline-block;
        color: #67737f;
    }
    .wrap .wrap-tbl .tbl a:hover {
        text-decoration: underline;
    }
    .wrap .wrap-tbl .tbl a[href='#none'] {
        cursor: text;
    }
    .wrap .wrap-tbl .tbl a[href='#none']:hover {
        text-decoration: none;
    }
    .wrap .wrap-tbl .tbl .profile {
        display: inline-flex;
        align-items: center;
    }
    .wrap .wrap-tbl .tbl .profile .pic {
        overflow: hidden;
        width: 40px;
        height: 40px;
        margin-right: 6px;
        border-radius: 50%;
    }
    .wrap .wrap-tbl .tbl .profile .pic > img {
        height: 100%;
        object-fit: cover;
    }
    .wrap .wrap-tbl.type-2 .tbl th {
        height: auto;
        padding: 15px 20px;
        border-top: 1px solid #e6e8ec;
        line-height: 20px;
        box-shadow: none;
    }
    .wrap .wrap-tbl.type-2 .tbl td {
        height: auto;
        padding: 15px 20px;
    }
    .wrap .wrap-tbl.type-2 .tbl tbody tr:first-child th {
        border-top: 2px solid #1a2b3b;
    }
    .wrap .wrap-tbl.type-2 .tbl tbody tr:first-child td {
        border-top: 2px solid #e6e8ec;
    }
    [data-dark='true'] .wrap .wrap-tbl {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .wrap-tbl .tbl th {
        color: #fff;
        box-shadow: inset 0 2px 0 #fff, inset 0 -1px 0 #28282b;
    }
    [data-dark='true'] .wrap .wrap-tbl .tbl td {
        border-top: 1px solid #28282b;
    }
    [data-dark='true'] .wrap .wrap-tbl .tbl a {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .wrap-tbl.type-2 .tbl th {
        border-color: #28282b;
        box-shadow: none;
    }
    [data-dark='true'] .wrap .wrap-tbl.type-2 .tbl td {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .wrap-tbl.type-2 .tbl tbody tr:first-child th {
        border-color: #fff;
    }
    [data-dark='true'] .wrap .wrap-tbl.type-2 .tbl tbody tr:first-child td {
        border-color: #33353b;
    }
    .wrap .loading {
        width: 40px;
        margin: 30px auto 0;
    }
    .infinite-scroll-component {
        overflow-x: hidden !important;
        width: calc(100% + 80px);
        margin: 0 0 -40px -40px;
        padding: 0 40px 40px;
    }
    .wrap .list-product {
        display: grid;
        grid-row-gap: 10px;
        row-gap: 10px;
        margin-top: 20px;
    }
    .wrap .list-product .item-product {
        min-width: 0;
        width: 100%;
        height: auto;
    }
    .wrap .item-hot {
        border-radius: 20px;
        background-color: #fff;
        text-align: center;
    }
    .wrap .item-hot > a {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        padding: 20px 20px 30px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-weight: 700;
    }
    .wrap .item-hot .profile-bg {
        width: 100%;
        border-radius: 10px;
        background-color: #f0f2f6;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrap .item-hot .profile-pic {
        overflow: hidden;
        position: relative;
        width: 25.92%;
        margin: -12.96% auto 0;
        border-radius: 50%;
        border: 4px solid #fff;
    }
    .wrap .item-hot .profile-pic:after {
        display: block;
        padding-bottom: 100%;
        content: '';
    }
    .wrap .item-hot .profile-pic > img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .wrap .item-hot .name {
        display: block;
        width: 100%;
        margin: 8px 0 10px;
        color: #1a2b3b;
        font-size: 16px;
        font-style: normal;
        line-height: 1.25;
    }
    .wrap .item-hot .own {
        display: inline-block;
        color: #67737f;
        font-size: 14px;
        font-style: normal;
        line-height: 18px;
    }
    .wrap .item-hot .own:after {
        display: inline-block;
        width: 4px;
        height: 4px;
        margin: 0 10px;
        border-radius: 50%;
        background-color: #c6cbd1;
        vertical-align: middle;
        content: '';
    }
    .wrap .item-hot .btn-like {
        height: 18px;
        line-height: 18px;
    }
    .wrap .item-hot .btn-like:before {
        vertical-align: top;
    }
    [data-dark='true'] .wrap .item-hot {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .item-hot .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .item-hot .profile-bg {
        background-color: #212226;
    }
    [data-dark='true'] .wrap .item-hot .profile-pic {
        border: 4px solid #141416;
    }
    [data-dark='true'] .wrap .item-hot .own {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .item-hot .own:after {
        background-color: #b1b5c3;
    }
    .wrap .list-collector {
        flex-wrap: wrap;
        display: flex;
        margin-top: 30px;
    }
    .wrap .list-collector .item-hot {
        width: 100%;
        height: auto;
        margin-top: 10px;
    }
    [data-dark='true'] .wrap .list-collector .item-hot {
        background-color: transparent;
    }
    [data-dark='true'] .wrap .list-collector .item-hot > a {
        background-color: #141416;
    }
    .wrap .react-datepicker {
        font-size: 0.9em;
    }
    .wrap .react-datepicker__header {
        padding-top: 0.8em;
    }
    .wrap .react-datepicker__month {
        margin: 0;
        padding: 0.4em 1em;
    }
    .wrap .react-datepicker__day,
    .wrap .react-datepicker__day-name {
        width: 1.9em;
        line-height: 1.9em;
        margin: 0.166em;
    }
    .wrap .react-datepicker__day--selected {
        background-color: #00b1ff;
    }
    .wrap .react-datepicker__current-month {
        font-size: 1em;
    }
    .wrap .react-datepicker__navigation {
        top: 0.1em;
        line-height: 1.7em;
    }
    .wrap .react-datepicker__navigation--previous {
        border-right-color: #ccc;
        left: 1em;
    }
    .wrap .react-datepicker__navigation--next {
        border-left-color: #ccc;
        right: 1em;
    }
    [data-dark='true'] .wrap .react-datepicker {
        border-color: #33353b;
        background-color: #18181b;
    }
    [data-dark='true'] .wrap .react-datepicker__header {
        border-color: #33353b;
        background-color: #18181b;
    }
    [data-dark='true'] .wrap .react-datepicker__month {
        background-color: #18181b;
    }
    [data-dark='true'] .wrap .react-datepicker__day,
    [data-dark='true'] .wrap .react-datepicker__day-name {
        color: #fff;
    }
    [data-dark='true'] .wrap .react-datepicker__day:hover {
        background-color: #494951;
    }
    [data-dark='true'] .wrap .react-datepicker__current-month {
        color: #fff;
    }
    [class^='select'] {
        position: relative;
        display: inline-block;
        height: 48px;
        font-size: 14px;
    }
    [class^='select'] .btn-select {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 28px 0 18px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
    }
    [class^='select'] .btn-select:after {
        display: block;
        position: absolute;
        right: 12px;
        top: 0;
        width: 8px;
        height: 100%;
        background-color: #67737f;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cpath fill='%2367737F' fill-rule='evenodd' d='M8 1.022c0 .27-.104.54-.308.742L4.673 4.719a.97.97 0 0 1-1.368-.002l-3-2.957c-.19-.186-.3-.444-.305-.715a1.037 1.037 0 0 1 .276-.73.97.97 0 0 1 1.4-.032l2.316 2.284L6.325.281a.972.972 0 0 1 1.402.036c.182.199.273.451.273.705z'/%3E%3C/svg%3E")
            0 50% no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cpath fill='%2367737F' fill-rule='evenodd' d='M8 1.022c0 .27-.104.54-.308.742L4.673 4.719a.97.97 0 0 1-1.368-.002l-3-2.957c-.19-.186-.3-.444-.305-.715a1.037 1.037 0 0 1 .276-.73.97.97 0 0 1 1.4-.032l2.316 2.284L6.325.281a.972.972 0 0 1 1.402.036c.182.199.273.451.273.705z'/%3E%3C/svg%3E")
            0 50% no-repeat;
        -webkit-mask-size: 8px 5px;
        mask-size: 8px 5px;
        content: '';
    }
    [class^='select'] .btn-select.not-selected {
        color: #b9bcc1;
    }
    [class^='select'] .btn-select.on {
        border-color: #c0c3cb;
    }
    [class^='select'] .list-select {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        margin-top: 2px;
        padding: 4px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        z-index: 20;
    }
    [class^='select'] .list-select button {
        display: block;
        width: 100%;
        padding: 12px 14px;
        border-radius: 8px;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
        transition: background-color 0.2s;
    }
    [class^='select'] .list-select button:hover {
        background-color: #f6f7f9;
    }
    [class^='select'] .list-select a {
        display: block;
        width: 100%;
        padding: 12px 14px;
        border-radius: 8px;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        text-align: left;
    }
    [class^='select'] .list-select a:hover {
        background-color: #f6f7f9;
    }
    [class^='select'] .btn-select.on + .list-select {
        display: block;
    }
    [data-dark='true'] [class^='select'] .btn-select {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] [class^='select'] .btn-select:after {
        background-color: #b1b5c3;
    }
    [data-dark='true'] [class^='select'] .btn-select.not-selected {
        color: #484c55;
    }
    [data-dark='true'] [class^='select'] .list-select {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true'] [class^='select'] .list-select button {
        color: #fff;
    }
    [data-dark='true'] [class^='select'] .list-select button:hover {
        background-color: #212226;
    }
    [data-dark='true'] [class^='select'] .list-select a {
        color: #fff;
    }
    [data-dark='true'] [class^='select'] .list-select a:hover {
        background-color: #212226;
    }
    .select-lang .btn-select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%231A2B3B' fill-rule='evenodd' d='M16.255 11.813a.529.529 0 0 1-.193-.408v-1.37a.526.526 0 0 0-.155-.373l-1.463-1.463a.526.526 0 0 1-.135-.518l.744-2.63c.01-.03.026-.056.038-.082a7.117 7.117 0 0 1 1.703 7.287l-.54-.444.001.001zm-2.2 2.621-1.978 2.421c-.43.131-.878.224-1.338.27a.578.578 0 0 1-.01-.174l.17-1.784a.541.541 0 0 0-.106-.373l-1.541-2.055a.538.538 0 0 1 .348-.854l3.405-.524a.54.54 0 0 1 .604.401l.55 2.202a.542.542 0 0 1-.105.47h.001zM8.59 11.286h-.453a.616.616 0 0 1-.296-.075L4.124 9.183a.621.621 0 0 1-.27-.295L3.273 7.56a7.167 7.167 0 0 1 6.56-4.716l3.03 1.516a.618.618 0 0 1 .239.895l-1.014 1.52a.594.594 0 0 1-.17.17L9.107 8.82a.618.618 0 0 0-.244.71l.313.942a.618.618 0 0 1-.587.814h.001zM10 1c-4.963 0-9 4.038-9 9.001 0 4.963 4.037 9 9 9s9-4.037 9-9S14.963 1 10 1z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }
    [data-dark='true'] .select-lang .btn-select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M16.255 11.813a.529.529 0 0 1-.193-.408v-1.37a.526.526 0 0 0-.155-.373l-1.463-1.463a.526.526 0 0 1-.135-.518l.744-2.63c.01-.03.026-.056.038-.082a7.117 7.117 0 0 1 1.703 7.287l-.54-.444.001.001zm-2.2 2.621-1.978 2.421c-.43.131-.878.224-1.338.27a.578.578 0 0 1-.01-.174l.17-1.784a.541.541 0 0 0-.106-.373l-1.541-2.055a.538.538 0 0 1 .348-.854l3.405-.524a.54.54 0 0 1 .604.401l.55 2.202a.542.542 0 0 1-.105.47h.001zM8.59 11.286h-.453a.616.616 0 0 1-.296-.075L4.124 9.183a.621.621 0 0 1-.27-.295L3.273 7.56a7.167 7.167 0 0 1 6.56-4.716l3.03 1.516a.618.618 0 0 1 .239.895l-1.014 1.52a.594.594 0 0 1-.17.17L9.107 8.82a.618.618 0 0 0-.244.71l.313.942a.618.618 0 0 1-.587.814h.001zM10 1c-4.963 0-9 4.038-9 9.001 0 4.963 4.037 9 9 9s9-4.037 9-9S14.963 1 10 1z'/%3E%3C/svg%3E");
    }
    .wrap [class^='search'] {
        position: relative;
    }
    .wrap [class^='search'] input {
        background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'/%3E%3C/g%3E%3C/svg%3E")
            14px 50% no-repeat;
        background-size: 20px 20px;
        color: #142b3d;
        font-size: 14px;
    }
    .wrap [class^='search'] .btn-del {
        display: none;
        position: absolute;
        top: 50%;
        width: 14px;
        height: 14px;
        margin-top: -7px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12 10.445 17.445 5 19 6.555 13.555 12 19 17.445 17.445 19 12 13.555 6.555 19 5 17.445 10.445 12 5 6.555 6.555 5z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
    }
    .wrap [class^='search'] .btn-del.on {
        display: block;
    }
    [data-dark='true'] .wrap [class^='search'] input {
        background-color: #141416;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23B1B5C3' fill-rule='nonzero' d='m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap [class^='search'] .btn-del {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M12 10.445 17.445 5 19 6.555 13.555 12 19 17.445 17.445 19 12 13.555 6.555 19 5 17.445 10.445 12 5 6.555 6.555 5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .btns-filter {
        display: flex;
    }
    .wrap .btns-filter .btn-filter {
        height: 48px;
        padding: 0 16px 0 38px;
        border-radius: 12px;
        border: 2px solid #485562;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M17.5 2.5v1.667h-.833l-4.167 6.25V17.5h-5v-7.083l-4.167-6.25H2.5V2.5h15zM5.337 4.167l3.83 5.745v5.921h1.666V9.912l3.83-5.745H5.337z'/%3E%3C/g%3E%3C/svg%3E")
            12px 50% no-repeat;
        background-size: 20px 20px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 44px;
    }
    .wrap .btns-filter .btn-filter:hover {
        border-color: #1a2b3b;
    }
    .wrap .btns-filter .btn-filter.on {
        border-color: #1a2b3b;
        background-color: #1a2b3b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='M17.5 2.5v1.667h-.833l-4.167 6.25V17.5h-5v-7.083l-4.167-6.25H2.5V2.5h15zM5.337 4.167l3.83 5.745v5.921h1.666V9.912l3.83-5.745H5.337z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    .wrap .btns-filter .btn-filter .count {
        display: inline-block;
        width: 24px;
        margin-left: 2px;
        border-radius: 50%;
        background-color: #1a2b3b;
        color: #fff;
        line-height: 24px;
    }
    .wrap .btns-filter .btn-filter.on .count {
        background-color: #fff;
        color: #1a2b3b;
    }
    .wrap .btns-filter .select-filter {
        flex: 1;
        max-width: 200px;
        margin-left: 10px;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter {
        border-color: #d0d0d0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M17.5 2.5v1.667h-.833l-4.167 6.25V17.5h-5v-7.083l-4.167-6.25H2.5V2.5h15zM5.337 4.167l3.83 5.745v5.921h1.666V9.912l3.83-5.745H5.337z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter:hover {
        border-color: #fff;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter.on {
        border-color: #d0d0d0;
        background-color: #d0d0d0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23141416' fill-rule='nonzero' d='M17.5 2.5v1.667h-.833l-4.167 6.25V17.5h-5v-7.083l-4.167-6.25H2.5V2.5h15zM5.337 4.167l3.83 5.745v5.921h1.666V9.912l3.83-5.745H5.337z'/%3E%3C/g%3E%3C/svg%3E");
        color: #141416;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter.on:hover {
        border-color: #fff;
        background-color: #fff;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter .count {
        background-color: #fff;
        color: #141416;
    }
    [data-dark='true'] .wrap .btns-filter .btn-filter.on .count {
        background-color: #141416;
        color: #d0d0d0;
    }
    .wrap .layer-filter {
        position: relative;
        display: none;
        font-size: 14px;
    }
    .wrap .layer-filter.on {
        padding: 60px 25px;
    }
    .wrap .layer-filter .wrap-filter {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 550px;
        max-height: 100%;
        padding: 50px 25px 0;
        border-radius: 20px;
        background-color: #fff;
    }
    .wrap .layer-filter .tit-filter {
        color: #1a2b3b;
        font-size: 2.4rem;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        text-align: center;
    }
    .wrap .layer-filter .scroll {
        overflow-y: auto;
        position: relative;
    }
    .wrap .layer-filter .item-filter {
        margin-top: 10px;
    }
    .wrap .layer-filter .item-filter:nth-of-type(1) {
        margin-top: 20px;
    }
    .wrap .layer-filter .filter + .filter {
        margin-top: 10px;
    }
    .wrap .layer-filter .filter > dt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 10px 10px 10px 16px;
        border-radius: 12px;
        background-color: #f6f7f9;
        color: #67737f;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .layer-filter .filter > dt .btn-refresh {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        transition: border-color 0.5s;
    }
    .wrap .layer-filter .filter > dt .btn-refresh:hover {
        border-color: #c0c3cb;
    }
    .wrap .layer-filter .filter > dt .btn-refresh:after {
        display: block;
        width: 14px;
        height: 14px;
        margin: 0 auto;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M13.903 14.675a7.5 7.5 0 1 1 1.24-1.37L12.75 9H15a6 6 0 1 0-1.845 4.329l.748 1.346z'/%3E%3C/g%3E%3C/svg%3E")
            14px 14px;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M13.903 14.675a7.5 7.5 0 1 1 1.24-1.37L12.75 9H15a6 6 0 1 0-1.845 4.329l.748 1.346z'/%3E%3C/g%3E%3C/svg%3E")
            14px 14px;
        background-color: #1a2b3b;
        content: '';
    }
    .wrap .layer-filter .filter > dd {
        margin-top: 10px;
    }
    .wrap .layer-filter .filter .list-filter > li {
        position: relative;
    }
    .wrap .layer-filter .filter .list-filter > li:nth-child(n + 2) {
        margin-top: 1px;
    }
    .wrap .layer-filter .filter .list-filter label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        padding: 0 10px 0 40px;
        border-radius: 10px;
        transition: background-color 0.2s;
    }
    .wrap .layer-filter .filter .list-filter label:before {
        left: 10px;
        top: 50%;
        width: 20px;
        height: 20px;
        background-size: 16px 16px;
        transform: translateY(-50%);
    }
    .wrap .layer-filter .filter .list-filter label:hover {
        background-color: #f6f7f9;
    }
    .wrap .layer-filter .filter .list-filter label > span:nth-child(1) {
        overflow: hidden;
        display: block;
        padding-right: 10px;
        color: #1a2b3b;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .wrap
        .layer-filter
        .filter
        .list-filter
        input[type='radio']:checked
        + label:before {
        border-width: 4px;
    }
    .wrap .layer-filter .filter .filter-price {
        padding: 0 10px 10px;
    }
    .wrap .layer-filter .filter .filter-price .usd:before {
        display: inline-block;
        width: 26px;
        height: 26px;
        margin-right: 4px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_light.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        content: '';
    }
    .wrap .layer-filter .filter .filter-price .xpla {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .layer-filter .filter .filter-price .xpla:before {
        display: inline-block;
        width: 26px;
        height: 26px;
        margin-right: 4px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_xpla.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        content: '';
    }
    .wrap .layer-filter .filter .filter-price .range {
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #1a2b3b;
    }
    .wrap .layer-filter .filter .filter-price .range input {
        height: 48px;
        text-align: center;
    }
    .wrap .layer-filter .filter .filter-price .range .to {
        padding: 0 8px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .layer-filter .filter .filter-price .btn-apply {
        display: none;
        width: 100%;
        height: 48px;
        margin-top: 20px;
        padding: 0 8px;
        border-radius: 14px;
    }
    .wrap .layer-filter .filter .property .btn-property {
        position: relative;
        width: 100%;
        height: 52px;
        padding: 0 10px 0 16px;
        border-top: 1px solid #e6e8ec;
        text-align: left;
    }
    .wrap .layer-filter .filter .property .btn-property:after {
        position: absolute;
        right: 10px;
        top: 50%;
        display: block;
        width: 20px;
        height: 20px;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 10.818 6.111 7 5 8.091 10 13l5-4.909L13.889 7z'/%3E%3C/g%3E%3C/svg%3E")
            20px 20px;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10 10.818 6.111 7 5 8.091 10 13l5-4.909L13.889 7z'/%3E%3C/g%3E%3C/svg%3E")
            20px 20px;
        background-color: #1a2b3b;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .layer-filter .filter .property .btn-property.on:after {
        transform: translateY(-50%) rotate(180deg);
    }
    .wrap .layer-filter .filter .property .list-filter {
        display: none;
        padding: 10px 0;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .layer-filter .filter .property .btn-property.on + .list-filter {
        display: block;
    }
    .wrap .layer-filter .apply {
        padding: 19px 0 21px;
        border-top: 1px solid #e6e8ec;
        background-color: #fff;
    }
    .wrap .layer-filter .apply .btn-apply {
        width: 100%;
        height: 48px;
        padding: 0 20px;
        border-radius: 14px;
    }
    [data-dark='true'] .wrap .layer-filter .wrap-filter {
        border: 1px solid #33353b;
        background-color: #18181b;
    }
    [data-dark='true'] .wrap .layer-filter .tit-filter {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter > dt {
        background-color: #1c1d21;
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter > dt .btn-refresh {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true'] .wrap .layer-filter .filter > dt .btn-refresh:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .layer-filter .filter > dt .btn-refresh:after {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter .list-filter label:hover {
        background-color: #1c1d21;
    }
    [data-dark='true']
        .wrap
        .layer-filter
        .filter
        .list-filter
        label
        > span:nth-child(1) {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter .filter-price .usd:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_dark.png);
    }
    [data-dark='true'] .wrap .layer-filter .filter .filter-price .xpla {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter .filter-price .range {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter .property .btn-property {
        border-color: #28282b;
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .layer-filter
        .filter
        .property
        .btn-property:after {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .layer-filter .filter .property .list-filter {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .layer-filter .apply {
        border-color: #28282b;
        background-color: #18181b;
    }
    .wrap .item {
        padding: 18px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
    }
    .wrap .item .wrap-thumb {
        width: 160px;
        margin: 0 auto;
    }
    .wrap .item .wrap-thumb > img {
        border-radius: 10px;
    }
    .wrap .item .wrap-thumb .thumb {
        overflow: hidden;
    }
    .wrap .item .wrap-detail {
        width: 100%;
        margin-top: 20px;
        color: #1a2b3b;
        font-size: 14px;
    }
    .wrap .item .wrap-detail .product {
        display: block;
        margin-top: 6px;
        color: #142b3d;
        font-size: 16px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-style: normal;
        line-height: 20px;
    }
    .wrap .item .wrap-detail .series {
        margin: 4px 0 10px;
        color: #67737f;
    }
    .wrap .item .wrap-detail .serial {
        display: inline-block;
        margin-left: 2px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    [data-dark='true'] .wrap .item {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .item .wrap-detail {
        color: #fff;
    }
    [data-dark='true'] .wrap .item .wrap-detail .product {
        color: #fff;
    }
    [data-dark='true'] .wrap .item .wrap-detail .series {
        color: #b1b5c3;
    }
    .wrap .note-dot {
        padding: 0 10px 0 20px;
        font-size: 13px;
        line-height: 18px;
    }
    .wrap .note-dot > li {
        position: relative;
    }
    .wrap .note-dot > li:nth-child(n + 2) {
        margin-top: 8px;
    }
    .wrap .note-dot > li:before {
        display: block;
        position: absolute;
        left: -10px;
        top: 7px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #647380;
        content: '';
    }
    .wrap .note-dot a {
        color: #00b1ff;
    }
    .wrap .note-dot.type-2 {
        padding: 8px 18px;
        background-color: #f6f7f9;
        font-size: 14px;
    }
    .wrap .note-dot.type-2 > li {
        padding: 10px 0 10px 12px;
    }
    .wrap .note-dot.type-2 > li:before {
        left: 0;
        top: 16px;
        width: 6px;
        height: 6px;
        background-color: #00b1ff;
    }
    .wrap .note-dot.type-2 > li:nth-child(n + 2) {
        margin-top: 0;
        border-top: 1px solid #e6e8ec;
    }
    [data-dark='true'] .wrap .note-dot > li:before {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .note-dot.type-2 {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .note-dot.type-2 > li:before {
        background-color: #00b1ff;
    }
    [data-dark='true'] .wrap .note-dot.type-2 > li:nth-child(n + 2) {
        border-color: #28282b;
    }
    .wrap .paging {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wrap .paging > button {
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 2px;
        border-radius: 50%;
        border: 2px solid #e6e8ec;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }
    .wrap .paging > button:hover {
        border-color: #cfd1d6;
    }
    .wrap .paging .btn-first {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.182 10 15 13.89 13.91 15 9 10l4.91-5L15 6.11z'/%3E%3Cpath fill='%231A2B3B' d='M6 5h1.4v10H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .paging .btn-prev {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M8.182 10 12 13.89 10.91 15 6 10l4.91-5L12 6.11z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .paging .btn-next {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M8.182 10 12 13.89 10.91 15 6 10l4.91-5L12 6.11z'/%3E%3C/g%3E%3C/svg%3E");
        transform: rotate(180deg);
    }
    .wrap .paging .btn-last {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.182 10 15 13.89 13.91 15 9 10l4.91-5L15 6.11z'/%3E%3Cpath fill='%231A2B3B' d='M6 5h1.4v10H6z'/%3E%3C/g%3E%3C/svg%3E");
        transform: rotate(180deg);
    }
    .wrap .paging .num {
        display: flex;
        margin: 0 9px;
    }
    .wrap .paging .num .btn-num {
        display: block;
        width: 30px;
        height: 32px;
        margin: 0 5px;
        border-bottom: 2px solid transparent;
        font-size: 14px;
    }
    .wrap .paging .num .btn-num:hover {
        border-color: #e6e8ec;
    }
    .wrap .paging .num .btn-num.on {
        border-color: #1a2b3b;
    }
    [data-dark='true'] .wrap .paging > button {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .paging > button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .paging .btn-first {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='M11.182 10 15 13.89 13.91 15 9 10l4.91-5L15 6.11z'/%3E%3Cpath fill='%23ffffff' d='M6 5h1.4v10H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .paging .btn-prev {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='M8.182 10 12 13.89 10.91 15 6 10l4.91-5L12 6.11z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .paging .btn-next {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='M8.182 10 12 13.89 10.91 15 6 10l4.91-5L12 6.11z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .paging .btn-last {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='M11.182 10 15 13.89 13.91 15 9 10l4.91-5L15 6.11z'/%3E%3Cpath fill='%23ffffff' d='M6 5h1.4v10H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .paging .num .btn-num {
        color: #fff;
    }
    [data-dark='true'] .wrap .paging .num .btn-num:hover {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .paging .num .btn-num.on {
        border-color: #fff;
    }
    .wrap .header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 100;
    }
    .wrap .header.fixed,
    .wrap .header.on {
        background-color: #fff;
    }
    .wrap .header .contents {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
    }
    .wrap .header .logo {
        width: 86px;
        height: 28px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/logo_nft_beta_on.png)
            0 0 no-repeat;
        background-size: 100% auto;
    }
    .wrap .header .logo > a {
        display: block;
        height: 100%;
    }
    .wrap .header .btns-m {
        display: flex;
        align-items: center;
    }
    .wrap .header .btns-m .btn-search {
        display: block;
        width: 34px;
        height: 34px;
        margin-right: 9px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 22px 22px;
    }
    .wrap .header .btns-m .btn-menu {
        position: relative;
        display: block;
        width: 34px;
        height: 34px;
        margin-right: -5px;
        padding: 0;
        z-index: 1;
    }
    .wrap .header .btns-m .btn-menu:before {
        position: absolute;
        left: 9px;
        top: 12px;
        display: block;
        width: 16px;
        height: 2px;
        background-color: #1a2b3b;
        transition: top 0.2s, transform 0.2s;
        content: '';
    }
    .wrap .header .btns-m .btn-menu.on:before {
        top: 50%;
        transform: rotate(45deg);
    }
    .wrap .header .btns-m .btn-menu:after {
        position: absolute;
        left: 9px;
        top: 20px;
        display: block;
        width: 16px;
        height: 2px;
        background-color: #1a2b3b;
        transition: top 0.2s, transform 0.2s;
        content: '';
    }
    .wrap .header .btns-m .btn-menu.on:after {
        top: 50%;
        transform: rotate(-45deg);
    }
    .wrap .header .wrap-search {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        opacity: 0;
        transform: translateX(100%);
        z-index: 10;
    }
    .wrap .header .wrap-search.on {
        opacity: 1;
        transform: translateX(0);
    }
    .wrap .header .wrap-search .contents {
        flex-wrap: wrap;
        height: auto;
        padding-top: 25px;
    }
    .wrap .header .wrap-search .search-header {
        flex: 1;
        height: 46px;
    }
    .wrap .header .wrap-search .search-header input {
        height: 100%;
        padding: 0 35px 0 41px;
        background-position: 11px 50%;
    }
    .wrap .header .wrap-search .search-header .btn-del {
        right: 13px;
    }
    .wrap .header .wrap-search .list-auto {
        width: 100%;
        margin-top: 20px;
    }
    .wrap .header .wrap-search .list-auto > li {
        margin-top: 4px;
    }
    .wrap .header .wrap-search .list-auto > li:first-child {
        margin-top: 0;
    }
    .wrap .header .wrap-search .list-auto a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        padding: 0 11px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 40px;
        white-space: nowrap;
    }
    .wrap .header .wrap-search .list-auto a:hover {
        background-color: #f6f7f9;
    }
    .wrap .header .wrap-search .list-auto .keyword {
        color: #00b1ff;
    }
    .wrap .header .wrap-search .btn-cancel {
        display: block;
        margin-left: 20px;
        padding: 5px 0;
        color: #1a2b3b;
    }
    .wrap .header .wrap-search .desc-search {
        width: 100%;
        margin-top: 70px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
    .wrap .header.m-search .wrap-search {
        opacity: 1;
        transition: transform 0.4s;
    }
    .wrap .header .btn-user {
        overflow: hidden;
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .wrap .header .btn-user > img {
        height: 100%;
        object-fit: cover;
    }
    .wrap .header .btn-user:after {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #cfd1d6;
        opacity: 0;
        box-sizing: border-box;
        transition: opacity 0.2s;
        content: '';
    }
    .wrap .header .btn-user.on:after,
    .wrap .header .btn-user:hover:after {
        opacity: 1;
    }
    .wrap .header .btn-wallet {
        border-radius: 50%;
        border: 2px solid #e6e8ec;
    }
    .wrap .header .btn-wallet:before {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 auto;
        background-color: #1a2b3b;
        content: '';
    }
    .wrap .header .nav {
        display: none;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 60px;
        bottom: 0;
        width: 100%;
        background-color: #fff;
    }
    .wrap .header .nav > .contents {
        overflow-y: auto;
        display: block;
        width: 100%;
        padding-top: 25px;
        padding-bottom: 40px;
    }
    .wrap .header .nav--menu {
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .header .nav--menu a[target='_blank']:after {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 4px 0 0 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: top;
        content: '';
    }
    .wrap .header .nav--menu > li:nth-child(n + 2) {
        padding-top: 30px;
    }
    .wrap .header .nav--menu > li > a {
        display: inline-block;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .header .nav--menu .submenu {
        margin-top: 20px;
    }
    .wrap .header .nav--menu .submenu > li {
        margin-top: 16px;
    }
    .wrap .header .nav--menu .submenu > li:first-child {
        margin-top: 0;
    }
    .wrap .header .nav--menu .submenu a {
        display: inline-block;
    }
    .wrap .header .nav--dark {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 27px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .header .nav--dark > div:before {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M9.512 2A6.006 6.006 0 1 0 18 10.488 8.008 8.008 0 1 1 9.512 2z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 20px 20px;
        vertical-align: top;
        content: '';
    }
    .wrap .header .nav--dark .btn-dark {
        position: relative;
        width: 48px;
        height: 26px;
        border-radius: 20px;
        background-color: #e6e8ec;
        background-image: none;
    }
    .wrap .header .nav--dark .btn-dark:after {
        display: block;
        position: absolute;
        left: 4px;
        top: 50%;
        width: 18px;
        height: 18px;
        margin-top: -9px;
        border-radius: 50%;
        background-color: #fff;
        content: '';
        transition: transform 0.3s;
    }
    .wrap .header .nav--login {
        width: 100%;
        padding: 0 25px;
        background-color: #fff;
    }
    .wrap .header .nav--login .contents {
        display: block;
        max-width: 718px;
        padding: 20px 0;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .header .nav--login .btn-login {
        display: block;
        width: 100%;
        height: 48px;
        padding: 0 20px;
        border-radius: 14px;
        font-size: 14px;
        line-height: 44px;
    }
    .wrap .header .nav--user {
        position: relative;
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        padding: 0 25px;
        background-color: #fff;
    }
    .wrap .header .nav--user .btn-user {
        display: none;
    }
    .wrap .header .nav--user > .contents {
        position: relative;
        display: block;
        padding: 20px 0;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .header .nav--user .profile {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        padding-right: 112px;
    }
    .wrap .header .nav--user .profile .pic {
        overflow: hidden;
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }
    .wrap .header .nav--user .profile .pic > img {
        height: 100%;
        object-fit: cover;
    }
    .wrap .header .nav--user .profile .name {
        overflow: hidden;
        width: calc(100% - 46px);
        text-overflow: ellipsis;
        padding-left: 10px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 18px;
        line-height: 22px;
        white-space: nowrap;
    }
    .wrap .header .nav--user .profile .mail {
        display: none;
    }
    .wrap .header .nav--user .btn-setup {
        display: block;
        position: absolute;
        right: 56px;
        top: 20px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 2px solid #e6e8ec;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M1.667 10c0-.72.091-1.42.263-2.087a2.5 2.5 0 0 0 2.228-3.857 8.325 8.325 0 0 1 3.613-2.088 2.5 2.5 0 0 0 4.456 0 8.325 8.325 0 0 1 3.613 2.088 2.5 2.5 0 0 0 2.23 3.858 8.431 8.431 0 0 1-.001 4.173 2.5 2.5 0 0 0-2.229 3.857 8.325 8.325 0 0 1-3.613 2.088 2.5 2.5 0 0 0-4.456 0 8.325 8.325 0 0 1-3.613-2.088 2.5 2.5 0 0 0-2.229-3.858A8.38 8.38 0 0 1 1.667 10zm4.003 2.5c.525.91.675 1.955.47 2.937.34.241.702.45 1.08.625A4.16 4.16 0 0 1 10 15c1.05 0 2.032.393 2.78 1.062a6.83 6.83 0 0 0 1.08-.625 4.16 4.16 0 0 1 .47-2.937 4.16 4.16 0 0 1 2.308-1.875 6.772 6.772 0 0 0 0-1.25A4.16 4.16 0 0 1 14.33 7.5a4.16 4.16 0 0 1-.47-2.937 6.658 6.658 0 0 0-1.08-.625A4.16 4.16 0 0 1 10 5a4.16 4.16 0 0 1-2.78-1.062c-.378.174-.74.384-1.08.625A4.16 4.16 0 0 1 5.67 7.5a4.16 4.16 0 0 1-2.308 1.875 6.772 6.772 0 0 0 0 1.25A4.16 4.16 0 0 1 5.67 12.5zm4.33 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.667a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .header .nav--user .btn-collection {
        display: block;
        width: 100%;
        height: 48px;
        margin-top: 10px;
        padding: 0 16px 0 44px;
        border-radius: 14px;
        background: #f6f7f9
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m16.736 12.667 1.002.6a.417.417 0 0 1 0 .716l-7.309 4.384a.833.833 0 0 1-.858 0l-7.308-4.385a.417.417 0 0 1 0-.714l1.001-.601L10 16.708l6.736-4.041zm0-3.917 1.002.6a.417.417 0 0 1 0 .716L10 14.708l-7.737-4.642a.417.417 0 0 1 0-.715l1.001-.601L10 12.792l6.736-4.042zm-6.308-7.66 7.31 4.386a.417.417 0 0 1 0 .715L10 10.833 2.263 6.191a.417.417 0 0 1 0-.715L9.57 1.09a.833.833 0 0 1 .858 0zM10 2.778 4.906 5.833 10 8.89l5.094-3.057L10 2.777z'/%3E%3C/g%3E%3C/svg%3E")
            16px 50% no-repeat;
        background-size: 20px 20px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 48px;
        text-align: left;
    }
    .wrap .header .nav--user .wrap-account {
        position: fixed;
        left: 0;
        top: -60px;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        visibility: hidden;
        z-index: -1;
    }
    .wrap .header .nav--user .wrap-account .contents {
        display: block;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        max-width: none;
        height: auto;
        padding: 25px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: #fff;
        transform: translateY(100%);
        transition: transform 0.4s;
    }
    .wrap .header .nav--user .wrap-account .account {
        max-width: 718px;
        margin: 0 auto;
        text-align: left;
    }
    .wrap .header .nav--user .wrap-account .account > dt {
        display: none;
    }
    .wrap .header .nav--user .wrap-account .account > dd {
        margin-top: 4px;
    }
    .wrap .header .nav--user .wrap-account .account > dd:nth-of-type(1) {
        margin-top: 0;
    }
    .wrap .header .nav--user .wrap-account .account a {
        position: relative;
        display: block;
        padding-left: 44px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 48px;
    }
    .wrap .header .nav--user .wrap-account .account a:before {
        display: block;
        position: absolute;
        left: 16px;
        top: 50%;
        width: 20px;
        height: 20px;
        background-color: #1a2b3b;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .header .nav--user .wrap-account .logout {
        max-width: 718px;
        margin: 10px auto 0;
        padding-top: 10px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .header .nav--user .wrap-account .logout .btn-logout {
        display: block;
        width: 100%;
        padding-left: 44px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m5.22 3.172.957 1.366a6.667 6.667 0 1 0 7.646 0l.956-1.366a8.333 8.333 0 1 1-9.558 0zM9.168 10V1.667h1.666V10H9.167z'/%3E%3C/g%3E%3C/svg%3E")
            16px 50% no-repeat;
        background-size: 20px 20px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 48px;
        text-align: left;
    }
    .wrap .header .nav--user .btn-setup.on + .wrap-account {
        visibility: visible;
        z-index: 10;
    }
    .wrap .header .nav--user .btn-setup.on + .wrap-account .contents {
        transform: translateY(0);
    }
    .wrap .header .nav--user .btn-wallet {
        display: block;
        position: absolute;
        right: 25px;
        top: 20px;
        width: 46px;
        height: 46px;
        z-index: 1;
    }
    .wrap .header.nav-on .nav {
        display: flex;
    }
    [data-dark='true'] .wrap .header {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .header .btns-m .btn-search {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .header .btns-m .btn-menu:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .header .btns-m .btn-menu:after {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .header .wrap-search {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .header .wrap-search .btn-cancel {
        color: #fff;
    }
    [data-dark='true'] .wrap .header .wrap-search .desc-search {
        width: 100%;
        margin-top: 70px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
    [data-dark='true'] .wrap .header .btn-user.on:after,
    [data-dark='true'] .wrap .header .btn-user:hover:after {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .header .btn-wallet {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .header .btn-wallet:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .header .nav {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .header .nav--menu a[target='_blank']:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .header .nav--menu > li > a {
        color: #fff;
    }
    [data-dark='true'] .wrap .header .nav--dark {
        color: #fff;
    }
    [data-dark='true'] .wrap .header .nav--dark > div:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M9.512 2A6.006 6.006 0 1 0 18 10.488 8.008 8.008 0 1 1 9.512 2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .header .nav--dark .btn-dark {
        background-image: linear-gradient(to right, #00d6f3, #6d3eff);
    }
    [data-dark='true'] .wrap .header .nav--dark .btn-dark:after {
        transform: translateX(22px);
    }
    [data-dark='true'] .wrap .header .nav--login {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .header .nav--login > .contents {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .header .nav--user {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .header .nav--user > .contents {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .header .nav--user .profile .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .header .nav--user .btn-setup {
        border-color: #33353b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M1.667 10c0-.72.091-1.42.263-2.087a2.5 2.5 0 0 0 2.228-3.857 8.325 8.325 0 0 1 3.613-2.088 2.5 2.5 0 0 0 4.456 0 8.325 8.325 0 0 1 3.613 2.088 2.5 2.5 0 0 0 2.23 3.858 8.431 8.431 0 0 1-.001 4.173 2.5 2.5 0 0 0-2.229 3.857 8.325 8.325 0 0 1-3.613 2.088 2.5 2.5 0 0 0-4.456 0 8.325 8.325 0 0 1-3.613-2.088 2.5 2.5 0 0 0-2.229-3.858A8.38 8.38 0 0 1 1.667 10zm4.003 2.5c.525.91.675 1.955.47 2.937.34.241.702.45 1.08.625A4.16 4.16 0 0 1 10 15c1.05 0 2.032.393 2.78 1.062a6.83 6.83 0 0 0 1.08-.625 4.16 4.16 0 0 1 .47-2.937 4.16 4.16 0 0 1 2.308-1.875 6.772 6.772 0 0 0 0-1.25A4.16 4.16 0 0 1 14.33 7.5a4.16 4.16 0 0 1-.47-2.937 6.658 6.658 0 0 0-1.08-.625A4.16 4.16 0 0 1 10 5a4.16 4.16 0 0 1-2.78-1.062c-.378.174-.74.384-1.08.625A4.16 4.16 0 0 1 5.67 7.5a4.16 4.16 0 0 1-2.308 1.875 6.772 6.772 0 0 0 0 1.25A4.16 4.16 0 0 1 5.67 12.5zm4.33 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.667a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .header .nav--user .btn-collection {
        background-color: #212226;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m16.736 12.667 1.002.6a.417.417 0 0 1 0 .716l-7.309 4.384a.833.833 0 0 1-.858 0l-7.308-4.385a.417.417 0 0 1 0-.714l1.001-.601L10 16.708l6.736-4.041zm0-3.917 1.002.6a.417.417 0 0 1 0 .716L10 14.708l-7.737-4.642a.417.417 0 0 1 0-.715l1.001-.601L10 12.792l6.736-4.042zm-6.308-7.66 7.31 4.386a.417.417 0 0 1 0 .715L10 10.833 2.263 6.191a.417.417 0 0 1 0-.715L9.57 1.09a.833.833 0 0 1 .858 0zM10 2.778 4.906 5.833 10 8.89l5.094-3.057L10 2.777z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    [data-dark='true'] .wrap .header .nav--user .wrap-account .contents {
        background-color: #18181b;
    }
    [data-dark='true'] .wrap .header .nav--user .wrap-account .account a {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .header
        .nav--user
        .wrap-account
        .account
        a:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .header .nav--user .wrap-account .logout {
        border-color: #28282b;
    }
    [data-dark='true']
        .wrap
        .header
        .nav--user
        .wrap-account
        .logout
        .btn-logout {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m5.22 3.172.957 1.366a6.667 6.667 0 1 0 7.646 0l.956-1.366a8.333 8.333 0 1 1-9.558 0zM9.168 10V1.667h1.666V10H9.167z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .header
        .nav--user
        .btn-setup.on
        + .wrap-account
        .contents {
        transform: translateY(0);
    }
    .wrap .footer {
        background-color: #f6f7f9;
        font-size: 14px;
    }
    .wrap .footer.view-pc {
        display: block;
        height: 0;
        margin-top: 89px;
        opacity: 0;
    }
    .wrap .footer .contents {
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .wrap .footer--top {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 10px;
        border-bottom: 1px solid #e9ebef;
    }
    .wrap .footer--top .wrap-info {
        flex-wrap: wrap;
        display: flex;
        max-width: 600px;
        margin-left: -20px;
    }
    .wrap .footer--top .wrap-info .info {
        display: flex;
        margin: 0 0 20px 20px;
    }
    .wrap .footer--top .wrap-info .info.contact {
        width: 100%;
    }
    .wrap .footer--top .wrap-info .info > dt {
        margin-right: 8px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .footer--top .list-social {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .wrap .footer--top .list-social > li {
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }
    .wrap .footer--top .list-social a {
        display: block;
        height: 100%;
    }
    .wrap .footer--top .list-social .social-twitter {
        width: 28px;
        height: 28px;
        background-color: #67737f;
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h28v28H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M25.856 6.599a9.781 9.781 0 0 1-2.803.767 4.895 4.895 0 0 0 2.147-2.7 9.75 9.75 0 0 1-3.099 1.185 4.879 4.879 0 0 0-8.313 4.45 13.853 13.853 0 0 1-10.058-5.1 4.863 4.863 0 0 0-.66 2.454c0 1.691.86 3.186 2.17 4.06a4.863 4.863 0 0 1-2.21-.61v.061a4.882 4.882 0 0 0 3.914 4.785 4.912 4.912 0 0 1-2.205.084 4.883 4.883 0 0 0 4.558 3.389 9.793 9.793 0 0 1-7.223 2.02 13.802 13.802 0 0 0 7.479 2.194c8.975 0 13.883-7.435 13.883-13.883 0-.21-.006-.423-.015-.63A9.912 9.912 0 0 0 25.857 6.6l-.001-.001Z'/%3E%3C/g%3E%3C/svg%3E");
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h28v28H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M25.856 6.599a9.781 9.781 0 0 1-2.803.767 4.895 4.895 0 0 0 2.147-2.7 9.75 9.75 0 0 1-3.099 1.185 4.879 4.879 0 0 0-8.313 4.45 13.853 13.853 0 0 1-10.058-5.1 4.863 4.863 0 0 0-.66 2.454c0 1.691.86 3.186 2.17 4.06a4.863 4.863 0 0 1-2.21-.61v.061a4.882 4.882 0 0 0 3.914 4.785 4.912 4.912 0 0 1-2.205.084 4.883 4.883 0 0 0 4.558 3.389 9.793 9.793 0 0 1-7.223 2.02 13.802 13.802 0 0 0 7.479 2.194c8.975 0 13.883-7.435 13.883-13.883 0-.21-.006-.423-.015-.63A9.912 9.912 0 0 0 25.857 6.6l-.001-.001Z'/%3E%3C/g%3E%3C/svg%3E");
        transition: background-color 0.2s;
    }
    .wrap .footer--top .list-social .social-twitter:hover {
        background-color: #1a2b3b;
    }
    .wrap .footer--bot {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
    }
    .wrap .footer--bot .copyright {
        flex-wrap: wrap;
        display: flex;
        align-items: flex-end;
        margin-top: 10px;
    }
    .wrap .footer--bot .copyright .logo {
        width: 86px;
        height: 23px;
        margin-top: 20px;
        margin-right: 10px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/logo_nft_beta_on.png)
            0 0 no-repeat;
        background-size: 100% auto;
    }
    .wrap .footer--bot .copyright .logo > a {
        display: block;
        height: 100%;
    }
    .wrap .footer--bot .copyright > small {
        display: block;
        margin-top: 20px;
        color: #bdc0c4;
        font-size: 14px;
    }
    .wrap .footer--bot .link {
        margin-top: 30px;
    }
    .wrap .footer--bot .link > a:nth-child(n + 2) {
        margin-left: 16px;
    }
    .wrap.account .footer.view-pc {
        margin-top: 89px;
    }
    [data-dark='true'] .wrap .footer {
        background-color: #0f0f10;
    }
    [data-dark='true'] .wrap .footer--top {
        border-color: #1b1b1d;
    }
    [data-dark='true'] .wrap .footer--top .list-social .social-twitter {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .footer--top .list-social .social-twitter:hover {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .footer--bot .copyright > small {
        color: #3e4148;
    }
    .wrap.account .footer {
        margin-top: auto;
    }
    .wrap.account .footer--bot .copyright {
        margin-top: -20px;
    }
    .wrap.account .footer--bot .copyright .logo {
        margin-right: 20px;
    }
    .wrap [class^='layer-'] {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0 25px;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 100;
    }
    .wrap [class^='layer-'].on {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrap [class^='layer-'] .layer {
        position: relative;
        width: 100%;
        max-width: 400px;
        border-radius: 20px;
        background-color: #fff;
    }
    .wrap [class^='layer-'] .tit-layer {
        display: block;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 24px;
        line-height: 28px;
        font-style: normal;
    }
    .wrap [class^='layer-'] .wrap-btn button {
        min-width: 100px;
        margin: 0 5px;
        padding: 0 14px;
        line-height: 20px;
    }
    .wrap [class^='layer-'] .btn-close {
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f6f7f9
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap [class^='layer-'] .btn-close:hover {
        background-color: #e7e9ed;
    }
    .wrap .layer-text .layer {
        padding: 50px 30px 30px;
    }
    .wrap .layer-text .text {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
    .wrap .layer-text .wrap-btn {
        margin-top: 20px;
    }
    .wrap .layer-noti .layer {
        padding: 40px 50px 30px;
        text-align: center;
    }
    .wrap .layer-noti .desc {
        color: #40e282;
        font-size: 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 24px;
    }
    .wrap .layer-noti .desc:before {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath fill='%2340E282' fill-rule='nonzero' d='M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm-1.246-5L8.45 14.696l1.768-1.767 3.536 3.536 7.07-7.071 1.768 1.767L13.755 20z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: top;
        content: '';
    }
    .wrap .layer-noti.error .desc {
        color: #f03e3e;
    }
    .wrap .layer-noti.error .desc:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm-1.25-6.25h2.5v2.5h-2.5v-2.5zm0-10h2.5v7.5h-2.5v-7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .layer-info {
        overflow-y: auto;
        padding: 25px;
    }
    .wrap .layer-info .layer {
        max-width: 550px;
        margin: auto;
        padding: 50px 25px 30px;
        text-align: center;
    }
    .wrap .layer-info .desc {
        margin-top: 10px;
        line-height: 20px;
    }
    .wrap .layer-info .img {
        width: 130px;
        margin: 20px auto 0;
    }
    .wrap .layer-info .wrap-btn {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .wrap .layer-info.type-2 .desc {
        margin-top: 0;
        color: #1a2b3b;
        font-size: 22px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 26px;
    }
    .wrap .layer-notice {
        padding: 60px 25px;
    }
    .wrap .layer-notice .layer {
        display: flex;
        flex-direction: column;
        max-width: 550px;
        max-height: 100%;
        padding: 50px 25px 30px;
    }
    .wrap .layer-notice .tit-layer {
        text-align: center;
    }
    .wrap .layer-notice .tit-layer > span {
        display: inline-block;
        margin-bottom: 4px;
        color: #67737f;
        font-size: 14px;
        line-height: 18px;
    }
    .wrap .layer-notice .list-notice {
        overflow-y: auto;
        margin-top: 20px;
        padding: 8px 18px;
        border: 2px solid #e6e8ec;
        border-radius: 14px;
        background-color: #f6f7f9;
    }
    .wrap .layer-notice .list-notice > li {
        position: relative;
        padding: 10px 0 10px 12px;
    }
    .wrap .layer-notice .list-notice > li:before {
        display: block;
        position: absolute;
        left: 0;
        top: 16px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #00b1ff;
        content: '';
    }
    .wrap .layer-notice .list-notice > li:nth-child(n + 2) {
        border-top: 1px solid #e6e8ec;
    }
    .wrap .layer-notice .list-notice strong {
        color: #1a2b3b;
    }
    .wrap .layer-notice .desc {
        overflow-y: auto;
        margin-top: 20px;
        padding: 18px;
        border: 2px solid #e6e8ec;
        border-radius: 14px;
        background-color: #f6f7f9;
    }
    .wrap .layer-notice .wrap-btn {
        margin-top: 20px;
    }
    [data-dark='true'] .wrap [class^='layer-'] .layer {
        border: 1px solid #33353b;
        background-color: #18181b;
    }
    [data-dark='true'] .wrap [class^='layer-'] .tit-layer {
        color: #fff;
    }
    [data-dark='true'] .wrap [class^='layer-'] .btn-close {
        background-color: #1f1f22;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap [class^='layer-'] .btn-close:hover {
        background-color: #33353b;
    }
    [data-dark='true'] .wrap .layer-text .text {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-notice .tit-layer > span {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .layer-notice .list-notice {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .layer-notice .list-notice > li:nth-child(n + 2) {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .layer-notice .list-notice strong {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-notice .desc {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    @media screen and (min-width: 532px) {
        .wrap .list-product {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 10px;
            column-gap: 10px;
        }
        .wrap .list-collector {
            position: relative;
            left: -5px;
            display: flex;
            flex-wrap: wrap;
            width: calc(100% + 10px);
            margin-top: 10px;
        }
        .wrap .list-collector .item-hot {
            width: 50%;
            padding: 0 5px;
        }
        .wrap .sect-purchase .item {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        .wrap .sect-purchase .item .wrap-thumb {
            margin: 0;
        }
        .wrap .sect-purchase .item .wrap-detail {
            width: calc(100% - 160px);
            margin-top: 0;
            padding-left: 20px;
        }
    }
    @media screen and (min-width: 1180px) {
        .wrap {
            padding-top: 70px;
            font-size: 16px;
        }
        .wrap .contents {
            max-width: 1380px;
            padding: 80px;
        }
        .wrap .view-m {
            display: none;
        }
        .wrap .view-pc {
            display: block;
        }
        .wrap.account .footer.view-pc {
            margin-top: auto;
        }
        .wrap .tit {
            font-size: 40px;
            line-height: 48px;
        }
        .wrap .btn-like {
            height: auto;
            padding: 0;
            font-size: 12px;
        }
        .wrap .item-product {
            transition: box-shadow 0.2s;
        }
        .wrap .item-product:hover {
            box-shadow: 0 10px 20px 0 #e7e8ee;
        }
        .wrap .item-product.none > a:before {
            left: 20px;
            right: 20px;
            top: 20px;
        }
        [data-dark='true'] .wrap .item-product:hover {
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.7);
        }
        .wrap .btn-go:hover:after {
            transform: translateX(2px);
        }
        .wrap .wrap-btn {
            margin-top: 40px;
        }
        .wrap .wrap-btn [class^='btn-'] {
            height: 52px;
            padding: 0 32px;
        }
        .wrap .wrap-btn.grid {
            margin-right: -10px;
            margin-left: -10px;
        }
        .wrap .wrap-btn.grid [class^='btn-'] {
            margin: 0 10px;
            padding: 0 28px;
        }
        .wrap .wrap-btn.column [class^='btn-'] {
            width: auto;
            margin: 0 10px;
        }
        .wrap .wrap-btn.column [class^='btn-']:nth-child(n + 2) {
            margin-top: 0;
        }
        .wrap .fix-bot {
            position: static;
            width: 100%;
            padding: 0;
            background-color: transparent;
        }
        .wrap .fix-bot.line {
            border-top: 1px solid #e6e8ec;
        }
        .wrap .fix-bot .box-bot {
            padding-bottom: 0;
            border-top: 0;
        }
        .wrap .fix-bot.none .box-bot {
            padding-top: 5px;
        }
        [data-dark='true'] .wrap .fix-bot.line {
            border-color: #28282b;
        }
        .wrap .box-name .msg {
            padding: 0 20px 0 48px;
            background-position: 20px 0;
        }
        .wrap .swiper {
            width: calc(100% + 40px);
            max-width: none;
            margin-right: 0;
            margin-left: -20px;
            padding: 0 20px 34px;
        }
        .wrap .swiper .swiper-scrollbar {
            display: block;
            left: 20px;
            right: 20px;
            bottom: 0;
            width: auto;
            height: 4px;
            border-radius: 2px;
            background-color: #e7eaee;
            cursor: pointer;
        }
        .wrap .swiper .swiper-scrollbar .swiper-scrollbar-drag {
            border-radius: 2px;
            background-color: #67737f;
        }
        .wrap .swiper .item-product {
            height: auto;
        }
        [data-dark='true'] .wrap .swiper .swiper-scrollbar {
            background-color: #000;
        }
        [data-dark='true']
            .wrap
            .swiper
            .swiper-scrollbar
            .swiper-scrollbar-drag {
            background-color: #494951;
        }
        .wrap .slide-bnn {
            width: 100%;
            max-width: 1220px;
            margin: 0 auto;
            padding: 0 0 34px;
        }
        .wrap .wrap-tab {
            position: relative;
        }
        .wrap .wrap-tab .swiper {
            max-width: 100%;
            margin-left: 0;
            padding: 0;
        }
        .wrap .wrap-tab .swiper-scrollbar {
            display: none;
        }
        .wrap .wrap-tab [class^='swiper-button-'] {
            display: block;
            top: -10px;
            width: 40px;
            height: 40px;
            margin-top: 0;
        }
        .wrap .wrap-tab .swiper-button-prev {
            left: -50px;
        }
        .wrap .wrap-tab .swiper-button-next {
            right: -50px;
        }
        .wrap .wrap-tab .item-tab > a .count {
            line-height: 24px;
        }
        .wrap .wrap-tab.has-count .item-tab > a {
            font-size: 16px;
        }
        .wrap .list-product {
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 28px;
            column-gap: 28px;
            grid-row-gap: 28px;
            row-gap: 28px;
        }
        .wrap .list-product .item-product:hover {
            box-shadow: none;
        }
        .wrap .list-product .item-product > a {
            border-radius: 20px;
            transition: box-shadow 0.2s;
        }
        .wrap .list-product .item-product > a:hover {
            box-shadow: 0 10px 20px 0 #e7e8ee;
        }
        .wrap .layer-filter + .list-product {
            margin-top: 25px;
        }
        .wrap .layer-filter.on + .list-product {
            margin-top: 30px;
        }
        [data-dark='true'] .wrap .list-product .item-product > a:hover {
            box-shadow: 0 10px 20px 0 #000;
        }
        .wrap .item-hot {
            transition: box-shadow 0.2s;
        }
        .wrap .item-hot:hover {
            box-shadow: 0 10px 20px 0 #e7e8ee;
        }
        .wrap .item-hot .profile-pic {
            width: 25.28%;
            margin-top: -12.64%;
        }
        [data-dark='true'] .wrap .item-hot:hover {
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.7);
        }
        .wrap .list-collector {
            left: -14px;
            width: calc(100% + 28px);
            margin-top: 20px;
        }
        .wrap .list-collector .item-hot {
            width: 33.33%;
            margin-top: 28px;
            padding: 0 14px;
        }
        .wrap .list-collector .item-hot:hover {
            box-shadow: none;
        }
        .wrap .list-collector .item-hot > a {
            border-radius: 20px;
            transition: box-shadow 0.2s;
        }
        .wrap .list-collector .item-hot > a:hover {
            box-shadow: 0 10px 20px 0 #e7e8ee;
        }
        .wrap .list-collector .item-hot:nth-child(-n + 3) {
            margin-top: 0;
        }
        [data-dark='true'] .wrap .list-collector .item-hot > a:hover {
            box-shadow: 0 10px 20px 0 #000;
        }
        .wrap .wrap-tbl {
            max-width: 100%;
            margin: 0;
        }
        .wrap .wrap-tbl .tbl {
            font-size: 16px;
        }
        .wrap .wrap-tbl .tbl tr:hover td {
            background-color: #f6f7f9;
        }
        .wrap .wrap-tbl .tbl th {
            padding: 17px 20px 16px;
        }
        .wrap .wrap-tbl .tbl td {
            height: 71px;
        }
        .wrap .wrap-tbl.type-2 .tbl {
            font-size: 14px;
            white-space: normal;
        }
        .wrap .wrap-tbl.type-2 .tbl tr:hover td {
            background-color: transparent;
        }
        [data-dark='true'] .wrap .wrap-tbl .tbl tr:hover td {
            background-color: #1c1d21;
        }
        [data-dark='true'] .wrap .wrap-tbl.type-2 .tbl tr:hover td {
            background-color: transparent;
        }
        .wrap .loading {
            margin-top: 60px;
        }
        .wrap [class^='select'] .btn-select:hover {
            border-color: #c0c3cb;
        }
        [data-dark='true'] .wrap [class^='select'] .btn-select:hover {
            border-color: #717580;
        }
        .wrap .btns-filter .btn-filter:hover {
            border-color: #1a2b3b;
        }
        .wrap .btns-filter .btn-filter.on:hover {
            background-color: #131c25;
        }
        .wrap .btns-filter .select-filter {
            width: 200px;
        }
        .wrap .layer-filter {
            position: relative;
            display: none;
            font-size: 14px;
            z-index: 1;
        }
        .wrap .layer-filter.on {
            margin-top: 20px;
            padding: 0;
            border-bottom: 1px solid #e6e8ec;
            background-color: transparent;
        }
        .wrap .layer-filter .wrap-filter {
            max-width: 100%;
            padding: 0;
            background-color: #fff;
        }
        .wrap .layer-filter .tit-filter {
            overflow: hidden;
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            border: 0;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: inset(50%);
        }
        .wrap .layer-filter .scroll {
            overflow-y: unset;
            position: relative;
            display: grid;
            grid-column-gap: 12px;
            column-gap: 12px;
            grid-template-columns: repeat(4, 1fr);
        }
        .wrap .layer-filter .item-filter {
            min-width: 0;
            height: 504px;
            margin-top: 0;
        }
        .wrap .layer-filter .item-filter:nth-of-type(1) {
            margin-top: 0;
        }
        .wrap .layer-filter .filter {
            display: flex;
            flex-direction: column;
        }
        .wrap .layer-filter .filter:only-child {
            height: 100%;
        }
        .wrap .layer-filter .filter > dd {
            overflow-y: auto;
        }
        .wrap .layer-filter .filter .filter-price .btn-apply {
            display: block;
        }
        .wrap .layer-filter .apply {
            display: none;
        }
        .wrap .layer-filter .btn-close {
            display: none;
        }
        [data-dark='true'] .wrap .layer-filter {
            border-color: #28282b;
        }
        [data-dark='true'] .wrap .layer-filter .wrap-filter {
            border: 0;
            background-color: transparent;
        }
        .wrap [class^='swiper-button-'] {
            position: absolute;
            top: 50%;
            border-radius: 50%;
            border: 2px solid #e6e8ec;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23142B3D' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E")
                50% 50% no-repeat;
            background-size: 20px 20px;
            font: 0/0 a;
            transition: border-color 0.2s;
            z-index: 1;
        }
        .wrap [class^='swiper-button-'][disabled] {
            opacity: 0;
        }
        .wrap [class^='swiper-button-']:hover {
            border-color: #cfd1d6;
        }
        .wrap [class^='swiper-button-']:after {
            content: none;
        }
        .wrap .swiper-button-next {
            transform: rotate(180deg);
        }
        [data-dark='true'] .wrap [class^='swiper-button-'] {
            border-color: #33353b;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E");
        }
        [data-dark='true'] .wrap [class^='swiper-button-']:hover {
            border-color: #717580;
        }
        .wrap .note-dot.type-2 {
            padding: 8px 28px;
        }
        .wrap .note-dot a:hover {
            text-decoration: underline;
        }
        .wrap .header {
            height: 70px;
        }
        .wrap .header > .contents {
            max-width: 100%;
            justify-content: flex-start;
            padding: 0 40px;
        }
        .wrap .header .logo {
            width: 106px;
            height: 40px;
            background-position: 0 4px;
        }
        .wrap .header .btns-m {
            display: none;
        }
        .wrap .header .wrap-search {
            flex: 1;
            display: block;
            position: static;
            margin: 0 15px 0 20px;
            background-color: transparent;
            opacity: 1;
            transform: none;
            transition: none;
        }
        .wrap .header .wrap-search .contents {
            max-width: 500px;
            margin: 0;
            padding: 0;
        }
        .wrap .header .wrap-search .list-auto {
            position: absolute;
            left: 0;
            top: 100%;
            width: 100%;
            margin-top: 2px;
            padding: 4px;
            border-radius: 12px;
            border: 2px solid #e6e8ec;
            background-color: #fff;
        }
        .wrap .header .wrap-search .list-auto > li {
            margin-top: 1px;
        }
        .wrap .header .wrap-search .btn-cancel {
            display: none;
        }
        .wrap .header .wrap-search .desc-search {
            display: none;
        }
        .wrap .header .btn-wallet:hover {
            border-color: #cfd1d6;
        }
        .wrap .header .nav {
            position: relative;
            top: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: auto;
            padding-right: 50px;
            background-color: transparent;
        }
        .wrap .header .nav > .contents {
            overflow-y: initial;
            position: static;
            display: flex;
            justify-content: flex-end;
            padding: 0;
        }
        .wrap .header .nav--menu {
            display: flex;
            align-items: center;
            margin-right: 15px;
            padding-bottom: 0;
            white-space: nowrap;
        }
        .wrap .header .nav--menu > li {
            position: relative;
        }
        .wrap .header .nav--menu > li:nth-child(n + 2) {
            padding-top: 0;
        }
        .wrap .header .nav--menu > li > a {
            padding: 20px 15px;
            color: #485562;
            font-size: 15px;
            transition: color 0.2s;
        }
        .wrap .header .nav--menu > li > a:hover {
            color: #1a2b3b;
        }
        .wrap .header .nav--menu .decentral:before {
            display: inline-block;
            width: 2px;
            height: 14px;
            margin: 0 5px;
            background-color: #e6e8ec;
            vertical-align: middle;
            content: '';
        }
        .wrap .header .nav--menu .submenu {
            position: absolute;
            left: 50%;
            top: 100%;
            display: none;
            min-width: 200px;
            margin-top: -10px;
            padding: 4px;
            border-radius: 12px;
            border: 2px solid #e6e8ec;
            background-color: #fff;
            transform: translateX(-50%);
        }
        .wrap .header .nav--menu .submenu > li {
            margin-top: 1px;
        }
        .wrap .header .nav--menu .submenu a {
            display: block;
            padding: 0 11px;
            border-radius: 8px;
            color: #485562;
            font-size: 14px;
            line-height: 40px;
            white-space: nowrap;
            text-align: center;
            transition: background-color 0.2s;
        }
        .wrap .header .nav--menu .submenu a:hover {
            background-color: #f6f7f9;
            color: #1a2b3b;
        }
        .wrap .header .nav--menu .submenu a[target='_blank']:after {
            margin-top: 14px;
        }
        .wrap .header .nav--menu > li:hover .submenu {
            display: block;
        }
        .wrap .header .nav--dark {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -20px;
            padding-bottom: 0;
        }
        .wrap .header .nav--dark > div {
            display: none;
        }
        .wrap .header .nav--dark .btn-dark {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid #e6e8ec;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M9.512 2A6.006 6.006 0 1 0 18 10.488 8.008 8.008 0 1 1 9.512 2z'/%3E%3C/g%3E%3C/svg%3E")
                50% 50% no-repeat;
            background-size: 20px 20px;
        }
        .wrap .header .nav--dark .btn-dark:hover {
            border-color: #cfd1d6;
        }
        .wrap .header .nav--dark .btn-dark:after {
            content: none;
        }
        .wrap .header .nav--login {
            width: auto;
            padding: 0;
            background-color: transparent;
        }
        .wrap .header .nav--login .contents {
            padding: 0;
            border-top: 0;
        }
        .wrap .header .nav--login .btn-login {
            height: 40px;
            padding: 0 16px;
            border-radius: 10px;
            line-height: 36px;
            white-space: nowrap;
        }
        .wrap .header .nav--user {
            left: auto;
            bottom: auto;
            min-width: 90px;
            padding: 0;
            background-color: transparent;
            transform: translateX(0);
        }
        .wrap .header .nav--user .btn-user {
            float: left;
            display: block;
        }
        .wrap .header .nav--user > .contents {
            position: absolute;
            right: -10px;
            top: 100%;
            display: none;
            width: 300px;
            max-width: none;
            height: auto;
            margin-top: 10px;
            padding: 18px 4px 12px;
            border-radius: 12px;
            border: 2px solid #e6e8ec;
            background-color: #fff;
        }
        .wrap .header .nav--user .btn-user.on + .contents {
            display: block;
        }
        .wrap .header .nav--user .profile {
            position: relative;
            display: block;
            width: 260px;
            height: 70px;
            margin: 0 auto;
            padding: 12px 0 0 80px;
        }
        .wrap .header .nav--user .profile .pic {
            position: absolute;
            left: 0;
            top: 0;
            width: 70px;
            height: 70px;
        }
        .wrap .header .nav--user .profile .name {
            width: 180px;
            padding-left: 0;
        }
        .wrap .header .nav--user .profile .mail {
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            margin-top: 8px;
            font-size: 13px;
            line-height: 16px;
            white-space: nowrap;
        }
        .wrap .header .nav--user .btn-setup {
            display: none;
        }
        .wrap .header .nav--user .btn-collection {
            height: 40px;
            padding: 0 14px 0 42px;
            border-radius: 8px;
            background-color: transparent;
            background-position: 14px 50%;
            font-size: 14px;
            line-height: 40px;
        }
        .wrap .header .nav--user .btn-collection:hover {
            background-color: #f6f7f9;
        }
        .wrap .header .nav--user .wrap-account {
            display: block;
            position: static;
            margin-top: 10px;
            padding-top: 20px;
            border-top: 1px solid #e6e8ec;
            background-color: transparent;
            visibility: visible;
            z-index: 1;
        }
        .wrap .header .nav--user .wrap-account .contents {
            display: block;
            position: static;
            height: auto;
            padding: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: transparent;
            transform: initial;
        }
        .wrap .header .nav--user .wrap-account .account > dt {
            display: block;
            padding: 0 14px;
            font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
            font-size: 12px;
            line-height: 14px;
        }
        .wrap .header .nav--user .wrap-account .account > dd {
            margin-top: 1px;
        }
        .wrap .header .nav--user .wrap-account .account > dd:nth-of-type(1) {
            margin-top: 10px;
        }
        .wrap .header .nav--user .wrap-account .account a {
            border-radius: 8px;
            background-position: 14px 50%;
            font-size: 14px;
            line-height: 40px;
        }
        .wrap .header .nav--user .wrap-account .account a:hover {
            background-color: #f6f7f9;
        }
        .wrap .header .nav--user .wrap-account .logout .btn-logout {
            border-radius: 8px;
            background-position: 14px 50%;
            font-size: 14px;
            line-height: 40px;
        }
        .wrap .header .nav--user .wrap-account .logout .btn-logout:hover {
            background-color: #f6f7f9;
        }
        .wrap .header .nav--user .btn-collection.on ~ .wrap-account {
            display: block;
        }
        .wrap .header .nav--user .btn-wallet {
            position: static;
            float: right;
            width: 40px;
            height: 40px;
        }
        [data-dark='true'] .wrap .header .btn-wallet:hover {
            border-color: #717580;
        }
        [data-dark='true'] .wrap .header .nav--menu > li > a {
            color: #b1b5c3;
        }
        [data-dark='true'] .wrap .header .nav--menu > li > a:hover {
            color: #fff;
        }
        [data-dark='true'] .wrap .header .nav--menu .submenu {
            border-color: #33353b;
            background-color: #141416;
        }
        [data-dark='true'] .wrap .header .nav--menu .submenu a {
            color: #fff;
        }
        [data-dark='true'] .wrap .header .nav--menu .submenu a:hover {
            background-color: #212226;
            color: #fff;
        }
        [data-dark='true'] .wrap .header .nav--menu .decentral:before {
            background-color: #33353b;
        }
        [data-dark='true'] .wrap .header .nav--dark .btn-dark {
            border-color: #33353b;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M10 14.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728ZM9.273 2h1.454v2.182H9.273V2Zm0 13.818h1.454V18H9.273v-2.182ZM3.829 4.858l1.028-1.029L6.4 5.372 5.372 6.4 3.829 4.858Zm9.771 9.77 1.028-1.028 1.543 1.543-1.028 1.028-1.543-1.543Zm1.543-10.8 1.028 1.03L14.628 6.4 13.6 5.372l1.543-1.543ZM5.372 13.6 6.4 14.628l-1.543 1.543-1.028-1.028L5.372 13.6ZM18 9.273v1.454h-2.182V9.273H18Zm-13.818 0v1.454H2V9.273h2.182Z'/%3E%3C/g%3E%3C/svg%3E");
        }
        [data-dark='true'] .wrap .header .nav--user > .contents {
            border: 2px solid #33353b;
            background-color: #141416;
        }
        [data-dark='true'] .wrap .header .nav--user .btn-collection {
            background-color: transparent;
        }
        [data-dark='true'] .wrap .header .nav--user .btn-collection:hover {
            background-color: #212226;
        }
        [data-dark='true'] .wrap .header .nav--user .wrap-account {
            border-color: #33353b;
        }
        [data-dark='true'] .wrap .header .nav--user .wrap-account .contents {
            background-color: transparent;
        }
        [data-dark='true']
            .wrap
            .header
            .nav--user
            .wrap-account
            .account
            a:hover {
            background-color: #212226;
        }
        [data-dark='true']
            .wrap
            .header
            .nav--user
            .wrap-account
            .logout
            .btn-logout:hover {
            background-color: #212226;
        }
        .wrap .footer.view-pc {
            height: auto;
            margin-top: 0;
            opacity: 1;
        }
        .wrap .footer .contents {
            max-width: 100%;
            padding-right: 30px;
            padding-left: 30px;
        }
        .wrap .footer--top {
            flex-wrap: nowrap;
            padding-right: 10px;
            padding-left: 10px;
        }
        .wrap .footer--top .wrap-info {
            max-width: none;
        }
        .wrap .footer--bot {
            padding: 0 10px;
        }
        .wrap .footer--bot .copyright {
            margin-top: 0;
        }
        .wrap .footer--bot .copyright .logo {
            width: 106px;
            height: 28px;
            margin-right: 30px;
        }
        .wrap .footer--bot .link > a {
            transition: color 0.2s;
        }
        .wrap .footer--bot .link > a:hover {
            color: #1a2b3b;
        }
        .wrap .footer--bot .link > a:nth-child(n + 2) {
            margin-left: 16px;
        }
        [data-dark='true'] .wrap .footer--bot .link > a:hover {
            color: #fff;
        }
        .wrap.account .footer--bot {
            padding: 0;
        }
        .wrap.account .footer--bot .copyright .logo {
            margin-right: 30px;
        }
        [data-dark='true'] .wrap .footer-left .list-info .info + .info:before {
            background-color: #33353b;
        }
        .wrap [class^='layer-'] .layer {
            max-width: 480px;
        }
        .wrap [class^='layer-'] .tit-layer {
            font-size: 32px;
            line-height: 36px;
        }
        .wrap [class^='layer-'] .wrap-btn button {
            min-width: 130px;
            height: 50px;
            margin: 0 10px;
            padding: 0 20px;
        }
        .wrap [class^='layer-'] .btn-close {
            right: 20px;
            top: 20px;
        }
        .wrap .layer-notice {
            overflow-y: auto;
        }
        .wrap .layer-notice .layer {
            max-height: none;
            margin: auto;
        }
        .wrap .layer-text .layer {
            padding: 60px 40px 40px;
        }
        .wrap .layer-text .text {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .layer-text .wrap-btn {
            margin-top: 30px;
        }
        .wrap .layer-noti .layer {
            padding: 60px 40px 50px;
        }
        .wrap .layer-noti .desc {
            font-size: 24px;
            line-height: 30px;
        }
        .wrap .layer-noti .desc:before {
            width: 30px;
            height: 30px;
            margin-right: 6px;
        }
        .wrap .layer-info .layer {
            max-width: 620px;
            padding: 60px;
        }
        .wrap .layer-info .desc {
            line-height: 24px;
        }
        .wrap .layer-info .wrap-btn {
            margin-top: 20px;
            margin-bottom: -10px;
        }
        .wrap .layer-info.type-2 .desc {
            font-size: 26px;
            line-height: 30px;
        }
        .wrap .layer-notice .layer {
            max-width: 620px;
            padding: 60px 60px 40px;
        }
        .wrap .layer-notice .tit-layer > span {
            margin-bottom: 6px;
            font-size: 16px;
            line-height: 20px;
        }
        .wrap .layer-notice .list-notice {
            margin-top: 30px;
            padding: 8px 28px;
        }
        .wrap .layer-notice .list-notice > li {
            padding: 20px 0 20px 16px;
            line-height: 22px;
        }
        .wrap .layer-notice .list-notice > li:before {
            top: 28px;
        }
        .wrap .layer-notice .desc {
            margin-top: 30px;
            padding: 28px;
        }
        .wrap .layer-notice .wrap-btn {
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 359px) {
        .wrap .header .nav > .contents {
            width: 310px;
        }
        .wrap .header .nav--user {
            width: 310px;
        }
        .wrap .header .nav--user .btn-wallet {
            right: 0;
        }
    }
    @keyframes heart {
        0% {
            transform: scale(0.1);
        }
        80% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }
`;
