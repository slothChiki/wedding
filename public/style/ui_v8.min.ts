import css from 'styled-jsx/css';

export default css.global`
    @charset "utf-8";
    .fontR {
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .fontB {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .fontEB {
        font-family: 'Metropolis Extra Bold', SUIT-ExtraBold, sans-serif;
    }
    .transBD {
        transition: border 0.5s;
    }
    .transBGC {
        transition: background-color 0.5s;
    }
    .box {
        box-sizing: border-box;
    }
    .wrap .usd {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-style: normal;
    }
    [data-dark='true'] .wrap .usd {
        color: #fff;
    }
    .wrap .wrap-tbl .tbl .price .usd {
        display: inline-block;
        color: inherit;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .wrap-tbl .tbl .price .ust {
        display: block;
        font-size: 12px;
        line-height: 14px;
    }
    .wrap .list-status {
        overflow: hidden;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
    }
    .wrap .list-status > li {
        padding: 0 18px;
        border-top: 2px solid #e6e8ec;
        background-color: #fff;
    }
    .wrap .list-status > li:nth-child(1) {
        border-top: 0;
    }
    .wrap .list-status > li:nth-child(1) dt:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_ctx.png);
    }
    .wrap .list-status > li:nth-child(2) dt:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_ust.png);
    }
    .wrap .list-status dl {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        color: #142b3d;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .list-status dl > dt {
        position: relative;
        padding-left: 30px;
    }
    .wrap .list-status dl > dt:before {
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 24px;
        height: 24px;
        margin-top: -12px;
        background-position: 0 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .list-status dl > dt > span {
        display: none;
    }
    .wrap .list-status dl > dd {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    [data-dark='true'] .wrap .list-status {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .list-status > li {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true'] .wrap .list-status dl {
        color: #fff;
    }
    [data-dark='true'] .wrap .list-status dl > dd {
        color: #fff;
    }
    .wrap .list-total {
        overflow: hidden;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .list-total > li {
        padding: 0 18px;
        border-top: 0;
    }
    .wrap .list-total > li:before {
        display: block;
        height: 1px;
        margin: 0 6px;
        background-color: #e6e8ec;
        content: '';
    }
    .wrap .list-total > li:first-child {
        padding-top: 4px;
    }
    .wrap .list-total > li:first-child:before {
        content: none;
    }
    .wrap .list-total > li:last-child {
        padding-bottom: 2px;
    }
    .wrap .list-total > li.divide {
        background-color: #fff;
    }
    .wrap .list-total > li.divide:last-child {
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
    }
    .wrap .list-total > li.full > dl {
        flex-wrap: wrap;
        padding: 16px 0;
    }
    .wrap .list-total > li.full > dl > dt {
        width: 100%;
        padding: 0 6px;
    }
    .wrap .list-total > li.full > dl > dd {
        width: 100%;
        margin-top: 6px;
    }
    .wrap .list-total > li.full .has-tooltip {
        display: flex;
    }
    .wrap .list-total > li.full > dl .tooltip {
        position: relative;
        left: auto;
        right: auto;
        top: auto;
        flex: 1;
        margin-left: 4px;
    }
    .wrap .list-total dl {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 16px 6px;
    }
    .wrap .list-total dl > dd {
        text-align: right;
    }
    .wrap .list-total dl > dd .usd {
        display: block;
    }
    .wrap .list-total dl > dd .ust {
        display: block;
    }
    [data-dark='true'] .wrap .list-total {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .list-total > li:before {
        background-color: #28282b;
    }
    [data-dark='true'] .wrap .list-total > li.divide {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .list-total dl > dd .usd {
        color: #fff;
    }
    .wrap .header .nav--menu .soon {
        display: inline-block;
        padding: 0 8px;
        border-radius: 8px;
        background-color: #dcf4ff;
        color: #00b1ff;
        font-size: 12px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 26px;
    }
    .wrap.account .header .logo {
        width: 84px;
        height: 40px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/logo_nft_account.png)
            0 50% no-repeat;
        background-size: 84px auto;
    }
    .wrap.account .header .logo > a {
        display: block;
        height: 100%;
    }
    .wrap.account .header [class^='account'] {
        position: relative;
        flex: 1;
        text-align: right;
    }
    .wrap.account .header [class^='account'] .contents {
        display: none;
        position: absolute;
        right: 50px;
        top: 100%;
        width: 200px;
        height: auto;
        margin-top: 4px;
        padding: 4px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(149, 150, 158, 0.5);
    }
    .wrap.account .header [class^='account'] .on + .contents {
        display: block;
    }
    .wrap.account .header .account--login .btn-login {
        display: inline-block;
        padding: 0 20px;
        border-radius: 10px;
        font-size: 14px;
        line-height: 36px;
    }
    .wrap.account .header .account--user > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
    .wrap.account .header .account--user .btn-user.on + .contents {
        display: block;
    }
    .wrap.account .header .account--user .btn-wallet {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-left: 6px;
    }
    .wrap.account .header .btn-connect {
        display: block;
        width: 100%;
        height: 40px;
        padding-left: 44px;
        border-radius: 8px;
        font-size: 14px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m5.22 3.172.957 1.366a6.667 6.667 0 1 0 7.646 0l.956-1.366a8.333 8.333 0 1 1-9.558 0zM9.168 10V1.667h1.666V10H9.167z'/%3E%3C/g%3E%3C/svg%3E")
            14px 50% no-repeat;
        background-size: 20px 20px;
        text-align: left;
        transition: background-color 0.2s;
    }
    .wrap.account .header .btn-connect:hover {
        background-color: #f6f7f9;
    }
    .wrap.account .header .btn-dark {
        display: block;
        width: 40px;
        height: 40px;
        margin-left: 10px;
        border-radius: 50%;
        border: 2px solid #e6e8ec;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M9.512 2A6.006 6.006 0 1 0 18 10.488 8.008 8.008 0 1 1 9.512 2z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap.account .header .btn-dark:hover {
        border-color: #cfd1d6;
    }
    [data-dark='true'] .wrap .header .nav--menu .soon {
        background-color: #003d57;
    }
    [data-dark='true'] .wrap .header [class^='account'] .contents {
        border-color: #33353b;
        background-color: #141416;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
    }
    [data-dark='true'] .wrap .header [class^='account'] .btn-user {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .header [class^='account'] .btn-user.on,
    [data-dark='true'] .wrap .header [class^='account'] .btn-user:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .header .btn-connect {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m5.22 3.172.957 1.366a6.667 6.667 0 1 0 7.646 0l.956-1.366a8.333 8.333 0 1 1-9.558 0zM9.168 10V1.667h1.666V10H9.167z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    [data-dark='true'] .wrap .header .btn-connect:hover {
        background-color: #212226;
    }
    [data-dark='true'] .wrap .header .btn-dark {
        border-color: #33353b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M10 14.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728ZM9.273 2h1.454v2.182H9.273V2Zm0 13.818h1.454V18H9.273v-2.182ZM3.829 4.858l1.028-1.029L6.4 5.372 5.372 6.4 3.829 4.858Zm9.771 9.77 1.028-1.028 1.543 1.543-1.028 1.028-1.543-1.543Zm1.543-10.8 1.028 1.03L14.628 6.4 13.6 5.372l1.543-1.543ZM5.372 13.6 6.4 14.628l-1.543 1.543-1.028-1.028L5.372 13.6ZM18 9.273v1.454h-2.182V9.273H18Zm-13.818 0v1.454H2V9.273h2.182Z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .header .btn-dark:hover {
        border-color: #717580;
    }
    .wrap.account .footer .contents {
        padding-top: 35px;
        padding-bottom: 35px;
    }
    .wrap.account .footer--bot {
        display: block;
    }
    .wrap.account .footer--bot .copyright .logo {
        width: 78px;
        height: 26px;
        margin-bottom: 2px;
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/logo_nft_account.png);
    }
    .wrap .desc-main {
        line-height: 20px;
        text-align: center;
    }
    .wrap .desc-main .tit {
        margin-bottom: 20px;
        font-size: 32px;
        line-height: 38px;
    }
    .wrap .desc-main .tit > span {
        color: #00b1ff;
    }
    [data-dark='true'] .wrap .desc-main .tit {
        color: #fff;
    }
    .wrap .bnn-main {
        margin: 0 auto;
    }
    .wrap .bnn-main .slide-main {
        width: 100%;
        max-width: 100%;
        height: 360px;
    }
    .wrap .bnn-main .slide-main .swiper-slide > a {
        position: relative;
        display: flex;
        align-items: flex-end;
        height: 100%;
        padding-bottom: 54px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        z-index: 1;
    }
    .wrap .bnn-main .slide-main .swiper-slide > a:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        content: '';
    }
    .wrap .bnn-main .slide-main .swiper-pagination {
        bottom: 20px;
        height: 14px;
    }
    .wrap .bnn-main .slide-main .swiper-pagination .swiper-pagination-bullet {
        position: relative;
        width: 14px;
        height: 14px;
        margin: 0 6px;
        background: 0 0;
        opacity: 0.6;
    }
    .wrap
        .bnn-main
        .slide-main
        .swiper-pagination
        .swiper-pagination-bullet:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #fff;
        transform: scale(0.428);
        content: '';
    }
    .wrap
        .bnn-main
        .slide-main
        .swiper-pagination
        .swiper-pagination-bullet:after {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #fff;
        transform: scale(0.428);
        transition: transform 0.2s;
        box-sizing: border-box;
        content: '';
    }
    .wrap
        .bnn-main
        .slide-main
        .swiper-pagination
        .swiper-pagination-bullet:hover:after {
        transform: scale(1);
    }
    .wrap
        .bnn-main
        .slide-main
        .swiper-pagination
        .swiper-pagination-bullet-active {
        opacity: 1;
    }
    .wrap
        .bnn-main
        .slide-main
        .swiper-pagination
        .swiper-pagination-bullet-active:after {
        transform: scale(1);
    }
    .wrap .bnn-main .slide-main .arrows {
        display: none;
    }
    .wrap .bnn-main .box-bnn {
        position: relative;
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        padding: 0 25px;
    }
    .wrap .bnn-main .list-countdown dt {
        margin-bottom: 6px;
    }
    .wrap .bnn-main .list-countdown .countdown .time {
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
    }
    .wrap .bnn-main .list-countdown .countdown .colon {
        width: 13px;
        color: #fff;
    }
    .wrap .bnn-main .status {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        opacity: 0.8;
    }
    .wrap .bnn-main .product {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        margin-top: 10px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 24px;
        line-height: 30px;
        font-style: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .wrap .bnn-main .desc {
        display: none;
    }
    .wrap .bnn-main [class^='btn-'] {
        display: none;
    }
    .wrap.main section .contents {
        max-width: 450px;
    }
    .wrap.main section .tit {
        font-size: 20px;
        line-height: 1.2;
    }
    .wrap.main section .tit > span {
        display: inline-block;
        background-image: linear-gradient(to right, #00d6f3, #6d3eff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .wrap .slide-nft {
        width: 100%;
        margin: 0;
        padding: 20px 0 21px;
    }
    .wrap .slide-nft .swiper-scrollbar {
        display: block;
        left: 0;
        bottom: 0;
        height: 6px;
        border-radius: 3px;
        background-color: #e7eaee;
    }
    .wrap .slide-nft .swiper-scrollbar .swiper-scrollbar-drag {
        border-radius: 3px;
        background-image: linear-gradient(to right, #00e1ff, #6d3dff);
    }
    [data-dark='true'] .wrap .slide-nft .swiper-scrollbar {
        background-color: #000;
    }
    .wrap .list-nft {
        display: grid;
        grid-row-gap: 25px;
        row-gap: 25px;
        padding-top: 20px;
    }
    .wrap .item-nft {
        position: relative;
        max-width: 400px;
        font-size: 14px;
    }
    .wrap .item-nft.multiple:before {
        display: block;
        position: absolute;
        left: 10px;
        right: 10px;
        top: -20px;
        height: 60px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/frame_multiple_light_2.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .item-nft > a {
        display: block;
        height: 100%;
    }
    .wrap .item-nft .thumb {
        overflow: hidden;
        padding-bottom: 0;
        background-color: transparent;
    }
    .wrap .item-nft .thumb > img {
        position: static;
        border-radius: 30px;
    }
    .wrap .item-nft .info {
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 16px;
        padding: 18px 20px 16px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.9);
        line-height: 18px;
    }
    .wrap .item-nft .info .category {
        overflow: hidden;
        display: block;
        position: absolute;
        right: 14px;
        top: -36px;
        width: 72px;
        height: 72px;
        border-radius: 50%;
    }
    .wrap .item-nft .info .product {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        margin-bottom: 8px;
        padding-right: 24.4%;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        white-space: nowrap;
    }
    .wrap .item-nft .info .countdown {
        display: flex;
        align-items: center;
        position: absolute;
        left: 14px;
        top: -24px;
        height: 34px;
        padding-right: 8px;
        border: 2px solid transparent;
        border-radius: 12px;
        background: linear-gradient(#fff, #fff) padding-box,
            linear-gradient(to right, #09d4ff, #6549ff) border-box;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 12px;
    }
    .wrap .item-nft .info .countdown:before {
        display: block;
        width: 14px;
        height: 14px;
        margin: 1px 4px 0 6px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_countdown.png)
            0 0 no-repeat;
        background-size: 14px 14px;
        content: '';
    }
    .wrap .item-nft .info .countdown .colon {
        padding: 0 3px;
    }
    .wrap .item-nft .info .bot {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 36px;
    }
    .wrap .item-nft .info .bot .list-price > dt {
        display: none;
    }
    .wrap .item-nft .info .bot .list-price .usd {
        display: block;
        color: #00b1ff;
    }
    .wrap .item-nft .info .bot .list-price .ust {
        display: block;
        font-size: 12px;
    }
    .wrap .item-nft .info .bot .status {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 12px;
    }
    [data-dark='true'] .wrap .item-nft.multiple:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/frame_multiple_dark_2.png);
    }
    [data-dark='true'] .wrap .item-nft .info {
        background-color: rgba(20, 20, 22, 0.9);
    }
    [data-dark='true'] .wrap .item-nft .info .product {
        color: #fff;
    }
    [data-dark='true'] .wrap .item-nft .info .countdown {
        background-image: linear-gradient(#141416, #141416),
            linear-gradient(to right, #09d4ff, #6549ff);
        color: #fff;
    }
    .wrap .sect-monthly .contents {
        padding-top: 25px;
        padding-bottom: 30px;
    }
    .wrap .sect-monthly .tit {
        margin-bottom: 5px;
        padding: 6px 0 0 36px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_like.png)
            0 100% no-repeat;
        background-size: 30px 30px;
    }
    .wrap .sect-unique .contents {
        padding-top: 0;
        padding-bottom: 0;
    }
    .wrap .sect-unique .unique {
        padding: 35px 25px;
        border-radius: 30px;
        background-image: linear-gradient(to right, #ecfdff, #ece6ff);
        text-align: center;
    }
    .wrap .sect-unique .desc {
        margin-top: 10px;
        color: #1a2b3b;
        font-size: 12px;
        line-height: 16px;
    }
    [data-dark='true'] .wrap .sect-unique .unique {
        background-image: linear-gradient(to right, #09272c, #160845);
    }
    [data-dark='true'] .wrap .sect-unique .desc {
        color: #fff;
    }
    .wrap .sect-explore .contents {
        padding-top: 52px;
        padding-bottom: 80px;
    }
    .wrap .sect-explore .header-sect .tit {
        padding: 6px 0 0 36px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_explore.png)
            0 100% no-repeat;
        background-size: 30px 30px;
    }
    .wrap .sect-explore .header-sect .slide-category {
        width: 100%;
        margin: 20px 0 5px;
    }
    .wrap .sect-explore .header-sect .slide-category li {
        width: auto;
    }
    .wrap .sect-explore .header-sect .slide-category button {
        padding: 0 18px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 38px;
        transition: border-color 0.2s;
    }
    .wrap .sect-explore .header-sect .slide-category button:hover {
        border-color: #cfd1d6;
    }
    .wrap .sect-explore .header-sect .slide-category li.on button {
        border: 2px solid #00b1ff;
        background-color: #00b1ff;
        color: #fff;
    }
    .wrap .sect-explore .btn-discover {
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 40px auto 0;
        border: 2px solid transparent;
        border-radius: 14px;
        background-image: linear-gradient(#fff, #fff),
            linear-gradient(to right, #09d4ff, #6549ff);
        border-image-slice: 1;
        background-origin: border-box;
        background-clip: content-box, border-box;
        color: #00b1ff;
        font-size: 16px;
        line-height: 48px;
    }
    [data-dark='true'] .wrap .sect-explore .slide-category button {
        border-color: rgba(255, 255, 255, 0.2);
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-explore .slide-category button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-explore .slide-category li.on button {
        color: #141416;
    }
    [data-dark='true'] .wrap .sect-explore .btn-discover {
        background-image: linear-gradient(#141416, #141416),
            linear-gradient(to right, #09d4ff, #6549ff);
    }
    .wrap .layer-video {
        padding: 0 15px;
        background-color: rgba(0, 0, 0, 0.9);
    }
    .wrap .layer-video .layer {
        max-width: 718px;
        background-color: transparent;
    }
    .wrap .layer-video .video {
        padding-bottom: 56.25%;
    }
    .wrap .layer-video .video > iframe {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
    }
    .wrap .layer-video .btn-close {
        right: 0;
        top: -60px;
        width: 44px;
        height: 44px;
        border: 2px solid rgba(255, 255, 255, 0.5);
        background: 0 0;
    }
    .wrap .layer-video .btn-close:hover {
        border-color: #fff;
        background-color: transparent;
    }
    .wrap .layer-video .btn-close:after {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 24px 24px;
        content: '';
    }
    [data-dark='true'] .wrap .layer-video .layer {
        border: 0;
        background-color: transparent;
    }
    [data-dark='true'] .wrap .layer-video .btn-close {
        background: 0 0;
    }
    .wrap .sect-search .contents {
        text-align: center;
    }
    .wrap .sect-search .tit {
        color: #67737f;
        font-size: 20px;
        line-height: 24px;
    }
    .wrap .sect-search .tit .keyword {
        color: #1a2b3b;
        font-style: normal;
    }
    .wrap .sect-search .wrap-tab {
        margin-top: 40px;
    }
    .wrap .sect-search .wrap-tab .swiper-scrollbar {
        display: none;
    }
    .wrap .sect-search .wrap-tab .swiper-scrollbar-lock + .swiper-wrapper {
        justify-content: center;
    }
    .wrap .sect-search .result-none {
        margin-top: 50px;
    }
    .wrap .sect-search .result-none .subtit {
        font-size: 24px;
        line-height: 30px;
    }
    .wrap .sect-search .result-none .subtit:after {
        display: block;
        width: 120px;
        height: 120px;
        margin: 10px auto 0;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_search_none.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-search .list-product {
        text-align: left;
    }
    [data-dark='true'] .wrap .sect-search .tit {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-search .tit .keyword {
        color: #fff;
    }
    .wrap .sect-login {
        margin-top: -40px;
    }
    .wrap .sect-login .contents {
        max-width: 550px;
        margin: 0 auto;
        padding-top: 30px;
        text-align: center;
    }
    .wrap .sect-login[data-type='login'] .contents {
        max-width: 450px;
    }
    .wrap .sect-login .progress:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_heart.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-login .progress .wrap-bar {
        width: 80px;
        height: 4px;
        margin: 0 auto;
        border-radius: 2px;
        background-color: #e6e8ec;
    }
    .wrap .sect-login .progress .wrap-bar .bar {
        height: 100%;
        border-radius: 2px;
        background-color: #00b1ff;
    }
    .wrap .sect-login[data-type='connect'] .contents {
        padding-top: 70px;
        padding-bottom: 120px;
    }
    .wrap .sect-login[data-type='connect'] .desc {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 22px;
        line-height: 26px;
    }
    .wrap .sect-login[data-type='connect'] .desc:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_warning.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-login[data-type='fin'] .progress:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fin.png);
    }
    .wrap .sect-login[data-type='fin'] .desc {
        margin-top: 30px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 20px;
        line-height: 26px;
    }
    .wrap .sect-login[data-type='fin'] .wrap-btn {
        width: 310px;
        margin: 30px auto 0;
    }
    .wrap .sect-login .tit {
        margin-top: 20px;
    }
    .wrap .sect-login .desc {
        margin-top: 10px;
        line-height: 20px;
    }
    .wrap .sect-login .list-login {
        margin: 20px auto 0;
    }
    .wrap .sect-login .list-login > li {
        margin-top: 10px;
    }
    .wrap .sect-login .list-login > li:first-child {
        margin-top: 0;
    }
    .wrap .sect-login .list-login button {
        display: block;
        width: 100%;
        height: 52px;
        padding: 0 18px 0 52px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-position: 14px 50%;
        background-repeat: no-repeat;
        background-size: 24px 24px;
        color: #1a2b3b;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-login .list-login .btn-google {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_google.png);
    }
    .wrap .sect-login .list-login .btn-fb {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fb.png);
    }
    .wrap .sect-login .list-login .btn-coinone {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_coinone.png);
    }
    .wrap .sect-login .access-area {
        width: 300px;
        margin: 30px auto 0;
    }
    .wrap .sect-login .access-area > dt {
        padding: 0 8px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
    }
    .wrap .sect-login .access-area > dd {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 52px;
        margin-top: 4px;
        padding: 0 18px 0 52px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background: #f6f7f9
            url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_area_global.png)
            18px 50% no-repeat;
        background-size: 24px 24px;
        font-size: 16px;
    }
    .wrap .sect-login .access-area > dd[data-area='korea'] {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_area_korea.png);
    }
    .wrap .sect-login .list-term {
        overflow: hidden;
        margin: 20px auto 0;
        padding: 18px 0 13px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        text-align: left;
    }
    .wrap .sect-login .list-term > li {
        position: relative;
        margin-top: 20px;
        padding: 0 18px;
        line-height: 20px;
    }
    .wrap .sect-login .list-term > li:first-child {
        margin-top: 0;
        padding: 0 18px 20px;
        border-bottom: 2px solid #e6e8ec;
        color: #1a2b3b;
        font-size: 16px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-login .list-term > li:first-child label {
        display: block;
        padding: 2px 0 2px 34px;
    }
    .wrap .sect-login .list-term > li:nth-child(n + 2) label {
        display: block;
        padding-left: 30px;
    }
    .wrap .sect-login .list-term > li:nth-child(n + 2) label:before {
        width: 20px;
        height: 20px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23bdc1c6' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap
        .sect-login
        .list-term
        > li:nth-child(n + 2)
        input:checked
        + label:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2300b1ff' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-login .list-term .has-toggle {
        margin-top: 15px;
        min-height: 30px;
        padding-top: 5px;
    }
    .wrap .sect-login .list-term .has-toggle + .has-toggle {
        margin-top: 10px;
    }
    .wrap .sect-login .list-term .has-toggle > label {
        min-height: 25px;
        padding-right: 34px;
    }
    .wrap .sect-login .list-term a {
        color: #00b1ff;
    }
    .wrap .sect-login .list-term .btn-toggle {
        position: absolute;
        right: 12px;
        top: 0;
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        padding: 3px;
        border-radius: 10px;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-login .list-term .btn-toggle:hover {
        border-color: #cfd1d6;
    }
    .wrap .sect-login .list-term .btn-toggle:after {
        display: block;
        width: 20px;
        height: 20px;
        background-color: #1a2b3b;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10.977 10 6.852 5.875 8.03 4.697 13.333 10 8.03 15.303l-1.178-1.178z'/%3E%3C/g%3E%3C/svg%3E")
            100% 100%;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M10.977 10 6.852 5.875 8.03 4.697 13.333 10 8.03 15.303l-1.178-1.178z'/%3E%3C/g%3E%3C/svg%3E")
            100% 100%;
        transform: rotate(90deg);
        content: '';
    }
    .wrap .sect-login .list-term .btn-toggle.on:after {
        transform: rotate(-90deg);
    }
    .wrap .sect-login .list-term .area-toggle {
        display: none;
        margin: 10px -18px -2px;
        padding: 14px 18px 18px;
        background-color: #f6f7f9;
    }
    .wrap .sect-login .list-term .area-toggle .tbl-agree {
        width: calc(100% - 30px);
        margin: 10px 0 0 30px;
        border-top: 2px solid #1a2b3b;
        font-size: 12px;
        line-height: 14px;
        text-align: left;
    }
    .wrap .sect-login .list-term .area-toggle .tbl-agree th {
        padding: 10px;
        border-bottom: 1px solid #e6e8ec;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        vertical-align: top;
    }
    .wrap .sect-login .list-term .area-toggle .tbl-agree td {
        padding: 10px;
        border-bottom: 1px solid #e6e8ec;
        vertical-align: top;
    }
    .wrap .sect-login .list-term .area-toggle .tbl-agree td strong {
        display: inline-block;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 16px;
    }
    .wrap .sect-login .list-term .area-toggle .list-agree {
        margin-top: 10px;
        padding-left: 30px;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-login .list-term .area-toggle .list-agree:first-child {
        margin-top: 0;
    }
    .wrap .sect-login .list-term .area-toggle .list-agree > li {
        position: relative;
        padding-left: 10px;
    }
    .wrap .sect-login .list-term .area-toggle .list-agree > li:before {
        position: absolute;
        left: 0;
        top: 6px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #647380;
        content: '';
    }
    .wrap
        .sect-login
        .list-term
        .area-toggle
        .list-agree
        > li:nth-child(n + 2) {
        margin-top: 6px;
    }
    .wrap .sect-login .list-term .area-toggle .desc-agree {
        margin-top: 10px;
        padding-left: 30px;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-login .list-term .area-toggle .desc-agree:first-child {
        margin-top: 0;
    }
    .wrap .sect-login .list-term .btn-toggle.on + .area-toggle {
        display: block;
    }
    .wrap .sect-login .list-term > li:last-child .area-toggle {
        margin-bottom: -13px;
    }
    .wrap .sect-login .box-name {
        margin-top: 20px;
    }
    .wrap .sect-login .box-name input {
        padding: 0 66px 0 18px;
        color: #142b3d;
        font-size: 16px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-login .box-name .count {
        position: absolute;
        right: 12px;
        top: 14px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
        line-height: 24px;
        text-align: right;
    }
    .wrap .sect-login .box-name .count > span {
        color: #142b3d;
    }
    .wrap .sect-login .box-name .msg {
        padding-right: 10px;
        padding-left: 34px;
    }
    .wrap .sect-login .wrap-btn {
        margin-top: 20px;
    }
    .wrap .sect-login[data-type='fin'] .progress:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fin.png);
    }
    .wrap .sect-login[data-type='fin'] .desc {
        margin-top: 30px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 22px;
        line-height: 28px;
    }
    .wrap .sect-login[data-type='fin'] .wrap-btn {
        width: 310px;
        margin: 30px auto 0;
    }
    .wrap .sect-login[data-type='identity'] .wrap-btn {
        margin-top: 30px;
    }
    .wrap .sect-login[data-type='error'] .progress:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_warning.png);
    }
    .wrap .sect-login[data-type='error'] .tit {
        margin-top: 30px;
        font-size: 22px;
        line-height: 1.27;
    }
    .wrap .sect-login[data-type='error'] .wrap-btn {
        margin-top: 30px;
    }
    .wrap .sect-login[data-type='auth'] .id-card {
        margin-top: 20px;
        padding: 28px 0 22px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
        color: #67737f;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 20px;
        text-align: center;
    }
    .wrap .sect-login[data-type='auth'] .id-card > img {
        width: 142px;
        margin-bottom: 20px;
    }
    .wrap .sect-login .btn-go {
        margin-top: 30px;
    }
    .wrap .sect-login .btns-go {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .wrap .sect-login .btns-go .btn-privacy {
        display: block;
        color: #00b1ff;
        line-height: 18px;
        transition: none;
    }
    .wrap .sect-login .btns-go .btn-privacy:after {
        display: inline-block;
        width: 2px;
        height: 12px;
        margin: 2px 14px 0;
        background-color: #e6e8ec;
        vertical-align: top;
        content: '';
    }
    .wrap .sect-login .btns-go .btn-go {
        margin-top: 0;
    }
    [data-dark='true'] .wrap .sect-login .progress .wrap-bar {
        background-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-login .list-login button {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .list-login button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-login .access-area > dt {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .access-area > dd {
        border-color: #33353b;
        background-color: #1c1d21;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .list-term {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-login .list-term > li:first-child {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-login
        .list-term
        > li:nth-child(n + 2)
        label:before {
        background-color: transparent;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2333353b' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-login .list-term .btn-toggle {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-login .list-term .btn-toggle:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-login .list-term .btn-toggle:after {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .list-term .area-toggle {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-login .list-term .area-toggle .tbl-agree {
        border-color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .list-term .area-toggle .tbl-agree th {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login .list-term .area-toggle .tbl-agree td {
        border-color: #33353b;
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-login
        .list-term
        .area-toggle
        .tbl-agree
        td
        strong {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-login
        .list-term
        .area-toggle
        .list-agree
        > li:before {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-login .box-name .count {
        color: #474c56;
    }
    [data-dark='true'] .wrap .sect-login .box-name .count > span {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login[data-type='connect'] .desc {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login[data-type='fin'] .desc {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-login[data-type='auth'] .id-card {
        border-color: #33353b;
        background-color: #1c1d21;
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-login .btns-go .btn-privacy:after {
        background-color: #33353b;
    }
    .wrap .sect-agree {
        margin-top: -60px;
    }
    .wrap .sect-agree .contents {
        max-width: 550px;
        padding-bottom: 177px;
        line-height: 1.43;
    }
    .wrap .sect-agree .tit {
        font-size: 22px;
        line-height: 28px;
    }
    .wrap .sect-agree .tit:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto 10px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_heart.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-agree .agree-cont {
        margin-top: 10px;
        padding-bottom: 40px;
    }
    .wrap .sect-agree .agree-cont p + p {
        margin-top: 10px;
    }
    .wrap .sect-agree .agree-cont .list-agree {
        margin: 20px 0;
    }
    .wrap .sect-agree .agree-cont .list-agree > li:nth-child(n + 2) {
        margin-top: 20px;
    }
    .wrap .sect-agree .agree-cont .list-agree > li > strong {
        display: block;
        margin-bottom: 10px;
    }
    .wrap .sect-agree .agree-cont .list-agree ul > li:nth-child(n + 2) {
        margin-top: 10px;
    }
    .wrap .sect-agree .fix-bot {
        position: fixed;
        left: 50%;
        max-width: 550px;
        transform: translateX(-50%);
    }
    .wrap .sect-agree .fix-bot .agree {
        flex-wrap: wrap;
        display: flex;
        position: relative;
        margin-top: -20px;
    }
    .wrap .sect-agree .fix-bot .agree label {
        display: block;
        min-height: 24px;
        margin-top: 20px;
        padding: 2px 0 0 34px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 20px;
    }
    .wrap .sect-agree .fix-bot .agree label:nth-of-type(1) {
        margin-right: 20px;
    }
    .wrap .sect-agree .fix-bot .wrap-btn {
        margin-top: 20px;
    }
    [data-dark='true'] .wrap .sect-agree .fix-bot .agree label {
        color: #fff;
    }
    .wrap .store-category {
        position: relative;
        height: 214px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrap .store-category:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.5));
        opacity: 0.7;
        content: '';
    }
    .wrap .store-category .contents {
        padding-top: 20px;
        padding-bottom: 0;
    }
    .wrap .store-category .slide-category {
        width: 100%;
    }
    .wrap .store-category .slide-category li {
        width: auto;
    }
    .wrap .store-category .slide-category button {
        padding: 0 18px;
        border-radius: 12px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: #fff;
        font-size: 14px;
        line-height: 38px;
        transition: border-color 0.2s;
    }
    .wrap .store-category .slide-category button:hover {
        border-color: rgba(255, 255, 255, 0.6);
    }
    .wrap .store-category .slide-category li.on button {
        border: 2px solid #00b1ff;
        background-color: #00b1ff;
    }
    .wrap .store-category [class^='swiper-button-'] {
        display: none;
    }
    .wrap .store-category .tit-category {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 102px;
        margin-top: 20px;
        color: #fff;
        font-size: 28px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 1.2;
    }
    .wrap .coupon-regist {
        position: relative;
        text-align: right;
        z-index: 1;
    }
    .wrap .coupon-regist .contents {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .wrap .coupon-regist .btn-regist {
        display: inline-block;
        padding: 0 16px;
        border-radius: 10px;
        border: 2px solid #1a2b3b;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 38px;
    }
    [data-dark='true'] .wrap .coupon-regist .btn-regist {
        border-color: #d0d0d0;
        color: #fff;
    }
    .wrap .bnn-store {
        padding: 0 25px 30px;
    }
    .wrap .bnn-store .slide-bnn .item-bnn {
        border-radius: 12px;
    }
    .wrap .sect-popular {
        background-color: #f6f7f9;
    }
    .wrap .sect-popular .contents {
        padding-bottom: 50px;
    }
    .wrap .sect-popular .tit {
        font-size: 28px;
        line-height: 34px;
    }
    .wrap.store .sect-popular .contents {
        padding-top: 60px;
    }
    .wrap.store .sect-popular .slide-product {
        margin-top: 30px;
    }
    .wrap .coupon-regist + .sect-popular {
        margin-top: -82px;
    }
    .wrap .coupon-regist + .sect-popular .contents {
        padding-top: 82px;
    }
    [data-dark='true'] .wrap .sect-popular {
        background-color: #0f0f10;
    }
    .wrap .sect-all .head-sect .tit {
        margin-bottom: 20px;
        font-size: 28px;
        line-height: 34px;
    }
    .wrap .sect-all .all-none {
        margin-top: 50px;
    }
    .wrap .sect-all .all-none .subtit {
        font-size: 24px;
        line-height: 30px;
        text-align: center;
    }
    .wrap .sect-all .all-none .subtit:after {
        display: block;
        width: 120px;
        height: 120px;
        margin: 10px auto 0;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_search_none.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-all .count-nft {
        margin-top: 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-all .list-product {
        margin-top: 10px;
    }
    .wrap .sect-popular + .sect-all .contents {
        padding-top: 60px;
    }
    .wrap .coupon-regist + .sect-all .contents {
        padding-top: 0;
    }
    .wrap .bnn-store + .sect-all .contents {
        padding-top: 6px;
    }
    .wrap .list-desc > dt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 16px;
        border-radius: 10px;
        background-color: #f6f7f9;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .list-desc > dt .require {
        display: block;
        padding: 0 14px;
        border-radius: 6px;
        background-color: #fff;
        color: #1a2b3b;
        font-size: 13px;
        line-height: 32px;
    }
    .wrap .list-desc > dt .require.on {
        background-color: #40e282;
        color: #fff;
    }
    .wrap .list-desc > dt .require.off {
        background-color: #f03e3e;
        color: #fff;
    }
    .wrap .list-desc > dd {
        padding: 14px 16px 20px;
        line-height: 1.43;
    }
    .wrap .list-desc > dd > a {
        color: #00b1ff;
        word-break: break-all;
    }
    .wrap .list-desc .item-info {
        overflow-x: auto;
        display: flex;
        justify-content: flex-start;
        margin: 0 -16px;
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap;
    }
    .wrap .list-desc .item-info > li {
        margin-left: 10px;
        padding: 14px 22px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
        text-align: center;
        transition: border 0.5s;
    }
    .wrap .list-desc .item-info > li:first-child {
        margin-left: 0;
    }
    .wrap .list-desc .item-info.prop > li {
        padding: 0;
    }
    .wrap .list-desc .item-info.prop > li:hover {
        border-color: #c0c3cb;
    }
    .wrap .list-desc .item-info.prop > li > a {
        display: block;
        padding: 14px 22px;
    }
    .wrap .list-desc .item-info .info-tit {
        min-width: 80px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .list-desc .item-info .info-value {
        margin-top: 2px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .list-desc .item-info .info-contain {
        margin-top: 6px;
        font-size: 12px;
    }
    .wrap .list-desc .wrap-grade {
        margin: 0 -16px;
    }
    .wrap .list-desc .wrap-grade .grade-bar {
        display: flex;
        padding: 4px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        font-size: 11px;
    }
    .wrap .list-desc .wrap-grade .grade-bar > li {
        height: 48px;
        border-left: 2px solid #fff;
        color: #fff;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 48px;
        text-align: center;
    }
    .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(1) {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-left: 0;
        background-color: #9898a9;
    }
    .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(2) {
        background-color: #2bbef2;
    }
    .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(3) {
        background-color: #e737a1;
    }
    .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(4) {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background-color: #6b47fa;
    }
    .wrap .list-desc .wrap-grade .grade-ratio {
        margin-top: 14px;
        padding: 0 12px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
        line-height: 16px;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li {
        margin-top: 10px;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:first-child {
        margin-top: 0;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:after {
        display: block;
        clear: both;
        content: '';
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(1) {
        color: #9898a9;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(2) {
        color: #2bbef2;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(3) {
        color: #e737a1;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(4) {
        color: #6b47fa;
    }
    .wrap .list-desc .wrap-grade .grade-ratio .grade {
        float: left;
        padding: 0;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 16px;
    }
    .wrap .list-desc .wrap-grade .grade-ratio .grade:before {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin: 1px 6px 0 0;
        border-radius: 50%;
        vertical-align: top;
        content: '';
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(1) .grade:before {
        background-color: #9898a9;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(2) .grade:before {
        background-color: #2bbef2;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(3) .grade:before {
        background-color: #e737a1;
    }
    .wrap .list-desc .wrap-grade .grade-ratio > li:nth-child(4) .grade:before {
        background-color: #6b47fa;
    }
    .wrap .list-desc .wrap-grade .grade-ratio .percent {
        float: right;
        width: 40px;
        text-align: right;
    }
    .wrap .list-desc .caption-tbl {
        margin: 0 -16px 8px;
        line-height: 18px;
        text-align: right;
    }
    .wrap .list-desc .wrap-tbl {
        max-width: 718px;
        margin: 0 -16px;
    }
    .wrap .list-desc .wrap-tbl .none td {
        padding: 40px 20px;
        text-align: center;
    }
    .wrap .list-desc .more {
        margin-top: 14px;
        text-align: center;
    }
    .wrap .list-desc .more .btn-more {
        padding: 0 22px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
        line-height: 44px;
    }
    .wrap .list-desc .slide-product {
        max-width: 718px;
        margin: 0 -41px 0 -16px;
        padding-right: 0;
    }
    .wrap .list-desc .slide-product .item-product {
        width: 212px;
        height: auto;
    }
    .wrap .list-desc .slide-product .item-product > a {
        padding: 8px;
    }
    .wrap .list-desc .btns-history {
        margin: 0 -25px 20px;
    }
    .wrap .list-desc .btns-history [class^='btn-'] {
        height: 42px;
        margin: 0 6px;
        padding: 0 18px;
        font-size: 14px;
    }
    .wrap .list-desc .btns-history [class^='btn-'].on {
        border-color: #1a2b3b;
        background-color: #1a2b3b;
        color: #fff;
    }
    .wrap .list-desc .btns-history [class^='btn-'].on:hover {
        border-color: #131c25;
        background-color: #131c25;
    }
    [data-dark='true'] .wrap .list-desc > dt {
        background-color: #1c1d21;
        color: #fff;
    }
    [data-dark='true'] .wrap .list-desc > dt .require {
        background-color: #141416;
        color: #fff;
    }
    [data-dark='true'] .wrap .list-desc > dt .require.on {
        background-color: #40e282;
        color: #1f1f22;
    }
    [data-dark='true'] .wrap .list-desc > dt .require.off {
        background-color: #f03e3e;
        color: #1f1f22;
    }
    [data-dark='true'] .wrap .list-desc .item-info > li {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .list-desc .item-info.prop > li:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .list-desc .item-info .info-value {
        color: #fff;
    }
    [data-dark='true'] .wrap .list-desc .wrap-grade .grade-bar {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .list-desc .wrap-grade .grade-bar > li {
        border-color: #141416;
    }
    [data-dark='true'] .wrap .list-desc .wrap-grade .grade-ratio .grade {
        color: #fff;
    }
    [data-dark='true'] .wrap .list-desc .more .btn-more {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .list-desc .btns-history [class^='btn-'].on {
        border-color: #d0d0d0;
        background-color: #d0d0d0;
        color: #141416;
    }
    [data-dark='true'] .wrap .list-desc .btns-history [class^='btn-'].on:hover {
        border-color: #fff;
        background-color: #fff;
    }
    .wrap .sect-detail .contents {
        padding-top: 20px;
        padding-bottom: 0;
    }
    .wrap .sect-detail .btns-top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }
    .wrap .sect-detail .btns-top button {
        display: inline-block;
        width: 42px;
        height: 42px;
        margin-left: 6px;
        border-radius: 50%;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-detail .btns-top button:first-child {
        margin-left: 0;
    }
    .wrap .sect-detail .btns-top .btn-like {
        width: auto;
        padding: 0 14px 0 12px;
        border-radius: 21px;
        color: #1a2b3b;
        font-size: 14px;
    }
    .wrap .sect-detail .btns-top .btn-share {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m10.933 14.186-3.499-1.909a3.333 3.333 0 1 1 0-4.554l3.5-1.908a3.333 3.333 0 1 1 .8 1.462l-3.5 1.909a3.34 3.34 0 0 1 0 1.628l3.498 1.909a3.333 3.333 0 1 1-.799 1.462zM5 11.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm9.167-5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm0 10a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-detail .btns-top .more {
        position: relative;
        margin-left: 6px;
    }
    .wrap .sect-detail .btns-top .more .btn-more {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M4.167 8.333C3.25 8.333 2.5 9.083 2.5 10s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667s-.75-1.667-1.666-1.667zm11.666 0c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667zm-5.833 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-detail .btns-top .more .submenu {
        display: none;
        position: absolute;
        right: 0;
        top: 46px;
        width: 200px;
        padding: 4px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        z-index: 20;
    }
    .wrap .sect-detail .btns-top .more .submenu a {
        display: block;
        width: 100%;
        height: 40px;
        padding: 10px 14px;
        border-radius: 8px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
        line-height: 18px;
    }
    .wrap .sect-detail .btns-top .more .submenu a[target='_blank']:after {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        content: '';
    }
    .wrap .sect-detail .btns-top .more .submenu a:before {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
        content: '';
    }
    .wrap .sect-detail .btns-top .more .submenu .finder:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_terra.png);
    }
    .wrap .sect-detail .btns-top .more .submenu .send:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m2.618 1.173 15.385 8.462a.417.417 0 0 1 0 .73L2.617 18.827A.417.417 0 0 1 2 18.462V1.538a.417.417 0 0 1 .618-.365zm1.049 9.66v5.514L15.208 10 3.667 3.652v5.515h4.166v1.666H3.667z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-detail .btns-top .more .btn-more.on + .submenu {
        display: block;
    }
    .wrap .sect-detail .wrap-thumb .thumb {
        overflow: hidden;
    }
    .wrap .sect-detail .wrap-thumb .media:hover {
        cursor: pointer;
    }
    .wrap .sect-detail .wrap-thumb .img-deposit {
        border-radius: 10px;
    }
    .wrap .sect-detail .wrap-thumb .dim {
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
        background-color: rgba(255, 255, 255, 0.85);
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 1.25;
    }
    .wrap .sect-detail .wrap-thumb .dim .msg {
        position: relative;
        display: block;
        font-style: normal;
        z-index: 1;
    }
    .wrap .sect-detail .wrap-thumb .dim .msg:before {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0 auto 6px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-detail .wrap-thumb .dim.hidden .msg:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-detail .wrap-thumb .slide-thumb {
        width: 100%;
        margin-right: 0;
        margin-top: 20px;
        padding: 0 0 4px;
    }
    .wrap .sect-detail .wrap-thumb .slide-thumb .swiper-wrapper > li {
        width: 80px;
        height: 80px;
        opacity: 0.5;
    }
    .wrap .sect-detail .wrap-thumb .slide-thumb .swiper-wrapper > li.on {
        opacity: 1;
    }
    .wrap .sect-detail .wrap-thumb .slide-thumb .swiper-wrapper .btn-thumb {
        overflow: hidden;
        display: block;
        width: 80px;
        height: 100%;
        border-radius: 10px;
    }
    .wrap
        .sect-detail
        .wrap-thumb
        .slide-thumb
        .swiper-wrapper
        .btn-thumb
        > img {
        height: 100%;
        object-fit: cover;
    }
    .wrap
        .sect-detail
        .wrap-thumb
        .slide-thumb
        .swiper-wrapper
        .hidden
        .btn-thumb:after {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.75)
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        content: '';
    }
    .wrap
        .sect-detail
        .wrap-thumb
        .slide-thumb
        .swiper-scrollbar-lock
        + .swiper-wrapper {
        justify-content: center;
    }
    .wrap
        .sect-detail
        .wrap-thumb
        .slide-thumb
        .swiper-scrollbar-lock
        + .swiper-wrapper
        > li:last-child {
        margin-right: 0 !important;
    }
    .wrap .sect-detail .wrap-detail {
        margin-top: 20px;
        color: #1a2b3b;
    }
    .wrap .sect-detail .wrap-detail .artist .name {
        font-size: 14px;
    }
    .wrap .sect-detail .wrap-detail .product {
        display: block;
        margin-top: 10px;
        font-size: 24px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-style: normal;
        line-height: 1.17;
    }
    .wrap .sect-detail .wrap-detail .series {
        margin-top: 10px;
        font-size: 14px;
    }
    .wrap .sect-detail .wrap-detail .sales {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e6e8ec;
        color: #67737f;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-detail .wrap-detail .sales dt {
        margin-bottom: 10px;
    }
    .wrap .sect-detail .wrap-detail .sales [class^='list-'] {
        width: 260px;
        padding-bottom: 20px;
    }
    .wrap .sect-detail .wrap-detail .sales input {
        padding: 0 14px 0 42px;
        font-size: 16px;
    }
    .wrap .sect-detail .wrap-detail .sales input::placeholder {
        color: #e6e8ec;
    }
    .wrap .sect-detail .wrap-detail .sales .usd {
        display: block;
    }
    .wrap .sect-detail .wrap-detail .sales .ust {
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .sect-detail .wrap-detail .sales .list-serial > dd {
        font-size: 16px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-serial > dd > span {
        color: #1a2b3b;
        font-size: 18px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-amount > dd {
        font-size: 16px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-amount > dd > span {
        display: inline-block;
        color: #1a2b3b;
        font-size: 18px;
        vertical-align: top;
    }
    .wrap .sect-detail .wrap-detail .sales .list-start > dd {
        color: #1a2b3b;
        font-size: 18px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-price:last-child {
        width: 100%;
    }
    .wrap .sect-detail .wrap-detail .sales .list-price > dd {
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-price > dd .usd {
        margin-bottom: 2px;
        font-size: 24px;
        line-height: 28px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-buying > dd {
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-buying > dd .usd {
        font-size: 18px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit {
        width: 100%;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit > dd {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: -8px;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit > dd .price {
        margin-top: 8px;
        margin-right: 8px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit > dd .usd {
        font-size: 18px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit > dd .btn-edit {
        display: block;
        height: 42px;
        margin-top: 8px;
        padding: 0 14px 0 34px;
        border-radius: 21px;
        border: 2px solid #e6e8ec;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E")
            12px 50% no-repeat;
        background-size: 18px 18px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 38px;
        transition: border-color 0.2s;
    }
    .wrap .sect-detail .wrap-detail .sales .list-edit > dd .btn-edit:hover {
        border-color: #cfd1d6;
    }
    .wrap .sect-detail .wrap-detail .sales .list-countdown .countdown .colon {
        width: 9px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-seller .profile {
        display: inline-flex;
        align-items: center;
        color: #142b3d;
    }
    .wrap .sect-detail .wrap-detail .sales .list-seller .profile .pic {
        overflow: hidden;
        width: 40px;
        height: 40px;
        margin-right: 6px;
        border-radius: 50%;
    }
    .wrap .sect-detail .wrap-detail .sales .list-seller .profile .pic > img {
        height: 100%;
        object-fit: cover;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling {
        width: 100%;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .input-selling {
        height: 52px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_light.png)
            12px 50% no-repeat;
        background-size: 24px 24px;
        text-align: right;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .convert {
        margin-top: 4px;
        padding: 0 10px;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 12px;
        text-align: right;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price {
        position: relative;
        display: flex;
        margin-top: 10px;
        padding: 0 10px;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price > dt {
        width: 50%;
        margin-bottom: 0;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 14px;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-selling
        .sub-price
        > dt
        .tooltip {
        left: 10px;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-selling
        .sub-price
        > dt
        .tooltip
        > span:before {
        margin-left: -10px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price > dd {
        width: 50%;
        text-align: right;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price .usd {
        font-size: 16px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price .ust {
        display: block;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .sales .list-date {
        width: 100%;
    }
    .wrap .sect-detail .wrap-detail .sales .list-date .input-date {
        height: 48px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M14.167 2.5H17.5c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h3.333V.833H7.5V2.5h5V.833h1.667V2.5zM12.5 4.167h-5v1.666H5.833V4.167h-2.5V7.5h13.334V4.167h-2.5v1.666H12.5V4.167zm4.167 5H3.333v6.666h13.334V9.167z'/%3E%3C/g%3E%3C/svg%3E")
            13px 50% no-repeat;
        background-size: 20px 20px;
        text-align: center;
    }
    .wrap .sect-detail .wrap-detail .sales .agree {
        padding-bottom: 20px;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .sect-detail .wrap-detail .sales .agree input {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
    .wrap .sect-detail .wrap-detail .sales .agree label {
        position: relative;
        display: block;
        min-height: 24px;
        padding: 3px 0 0 34px;
        color: #1a2b3b;
    }
    .wrap .sect-detail .wrap-detail .sales .agree label > a {
        color: #00b1ff;
    }
    .wrap .sect-detail .wrap-detail .wrap-desc {
        margin-bottom: 20px;
        border-bottom: 1px solid #e6e8ec;
    }
    .wrap .sect-detail .wrap-detail .wrap-desc .list-desc > dd {
        position: relative;
        padding-bottom: 15px;
        color: #67737f;
        line-height: 1.29;
    }
    .wrap .sect-detail .wrap-detail .wrap-desc .list-require > li {
        margin-top: 15px;
        padding-right: 34px;
        background-position: 100% 50%;
    }
    .wrap .sect-detail .wrap-detail .wrap-desc .list-require > li:first-child {
        margin-top: 0;
    }
    .wrap .sect-detail .wrap-detail .auction {
        margin: 20px 0;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-detail .wrap-detail .auction .list-countdown {
        padding: 18px 24px 14px;
        text-align: center;
    }
    .wrap .sect-detail .wrap-detail .auction .countdown {
        display: inline-flex;
    }
    .wrap .sect-detail .wrap-detail .auction .countdown .colon {
        width: 9px;
    }
    .wrap .sect-detail .wrap-detail .auction .duration {
        margin-top: 14px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-detail .wrap-detail .auction .duration > dt {
        display: inline-block;
    }
    .wrap .sect-detail .wrap-detail .auction .duration > dd {
        display: inline;
    }
    .wrap .sect-detail .wrap-detail .auction .duration > dd > span {
        display: inline-block;
    }
    .wrap .sect-detail .wrap-detail .auction .wrap-price {
        padding: 20px 18px 18px;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
        border-top: 2px solid #e6e8ec;
        background-color: #f6f7f9;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price {
        position: relative;
        display: flex;
        margin-top: 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price:first-child {
        margin-top: 0;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price > dt {
        width: 50%;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price > dd {
        width: 50%;
        color: #1a2b3b;
        text-align: right;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price dd.has-tooltip {
        padding-right: 24px;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        dd.has-tooltip
        .tooltip {
        position: absolute;
        right: 0;
        top: 50%;
        flex: none;
        width: 100%;
        margin-top: -10px;
        text-align: right;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        dd.has-tooltip
        .tooltip
        > span {
        display: inline-block;
        vertical-align: top;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        dd.has-tooltip
        .tooltip
        > span:before {
        right: 0;
        top: 100%;
        margin: 6px -20px 0;
        white-space: pre-wrap;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        dd.has-tooltip
        .tooltip
        > span:after {
        right: 3px;
        top: 100%;
        border-right: 7px solid transparent;
        border-bottom: 6px solid rgba(0, 0, 0, 0.9);
        border-left: 7px solid transparent;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding {
        flex-wrap: wrap;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding > dt {
        width: 100%;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding > dd {
        width: 100%;
        margin-top: 10px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding input {
        padding: 0 14px 0 42px;
        background: #fff
            url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_light.png)
            12px 50% no-repeat;
        background-size: 24px 24px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        text-align: right;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding .convert {
        display: block;
        margin-top: 4px;
        padding: 0 11px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price.bidding .minimum {
        display: block;
        margin-top: 4px;
        padding: 0 11px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 13px;
        line-height: 18px;
    }
    .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price.bidding
        .minimum:before {
        display: inline-block;
        width: 4px;
        height: 4px;
        margin-right: 6px;
        border-radius: 50%;
        background-color: #647380;
        vertical-align: middle;
        content: '';
    }
    .wrap .sect-detail .wrap-detail .auction .list-price .usd {
        display: block;
        margin-top: -3px;
        font-size: 18px;
        line-height: 22px;
    }
    .wrap .sect-detail .wrap-detail .auction .list-price .ust {
        display: block;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-detail .wrap-detail .note-winning {
        margin: 12px 0 28px;
    }
    .wrap .sect-detail .wrap-detail .fix-bot .viewing {
        display: inline-block;
        margin-top: -4px;
        padding: 0 16px 16px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 13px;
        line-height: 16px;
        text-align: left;
    }
    .wrap .sect-detail .wrap-detail .fix-bot .viewing:before {
        float: left;
        display: inline-block;
        width: 18px;
        height: 18px;
        margin: -1px 4px 0 0;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M1.667 18.333a6.667 6.667 0 0 1 13.333 0h-1.667a5 5 0 1 0-10 0H1.667zm6.666-7.5c-2.762 0-5-2.237-5-5a5 5 0 0 1 5-5c2.763 0 5 2.238 5 5 0 2.763-2.237 5-5 5zm0-1.666a3.332 3.332 0 1 0 0-6.667 3.332 3.332 0 1 0 0 6.667zm6.904 3.085a6.668 6.668 0 0 1 3.93 6.081H17.5a5 5 0 0 0-2.947-4.56l.683-1.52zm-.574-9.408a4.583 4.583 0 0 1 2.837 4.24c0 2.37-1.806 4.35-4.167 4.564V9.971a2.917 2.917 0 0 0 .868-5.508l.462-1.619z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 18px 18px;
        vertical-align: top;
        content: '';
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail {
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .tit {
        padding-bottom: 20px;
        border-bottom: 1px solid #e6e8ec;
        line-height: 28px;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price > dt {
        padding-top: 5px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price > dd {
        text-align: right;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price .usd {
        display: block;
        font-size: 24px;
        line-height: 28px;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price .ust {
        display: block;
        margin-top: 2px;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .wrap-desc {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .sect-detail[data-type='deposit'] .wrap-detail .deposit {
        margin: 60px 0 0;
    }
    .wrap .sect-detail .deposit {
        margin: -8px 0 30px;
        text-align: center;
    }
    .wrap .sect-detail .deposit .list-deposit {
        display: inline-flex;
        align-items: center;
        padding: 9px 18px;
        border-radius: 20px;
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
    }
    .wrap .sect-detail .deposit .list-deposit > dd {
        margin-left: 6px;
        padding: 0 6px;
        border-radius: 6px;
        background-color: #1a2b3b;
        color: #fff;
        font-size: 12px;
        line-height: 24px;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top button {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .btn-like {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .btn-share {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m10.933 14.186-3.499-1.909a3.333 3.333 0 1 1 0-4.554l3.5-1.908a3.333 3.333 0 1 1 .8 1.462l-3.5 1.909a3.34 3.34 0 0 1 0 1.628l3.498 1.909a3.333 3.333 0 1 1-.799 1.462zM5 11.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm9.167-5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm0 10a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .more .btn-more {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M4.167 8.333C3.25 8.333 2.5 9.083 2.5 10s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667s-.75-1.667-1.666-1.667zm11.666 0c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667c.917 0 1.667-.75 1.667-1.667s-.75-1.667-1.667-1.667zm-5.833 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667 1.667-.75 1.667-1.667-.75-1.667-1.667-1.667z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .more .btn-more.on {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .more .submenu {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .more .submenu a {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .btns-top
        .more
        .submenu
        a[target='_blank']:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .btns-top .more .submenu a:hover {
        background-color: #212226;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .btns-top
        .more
        .submenu
        .send:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='m2.618 1.173 15.385 8.462a.417.417 0 0 1 0 .73L2.617 18.827A.417.417 0 0 1 2 18.462V1.538a.417.417 0 0 1 .618-.365zm1.049 9.66v5.514L15.208 10 3.667 3.652v5.515h4.166v1.666H3.667z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .wrap-thumb .dim {
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-thumb .dim.hidden .msg:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-thumb
        .slide-thumb
        .swiper-wrapper
        .hidden
        .btn-thumb:after {
        background-color: rgba(20, 20, 22, 0.85);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M14.25 7.5H15a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 3 7.5h.75v-.75a5.25 5.25 0 1 1 10.5 0v.75zM3.75 9v6h10.5V9H3.75zm4.5 1.5h1.5v3h-1.5v-3zm4.5-3v-.75a3.75 3.75 0 0 0-7.5 0v.75h7.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .sales {
        border-color: #28282b;
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        input::placeholder {
        color: #e6e8ec;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-serial
        > dd
        > span {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-amount
        > dd
        > span {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .sales .list-start > dd {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-edit
        > dd
        .btn-edit {
        border-color: #33353b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E");
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-edit
        > dd
        .btn-edit:hover {
        border-color: #717580;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-seller
        .profile {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-selling
        .input-selling {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_dark.png);
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .sales
        .list-date
        .input-date {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M14.167 2.5H17.5c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h3.333V.833H7.5V2.5h5V.833h1.667V2.5zM12.5 4.167h-5v1.666H5.833V4.167h-2.5V7.5h13.334V4.167h-2.5v1.666H12.5V4.167zm4.167 5H3.333v6.666h13.334V9.167z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .sales .agree label {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .wrap-desc {
        border-color: #28282b;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .wrap-desc
        .list-desc
        > dd {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .auction {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .auction .duration {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .auction .wrap-price {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        > dd {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        dd.has-tooltip
        .tooltip
        > span:after {
        border-bottom: 6px solid rgba(255, 255, 255, 0.96);
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price.bidding
        input {
        background-color: #141416;
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_dark.png);
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price.bidding
        .convert {
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price.bidding
        .minimum {
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price.bidding
        .minimum:before {
        background-color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .auction
        .list-price
        .ust {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-detail .wrap-detail .fix-bot .viewing {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail
        .wrap-detail
        .fix-bot
        .viewing:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M1.667 18.333a6.667 6.667 0 0 1 13.333 0h-1.667a5 5 0 1 0-10 0H1.667zm6.666-7.5c-2.762 0-5-2.237-5-5a5 5 0 0 1 5-5c2.763 0 5 2.238 5 5 0 2.763-2.237 5-5 5zm0-1.666a3.332 3.332 0 1 0 0-6.667 3.332 3.332 0 1 0 0 6.667zm6.904 3.085a6.668 6.668 0 0 1 3.93 6.081H17.5a5 5 0 0 0-2.947-4.56l.683-1.52zm-.574-9.408a4.583 4.583 0 0 1 2.837 4.24c0 2.37-1.806 4.35-4.167 4.564V9.971a2.917 2.917 0 0 0 .868-5.508l.462-1.619z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-detail[data-type='deposit']
        .wrap-detail
        .tit {
        border-color: #28282b;
    }
    [data-dark='true']
        .wrap
        .sect-detail[data-type='deposit']
        .wrap-detail
        .list-price
        > dt {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail[data-type='deposit']
        .wrap-detail
        .list-price
        .usd {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-detail[data-type='deposit']
        .wrap-detail
        .wrap-desc {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-detail .deposit .list-deposit {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-detail .deposit .list-deposit > dd {
        background-color: #fff;
        color: #141416;
    }
    .wrap .sect-desc .contents {
        padding-top: 0;
    }
    .wrap .sect-desc .list-desc:last-child > dd {
        padding-bottom: 0;
    }
    .wrap .layer-share .layer {
        padding: 50px 20px;
        text-align: center;
    }
    .wrap .layer-share .list-share {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .wrap .layer-share .list-share > li {
        width: 80px;
        margin: 0 5px;
    }
    .wrap .layer-share .list-share > li button {
        display: block;
        width: 100%;
        color: #1a2b3b;
        font-size: 13px;
        line-height: 16px;
    }
    .wrap .layer-share .list-share > li button:before {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto 6px;
        border-radius: 50%;
        border: 2px solid #e7e9ed;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 24px 24px;
        box-sizing: border-box;
        content: '';
    }
    .wrap .layer-share .list-share > li button:hover:before {
        border-color: #cfd1d6;
    }
    .wrap .layer-share .list-share > li .btn-copy:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.364 15.536 16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414h-.001zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414v-.001zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .layer-share .list-share > li .btn-twitter:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_twitter.png);
    }
    .wrap .layer-share .list-share > li .btn-fb:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fb.png);
    }
    .wrap .layer-share.copy .list-share {
        display: none;
    }
    .wrap .layer-share .desc-copy {
        display: none;
        margin-top: 20px;
        font-size: 16px;
        line-height: 24px;
    }
    .wrap .layer-share.copy .desc-copy {
        display: block;
    }
    [data-dark='true'] .wrap .layer-share .list-share > li button {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-share .list-share > li button:before {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .layer-share .list-share > li button:hover:before {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .layer-share .list-share > li .btn-copy:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M18.364 15.536 16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414h-.001zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414v-.001zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .layer-zoom {
        display: flex;
        padding: 0;
        opacity: 0;
        z-index: -900;
    }
    .wrap .layer-zoom .layer {
        max-width: 100%;
        height: 100%;
        padding: 75px 0;
        background-color: transparent;
    }
    .wrap .layer-zoom .box-zoom {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .wrap .layer-zoom .box-zoom .zoom {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .wrap .layer-zoom .box-zoom audio,
    .wrap .layer-zoom .box-zoom img,
    .wrap .layer-zoom .box-zoom video {
        display: block;
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
    }
    .wrap .layer-zoom .info {
        position: absolute;
        left: 0;
        bottom: 16px;
        width: 100%;
    }
    .wrap .layer-zoom .info .product {
        display: block;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        font-style: normal;
        line-height: 20px;
    }
    .wrap .layer-zoom .info .artist {
        margin-top: 4px;
    }
    .wrap .layer-zoom .info .artist .name {
        color: #1a2b3b;
    }
    .wrap .layer-zoom .btn-close:hover {
        border-color: #cfd1d6;
    }
    .wrap .layer-zoom .btn-close.zoom-out {
        border: 2px solid #e7e9ed;
        background-color: rgba(255, 255, 255, 0.9);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M13.5 5.25h3v1.5H12v-4.5h1.5v3zM6 6.75H1.5v-1.5h3v-3H6v4.5zm7.5 6v3H12v-4.5h4.5v1.5h-3zM6 11.25v4.5H4.5v-3h-3v-1.5H6z'/%3E%3C/g%3E%3C/svg%3E");
        background-size: 18px 18px;
    }
    .wrap .layer-zoom .btn-close.zoom-out:hover {
        border-color: #cfd1d6;
    }
    .wrap .layer-zoom.on {
        opacity: 1;
        z-index: 100;
        transition: opacity 0.4s;
    }
    .wrap .sect-detail ~ .layer-zoom .btn-close {
        right: 25px;
        top: 25px;
        border: 2px solid #e7e9ed;
        background-color: rgba(255, 255, 255, 0.9);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M13.5 5.25h3v1.5H12v-4.5h1.5v3zM6 6.75H1.5v-1.5h3v-3H6v4.5zm7.5 6v3H12v-4.5h4.5v1.5h-3zM6 11.25v4.5H4.5v-3h-3v-1.5H6z'/%3E%3C/g%3E%3C/svg%3E");
        background-size: 18px 18px;
    }
    .wrap .sect-detail ~ .layer-zoom .btn-close:hover {
        border-color: #cfd1d6;
    }
    [data-dark='true'] .wrap .layer-zoom {
        background-color: rgba(9, 9, 9, 0.9);
    }
    [data-dark='true'] .wrap .layer-zoom .layer {
        border: 0;
        background-color: transparent;
    }
    [data-dark='true'] .wrap .layer-zoom .info .product {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-zoom .info .artist .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-zoom .btn-close:hover {
        background-color: #33353b;
    }
    [data-dark='true'] .wrap .layer-zoom .btn-close.zoom-out {
        border-color: #33353b;
        background-color: rgba(20, 20, 21, 0.9);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M13.5 5.25h3v1.5H12v-4.5h1.5v3zM6 6.75H1.5v-1.5h3v-3H6v4.5zm7.5 6v3H12v-4.5h4.5v1.5h-3zM6 11.25v4.5H4.5v-3h-3v-1.5H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .layer-zoom .btn-close.zoom-out:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-detail ~ .layer-zoom .btn-close {
        border-color: #33353b;
        background-color: rgba(20, 20, 21, 0.9);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M13.5 5.25h3v1.5H12v-4.5h1.5v3zM6 6.75H1.5v-1.5h3v-3H6v4.5zm7.5 6v3H12v-4.5h4.5v1.5h-3zM6 11.25v4.5H4.5v-3h-3v-1.5H6z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-detail ~ .layer-zoom .btn-close:hover {
        border-color: #717580;
    }
    .wrap .sect-coupon .contents {
        padding-top: 30px;
    }
    .wrap .sect-coupon .tit {
        text-align: center;
    }
    .wrap .sect-coupon .tit:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_coupon.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-coupon .desc {
        margin-top: 10px;
        line-height: 20px;
        text-align: center;
    }
    .wrap .sect-coupon .wrap-coupon {
        margin-top: 20px;
        padding: 20px 20px 26px;
        border-radius: 13px;
        box-shadow: 0 5px 20px 0 #e7e8ee;
    }
    .wrap .sect-coupon .wrap-coupon label {
        display: block;
        padding: 0 5px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-coupon .wrap-coupon input {
        margin-top: 10px;
        padding: 0 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-coupon .wrap-btn {
        margin-top: 40px;
    }
    .wrap .sect-coupon .wrap-btn button {
        margin: 0 5px;
    }
    [data-dark='true'] .wrap .sect-coupon .wrap-coupon {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
    }
    .wrap.market .sect-popular .slide-product {
        margin-top: 20px;
    }
    .wrap.market .sect-popular .item-product {
        height: auto;
    }
    .wrap .layer-history {
        padding: 60px 25px;
    }
    .wrap .layer-history .layer {
        display: flex;
        flex-direction: column;
        max-width: 718px;
        max-height: 100%;
        padding: 50px 25px 25px;
    }
    .wrap .layer-history .tit-layer {
        text-align: center;
    }
    .wrap .layer-history .caption-tbl {
        margin: 6px 0 20px;
        text-align: center;
    }
    .wrap .layer-history .wrap-tbl {
        font-size: 14px;
    }
    .wrap .layer-history .wrap-tbl th {
        position: sticky;
        top: 0;
        background-color: #fff;
    }
    [data-dark='true'] .wrap .layer-history .wrap-tbl th {
        background-color: #141416;
    }
    .wrap .layer-send {
        padding: 60px 25px;
    }
    .wrap .layer-send .layer {
        max-width: 550px;
        height: 100%;
        padding: 50px 25px 89px;
    }
    .wrap .layer-send .scroll {
        overflow-y: auto;
        height: 100%;
        padding-bottom: 12px;
    }
    .wrap .layer-send .tit-layer {
        text-align: center;
    }
    .wrap .layer-send .item {
        margin-top: 20px;
    }
    .wrap .layer-send .box-name {
        margin-top: 10px;
        background: 0 0;
    }
    .wrap .layer-send .box-name .input-wallet {
        height: 52px;
        padding: 0 14px 0 42px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M18.333 5.833h.834v8.334h-.834v2.5c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v2.5zm-1.666 8.334h-5a4.167 4.167 0 1 1 0-8.334h5V4.167H3.333v11.666h13.334v-1.666zM17.5 12.5v-5h-5.833a2.5 2.5 0 1 0 0 5H17.5zm-5.833-3.333h2.5v1.666h-2.5V9.167z'/%3E%3C/g%3E%3C/svg%3E")
            14px 50% no-repeat;
        background-size: 20px 20px;
        font-size: 14px;
    }
    .wrap .layer-send .box-name .msg {
        margin-top: 6px;
        padding-right: 10px;
        padding-left: 38px;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .layer-send .box-name .fee {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        padding: 0 10px;
    }
    .wrap .layer-send .box-name .fee > dt {
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .layer-send .box-name .fee > dd {
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .layer-send .box-name .fee > dd .usd {
        display: block;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .layer-send .caution {
        position: relative;
        margin-top: 12px;
        padding-left: 16px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 18px;
    }
    .wrap .layer-send .caution:before {
        display: block;
        position: absolute;
        left: 0;
        top: 6px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #142b3d;
        content: '';
    }
    .wrap .layer-send .wrap-btn {
        position: absolute;
        left: 25px;
        right: 25px;
        bottom: 0;
        margin: 0;
        padding: 20px 0;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .layer-send .wrap-btn [class^='btn-']:first-child {
        margin-left: 0;
    }
    .wrap .layer-send .wrap-btn [class^='btn-'] + [class^='btn-'] {
        margin-right: 0;
    }
    [data-dark='true'] .wrap .layer-send .box-name .input-wallet {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M18.333 5.833h.834v8.334h-.834v2.5c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v2.5zm-1.666 8.334h-5a4.167 4.167 0 1 1 0-8.334h5V4.167H3.333v11.666h13.334v-1.666zM17.5 12.5v-5h-5.833a2.5 2.5 0 1 0 0 5H17.5zm-5.833-3.333h2.5v1.666h-2.5V9.167z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .layer-send .box-name .fee > dd .usd {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-send .caution {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-send .caution:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .layer-send .wrap-btn {
        border-top: 1px solid #28282b;
    }
    .wrap .layer-complete .layer {
        max-width: 550px;
        padding: 50px 25px 30px;
        text-align: center;
    }
    .wrap .layer-complete .desc {
        margin-top: 10px;
        line-height: 20px;
    }
    .wrap .layer-complete .desc:after {
        display: block;
        width: 130px;
        height: 130px;
        margin: 10px auto 0;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fin.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .layer-complete .desc > a {
        display: block;
    }
    .wrap .layer-complete .desc > a[target='_blank']:after {
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
    .wrap .layer-complete .wrap-btn {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    [data-dark='true'] .wrap .layer-complete .desc > a[target='_blank']:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-purchase .contents {
        padding-top: 20px;
    }
    .wrap .sect-purchase .progress {
        position: relative;
        height: 50px;
        margin-bottom: 10px;
        padding: 21px 60px 0 0;
    }
    .wrap .sect-purchase .progress:after {
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_purchase.png)
            100% 50% no-repeat;
        background-size: 50px 50px;
        content: '';
    }
    .wrap .sect-purchase .progress .wrap-bar {
        height: 8px;
        border-radius: 4px;
        background-color: #e6e8ec;
    }
    .wrap .sect-purchase .progress .wrap-bar .bar {
        display: block;
        height: 100%;
        border-radius: 4px;
        background-color: #00b1ff;
    }
    .wrap .sect-purchase .desc {
        margin-top: 6px;
        margin-bottom: 20px;
        line-height: 20px;
    }
    .wrap .sect-purchase .purchase-item .box-available {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .wrap .sect-purchase .purchase-item .box-available .available {
        margin: 0 10px 10px 0;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-purchase .purchase-item .box-available .select-available {
        width: 230px;
        margin-bottom: 10px;
    }
    .wrap .sect-purchase .purchase-item .box-available .wrap-tbl {
        min-width: 100%;
        max-height: 379px;
        margin-right: -25px;
    }
    .wrap .sect-purchase .purchase-item .box-available .wrap-tbl .tbl {
        font-size: 14px;
    }
    .wrap
        .sect-purchase
        .purchase-item
        .box-available
        .wrap-tbl
        .tbl
        .price
        .ust {
        font-size: 12px;
        line-height: 14px;
    }
    .wrap .sect-purchase .purchase-item .box-available .wrap-tbl th {
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 1;
    }
    .wrap
        .sect-purchase
        .purchase-item
        .box-available
        .wrap-tbl
        th:first-child {
        width: 64px;
    }
    .wrap .sect-purchase .purchase-item .box-available .wrap-tbl td {
        position: relative;
    }
    .wrap .sect-purchase .purchase-item .box-available .wrap-tbl label {
        display: block;
        width: 24px;
        height: 24px;
    }
    .wrap .sect-purchase .purchase-item .box-info .list-require > li {
        margin-top: 10px;
        padding-left: 26px;
        background-position: 0 50%;
    }
    .wrap
        .sect-purchase
        .purchase-item
        .box-info
        .list-require
        > li:first-child {
        margin-top: 0;
    }
    .wrap .sect-purchase .purchase-item .box-item {
        margin-top: 20px;
    }
    .wrap .sect-purchase .purchase-item .box-item .subtit-deposit {
        font-size: 16px;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot {
        width: 100%;
        margin-top: 14px;
        padding-top: 14px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-top: 10px;
        font-size: 14px;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price:first-child {
        margin-top: 0;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price > dt {
        width: 50%;
        line-height: 20px;
    }
    .wrap
        .sect-purchase
        .purchase-item
        .box-item
        .bot
        .list-price
        > dt
        .tooltip
        > span:before {
        margin-left: -20px;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price > dd {
        width: 50%;
        text-align: right;
        word-break: break-word;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price .usd {
        display: block;
        font-size: 18px;
        line-height: 20px;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price.total > dt {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price.total > dd {
        color: #00b1ff;
    }
    .wrap .sect-purchase .purchase-item .box-item .bot .list-price.total .usd {
        color: #00b1ff;
    }
    .wrap .sect-purchase .box-purchase {
        margin-top: 20px;
    }
    .wrap .sect-purchase .box-purchase .subtit {
        margin-bottom: 10px;
        padding: 0 10px;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-purchase .box-purchase [class^='list-'] {
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
    }
    .wrap .sect-purchase .box-purchase [class^='list-'] > li {
        border-top: 1px solid #e6e8ec;
    }
    .wrap .sect-purchase .box-purchase [class^='list-'] > li:first-child {
        border-top: 0;
    }
    .wrap .sect-purchase .box-purchase .list-purchase {
        padding: 4px 18px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
    }
    .wrap .sect-purchase .box-purchase .list-purchase > li {
        position: relative;
        padding: 14px 0;
    }
    .wrap .sect-purchase .box-purchase .list-purchase input {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
    }
    .wrap .sect-purchase .box-purchase .list-purchase label {
        display: inline-block;
        position: relative;
        padding-left: 34px;
        font-size: 14px;
        line-height: 24px;
        z-index: 1;
    }
    .wrap .sect-purchase .box-purchase .list-purchase .tooltip {
        position: absolute;
        right: 0;
        top: 50%;
        width: 100%;
        height: 20px;
        margin-top: -10px;
        text-align: right;
    }
    .wrap .sect-purchase .box-purchase .list-purchase .tooltip > span {
        display: inline-block;
        vertical-align: top;
    }
    .wrap .sect-purchase .box-purchase .list-purchase .tooltip > span:before {
        right: 0;
        top: 50%;
        max-width: none;
        margin: 0 26px 0 -20px;
        transform: translateY(-50%);
    }
    .wrap .sect-purchase .box-purchase .list-purchase .tooltip > span:after {
        right: 20px;
        top: 50%;
        margin-top: -7px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 6px solid rgba(0, 0, 0, 0.9);
    }
    .wrap .sect-purchase .box-purchase .list-status > li {
        border-width: 2px;
    }
    .wrap .sect-purchase .box-purchase .list-total > li {
        border-top: 0;
    }
    .wrap .sect-purchase .box-purchase .list-total > li.balance {
        background-color: #fff;
    }
    .wrap .sect-purchase .box-purchase .list-total dl {
        padding: 16px 0;
    }
    .wrap .sect-purchase .box-purchase .list-total dl > dd {
        font-size: 12px;
    }
    .wrap .sect-purchase .box-purchase .list-total dl > dd .usd {
        font-size: 16px;
    }
    .wrap .sect-purchase .box-purchase .list-total dl > dd .ust {
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-purchase .box-purchase .list-total dl > dd .unit {
        font-size: 12px;
    }
    .wrap .sect-purchase .agree {
        min-height: 24px;
        margin-top: 20px;
    }
    .wrap .sect-purchase .agree label {
        display: block;
        padding: 3px 10px 0 44px;
        color: #142b3d;
    }
    .wrap .sect-purchase .agree label:before {
        left: 10px;
    }
    .wrap .sect-purchase .note-purchase {
        position: relative;
        margin: 20px 0 -20px;
        padding: 20px 20px 20px 30px;
        border-radius: 14px;
        background-color: #f6f7f9;
        font-size: 13px;
        line-height: 18px;
    }
    .wrap .sect-purchase .note-purchase:before {
        display: block;
        position: absolute;
        left: 20px;
        top: 27px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #647380;
        content: '';
    }
    .wrap .sect-purchase .note-purchase > a {
        color: #00b1ff;
    }
    .wrap .sect-purchase[data-type='card'] .contents {
        text-align: center;
    }
    .wrap .sect-purchase[data-type='card'] .progress {
        margin-bottom: 30px;
    }
    .wrap .sect-purchase[data-type='card'] .desc {
        margin-bottom: 0;
        padding-bottom: 150px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_purchase.png)
            50% 100% no-repeat;
        background-size: 120px 120px;
    }
    .wrap .sect-purchase[data-type='balance'] .contents {
        text-align: left;
    }
    .wrap .sect-purchase[data-type='balance'] .progress {
        margin-bottom: 30px;
    }
    .wrap .sect-purchase[data-type='balance'] .tit {
        text-align: center;
    }
    .wrap .sect-purchase[data-type='balance'] .box-purchase {
        max-width: 500px;
        margin: 20px auto 0;
    }
    .wrap .sect-purchase[data-type='fin'] .contents {
        text-align: center;
    }
    .wrap .sect-purchase[data-type='fin'] .progress {
        margin-bottom: 30px;
    }
    .wrap .sect-purchase[data-type='fin'] .desc {
        margin-bottom: 10px;
        padding-bottom: 130px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fin.png)
            50% 100% no-repeat;
        background-size: 120px 120px;
    }
    .wrap .sect-purchase[data-type='fin'] .note-dot {
        max-width: 610px;
        margin: 0 auto;
        padding: 20px 20px 20px 30px;
        background-color: #f6f7f9;
        border-radius: 10px;
        text-align: left;
    }
    .wrap .sect-purchase[data-type='fin'] .note-dot > li:nth-child(n + 2) {
        margin-top: 10px;
    }
    .wrap .sect-purchase[data-type='fin'] .wrap-btn {
        width: 310px;
        margin: 20px auto 0;
    }
    .wrap .sect-purchase[data-type='error'] .contents {
        text-align: center;
    }
    .wrap .sect-purchase[data-type='error'] .progress {
        margin-bottom: 30px;
    }
    .wrap .sect-purchase[data-type='error'] .desc {
        padding-bottom: 150px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_warning.png)
            50% 100% no-repeat;
        background-size: 120px 120px;
    }
    .wrap .sect-purchase[data-type='error'] .desc-help {
        margin-top: 40px;
        color: #142b3d;
        font-size: 18px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-purchase[data-type='error'] .desc-help > span {
        padding: 0 2px;
        box-shadow: inset 0 -9px 0 #ecf9ff, 0 2px 0 #ecf9ff;
    }
    .wrap .sect-purchase[data-type='error'] .list-help {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .wrap .sect-purchase[data-type='error'] .list-help > li:before {
        display: inline-block;
        width: 4px;
        height: 4px;
        margin: 0 10px;
        border-radius: 50%;
        background-color: #00b1ff;
        vertical-align: middle;
        content: '';
    }
    .wrap .sect-purchase[data-type='error'] .list-help > li:first-child:before {
        content: none;
    }
    .wrap .sect-purchase[data-type='error'] .list-help a {
        color: #00b1ff;
        vertical-align: middle;
    }
    .wrap .sect-purchase[data-type='error'] .wrap-btn {
        width: 310px;
        margin: 20px auto 0;
    }
    [data-dark='true'] .wrap .sect-purchase .progress .wrap-bar {
        background-color: #33353b;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .purchase-item
        .box-available
        .available {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .purchase-item
        .box-available
        .wrap-tbl
        th {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-purchase .purchase-item .box-item .bot {
        border-color: #28282b;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .purchase-item
        .box-item
        .bot
        .list-price
        .usd {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .purchase-item
        .box-item
        .bot
        .list-price.total
        .usd {
        color: #00b1ff;
    }
    [data-dark='true'] .wrap .sect-purchase .box-purchase [class^='list-'] {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .box-purchase
        [class^='list-']
        > li {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-purchase .box-purchase .list-purchase {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .box-purchase
        .list-purchase
        .tooltip
        > span:after {
        border-left: 6px solid rgba(255, 255, 255, 0.96);
    }
    [data-dark='true']
        .wrap
        .sect-purchase
        .box-purchase
        .list-total
        > li.balance {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-purchase .agree label {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-purchase .note-purchase {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-purchase .note-purchase:before {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-purchase[data-type='fin'] .note-dot {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-purchase[data-type='error'] .desc-help {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-purchase[data-type='error']
        .desc-help
        > span {
        box-shadow: inset 0 -9px 0 #002d41, 0 2px 0 #002d41;
    }
    .wrap .layer-agree {
        padding: 60px 25px;
    }
    .wrap .layer-agree .layer {
        max-width: 550px;
        height: 100%;
        padding: 50px 0 89px;
    }
    .wrap .layer-agree .scroll {
        overflow-y: auto;
        height: 100%;
        padding: 0 25px 20px;
    }
    .wrap .layer-agree .tit-layer {
        text-align: center;
    }
    .wrap .layer-agree .desc {
        margin-top: 10px;
        text-align: center;
    }
    .wrap .layer-agree .agree {
        margin-top: 14px;
        padding-top: 14px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .layer-agree .agree label {
        display: block;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .layer-agree .agree .desc-agree {
        margin-top: 6px;
        font-size: 14px;
    }
    .wrap .layer-agree .agree .box-agree ~ .box-agree {
        margin-top: 14px;
    }
    .wrap .layer-agree .agree .box-agree > label {
        padding: 0 6px 6px;
    }
    .wrap .layer-agree .agree .box-agree input[type='number'],
    .wrap .layer-agree .agree .box-agree input[type='text'] {
        height: 48px;
        padding: 0 18px;
    }
    .wrap .layer-agree .agree .box-agree .msg {
        display: none;
        margin-top: 6px;
        padding: 0 6px 0 30px;
        background-position: 6px 0;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .layer-agree .agree .box-agree .msg.error {
        color: #f03e3e;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .layer-agree .agree .box-agree .msg.on {
        display: block;
    }
    .wrap .layer-agree .agree .box-agree .msg + input {
        margin-top: 6px;
    }
    .wrap .layer-agree .agree .box-agree .note-agree {
        padding: 0 6px 6px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 19px;
    }
    .wrap .layer-agree .agree .box-agree .contact .select-contact {
        width: 100%;
    }
    .wrap .layer-agree .agree .box-agree .contact input {
        margin-top: 6px;
    }
    .wrap .layer-agree .agree .box-agree .contact .list-select {
        overflow-y: auto;
        max-height: 160px;
        box-shadow: 0 8px 16px 0 rgba(149, 150, 158, 0.5);
    }
    .wrap .layer-agree .agree .terms {
        overflow-y: auto;
        max-height: 130px;
        padding: 12px;
        border: 2px solid #e6e8ec;
        border-radius: 14px;
        background-color: #f6f7f9;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .layer-agree .agree .desc-radio {
        margin-top: 6px;
        padding: 0 6px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 19px;
    }
    .wrap .layer-agree .agree .list-agree {
        display: flex;
        margin-top: 10px;
        padding: 0 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 24px;
    }
    .wrap .layer-agree .agree .list-agree > li + li {
        margin-left: 20px;
    }
    .wrap .layer-agree .agree .list-agree > li > label {
        margin-bottom: 0;
        padding-left: 34px;
    }
    .wrap .layer-agree .point {
        color: #00b1ff;
    }
    .wrap .layer-agree .note-dot {
        margin-top: 14px;
        padding: 0 6px 0 16px;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .layer-agree .wrap-btn {
        position: absolute;
        left: 25px;
        right: 25px;
        bottom: 0;
        margin: 0;
        padding: 20px 0;
        border-top: 1px solid #e6e8ec;
        background-color: #fff;
    }
    [data-dark='true'] .wrap .layer-agree .agree {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .layer-agree .agree label {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-agree .agree .box-agree .note-agree {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .layer-agree
        .agree
        .box-agree
        .contact
        .list-select {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
    }
    [data-dark='true'] .wrap .layer-agree .agree .terms {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .layer-agree .agree .desc-radio {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-agree .agree .list-agree {
        color: #fff;
    }
    [data-dark='true'] .wrap .layer-agree .wrap-btn {
        border-color: #28282b;
        background-color: #18181b;
    }
    .wrap .sect-notice {
        position: relative;
    }
    .wrap .sect-notice .contents {
        padding-top: 60px;
    }
    .wrap .sect-notice .head-sect {
        position: relative;
        text-align: center;
    }
    .wrap .sect-notice .head-sect:before {
        display: block;
        position: absolute;
        left: 50%;
        top: -60px;
        width: 480px;
        height: 144px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_notice_light_v2.jpg)
            50% 0 no-repeat;
        background-size: 100% auto;
        transform: translateX(-50%);
        content: '';
    }
    .wrap .sect-notice .head-sect .tit {
        position: relative;
        font-size: 24px;
        line-height: 30px;
    }
    .wrap .sect-notice .head-sect .desc {
        position: relative;
        margin-top: 10px;
    }
    .wrap .sect-notice .head-sect .search-notice {
        height: 52px;
        margin-top: 20px;
    }
    .wrap .sect-notice .head-sect .search-notice input {
        padding: 0 40px 0 46px;
        background-position: 14px 50%;
    }
    .wrap .sect-notice .head-sect .search-notice .btn-del {
        right: 14px;
    }
    .wrap .sect-notice .wrap-category {
        position: relative;
        margin-top: 20px;
        white-space: nowrap;
    }
    .wrap .sect-notice .wrap-category .slide-category {
        width: 100%;
    }
    .wrap .sect-notice .wrap-category .slide-category .item-category {
        width: auto;
    }
    .wrap
        .sect-notice
        .wrap-category
        .slide-category
        .item-category.on
        .btn-category {
        border-color: #1a2b3b;
        background-color: #1a2b3b;
        color: #fff;
    }
    .wrap
        .sect-notice
        .wrap-category
        .slide-category
        .swiper-scrollbar-lock
        + .swiper-wrapper {
        justify-content: center;
    }
    .wrap
        .sect-notice
        .wrap-category
        .slide-category
        .swiper-scrollbar-lock
        + .swiper-wrapper
        .item-category:last-child {
        margin-right: 0;
    }
    .wrap .sect-notice .wrap-category .slide-category .btn-category {
        position: relative;
        height: 42px;
        padding: 0 18px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        color: #1a2b3b;
    }
    .wrap .sect-notice .wrap-category [class^='swiper-button-'] {
        display: none;
    }
    .wrap .sect-notice .keyword {
        display: inline-block;
        background-color: #afe7ff;
        font-style: normal;
    }
    .wrap .sect-notice .desc-result {
        padding: 10px 0 40px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }
    .wrap .sect-notice .note-result {
        margin-top: -30px;
        text-align: center;
    }
    .wrap .sect-notice .wrap-btn {
        margin-top: 20px;
    }
    .wrap .sect-notice .wrap-notice {
        position: relative;
        margin-top: 20px;
    }
    .wrap .sect-notice .list-notice {
        border-bottom: 1px solid #ebedf2;
    }
    .wrap .sect-notice .list-notice > li {
        border-top: 1px solid #ebedf2;
    }
    .wrap .sect-notice .list-notice > li > a {
        display: block;
        padding: 20px 10px;
        color: inherit;
        line-height: 1.43;
        transition: background-color 0.2s;
    }
    .wrap .sect-notice .list-notice > li.pin > a {
        padding-left: 40px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23142B3D' fill-rule='nonzero' d='m18.595 8.477-1.18 1.178-.588-.59-3.535 3.536-.59 2.946-1.179 1.179-3.535-3.536-4.125 4.125-1.178-1.178 4.125-4.125-3.536-3.535 1.178-1.18L7.4 6.709l3.535-3.535-.59-.589 1.18-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            10px 30px no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-notice .list-notice .artist .name {
        color: #1a2b3b;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-notice .list-notice .date {
        display: block;
        padding: 10px 0 0 46px;
    }
    .wrap .sect-notice .view-top {
        display: flex;
        justify-content: center;
        margin-top: -20px;
        line-height: 20px;
        text-align: center;
    }
    .wrap .sect-notice .view-top .date:before {
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 0 10px;
        background-color: #d9dce3;
        vertical-align: middle;
        content: '';
    }
    .wrap .sect-notice .tit-view {
        margin-top: 20px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        word-break: break-word;
    }
    .wrap .sect-notice .view {
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px solid #ebedf2;
        color: #142b3d;
        word-break: break-word;
    }
    .wrap .sect-notice .view img {
        width: auto !important;
        max-width: 100%;
    }
    .wrap .sect-notice .view b {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-notice .paging {
        margin-top: 30px;
    }
    .wrap .sect-notice .paging-view {
        display: flex;
        height: 72px;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 2px solid #1a2b3b;
        line-height: 20px;
    }
    .wrap .sect-notice .paging-view .btn-prev {
        display: flex;
        flex: 1;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        line-height: inherit;
        text-align: left;
        transition: transform 0.2s;
    }
    .wrap .sect-notice .paging-view .btn-list {
        display: block;
        width: 50px;
        height: 50px;
        background: #1a2b3b
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-notice .paging-view .btn-list:hover {
        background-color: #131c25;
    }
    .wrap .sect-notice .paging-view .btn-next {
        display: flex;
        flex: 1;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        line-height: inherit;
        text-align: right;
    }
    .wrap .sect-notice .paging-view .paging-txt {
        display: block;
        color: #142b3d;
        font-style: normal;
        font-size: 16px;
    }
    .wrap .sect-notice .paging-view .btn-prev .paging-txt:before {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 6px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23142B3D' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        vertical-align: top;
        transition: transform 0.2s;
        content: '';
    }
    .wrap .sect-notice .paging-view .btn-next .paging-txt:after {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 6px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23142B3D' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        vertical-align: top;
        transition: transform 0.2s;
        transform: rotate(180deg);
        content: '';
    }
    .wrap .sect-notice .paging-view .paging-tit {
        display: none;
    }
    .wrap .sect-notice .paging-view .paging-none {
        color: #1a2b3b;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .sect-notice .list-faq {
        position: relative;
    }
    .wrap .sect-notice .list-faq > li {
        margin-top: 10px;
        border-radius: 13px;
        border: 2px solid #f6f7f9;
        background-color: #f6f7f9;
    }
    .wrap .sect-notice .list-faq > li:first-child {
        margin-top: 0;
    }
    .wrap .sect-notice .list-faq > li.on {
        background-color: #fff;
    }
    .wrap .sect-notice .list-faq .btn-faq {
        display: block;
        position: relative;
        width: 100%;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
        text-align: left;
    }
    .wrap .sect-notice .list-faq .btn-faq:after {
        display: block;
        position: absolute;
        right: 12px;
        top: 50%;
        width: 36px;
        height: 36px;
        margin-top: -18px;
        border-radius: 50%;
        border: 2px solid #e6e8ec;
        background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h21.6v21.6H0z'/%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23142B3D' fill-rule='nonzero' d='M8.25 8.25v-4.5h1.5v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 18px 18px;
        box-sizing: border-box;
        transition: border-color 0.2s;
        content: '';
    }
    .wrap .sect-notice .list-faq .btn-faq:hover:after {
        border-color: #cfd1d6;
    }
    .wrap .sect-notice .list-faq > li.on .btn-faq:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23142B3D' fill-rule='nonzero' d='M4.167 9.167h11.666v1.666H4.167z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-notice .list-faq dd {
        display: none;
        line-height: 20px;
    }
    .wrap .sect-notice .list-faq dd p span {
        background-color: transparent !important;
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
    }
    .wrap .sect-notice .contact {
        margin-top: 30px;
        text-align: center;
    }
    .wrap .sect-notice .contact .subtit {
        font-size: 20px;
        line-height: 24px;
    }
    .wrap .sect-notice .contact .desc {
        margin-top: 10px;
    }
    .wrap .sect-notice .list-link {
        max-width: 500px;
        margin: 0 auto;
    }
    .wrap .sect-notice .list-link > li {
        height: 60px;
    }
    .wrap .sect-notice .list-link > li > a {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 48px 0 56px;
        border-radius: 10px;
        border: 2px solid #e6e8ec;
        background: #f6f7f9
            url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_faq.png)
            18px 50% no-repeat;
        background-size: 28px 28px;
        color: #1a2b3b;
        line-height: 18px;
        transition: border-color 0.2s;
    }
    .wrap .sect-notice .list-link > li > a:hover {
        border-color: #c0c3cb;
    }
    .wrap .sect-notice .list-link > li > a:after {
        display: block;
        position: absolute;
        right: 18px;
        top: 0;
        width: 20px;
        height: 100%;
        background-color: #1a2b3b;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.818 10 8 13.89 9.09 15 14 10 9.09 5 8 6.11z'/%3E%3C/g%3E%3C/svg%3E")
            0 50% no-repeat;
        -webkit-mask-size: 100% 100%;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.818 10 8 13.89 9.09 15 14 10 9.09 5 8 6.11z'/%3E%3C/g%3E%3C/svg%3E")
            0 50% no-repeat;
        mask-size: 100% 100%;
        content: '';
    }
    .wrap .sect-notice .list-link > li.link-history > a {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_list.png);
    }
    .wrap .sect-notice .list-link > li:nth-child(n + 2) {
        margin-top: 10px;
    }
    .wrap .sect-notice .list-file {
        display: flex;
        flex-wrap: wrap;
        margin-left: -6px;
    }
    .wrap .sect-notice .list-file > li {
        position: relative;
        max-width: 100%;
        margin: 6px 0 0 6px;
        padding: 12px 56px 12px 44px;
        border-radius: 10px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
        background-position: 14px 50%;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        line-height: 18px;
    }
    .wrap .sect-notice .list-file .doc {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_file_doc.png);
    }
    .wrap .sect-notice .list-file .pdf {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_file_pdf.png);
    }
    .wrap .sect-notice .list-file .img {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_file_img.png);
    }
    .wrap .sect-notice .list-file .file {
        overflow: hidden;
        display: block;
        color: #1a2b3b;
        font-size: 13px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .wrap .sect-notice .list-file .size {
        display: block;
        color: #67737f;
        font-size: 12px;
    }
    .wrap .sect-notice .list-file .btn-del {
        position: absolute;
        right: 13px;
        top: 50%;
        width: 28px;
        height: 28px;
        background-color: #1a2b3b;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        -webkit-mask-size: 18px 18px;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        mask-size: 18px 18px;
        transform: translateY(-50%);
    }
    .wrap .sect-notice .wrap-faq {
        margin-top: 20px;
    }
    .wrap .sect-notice .wrap-faq .list-faq .btn-faq {
        padding: 18px 58px 18px 18px;
    }
    .wrap .sect-notice .wrap-faq .list-faq > li.on {
        background-color: #fff;
    }
    .wrap .sect-notice .wrap-faq .list-faq > li.on .btn-faq {
        padding-bottom: 10px;
    }
    .wrap .sect-notice .wrap-faq .list-faq > li.on .btn-faq:after {
        margin-top: -14px;
    }
    .wrap .sect-notice .wrap-faq .list-faq dd {
        padding: 0 16px 18px;
    }
    .wrap .sect-notice .inquiry {
        max-width: 500px;
        margin: 0 auto;
    }
    .wrap .sect-notice .inquiry-note {
        padding: 4px 18px;
        border-radius: 13px;
        background-color: #fff;
        color: #142b3d;
        box-shadow: 0 5px 20px 0 #e7e8ee;
    }
    .wrap .sect-notice .inquiry-note > li {
        position: relative;
        padding: 16px 0 16px 12px;
        border-top: 1px solid #ebedf2;
    }
    .wrap .sect-notice .inquiry-note > li:first-child {
        border-top: 0;
    }
    .wrap .sect-notice .inquiry-note > li:before {
        display: block;
        position: absolute;
        left: 0;
        top: 22px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #00b1ff;
        content: '';
    }
    .wrap .sect-notice .inquiry .list-form {
        margin-top: 10px;
        padding: 20px 12px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
    }
    .wrap .sect-notice .inquiry .list-form > li:nth-child(n + 2) {
        margin-top: 14px;
    }
    .wrap .sect-notice .inquiry .list-form label {
        display: block;
        margin-bottom: 6px;
        padding: 0 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-notice .inquiry .list-form .btn-select {
        background-color: #fff;
    }
    .wrap .sect-notice .inquiry .list-form .list-select {
        overflow-y: auto;
        max-height: 200px;
        box-shadow: 0 8px 16px 0 rgba(149, 150, 158, 0.5);
    }
    .wrap .sect-notice .inquiry .list-form .select-category {
        width: 100%;
    }
    .wrap .sect-notice .inquiry .list-form .wrap-select .select {
        width: 100%;
        margin-top: 6px;
    }
    .wrap .sect-notice .inquiry .list-form .wrap-select .select:first-child {
        margin-top: 0;
    }
    .wrap .sect-notice .inquiry .list-form input {
        height: 48px;
        padding: 0 18px;
        background-color: #fff;
    }
    .wrap .sect-notice .inquiry .list-form input:read-only {
        background-color: #f6f7f9;
    }
    .wrap .sect-notice .inquiry .list-form input + input {
        margin-top: 6px;
    }
    .wrap .sect-notice .inquiry .list-form textarea {
        display: block;
        width: 100%;
        height: 100px;
        margin-top: 6px;
        padding: 13px 18px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        color: #1a2b3b;
        resize: vertical;
    }
    .wrap .sect-notice .inquiry .list-form .attachment {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: -14px;
    }
    .wrap .sect-notice .inquiry .list-form .attachment .btn-attachment {
        position: relative;
        height: 42px;
        margin: 10px 0 0;
        padding: 0 14px 0 34px;
        border-radius: 21px;
        border: 2px solid #e6e8ec;
        background-color: #fff;
        font-size: 14px;
        line-height: 38px;
    }
    .wrap .sect-notice .inquiry .list-form .attachment .btn-attachment:before {
        display: block;
        position: absolute;
        left: 12px;
        top: 50%;
        width: 18px;
        height: 18px;
        background-color: #1a2b3b;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.121 5.818 6.879 10.06a.75.75 0 1 0 1.06 1.061l4.243-4.242A2.25 2.25 0 1 0 9 3.697L4.757 7.939a3.75 3.75 0 1 0 5.303 5.303L14.303 9l1.06 1.06-4.242 4.243a5.25 5.25 0 0 1-7.425-7.425l4.243-4.242a3.75 3.75 0 0 1 5.303 5.303L9 12.183A2.25 2.25 0 0 1 5.818 9l4.242-4.243 1.061 1.06z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% 100%;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M11.121 5.818 6.879 10.06a.75.75 0 1 0 1.06 1.061l4.243-4.242A2.25 2.25 0 1 0 9 3.697L4.757 7.939a3.75 3.75 0 1 0 5.303 5.303L14.303 9l1.06 1.06-4.242 4.243a5.25 5.25 0 0 1-7.425-7.425l4.243-4.242a3.75 3.75 0 0 1 5.303 5.303L9 12.183A2.25 2.25 0 0 1 5.818 9l4.242-4.243 1.061 1.06z'/%3E%3C/g%3E%3C/svg%3E");
        mask-size: 100% 100%;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .sect-notice .inquiry .list-form .attachment .btn-attachment:hover {
        border-color: #c0c3cb;
    }
    .wrap .sect-notice .inquiry .list-form .attachment input {
        display: none;
    }
    .wrap .sect-notice .inquiry .list-form .attachment small {
        position: relative;
        display: block;
        margin-top: 10px;
        margin-left: 10px;
        padding-left: 10px;
        font-size: 13px;
    }
    .wrap .sect-notice .inquiry .list-form .attachment small:before {
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #647380;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .sect-notice .inquiry .list-form .list-file {
        margin-top: 4px;
    }
    .wrap .sect-notice .inquiry .recapcha {
        width: 304px;
        height: 74px;
        margin: 20px 0 0 4px;
    }
    .wrap .sect-notice .inquiry .note-form {
        margin-top: 20px;
        padding: 20px 20px 20px 30px;
        border-radius: 14px;
        background-color: #f6f7f9;
    }
    .wrap .sect-notice .inquiry .note-withdrawal {
        margin-top: 20px;
        padding: 0 10px;
        font-size: 13px;
        line-height: 18px;
    }
    .wrap .sect-notice .inquiry .agree {
        min-height: 24px;
        margin-top: 20px;
        margin-bottom: -20px;
        padding: 0 10px 0 44px;
    }
    .wrap .sect-notice .inquiry .agree label {
        display: inline-block;
        padding-top: 3px;
        color: #142b3d;
    }
    .wrap .sect-notice .inquiry .agree input[type='checkbox'] + label:before {
        left: -34px;
    }
    .wrap .sect-notice .inquiry .wrap-btn {
        margin-top: 30px;
    }
    .wrap .sect-notice .inquiry-mine .wrap-tab {
        margin-top: 40px;
    }
    .wrap .sect-notice .inquiry-mine .wrap-inquiry {
        margin-top: 20px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq {
        padding: 18px 58px 12px 14px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .question-tit {
        overflow: hidden;
        display: -webkit-box;
        padding-left: 2px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq [class^='ico-'] {
        margin-top: 8px;
        padding: 0 10px;
        line-height: 28px;
        color: #fff;
        font-style: normal;
        vertical-align: top;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .ico-receive {
        background-color: #747f8d;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .ico-answer {
        background-color: #40e282;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .date {
        display: inline-block;
        margin: 12px 0 0 8px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 14px;
        vertical-align: top;
    }
    .wrap .sect-notice .inquiry-mine .list-faq > li.on {
        padding: 0 0 18px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq > li.on .btn-faq .question-tit {
        display: block;
        text-overflow: initial;
        -webkit-line-clamp: initial;
        -webkit-box-orient: initial;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd {
        padding: 8px 16px 0 12px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .profile {
        position: relative;
        height: 40px;
        padding: 8px 0 0 48px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .profile .pic {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .profile .name {
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .profile .date {
        display: block;
        font-size: 12px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq {
        position: relative;
        margin: 10px 0 0 18px;
        padding-left: 28px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq:before {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: #e6e8ec;
        content: '';
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .question-txt {
        margin-bottom: 10px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .btn-zoom {
        max-width: 300px;
        margin-bottom: 6px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .list-file {
        margin-top: -6px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .list-file > li {
        padding: 0;
    }
    .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        dd
        .faq
        .list-file
        > li
        > button {
        display: block;
        width: 100%;
        padding: 12px 18px 12px 44px;
        line-height: 18px;
        text-align: left;
    }
    .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        dd
        .faq
        .list-file
        > li
        > button:hover
        .file {
        text-decoration: underline;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .list-file .size {
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .answer {
        margin-top: 30px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .answer .profile {
        padding-top: 0;
    }
    .wrap .sect-notice .inquiry-mine .list-faq dd .faq .answer .support-txt {
        margin-top: 9px;
        padding-left: 48px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-del {
        position: relative;
        display: inline-block;
        height: 42px;
        margin: 20px 0 0 2px;
        padding: 0 14px 0 34px;
        border-radius: 21px;
        border: 2px solid #e6e8ec;
        font-size: 14px;
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-del:before {
        display: block;
        position: absolute;
        left: 12px;
        top: 0;
        width: 18px;
        height: 100%;
        background-color: #1a2b3b;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E")
            0 50% no-repeat;
        -webkit-mask-size: 18px 18px;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12.75 4.5h3.75V6H15v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6H1.5V4.5h3.75V2.25A.75.75 0 0 1 6 1.5h6a.75.75 0 0 1 .75.75V4.5zM13.5 6h-9v9h9V6zM6.75 8.25h1.5v4.5h-1.5v-4.5zm3 0h1.5v4.5h-1.5v-4.5zM6.75 3v1.5h4.5V3h-4.5z'/%3E%3C/g%3E%3C/svg%3E")
            0 50% no-repeat;
        mask-size: 18px 18px;
        content: '';
    }
    .wrap .sect-notice .inquiry-mine .list-faq .btn-del:hover {
        border-color: #c0c3cb;
    }
    .wrap .sect-notice .inquiry-none {
        margin-top: 50px;
        text-align: center;
    }
    .wrap .sect-notice .inquiry-none .tit {
        font-size: 24px;
    }
    .wrap .sect-notice .inquiry-none .tit:after {
        display: block;
        width: 120px;
        height: 120px;
        margin: 10px auto 0;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_search_none.png)
            50% 100% no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    [data-dark='true'] .wrap .sect-notice .head-sect:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_notice_dark_v2.png);
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .wrap-category
        .slide-category
        .item-category.on
        .btn-category {
        border-color: #fff;
        background-color: #fff;
        color: #141416;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .wrap-category
        .slide-category
        .btn-category {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .desc-result {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .keyword {
        background-color: #004b6c;
    }
    [data-dark='true'] .wrap .sect-notice .list-notice {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-notice .list-notice > li {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-notice .list-notice > li.pin > a {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m18.595 8.477-1.18 1.178-.588-.59-3.535 3.536-.59 2.946-1.179 1.179-3.535-3.536-4.125 4.125-1.178-1.178 4.125-4.125-3.536-3.535 1.178-1.18L7.4 6.709l3.535-3.535-.59-.589 1.18-1.179z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-notice .list-notice .artist .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .view-top .date:before {
        background-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-notice .tit-view {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .view {
        border-color: #28282b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .paging-view {
        border-color: #d0d0d0;
    }
    [data-dark='true'] .wrap .sect-notice .paging-view .btn-list {
        background-color: #d0d0d0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23141416' fill-rule='nonzero' d='M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-notice .paging-view .btn-list:hover {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .paging-view .paging-txt {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .paging-view
        .btn-prev
        .paging-txt:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .paging-view
        .btn-next
        .paging-txt:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-notice .paging-view .paging-none {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .list-faq > li {
        border-color: #1c1d21;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-notice .list-faq > li.on {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-notice .list-faq .btn-faq {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .list-faq .btn-faq:after {
        border-color: #33353b;
        background-color: #141415;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h21.6v21.6H0z'/%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M8.25 8.25v-4.5h1.5v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-notice .list-faq .btn-faq:hover:after {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-notice .list-faq > li.on .btn-faq:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M4.167 9.167h11.666v1.666H4.167z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-notice .list-link > li > a {
        border-color: #33353b;
        background-color: #1c1d21;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .list-link > li > a:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-notice .list-link > li > a:after {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-notice .list-file > li {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-notice .list-file .file {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .list-file .size {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-notice .list-file .btn-del {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry-note {
        background-color: #18181b;
        color: #fff;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
    }
    [data-dark='true'] .wrap .sect-notice .inquiry-note > li {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form label {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form .btn-select {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form .list-select {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form input {
        background-color: #141416;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form input:read-only {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .list-form textarea {
        border-color: #33353b;
        background-color: #141416;
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry
        .list-form
        .attachment
        .btn-attachment {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry
        .list-form
        .attachment
        .btn-attachment:before {
        background-color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry
        .list-form
        .attachment
        .btn-attachment:hover {
        border-color: #717580;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry
        .list-form
        .attachment
        small:before {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .note-form {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry .agree label {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        .btn-faq
        [class^='ico-'] {
        color: #141416;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        .btn-faq
        .date {
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        dd
        .profile
        .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry-mine .list-faq dd .faq {
        border-color: #33353b;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        dd
        .faq:before {
        background-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-notice .inquiry-mine .list-faq .btn-del {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        .btn-del:before {
        background-color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-notice
        .inquiry-mine
        .list-faq
        .btn-del:hover {
        border-color: #717580;
    }
    .wrap .sect-profile .contents {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .wrap .sect-profile .btn-edit {
        display: none;
        position: absolute;
        border-radius: 50%;
        background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        color: transparent;
    }
    .wrap .sect-profile .btn-edit:after {
        content: none;
    }
    .wrap .sect-profile .profile-bg {
        position: relative;
        height: 160px;
        border-radius: 10px;
        background-color: #f0f2f6;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrap .sect-profile .profile-bg .btn-edit {
        right: 10px;
        bottom: 10px;
        width: 42px;
        height: 42px;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-profile .profile-bg:hover .btn-edit {
        display: block;
    }
    .wrap .sect-profile .profile-pic {
        overflow: hidden;
        position: relative;
        width: 100px;
        height: 100px;
        margin: -70px auto 0;
    }
    .wrap .sect-profile .profile-pic > img {
        height: 100%;
        border-radius: 50%;
        border: 4px solid #fff;
        object-fit: cover;
    }
    .wrap .sect-profile .profile-pic .btn-edit {
        display: block;
        opacity: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
    }
    .wrap .sect-profile .profile-pic:hover .btn-edit {
        display: block;
        opacity: 1;
    }
    .wrap .sect-profile .name {
        margin-top: 10px;
        color: #1a2b3b;
        font-size: 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 24px;
        text-align: center;
    }
    .wrap .sect-profile .btn-addr {
        display: block;
        width: 165px;
        height: 26px;
        margin: 10px auto 0;
        padding: 0 28px 0 8px;
        border-radius: 15px;
        background: #f6f7f9
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M4.543 4.543V2.47c0-.382.31-.691.692-.691h8.296c.382 0 .691.31.691.691v8.296c0 .382-.31.692-.691.692h-2.074v2.074a.694.694 0 0 1-.696.691H2.474a.692.692 0 0 1-.696-.691l.002-8.296c0-.382.311-.692.696-.692h2.067zm-1.38 1.383L3.16 12.84h6.914V5.926H3.163zm2.763-1.383h4.53a1 1 0 0 1 1 1v4.531h1.384V3.16H5.926v1.383z'/%3E%3C/g%3E%3C/svg%3E")
            right 12px top 50% no-repeat;
        background-size: 16px 16px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        font-size: 13px;
    }
    .wrap .sect-profile .btn-addr.on {
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-profile .btns-sns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 17px;
        margin-bottom: -3px;
    }
    .wrap .sect-profile .btns-sns [class^='btn-'] {
        display: block;
        width: 42px;
        height: 42px;
        margin: 3px;
        border-radius: 21px;
        border: 2px solid #e6e8ec;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        transition: border-color 0.2s;
    }
    .wrap .sect-profile .btns-sns [class^='btn-']:after {
        content: none;
    }
    .wrap .sect-profile .btns-sns [class^='btn-']:hover {
        border-color: #cfd1d6;
    }
    .wrap .sect-profile .btns-sns .btn-fb {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fb.png);
    }
    .wrap .sect-profile .btns-sns .btn-twitter {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_twitter.png);
    }
    .wrap .sect-profile .btns-sns .btn-discord {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_discord.png);
    }
    .wrap .sect-profile .btns-sns .btn-custom {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-profile .btns-sns .btn-like {
        width: auto;
        padding: 0 14px 0 12px;
        color: #1a2b3b;
        font-size: 14px;
    }
    .wrap .sect-profile .btns-sns .btn-share {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m10.933 14.186-3.499-1.909a3.333 3.333 0 1 1 0-4.554l3.5-1.908a3.333 3.333 0 1 1 .8 1.462l-3.5 1.909a3.34 3.34 0 0 1 0 1.628l3.498 1.909a3.333 3.333 0 1 1-.799 1.462zM5 11.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm9.167-5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm0 10a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-profile .btn-edit {
        background-color: #141416;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-profile .profile-bg {
        background-color: #212226;
    }
    [data-dark='true'] .wrap .sect-profile .profile-bg .btn-edit {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-profile .profile-pic > img {
        border-color: #141416;
    }
    [data-dark='true'] .wrap .sect-profile .profile-pic .btn-edit {
        background-color: rgba(20, 20, 22, 0.9);
    }
    [data-dark='true'] .wrap .sect-profile .name {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-profile .btn-addr {
        background-color: #212226;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M4.543 4.543V2.47c0-.382.31-.691.692-.691h8.296c.382 0 .691.31.691.691v8.296c0 .382-.31.692-.691.692h-2.074v2.074a.694.694 0 0 1-.696.691H2.474a.692.692 0 0 1-.696-.691l.002-8.296c0-.382.311-.692.696-.692h2.067zm-1.38 1.383L3.16 12.84h6.914V5.926H3.163zm2.763-1.383h4.53a1 1 0 0 1 1 1v4.531h1.384V3.16H5.926v1.383z'/%3E%3C/g%3E%3C/svg%3E");
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-profile .btns-sns [class^='btn-'] {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-profile .btns-sns [class^='btn-']:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-profile .btns-sns .btn-custom {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-profile .btns-sns .btn-like {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-profile .btns-sns .btn-share {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23ffffff' fill-rule='nonzero' d='m10.933 14.186-3.499-1.909a3.333 3.333 0 1 1 0-4.554l3.5-1.908a3.333 3.333 0 1 1 .8 1.462l-3.5 1.909a3.34 3.34 0 0 1 0 1.628l3.498 1.909a3.333 3.333 0 1 1-.799 1.462zM5 11.666a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm9.167-5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334zm0 10a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.334z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-coll .contents {
        padding-top: 0;
    }
    .wrap .sect-coll .slide-menu {
        position: relative;
        display: flex;
        width: 100%;
        white-space: nowrap;
    }
    .wrap .sect-coll .slide-menu:after {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e6e8ec;
        content: '';
    }
    .wrap .sect-coll .slide-menu .swiper-scrollbar-lock + .swiper-wrapper {
        justify-content: center;
    }
    .wrap .sect-coll .slide-menu .item-menu {
        position: relative;
        width: auto;
        z-index: 1;
    }
    .wrap
        .sect-coll
        .slide-menu
        .swiper-scrollbar-lock
        + .swiper-wrapper
        .item-menu:last-child {
        margin-right: 0 !important;
    }
    .wrap .sect-coll .slide-menu a {
        display: block;
        padding: 0 4px 9px;
        border-bottom: 2px solid transparent;
        color: #485562;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
        line-height: 22px;
        transition: border-color 0.2s;
    }
    .wrap .sect-coll .slide-menu a:hover {
        border-color: #e6e8ec;
    }
    .wrap .sect-coll .slide-menu a .count {
        display: inline-block;
        margin-left: 2px;
        padding: 0 6px;
        border-radius: 6px;
        background-color: #f1f3f5;
        font-size: 12px;
        line-height: 22px;
        vertical-align: middle;
    }
    .wrap .sect-coll .slide-menu .item-menu.on a {
        border-color: #1a2b3b;
        color: #1a2b3b;
    }
    .wrap .sect-coll .slide-menu .item-menu.on a .count {
        background-color: #1a2b3b;
        color: #fff;
    }
    .wrap .sect-coll .coll-none {
        width: 310px;
        margin: 50px auto 0;
        text-align: center;
    }
    .wrap .sect-coll .coll-none .tit {
        padding-bottom: 130px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_search_none.png)
            50% 100% no-repeat;
        background-size: 120px 120px;
        font-size: 24px;
        line-height: 30px;
    }
    .wrap .sect-coll .btns-more {
        justify-content: flex-end;
        margin-top: 20px;
        margin-bottom: -10px;
    }
    .wrap .sect-coll .btns-more .btn-more {
        display: inline-block;
        height: auto;
        margin: 0;
        padding: 0;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 14px;
    }
    .wrap .sect-coll .btns-more .btn-more:after {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 3px 0 0 4px;
        background-color: #67737f;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        -webkit-mask-size: 100% auto;
        mask-size: 100% auto;
        vertical-align: top;
        content: '';
    }
    .wrap .sect-coll .btns-filter {
        margin: 20px 0;
    }
    .wrap .sect-coll .wrap-filter {
        margin-top: 0;
    }
    .wrap .sect-coll .refresh .btn-refresh {
        display: block;
        position: fixed;
        right: 25px;
        bottom: 25px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #32dcc8
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M4.553 3.694a8.333 8.333 0 0 1 12.272 11.09L14.167 10h2.5A6.667 6.667 0 0 0 5.383 5.19l-.83-1.496Zm10.895 12.612A8.333 8.333 0 0 1 3.175 5.216L5.833 10h-2.5a6.667 6.667 0 0 0 11.284 4.81l.83 1.496Z'/%3E%3C/g%3E%3C/svg%3E")
            50% 50% no-repeat;
        background-size: 20px 20px;
        z-index: 10;
    }
    .wrap .sect-coll .refresh .tooltip {
        position: fixed;
        left: 25px;
        right: 25px;
        bottom: 77px;
        z-index: 10;
    }
    .wrap .sect-coll .refresh .tooltip > span {
        position: relative;
        width: 100%;
        height: auto;
        background: 0 0;
    }
    .wrap .sect-coll .refresh .tooltip > span:before {
        right: 0;
        bottom: 100%;
        max-width: 310px;
    }
    .wrap .sect-coll .refresh .tooltip > span:after {
        right: 14px;
        bottom: -6px;
        border-right: 7px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.9);
        border-left: 7px solid transparent;
    }
    .wrap .sect-coll .refresh .btn-refresh:hover + .tooltip > span:after,
    .wrap .sect-coll .refresh .btn-refresh:hover + .tooltip > span:before {
        opacity: 1;
        visibility: visible;
    }
    .wrap .sect-coll .refresh .btn-refresh.on + .tooltip > span:after,
    .wrap .sect-coll .refresh .btn-refresh.on + .tooltip > span:before {
        opacity: 1;
        visibility: visible;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu:after {
        background-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu a {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu a:hover {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu a .count {
        background-color: #212226;
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu .item-menu.on a {
        border-color: #fff;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-coll .slide-menu .item-menu.on a .count {
        background-color: #fff;
        color: #141416;
    }
    [data-dark='true'] .wrap .sect-coll .btns-more .btn-more {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-coll .btns-more .btn-more:after {
        background-color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-coll .refresh .btn-refresh {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23141416' fill-rule='nonzero' d='M4.553 3.694a8.333 8.333 0 0 1 12.272 11.09L14.167 10h2.5A6.667 6.667 0 0 0 5.383 5.19l-.83-1.496Zm10.895 12.612A8.333 8.333 0 0 1 3.175 5.216L5.833 10h-2.5a6.667 6.667 0 0 0 11.284 4.81l.83 1.496Z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-coll .refresh .tooltip > span:after {
        border-top: 6px solid rgba(255, 255, 255, 0.9);
    }
    .wrap .sect-open .tit-open {
        max-width: 440px;
        margin: 0 auto;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
    .wrap .sect-open .tit-open > span {
        padding: 0 4px;
        box-shadow: inset 0 -10px 0 #ecf9ff, 0 2px 0 #ecf9ff;
    }
    .wrap .sect-open .list-open {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: -10px;
    }
    .wrap .sect-open .list-open > li {
        width: 232px;
        height: 324px;
        margin: 10px;
        opacity: 0;
    }
    .wrap .sect-open .list-open > li.on {
        animation: card 0.9s ease 1 forwards;
    }
    .wrap .sect-open .list-open .btn-open {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 14px;
        text-align: left;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .wrap .sect-open .list-open .btn-open:after {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        content: '';
        transform: scale(0.9) translateZ(0);
        filter: blur(30px);
        background: linear-gradient(
            to left,
            #6b63e3,
            #5888f9,
            #2fb2ff,
            #00e2f0,
            #00fddf,
            #00e2f0,
            #2fb2ff,
            #5888f9
        );
        background-size: 200% 200%;
        opacity: 0;
        transition: opacity 0.6s;
        animation: card-shadow 1.25s linear infinite;
    }
    .wrap .sect-open .list-open .btn-open:hover:after {
        opacity: 1;
    }
    .wrap .sect-open .list-open .btn-open.on {
        transform: rotateY(180deg);
    }
    .wrap .sect-open .list-open .btn-open.on:after {
        display: none;
    }
    .wrap .sect-open .list-open .front {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 14px 14px 24px;
        border-radius: 20px;
        border: 2px solid #f2f4f7;
        background-color: #fff;
        color: #1a2b3b;
        z-index: 1;
        transform: rotateY(180deg);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .wrap .sect-open .list-open .front .thumb {
        overflow: hidden;
        height: 200px;
        margin-bottom: 16px;
    }
    .wrap .sect-open .list-open .front .thumb .info {
        left: 6px;
        top: 6px;
    }
    .wrap .sect-open .list-open .front .category {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        margin-bottom: 4px;
        font-style: normal;
        white-space: nowrap;
    }
    .wrap .sect-open .list-open .front .product {
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 8px;
        color: #67737f;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        white-space: nowrap;
    }
    .wrap .sect-open .list-open .back {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_card_light.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .wrap .sect-open .wrap-btn {
        width: 310px;
        margin: 60px auto 0;
    }
    [data-dark='true'] .wrap .sect-open .tit-open {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-open .tit-open > span {
        box-shadow: inset 0 -10px 0 #002d41, 0 2px 0 #002d41;
    }
    [data-dark='true'] .wrap .sect-open .list-open .btn-open {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-open .list-open .front {
        border-color: #25262b;
        background-color: #141416;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-open .list-open .front .product {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-open .list-open .back {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_card_dark.png);
    }
    @keyframes card {
        0% {
            transform: translateY(-60%) scale(1.07);
            opacity: 0;
        }
        50% {
            transform: translateY(0) scale(1.07);
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    }
    @keyframes card-shadow {
        0% {
            background-position: 0 50%;
        }
        100% {
            background-position: 200% 50%;
        }
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
    [data-dark='true'] .wrap .layer-text .text {
        color: #fff;
    }
    .wrap.account .contents {
        max-width: 550px;
    }
    .wrap .sect-account .contents {
        padding-top: 25px;
    }
    .wrap .sect-account .list-go a[target='_blank']:after {
        display: block;
        position: absolute;
        right: 24px;
        top: 50%;
        width: 12px;
        height: 12px;
        margin: -6px 0 0 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 100% 100%;
        vertical-align: top;
        content: '';
    }
    .wrap .sect-account .select-nav {
        width: 100%;
    }
    .wrap .sect-account .select-nav .btn-select {
        padding: 0 36px 0 46px;
        background-position: 18px 50%;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-account .select-nav .btn-select:before {
        display: block;
        position: absolute;
        left: 18px;
        top: 50%;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .sect-account .select-nav .btn-select.home:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .btn-select.set:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .btn-select.wallet:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .btn-select.history:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .btn-select.noti:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .btn-select.inven:before {
        background-color: #1a2b3b;
    }
    .wrap .sect-account .select-nav .list-select {
        box-shadow: 0 8px 16px 0 rgba(149, 150, 158, 0.5);
    }
    .wrap .sect-account .select-nav .list-select a {
        position: relative;
        padding: 13px 14px 13px 42px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-account .select-nav .list-select a:before {
        display: block;
        position: absolute;
        left: 14px;
        top: 50%;
        width: 20px;
        height: 20px;
        background-color: #67737f;
        transform: translateY(-50%);
        content: '';
    }
    .wrap .sect-account .select-nav .list-select .list-go:before {
        display: block;
        height: 1px;
        margin: 4px 14px;
        background-color: #ebedf2;
        content: '';
    }
    .wrap .sect-account .select-nav .list-select .list-go a {
        position: relative;
        padding-left: 24px;
    }
    .wrap .sect-account .select-nav .list-select .list-go a:before {
        content: none;
    }
    .wrap .sect-account .account-nav {
        display: none;
    }
    .wrap .sect-account .account-cont[data-type='history'] .swiper-scrollbar {
        display: none;
    }
    .wrap .sect-account .account-cont[data-type='history'] .wrap-tbl .tbl th {
        box-shadow: inset 0 1px 0 #1a2b3b, inset 0 -1px 0 #e6e8ec;
    }
    .wrap .sect-account .tooltip {
        padding-left: 4px;
    }
    .wrap .sect-account .tooltip > span:before {
        left: -50px;
        bottom: 100%;
        max-width: 270px;
        margin-bottom: 6px;
    }
    .wrap .sect-account .tooltip > span:after {
        left: 7px;
        bottom: 100%;
        border-right: 7px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.9);
        border-left: 7px solid transparent;
    }
    .wrap .sect-account .tit {
        margin: 40px 0;
        font-size: 24px;
        line-height: 28px;
    }
    .wrap .sect-account .tit.home {
        padding-left: 32px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_shake.png)
            0 1px no-repeat;
        background-size: 26px 26px;
    }
    .wrap .sect-account .tit.home > span {
        display: inline-block;
    }
    .wrap .sect-account .list-account {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .wrap .sect-account .list-account > li {
        width: 100%;
        margin-top: 30px;
    }
    .wrap .sect-account .list-account > li:first-child {
        margin-top: 0;
    }
    .wrap .sect-account .list-account .tit-info {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 0 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-account .list-account .subtit-info {
        display: block;
        margin-top: 20px;
        margin-bottom: 6px;
        padding: 0 6px;
        color: #67737f;
        font-size: 14px;
        font-style: normal;
    }
    .wrap .sect-account .list-account .desc-info {
        margin: -2px 0 20px;
        padding: 0 10px;
    }
    .wrap .sect-account .list-account input {
        padding: 0 18px;
        color: #67737f;
        font-size: 16px;
    }
    .wrap .sect-account .list-account .input-method {
        padding-left: 52px;
        background-position: 18px 50%;
        background-repeat: no-repeat;
        background-size: 24px 24px;
    }
    .wrap .sect-account .list-account .input-method[data-type='1'] {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_google.png);
    }
    .wrap .sect-account .list-account .input-method[data-type='2'] {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fb.png);
    }
    .wrap .sect-account .list-account .input-method[data-type='3'] {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_coinone.png);
    }
    .wrap .sect-account .list-account .box-name {
        position: relative;
    }
    .wrap .sect-account .list-account .box-name .input-name {
        padding-right: 72px;
    }
    .wrap .sect-account .list-account .box-name .btn-edit {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 52px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='m4.81 12 7.607-7.606-1.06-1.061L3.75 10.94V12h1.06zm.622 1.5H2.25v-3.182l8.576-8.576a.75.75 0 0 1 1.06 0l2.123 2.121a.75.75 0 0 1 0 1.06L5.431 13.5zM2.25 15h13.5v1.5H2.25V15z'/%3E%3C/g%3E%3C/svg%3E")
            10px 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap
        .sect-account
        .list-account
        .box-name
        .input-name[readonly]
        ~ .btn-edit {
        display: block;
    }
    .wrap .sect-account .list-account .box-name .msg {
        margin-top: 6px;
        padding-right: 6px;
        padding-left: 28px;
        background-position: 6px 0;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
    }
    .wrap
        .sect-account
        .list-account
        .box-name
        .input-name[readonly]
        ~ .length {
        display: none;
    }
    .wrap .sect-account .list-account .box-name .count {
        position: absolute;
        right: 20px;
        top: 16px;
        color: #b9bcc1;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
    }
    .wrap .sect-account .list-account .box-name .count > span {
        color: #1a2b3b;
    }
    .wrap .sect-account .list-account .box-name .btn-save {
        display: block;
        height: 42px;
        margin-top: 10px;
        padding: 0 18px;
        border-radius: 10px;
        font-size: 14px;
    }
    .wrap .sect-account .list-account .input-area {
        padding: 0 18px 0 52px;
        background: #f6f7f9
            url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_area_global.png)
            18px 50% no-repeat;
        background-size: 24px 24px;
    }
    .wrap .sect-account .list-account .input-area[data-area='korea'] {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_area_korea.png);
    }
    .wrap .sect-account .list-account input[type='file'] {
        display: none;
    }
    .wrap .sect-account .list-account .btn-upload {
        display: inline-block;
        margin-top: 10px;
        padding: 0 16px;
        border-radius: 10px;
        font-size: 14px;
        line-height: 38px;
    }
    .wrap .sect-account .list-account .box-prof {
        display: flex;
    }
    .wrap .sect-account .list-account .box-prof .pic {
        width: 92px;
        height: 92px;
    }
    .wrap .sect-account .list-account .box-prof .pic > img {
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    .wrap .sect-account .list-account .box-prof .wrap-guide {
        flex: 1;
        padding-left: 20px;
        color: #1a2b3b;
        font-size: 14px;
    }
    .wrap .sect-account .list-account .box-bg {
        overflow: hidden;
        height: 160px;
        border-radius: 10px;
        background-color: #f0f2f6;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        color: #1a2b3b;
    }
    .wrap .sect-account .list-account .box-bg .wrap-guide {
        display: none;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 25px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #1a2b3b;
        font-size: 14px;
        text-align: center;
    }
    .wrap .sect-account .list-account .box-bg:hover .wrap-guide {
        display: flex;
    }
    .wrap .sect-account .list-account .list-link {
        padding: 2px 18px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-account .list-account .list-link > li {
        border-top: 1px solid #e6e8ec;
    }
    .wrap .sect-account .list-account .list-link > li:first-child {
        border-top: 0;
    }
    .wrap .sect-account .list-account .list-link input {
        padding: 0 0 0 34px;
        border: 0;
        font-size: 16px;
        background-position: 0 50%;
        background-repeat: no-repeat;
        background-size: 24px 24px;
    }
    .wrap .sect-account .list-account .list-link .fb {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_fb.png);
    }
    .wrap .sect-account .list-account .list-link .twitter {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_twitter.png);
    }
    .wrap .sect-account .list-account .list-link .discord {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_discord.png);
    }
    .wrap .sect-account .list-account .list-link .custom {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-account .list-account .btns-wallet {
        justify-content: flex-start;
        margin: 30px -5px 0;
    }
    .wrap .sect-account .list-account .btns-wallet [class^='btn-'] {
        display: inline-block;
        height: 42px;
        margin: 0 5px;
        padding: 10px 16px 10px 34px;
        border-radius: 10px;
        background-position: 10px 50%;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        font-size: 14px;
    }
    .wrap .sect-account .list-account .btns-wallet .btn-deposit {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M2.5 15.833h15V17.5h-15v-1.667zm8.333-4.856 5.06-5.06 1.178 1.178L10 14.167 2.93 7.096l1.177-1.18 5.06 5.059V1.667h1.666v9.31z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-account .list-account .btns-wallet .btn-withdraw {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M2 12.667h12V14H2v-1.333zm6.667-8.782v7.448H7.333V3.885L3.286 7.933l-.943-.942L8 1.333l5.657 5.657-.943.943-4.047-4.046v-.002z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-account .wrap-tab {
        margin-bottom: 30px;
    }
    .wrap .sect-account .select-type {
        width: 200px;
    }
    .wrap .sect-account .btns-change .box-bot {
        max-width: 500px;
    }
    .wrap .sect-account .top-search {
        margin: -10px 0 20px;
        font-size: 14px;
    }
    .wrap .sect-account .top-search dt {
        padding: 0 0 6px 6px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 20px;
    }
    .wrap .sect-account .top-search .list-period > dt {
        display: flex;
        align-items: center;
    }
    .wrap .sect-account .top-search .list-period > dd {
        position: relative;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: -5px 0;
    }
    .wrap .sect-account .top-search .list-period .box-period {
        display: flex;
        align-items: center;
        width: 289px;
        margin: 5px 10px 5px 0;
        padding: 0 13px 0 41px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M14.167 2.5H17.5c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h3.333V.833H7.5V2.5h5V.833h1.667V2.5zM12.5 4.167h-5v1.666H5.833V4.167h-2.5V7.5h13.334V4.167h-2.5v1.666H12.5V4.167zm4.167 5H3.333v6.666h13.334V9.167z'/%3E%3C/g%3E%3C/svg%3E")
            13px 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-account .top-search .list-period .box-period input {
        width: 110px;
        height: 44px;
        border: 0;
        text-align: center;
    }
    .wrap .sect-account .top-search .list-period .box-period > span {
        display: block;
        padding: 0 2px;
        color: #1a2b3b;
    }
    .wrap .sect-account .top-search .list-period .btn-search {
        height: 40px;
        margin: 5px 0;
        padding: 0 18px;
        border-radius: 10px;
        font-size: 14px;
    }
    .wrap .sect-account .top-search .wrap-type {
        margin-top: 20px;
    }
    .wrap .sect-account .top-type {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .wrap .sect-account .top-type .note {
        position: relative;
        margin-bottom: 20px;
        padding-left: 10px;
        color: #1a2b3b;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap .sect-account .top-type .note:before {
        position: absolute;
        left: 0;
        top: 8px;
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #1a2b3b;
        content: '';
    }
    .wrap .sect-account .wrap-tbl {
        max-width: 500px;
    }
    .wrap .sect-account .wrap-tbl .tbl {
        font-size: 14px;
    }
    .wrap .sect-account .wrap-tbl .deposit {
        color: #06f;
    }
    .wrap .sect-account .wrap-tbl .withdraw {
        color: #f03e3e;
    }
    .wrap .sect-account .wrap-tbl .txn-id > a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        max-width: 150px;
        white-space: nowrap;
    }
    .wrap .sect-account .wrap-tbl .title img {
        width: 30px;
        height: 30px;
        margin-right: 6px;
        border-radius: 8px;
        vertical-align: middle;
        object-fit: cover;
    }
    .wrap .sect-account .wrap-tbl .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        max-width: 144px;
        vertical-align: middle;
        white-space: nowrap;
    }
    .wrap .sect-account .wrap-tbl .title > a:hover > span {
        text-decoration: underline;
    }
    .wrap .sect-account .wrap-tbl .wrap-btn {
        margin: 0 -5px;
    }
    .wrap .sect-account .wrap-tbl .wrap-btn [class^='btn-'] {
        height: 42px;
        margin: 0 5px;
        padding: 0 18px;
    }
    .wrap .sect-account .paging {
        margin-top: 30px;
    }
    .wrap .sect-account .wrap-none {
        padding-top: 50px;
        border-top: 1px solid #e6e8ec;
    }
    .wrap .sect-account .wrap-none .desc-none {
        padding-bottom: 130px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_search_none.png)
            50% 100% no-repeat;
        background-size: 120px 120px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
    }
    .wrap .sect-account .top-inven + .wrap-none {
        border-top: 0;
    }
    .wrap .sect-account .top-inven {
        margin-bottom: 25px;
    }
    .wrap .sect-account .top-inven .total {
        margin-bottom: 10px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
    }
    .wrap .sect-account .top-inven .wrap-select {
        display: flex;
        margin: 0 -5px;
    }
    .wrap .sect-account .top-inven [class^='select'] {
        width: 50%;
        margin: 0 5px;
    }
    .wrap .sect-account .list-product {
        position: relative;
        left: -10px;
        display: flex;
        flex-wrap: wrap;
        width: calc(100% + 20px);
        margin-top: -20px;
        margin-left: 0;
    }
    .wrap .sect-account .list-product .item-product {
        width: 50%;
        margin-top: 20px;
        padding: 0 10px;
    }
    .wrap .sect-account .list-product .item-product > a {
        padding: 0;
    }
    .wrap .sect-account .list-product .item-product[data-serial='true'] .info {
        height: 62px;
        margin-top: 14px;
    }
    .wrap .sect-account .btn-back {
        display: inline-block;
        height: 42px;
        margin: 40px 0 30px;
        padding: 10px 14px 10px 34px;
        border-radius: 21px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23142B3D' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E")
            12px 50% no-repeat;
        background-size: 18px 18px;
        font-size: 14px;
    }
    .wrap .sect-account .subtit-wallet {
        padding: 0 10px;
        font-size: 16px;
    }
    .wrap .sect-account .desc-info {
        margin-top: 8px;
        padding: 0 10px 10px;
    }
    .wrap .sect-account .list-total {
        overflow: visible;
        margin-top: 10px;
    }
    .wrap .sect-account .list-total .list-balance {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 0;
    }
    .wrap .sect-account .list-total .list-balance > li {
        margin: 0 15px;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_ctx.png)
            34px 50% no-repeat;
        background-size: 24px 24px;
    }
    .wrap .sect-account .list-total .list-balance > li:nth-child(2) {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_ust.png);
    }
    .wrap .sect-account .list-total .list-balance label {
        display: block;
        padding-left: 62px;
        color: #1a2b3b;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        line-height: 24px;
    }
    .wrap .sect-account .list-total .list-balance label:before {
        top: 50%;
        transform: translateY(-50%);
    }
    .wrap .sect-account .list-total dl {
        position: relative;
    }
    .wrap .sect-account .list-total dl .tooltip {
        left: 6px;
        right: 6px;
        top: 16px;
        padding-left: 0;
    }
    .wrap .sect-account .list-total dl .tooltip > span:before {
        margin-left: -27px;
    }
    .wrap .sect-account .list-total dl > dd .usd {
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-account .list-total dl > dd .ust {
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-account .list-total li.full > dl .tooltip > span:before {
        margin-right: -26px;
        margin-left: -57px;
    }
    .wrap .sect-account .list-total .limit {
        padding-left: 10px;
        color: #142b3d;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-account .list-total .limit > span {
        display: inline-block;
    }
    .wrap .sect-account .list-total .qrcode {
        width: 140px;
        height: 140px;
        margin: 10px auto;
        padding: 15px;
        border-radius: 14px;
        background-color: #fff;
    }
    .wrap .sect-account .list-total .qrcode > canvas {
        width: 100%;
        height: 100%;
    }
    .wrap .sect-account .list-total input {
        padding: 0 14px;
        background-color: #fff;
        color: #67737f;
        font-size: 16px;
    }
    .wrap .sect-account .agree {
        min-height: 24px;
        margin-top: 20px;
        padding: 0 10px 0 44px;
    }
    .wrap .sect-account .agree label {
        display: inline-block;
        padding-top: 3px;
        color: #142b3d;
    }
    .wrap .sect-account .agree label > a {
        color: #00b1ff;
    }
    .wrap .sect-account .agree input[type='checkbox'] + label:before {
        left: -34px;
    }
    .wrap .sect-account .box-ust {
        position: relative;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-account .box-ust input {
        padding-right: 53px;
        text-align: right;
    }
    .wrap .sect-account .box-ust .unit {
        position: absolute;
        right: 16px;
        top: 50%;
        color: #142b3d;
        font-size: 16px;
        transform: translateY(-50%);
    }
    .wrap .sect-account .box-note {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 6px;
        padding: 0 10px 0 6px;
    }
    .wrap .sect-account .box-note .minimum {
        position: relative;
        padding-left: 10px;
        font-size: 13px;
        line-height: 18px;
    }
    .wrap .sect-account .box-note .minimum:before {
        display: block;
        position: absolute;
        left: 0;
        top: 7px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #142b3d;
        content: '';
    }
    .wrap .sect-account .msg {
        margin-top: 6px;
        padding-right: 10px;
        padding-left: 24px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2340e282' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 20px 20px;
        color: #40e282;
        text-align: left;
    }
    .wrap .sect-account .msg.error {
        color: #f03e3e;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-account .box-note + .msg {
        background: 0 0;
        text-align: right;
    }
    .wrap .sect-account .box-note + .msg:before {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 4px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%2340e282' fill-rule='nonzero' d='m8.333 12.643 7.66-7.661 1.179 1.179L8.333 15 3.03 9.697l1.178-1.179z'/%3E%3C/g%3E%3C/svg%3E")
            0 0 no-repeat;
        background-size: 20px 20px;
        vertical-align: top;
        content: '';
    }
    .wrap .sect-account .box-note + .msg.error:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23f03e3e' fill-rule='nonzero' d='m10 8.704 4.537-4.537 1.296 1.296L11.296 10l4.537 4.537-1.296 1.296L10 11.296l-4.537 4.537-1.296-1.296L8.704 10 4.167 5.463l1.296-1.296z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .wrap .sect-account .list-quantity {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        margin: 5px -5px -5px;
    }
    .wrap .sect-account .list-quantity > li {
        width: 50%;
        padding: 5px;
    }
    .wrap .sect-account .list-quantity > li > button {
        display: block;
        width: 100%;
        height: 42px;
        border-radius: 12px;
        border: 2px solid #e6e8ec;
        transition: border-color 0.2s;
    }
    .wrap .sect-account .list-quantity > li > button:hover {
        border-color: #cfd1d6;
    }
    .wrap .sect-account .note-withdraw {
        overflow-y: auto;
        max-height: 100px;
        margin-top: 10px;
        padding: 14px 14px 14px 24px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
        background-color: #f6f7f9;
        font-size: 12px;
        line-height: 16px;
    }
    .wrap .sect-account .note-account {
        margin-top: 14px;
    }
    .wrap .sect-account .box-copy {
        position: relative;
    }
    .wrap .sect-account .box-copy input {
        padding-right: 50px;
    }
    .wrap .sect-account .box-copy .btn-copy {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 52px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%2367737F' fill-rule='nonzero' d='M4.543 4.543V2.47c0-.382.31-.691.692-.691h8.296c.382 0 .691.31.691.691v8.296c0 .382-.31.692-.691.692h-2.074v2.074a.694.694 0 0 1-.696.691H2.474a.692.692 0 0 1-.696-.691l.002-8.296c0-.382.311-.692.696-.692h2.067zm-1.38 1.383L3.16 12.84h6.914V5.926H3.163zm2.763-1.383h4.53a1 1 0 0 1 1 1v4.531h1.384V3.16H5.926v1.383z'/%3E%3C/g%3E%3C/svg%3E")
            10px 50% no-repeat;
        background-size: 20px 20px;
    }
    .wrap .sect-account .box-copy .btn-copy:before {
        position: absolute;
        right: 0;
        bottom: 42px;
        max-width: 270px;
        padding: 14px 20px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        font-size: 14px;
        font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
        line-height: 18px;
        text-align: left;
        opacity: 0;
        visibility: hidden;
        z-index: 10;
        content: attr(data-tooltip);
        transition: opacity 0.6s;
    }
    .wrap .sect-account .box-copy .btn-copy:after {
        position: absolute;
        right: 23px;
        bottom: 36px;
        width: 0;
        height: 0;
        border-right: 7px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.9);
        border-left: 7px solid transparent;
        opacity: 0;
        visibility: hidden;
        z-index: 10;
        content: '';
        transition: opacity 0.6s;
    }
    .wrap .sect-account .box-copy .btn-copy.on:before {
        opacity: 1;
        visibility: visible;
    }
    .wrap .sect-account .box-copy .btn-copy.on:after {
        opacity: 1;
        visibility: visible;
    }
    .wrap .sect-account .withdrawal {
        margin-top: 60px;
        text-align: right;
    }
    .wrap .sect-account .withdrawal .btn-go {
        display: inline-block;
        color: #b9bcc1;
        font-size: 14px;
    }
    .wrap .sect-account .withdrawal .btn-go:after {
        width: 16px;
        height: 16px;
        margin-top: 1px;
        background-color: #b9bcc1;
    }
    .wrap .sect-account .account-cont[data-type='profile'] .btn-back {
        margin-bottom: 10px;
    }
    .wrap .sect-account .account-cont[data-type='profile'] .subtit-withdrawal {
        font-size: 16px;
        text-align: center;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .subtit-withdrawal:before {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_warning.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-account .account-cont[data-type='profile'] .note-withdrawal {
        margin-top: 10px;
        border-radius: 14px;
        border: 2px solid #e6e8ec;
    }
    .wrap .sect-account .account-cont[data-type='profile'] .total-withdrawal {
        background-color: #fff;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .status {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 16px 6px 0;
        font-size: 14px;
        line-height: 20px;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .status
        > dd {
        color: #142b3d;
        font-size: 16px;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .status
        span {
        display: inline-block;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .msg {
        margin: 10px 0;
        padding: 12px 12px 12px 36px;
        border-radius: 10px;
        background-color: #e8fff1;
        background-position: 12px 12px;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .msg.error {
        background-color: #fff0f0;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .go {
        padding-bottom: 20px;
        text-align: right;
    }
    .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        > li:last-child
        .go {
        padding-bottom: 18px;
    }
    [data-dark='true'] .wrap .sect-account .list-go a[target='_blank']:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h12v12H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 3v1H2.5v5.5H8V7h1v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h3zm5.5-1.5v4h-1V3.207L5.604 7.104l-.708-.708L8.793 2.5H6.5v-1h4z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-account .select-nav .btn-select.home:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .select-nav .btn-select.set:before {
        background-color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .select-nav
        .btn-select.wallet:before {
        background-color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .select-nav
        .btn-select.history:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .select-nav .btn-select.noti:before {
        background-color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .select-nav
        .btn-select.inven:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .select-nav .list-select {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
    }
    [data-dark='true'] .wrap .sect-account .select-nav .list-select a {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-account .select-nav .list-select a:before {
        background-color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .select-nav
        .list-select
        .list-go:before {
        background-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-account .tooltip > span:after {
        border-top: 6px solid rgba(255, 255, 255, 0.9);
    }
    [data-dark='true'] .wrap .sect-account .list-account .tit-info {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-account .subtit-info {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-account .list-account input {
        color: #b1b5c3;
    }
    [data-dark='true'] .wrap .sect-account .list-account .box-name .btn-edit {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h18v18H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='m4.81 12 7.607-7.606-1.06-1.061L3.75 10.94V12h1.06zm.622 1.5H2.25v-3.182l8.576-8.576a.75.75 0 0 1 1.06 0l2.123 2.121a.75.75 0 0 1 0 1.06L5.431 13.5zM2.25 15h13.5v1.5H2.25V15z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-account .list-account .box-name .count {
        color: #b1b5c3;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .list-account
        .box-name
        .count
        > span {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-account .input-area {
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-account .list-account .box-prof .wrap-guide {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-account .box-bg {
        background-color: #212226;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-account .box-bg .wrap-guide {
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-account .list-link {
        border-color: #33353b;
    }
    [data-dark='true'] .wrap .sect-account .list-account .list-link > li {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-account .list-account .list-link .custom {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-account
        .list-account
        .wrap-btn
        .btn-deposit {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M2.5 15.833h15V17.5h-15v-1.667zm8.333-4.856 5.06-5.06 1.178 1.178L10 14.167 2.93 7.096l1.177-1.18 5.06 5.059V1.667h1.666v9.31z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-account
        .list-account
        .wrap-btn
        .btn-withdraw {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M2 12.667h12V14H2v-1.333zm6.667-8.782v7.448H7.333V3.885L3.286 7.933l-.943-.942L8 1.333l5.657 5.657-.943.943-4.047-4.046v-.002z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-account .top-search dt {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .top-search
        .list-period
        .box-period {
        border-color: #33353b;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='M14.167 2.5H17.5c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h3.333V.833H7.5V2.5h5V.833h1.667V2.5zM12.5 4.167h-5v1.666H5.833V4.167h-2.5V7.5h13.334V4.167h-2.5v1.666H12.5V4.167zm4.167 5H3.333v6.666h13.334V9.167z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true']
        .wrap
        .sect-account
        .top-search
        .list-period
        .box-period
        > span {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .top-type .note {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .top-type .note:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .wrap-none {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-account .wrap-none .desc-none {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .top-inven {
        border-color: #28282b;
    }
    [data-dark='true'] .wrap .sect-account .top-inven .total {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .btn-back {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-account .list-total .list-balance label {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-total .limit {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-total input {
        background-color: #141416;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .agree label {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .box-ust .unit {
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .box-note .minimum:before {
        background-color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-quantity > li > button {
        border-color: #33353b;
        color: #fff;
    }
    [data-dark='true'] .wrap .sect-account .list-quantity > li > button:hover {
        border-color: #717580;
    }
    [data-dark='true'] .wrap .sect-account .note-withdraw {
        border-color: #33353b;
        background-color: #1c1d21;
    }
    [data-dark='true'] .wrap .sect-account .box-copy .btn-copy {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3Cpath fill='%23b1b5c3' fill-rule='nonzero' d='M4.543 4.543V2.47c0-.382.31-.691.692-.691h8.296c.382 0 .691.31.691.691v8.296c0 .382-.31.692-.691.692h-2.074v2.074a.694.694 0 0 1-.696.691H2.474a.692.692 0 0 1-.696-.691l.002-8.296c0-.382.311-.692.696-.692h2.067zm-1.38 1.383L3.16 12.84h6.914V5.926H3.163zm2.763-1.383h4.53a1 1 0 0 1 1 1v4.531h1.384V3.16H5.926v1.383z'/%3E%3C/g%3E%3C/svg%3E");
    }
    [data-dark='true'] .wrap .sect-account .box-copy .btn-copy:before {
        background-color: rgba(255, 255, 255, 0.96);
        color: #141416;
    }
    [data-dark='true'] .wrap .sect-account .box-copy .btn-copy:after {
        border-top: 6px solid rgba(255, 255, 255, 0.96);
    }
    [data-dark='true'] .wrap .sect-account .withdrawal .btn-go {
        color: #484c55;
    }
    [data-dark='true'] .wrap .sect-account .withdrawal .btn-go:after {
        background-color: #484c55;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .account-cont[data-type='profile']
        .note-withdrawal {
        border-color: #33353b;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal {
        border-color: #33353b;
        background-color: #141416;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .status
        > dd {
        color: #fff;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .msg {
        background-color: #183725;
    }
    [data-dark='true']
        .wrap
        .sect-account
        .account-cont[data-type='profile']
        .total-withdrawal
        .msg.error {
        background-color: #331313;
    }
    .wrap .sect-complete .contents {
        padding-bottom: 120px;
        text-align: center;
    }
    .wrap .sect-complete .tit {
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 26px;
    }
    .wrap .sect-complete .tit:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_check.png)
            0 0 no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-complete .desc {
        line-height: 20px;
    }
    .wrap .sect-complete .btn-go {
        margin-top: 30px;
    }
    .wrap .layer-detail {
        padding: 60px 25px;
    }
    .wrap .layer-detail .layer {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        max-height: 100%;
        padding: 60px 25px 25px;
    }
    .wrap .layer-detail .scroll {
        overflow-y: auto;
        height: 100%;
    }
    .wrap .layer-detail .tit-layer {
        margin-bottom: 20px;
        text-align: center;
    }
    .wrap .layer-detail .item {
        padding: 0;
        border: 0;
    }
    .wrap .layer-detail .item .wrap-thumb {
        width: 200px;
    }
    .wrap .layer-detail .item .wrap-detail {
        color: #67737f;
    }
    .wrap .sect-error:first-child {
        margin-top: -60px;
    }
    .wrap .sect-error .contents {
        text-align: center;
    }
    .wrap .sect-error .logo {
        width: 136px;
        margin-bottom: 20px;
    }
    .wrap .sect-error .tit {
        font-size: 22px;
        line-height: 26px;
    }
    .wrap .sect-error .tit:before {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: '';
    }
    .wrap .sect-error[data-type='404'] .tit:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/img_warning.png);
    }
    .wrap .sect-error[data-type='500'] .tit:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_skull.png);
    }
    .wrap .sect-error[data-type='server'] .tit:before {
        background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_clock.png);
    }
    .wrap .sect-error .desc {
        margin-top: 10px;
        line-height: 20px;
    }
    .wrap .sect-error .code {
        margin-top: 10px;
        color: #00b1ff;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
        font-size: 16px;
        line-height: 20px;
    }
    .wrap .sect-error .schedule + .desc {
        margin-top: 20px;
    }
    .wrap .sect-error .schedule {
        margin-top: 30px;
        font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
    }
    .wrap .sect-error .schedule > dt {
        color: #142b3d;
        font-size: 18px;
        line-height: 22px;
    }
    .wrap .sect-error .schedule > dd {
        margin-top: 10px;
        color: #00b1ff;
        font-size: 16px;
    }
    .wrap .sect-error[data-type='notice'] .contents {
        padding-top: 70px;
        padding-bottom: 70px;
    }
    .wrap .sect-error[data-type='notice'] .tit {
        margin-top: 40px;
    }
    .wrap .sect-error[data-type='notice'] .tit:before {
        content: none;
    }
    [data-dark='true'] .wrap .sect-error .schedule > dt {
        color: #fff;
    }
    @media screen and (min-width: 600px) {
        .wrap .layer-send {
            overflow-y: auto;
        }
        .wrap .layer-send .layer {
            height: auto;
            margin: auto;
            padding-bottom: 0;
        }
        .wrap .layer-send .scroll {
            height: auto;
            padding-bottom: 12px;
        }
        .wrap .layer-send .item {
            display: flex;
            align-items: center;
        }
        .wrap .layer-send .item .wrap-detail {
            flex: 1;
            margin-top: 0;
            padding-left: 20px;
        }
        .wrap .layer-send .box-name .msg {
            padding-right: 16px;
            padding-left: 44px;
        }
        .wrap .layer-send .wrap-btn {
            position: static;
        }
        .wrap .layer-agree {
            overflow-y: auto;
        }
        .wrap .layer-agree .layer {
            height: auto;
            margin: auto;
            padding-bottom: 0;
        }
        .wrap .layer-agree .scroll {
            height: auto;
        }
        .wrap .layer-agree .wrap-btn {
            position: static;
            margin: 0 25px;
        }
    }
    @media screen and (min-width: 640px) {
        .wrap .layer-video {
            padding: 0 80px;
        }
        .wrap .layer-video .btn-close {
            right: -60px;
            top: 0;
        }
    }
    @media screen and (min-width: 695px) {
        .wrap.main section .contents {
            max-width: 768px;
        }
        .wrap .list-nft {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 25px;
            column-gap: 25px;
        }
    }
    @media screen and (min-width: 1180px) {
        .wrap .wrap-tbl .tbl .price .ust {
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .list-status dl {
            height: 78px;
        }
        .wrap .list-status dl > dt {
            padding-left: 42px;
        }
        .wrap .list-status dl > dt:before {
            width: 36px;
            height: 36px;
            margin-top: -18px;
        }
        .wrap .list-status dl > dt > span {
            display: block;
            margin-top: 2px;
            color: #1a2b3b;
            font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
            font-size: 16px;
            line-height: 20px;
        }
        .wrap .list-status dl > dd {
            font-size: 20px;
        }
        [data-dark='true'] .wrap .list-status dl > dt > span {
            color: #fff;
        }
        .wrap .list-total > li:before {
            margin: 0;
        }
        .wrap .list-total > li:first-child {
            padding-top: 8px;
        }
        .wrap .list-total > li:last-child {
            padding-bottom: 8px;
        }
        .wrap .list-total > li.full > dl {
            padding: 20px 0;
        }
        .wrap .list-total > li.full > dl > dt {
            padding: 0 10px;
        }
        .wrap .list-total dl {
            padding: 20px 8px 20px 10px;
        }
        .wrap .list-total dl > dd .usd {
            display: inline-block;
            vertical-align: middle;
        }
        .wrap .list-total dl > dd .ust {
            display: inline-block;
            vertical-align: middle;
        }
        .wrap .header .nav--menu > li:first-child .submenu {
            display: none;
        }
        .wrap .header .nav--menu .soon {
            position: absolute;
            left: 50%;
            top: -2px;
            padding: 0 6px;
            border-radius: 4px;
            font-size: 10px;
            line-height: 20px;
            white-space: nowrap;
            transform: translateX(-50%);
        }
        .wrap .header .nav--menu .soon:after {
            display: block;
            position: absolute;
            left: 50%;
            top: 100%;
            width: 0;
            height: 0;
            border-top: 4px solid #dcf4ff;
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
            transform: translateX(-50%);
            content: '';
        }
        [data-dark='true'] .wrap .header .nav--menu .soon:after {
            border-top: 4px solid #003d57;
        }
        .wrap.account .header > .contents {
            padding: 0 80px;
        }
        .wrap.account .header .logo {
            width: 96px;
            background-size: 96px auto;
        }
        .wrap.account .header [class^='account'] .contents {
            box-shadow: none;
        }
        .wrap.account .footer .contents {
            padding-right: 80px;
            padding-left: 80px;
        }
        .wrap.account .footer--bot {
            display: flex;
        }
        .wrap.account .footer--bot .copyright .logo {
            width: 90px;
            height: 30px;
            margin-bottom: 0;
        }
        .wrap.account .footer--bot .link {
            margin-top: 0;
        }
        .wrap.main section .contents {
            padding-right: 30px;
            padding-left: 30px;
            max-width: 1320px;
        }
        .wrap.main section .tit {
            font-size: 30px;
        }
        .wrap .slide-nft {
            padding-top: 24px;
            padding-bottom: 36px;
        }
        .wrap .slide-nft .swiper-scrollbar {
            right: 0;
        }
        .wrap .list-nft {
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 30px;
            column-gap: 30px;
            grid-row-gap: 30px;
            row-gap: 30px;
        }
        .wrap .item-nft:hover {
            transform: translateY(-4px);
            transition: transform 0.1s ease-in-out;
        }
        .wrap .bnn-main {
            padding: 0 30px;
        }
        .wrap .bnn-main .slide-main {
            position: relative;
            height: 680px;
            margin: 0;
            padding: 0;
            border-radius: 30px;
        }
        .wrap .bnn-main .slide-main .swiper-slide > a {
            padding-bottom: 120px;
            line-height: 1.5;
        }
        .wrap .bnn-main .slide-main .arrows {
            display: block;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }
        .wrap .bnn-main .slide-main .arrows [class^='swiper-button-'] {
            position: static;
            width: 40px;
            height: 40px;
            border-color: rgba(255, 255, 255, 0.4);
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E")
                50% 50% no-repeat;
            background-size: 20px 20px;
        }
        .wrap .bnn-main .slide-main .arrows .swiper-button-prev {
            margin-top: 0;
        }
        .wrap .bnn-main .slide-main .arrows .swiper-button-next {
            margin-top: 10px;
        }
        .wrap .bnn-main .slide-main .arrows [class^='swiper-button-']:hover {
            border-color: rgba(255, 255, 255, 0.8);
        }
        .wrap .bnn-main .box-bnn {
            max-width: 1890px;
            margin: 0 auto;
            padding: 0 100px;
        }
        .wrap .bnn-main .list-countdown dt {
            margin-bottom: 10px;
        }
        .wrap .bnn-main .list-countdown .countdown .time {
            width: 78px;
            height: 78px;
            padding-top: 12px;
            font-size: 30px;
        }
        .wrap .bnn-main .list-countdown .countdown .colon {
            width: 26px;
        }
        .wrap .bnn-main .product {
            max-width: 800px;
            margin-top: 20px;
            font-size: 44px;
            line-height: 50px;
        }
        .wrap .bnn-main .desc {
            display: block;
            max-width: 800px;
            margin-top: 10px;
            opacity: 0.8;
        }
        .wrap .bnn-main [class^='btn-'] {
            display: inline-block;
            margin-top: 30px;
            padding: 0 32px;
            border-radius: 14px;
            border: 2px solid rgba(255, 255, 255, 0.4);
            line-height: 48px;
            cursor: pointer;
        }
        .wrap .bnn-main [class^='btn-']:hover {
            border-color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
        }
        .wrap .bnn-main .btn-video {
            padding: 0 16px 0 44px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415 4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z'/%3E%3C/g%3E%3C/svg%3E")
                16px 50% no-repeat;
            background-size: 24px 24px;
        }
        .wrap .bnn-main [class*='item-'] > a:hover {
            cursor: initial;
        }
        .wrap .sect-monthly .contents {
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .wrap .sect-monthly .tit {
            margin-bottom: 6px;
            padding: 8px 0 0 52px;
            background-size: 44px 44px;
        }
        .wrap .sect-unique .contents {
            padding-top: 0;
            padding-bottom: 0;
        }
        .wrap .sect-unique .unique {
            padding: 66px 25px 60px;
            background: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_unique_light.jpg)
                0 0 no-repeat;
            background-size: 100% 100%;
        }
        .wrap .sect-unique .desc {
            margin-top: 16px;
            font-size: 16px;
            line-height: 26px;
        }
        [data-dark='true'] .wrap .sect-unique .unique {
            background-image: url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/bg_unique_dark.jpg);
        }
        .wrap .sect-explore .contents {
            padding-top: 52px;
        }
        .wrap .sect-explore .header-sect {
            margin-bottom: 10px;
        }
        .wrap .sect-explore .header-sect .tit {
            padding: 8px 0 0 52px;
            background-size: 44px 44px;
        }
        .wrap .sect-explore .header-sect .slide-category {
            width: 100%;
            margin: -46px 0 0;
            padding: 0;
        }
        .wrap
            .sect-explore
            .header-sect
            .slide-category
            .swiper-scrollbar-lock
            + .swiper-wrapper {
            justify-content: center;
        }
        .wrap .sect-explore .btn-discover {
            margin-top: 50px;
        }
        .wrap .layer-video .layer {
            max-width: 1024px;
        }
        .wrap .layer-video .btn-close {
            right: -66px;
            width: 50px;
            height: 50px;
        }
        .wrap .layer-video .btn-close:after {
            transition: transform 0.5s;
        }
        .wrap .layer-video .btn-close:hover:after {
            transform: rotate(360deg);
        }
        .wrap .sect-search .contents {
            padding-bottom: 180px;
        }
        .wrap .sect-search .tit {
            font-size: 32px;
            line-height: 36px;
        }
        .wrap .sect-search .wrap-tab {
            margin-top: 60px;
        }
        .wrap .sect-search .result-none {
            margin-top: 100px;
        }
        .wrap .sect-search .result-none .subtit {
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-search .result-none .subtit:after {
            width: 160px;
            height: 160px;
            margin-top: 0;
        }
        .wrap .sect-search .loading {
            margin-bottom: -100px;
        }
        .wrap .sect-login {
            margin-top: 0;
        }
        .wrap .sect-login .contents {
            max-width: 660px;
            margin: 0 auto;
            padding-top: 60px;
            padding-bottom: 120px;
        }
        .wrap .sect-login[data-type='login'] .contents {
            max-width: 560px;
        }
        .wrap .sect-login[data-type='connect'] .contents {
            padding-top: 120px;
            padding-bottom: 200px;
        }
        .wrap .sect-login[data-type='connect'] .desc {
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-login[data-type='connect'] .desc:before {
            width: 160px;
            height: 160px;
            margin-bottom: 20px;
        }
        .wrap .sect-login[data-type='connect'] .wrap-btn {
            margin-top: 50px;
        }
        .wrap .sect-login[data-type='fin'] .desc {
            margin-top: 50px;
            font-size: 24px;
            line-height: 30px;
        }
        .wrap .sect-login[data-type='fin'] .wrap-btn {
            width: 100%;
            margin-top: 40px;
        }
        .wrap .sect-login[data-type='term'] .contents {
            max-width: 760px;
        }
        .wrap .sect-login .progress:before {
            width: 160px;
            height: 160px;
        }
        .wrap .sect-login .tit {
            margin-top: 30px;
        }
        .wrap .sect-login .desc {
            line-height: 24px;
        }
        .wrap .sect-login .list-login {
            margin-top: 50px;
        }
        .wrap .sect-login .list-login > li {
            margin-top: 14px;
        }
        .wrap .sect-login .list-login button {
            padding-left: 62px;
        }
        .wrap .sect-login .list-login button:hover {
            border-color: #c0c3cb;
        }
        .wrap .sect-login .access-area {
            margin-top: 40px;
        }
        .wrap .sect-login .list-term {
            margin-top: 30px;
            padding: 22px 0 25px;
        }
        .wrap .sect-login .list-term > li {
            padding: 0 26px 0 28px;
            line-height: 24px;
        }
        .wrap .sect-login .list-term > li:first-child {
            padding: 0 26px 20px 28px;
            font-size: 18px;
        }
        .wrap .sect-login .list-term > li:nth-child(2) {
            margin-top: 30px;
        }
        .wrap .sect-login .list-term label {
            padding-left: 34px;
        }
        .wrap .sect-login .list-term label:before {
            left: 2px;
            top: 2px;
        }
        .wrap .sect-login .list-term > li:first-child label {
            padding: 0 0 0 34px;
        }
        .wrap .sect-login .list-term > li:first-child label:before {
            left: 0;
            top: 0;
        }
        .wrap .sect-login .list-term .has-toggle {
            margin-top: 17px;
            padding-top: 3px;
        }
        .wrap .sect-login .list-term .has-toggle + .has-toggle {
            margin-top: 14px;
        }
        .wrap .sect-login .list-term .has-toggle > label {
            min-height: 27px;
            padding-right: 42px;
        }
        .wrap .sect-login .list-term a:hover {
            text-decoration: underline;
        }
        .wrap .sect-login .list-term .btn-toggle {
            right: 28px;
        }
        .wrap .sect-login .list-term .area-toggle {
            margin: 7px -26px 3px -28px;
            padding: 20px 26px 28px 28px;
        }
        .wrap .sect-login .list-term .area-toggle .tbl-agree {
            width: calc(100% - 32px);
            margin: 10px 0 0 32px;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .sect-login .list-term .area-toggle .tbl-agree th {
            padding: 12px;
        }
        .wrap .sect-login .list-term .area-toggle .tbl-agree td {
            padding: 12px;
        }
        .wrap .sect-login .list-term .area-toggle .tbl-agree td strong {
            font-size: 16px;
            line-height: 20px;
        }
        .wrap .sect-login .list-term .area-toggle .list-agree {
            margin-top: 14px;
            padding-left: 34px;
            font-size: 13px;
            line-height: 18px;
        }
        .wrap .sect-login .list-term .area-toggle .list-agree > li:before {
            top: 7px;
        }
        .wrap
            .sect-login
            .list-term
            .area-toggle
            .list-agree
            > li:nth-child(n + 2) {
            margin-top: 10px;
        }
        .wrap .sect-login .list-term .area-toggle .desc-agree {
            margin-top: 14px;
            padding-left: 34px;
            font-size: 13px;
            line-height: 18px;
        }
        .wrap .sect-login .list-term > li:last-child .area-toggle {
            margin-bottom: -25px;
        }
        .wrap .sect-login .box-name {
            margin-top: 30px;
        }
        .wrap .sect-login .box-name input {
            height: 62px;
            padding: 0 82px 0 22px;
            font-size: 18px;
        }
        .wrap .sect-login .box-name .count {
            right: 18px;
            top: 20px;
        }
        .wrap .sect-login .box-name .msg {
            padding-right: 20px;
            padding-left: 48px;
        }
        .wrap .sect-login[data-type='fin'] .desc {
            margin-top: 50px;
            font-size: 30px;
            line-height: 38px;
        }
        .wrap .sect-login[data-type='fin'] .wrap-btn {
            width: 100%;
            margin-top: 40px;
        }
        .wrap .sect-login[data-type='identity'] .desc {
            margin-top: 20px;
        }
        .wrap .sect-login[data-type='identity'] .wrap-btn {
            margin-top: 40px;
        }
        .wrap .sect-login[data-type='error'] .tit {
            margin-top: 50px;
            font-size: 30px;
        }
        .wrap .sect-login[data-type='error'] .wrap-btn {
            margin-top: 40px;
        }
        .wrap .sect-login[data-type='auth'] .desc {
            margin-top: 20px;
        }
        .wrap .sect-login[data-type='auth'] .id-card {
            padding: 34px 0 28px;
            line-height: 24px;
        }
        .wrap .sect-login[data-type='auth'] .id-card > img {
            margin-bottom: 18px;
        }
        .wrap .sect-login .btn-go {
            margin-top: 60px;
            line-height: 24px;
        }
        .wrap .sect-login .btn-go:after {
            margin-top: 1px;
        }
        .wrap .sect-login .btns-go {
            margin-top: 60px;
        }
        .wrap .sect-login .btns-go .btn-privacy {
            line-height: 24px;
        }
        .wrap .sect-login .btns-go .btn-privacy:after {
            width: 2px;
            height: 14px;
            margin: 5px 20px 0;
        }
        .wrap .sect-agree {
            margin: -70px auto 0;
        }
        .wrap .sect-agree .contents {
            max-width: 850px;
            padding-top: 130px;
            line-height: 1.5;
        }
        .wrap .sect-agree .tit {
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-agree .tit:before {
            width: 160px;
            height: 160px;
        }
        .wrap .sect-agree .agree-cont {
            margin-top: 30px;
            padding-bottom: 60px;
        }
        .wrap .sect-agree .agree-cont .list-agree {
            margin: 30px 0;
        }
        .wrap .sect-agree .agree-cont .list-agree > li:nth-child(n + 2) {
            margin-top: 30px;
        }
        .wrap .sect-agree .fix-bot {
            max-width: 690px;
            background-color: #fff;
        }
        .wrap .sect-agree .fix-bot .box-bot {
            padding: 30px 0 40px;
            border-top: 1px solid #e6e8ec;
        }
        .wrap .sect-agree .fix-bot .agree {
            margin-top: 0;
        }
        .wrap .sect-agree .fix-bot .agree label {
            margin-top: 0;
        }
        .wrap .sect-agree .fix-bot .agree label:nth-of-type(1) {
            margin-right: 40px;
        }
        .wrap .sect-agree .fix-bot .wrap-btn {
            margin-top: 30px;
        }
        [data-dark='true'] .wrap .sect-agree .fix-bot {
            background-color: #141416;
        }
        [data-dark='true'] .wrap .sect-agree .fix-bot .box-bot {
            border-color: #28282b;
        }
        .wrap .store-category {
            height: 310px;
        }
        .wrap .store-category .contents {
            padding: 30px 132px 0;
        }
        .wrap .store-category .slide-category {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .wrap .store-category .slide-category .swiper-scrollbar {
            display: none;
        }
        .wrap .store-category .slide-category .swiper-wrapper {
            justify-content: flex-start;
            max-width: 100%;
            margin-right: 0;
        }
        .wrap
            .store-category
            .slide-category
            .swiper-scrollbar-lock
            + .swiper-wrapper {
            justify-content: center;
        }
        .wrap .store-category [class^='swiper-button-'] {
            top: 31px;
            display: block;
            width: 40px;
            height: 40px;
            margin: 0;
            border: 2px solid rgba(255, 255, 255, 0.2);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M7.076 6 3 10.076l4.076 4.077 1.165-1.165L6.152 10.9H17V9.253H6.152l2.089-2.089z'/%3E%3C/svg%3E");
            transition: border 0.5s;
        }
        .wrap .store-category [class^='swiper-button-']:hover {
            border: 2px solid rgba(255, 255, 255, 0.6);
        }
        .wrap .store-category .swiper-button-prev {
            left: 80px;
        }
        .wrap .store-category .swiper-button-next {
            right: 80px;
        }
        .wrap .store-category .tit-category {
            height: 228px;
            margin-top: 0;
            font-size: 40px;
        }
        .wrap .coupon-regist .contents {
            padding-top: 30px;
        }
        .wrap .coupon-regist .btn-regist:hover {
            border-color: #1a2b3b;
        }
        [data-dark='true'] .wrap .coupon-regist .btn-regist:hover {
            border-color: #fff;
        }
        .wrap .bnn-store {
            padding: 0 80px 50px;
        }
        .wrap .bnn-store .slide-bnn .item-bnn {
            border-radius: 20px;
        }
        .wrap .sect-popular .contents {
            padding-bottom: 80px;
        }
        .wrap .sect-popular .tit {
            font-size: 36px;
            line-height: 42px;
        }
        .wrap.store .sect-popular .contents {
            padding-top: 100px;
        }
        .wrap.store .sect-popular .slide-product {
            margin-top: 28px;
        }
        .wrap .coupon-regist + .sect-popular {
            margin-top: -100px;
        }
        .wrap .coupon-regist + .sect-popular .contents {
            padding-top: 100px;
        }
        .wrap .sect-all .head-sect {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
        }
        .wrap .sect-all .head-sect .tit {
            margin-bottom: 0;
            font-size: 36px;
            line-height: 42px;
        }
        .wrap .sect-all .all-none {
            margin-top: 100px;
            padding-bottom: 100px;
        }
        .wrap .sect-all .all-none .subtit {
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-all .all-none .subtit:after {
            width: 160px;
            height: 160px;
            margin-top: 0;
        }
        .wrap .sect-all .count-nft {
            margin-top: 25px;
        }
        .wrap .sect-all .layer-filter.on + .count-nft {
            margin-top: 28px;
        }
        .wrap .sect-popular + .sect-all .contents {
            padding-top: 97px;
        }
        .wrap .coupon-regist + .sect-all .contents {
            padding-top: 30px;
        }
        .wrap .bnn-store + .sect-all .contents {
            padding-top: 16px;
        }
        .wrap .list-desc > dt {
            height: 52px;
            padding: 0 20px;
            font-size: 20px;
        }
        .wrap .list-desc > dd {
            padding: 20px 20px 60px;
            line-height: 1.5;
        }
        .wrap .list-desc > dd > a:hover {
            text-decoration: underline;
        }
        .wrap .list-desc .item-info {
            overflow-x: unset;
            flex-wrap: wrap;
            gap: 10px;
            margin: 0;
            line-height: 18px;
            white-space: nowrap;
        }
        .wrap .list-desc .item-info > li {
            margin-left: 0;
        }
        .wrap .list-desc .wrap-grade {
            position: relative;
            margin: 0;
            padding-top: 50px;
        }
        .wrap .list-desc .wrap-grade .grade-bar {
            padding: 6px;
            font-size: 12px;
        }
        .wrap .list-desc .wrap-grade .grade-bar > li {
            height: 44px;
            border-width: 4px;
            line-height: 44px;
            transition: background-color 0.2s;
        }
        .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(1):hover {
            background-color: #7e7e94;
        }
        .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(2):hover {
            background-color: #1ba1d0;
        }
        .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(3):hover {
            background-color: #cb288b;
        }
        .wrap .list-desc .wrap-grade .grade-bar > li:nth-child(4):hover {
            background-color: #5331d8;
        }
        .wrap .list-desc .wrap-grade .grade-ratio {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            right: 0;
            top: 20px;
            margin-top: 0;
            padding: 0;
        }
        .wrap .list-desc .wrap-grade .grade-ratio > li {
            margin-top: 0;
            margin-left: 20px;
        }
        .wrap .list-desc .wrap-grade .grade-ratio .grade {
            float: none;
            padding: 0;
        }
        .wrap .list-desc .wrap-grade .grade-ratio .percent {
            display: none;
        }
        .wrap .list-desc .caption-tbl {
            margin: 0 0 10px;
            line-height: 22px;
        }
        .wrap .list-desc .wrap-tbl {
            max-width: 100%;
            margin: 0;
        }
        .wrap .list-desc .wrap-tbl .tbl {
            width: 100%;
            font-size: 16px;
        }
        .wrap .list-desc .wrap-tbl .tbl th:nth-child(1) {
            width: 25.4%;
        }
        .wrap .list-desc .wrap-tbl .tbl th:nth-child(2) {
            width: 18.67%;
        }
        .wrap .list-desc .wrap-tbl .tbl th:nth-child(3) {
            width: 35.61%;
        }
        .wrap .list-desc .wrap-tbl .tbl th:nth-child(4) {
            width: 20.32%;
        }
        .wrap .list-desc .wrap-tbl .tbl .price .ust {
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .list-desc .wrap-tbl .none td {
            padding: 65px 20px;
        }
        .wrap .list-desc .wrap-tbl .none:hover td {
            background-color: transparent;
        }
        .wrap .list-desc .more {
            margin-top: 20px;
        }
        .wrap .list-desc .more .btn-more {
            padding: 0 26px;
            line-height: 46px;
        }
        .wrap .list-desc .more .btn-more:hover {
            border-color: #cfd1d6;
        }
        .wrap .list-desc .slide-product {
            max-width: none;
            margin: 0 -20px;
            padding-left: 0;
        }
        .wrap .list-desc .slide-product .swiper-scrollbar {
            left: 0;
            right: 0;
        }
        .wrap .list-desc .slide-product .item-product {
            width: 236px;
        }
        .wrap .list-desc .slide-product .item-product:hover {
            box-shadow: none;
        }
        .wrap .list-desc .slide-product .item-product:hover .product {
            text-decoration: underline;
        }
        .wrap .list-desc .slide-product .item-product > a {
            padding: 20px;
        }
        .wrap .list-desc .scrollbar {
            width: auto;
            margin: 0 -20px;
        }
        .wrap .list-desc .btns-history {
            justify-content: flex-start;
            margin: 0 -6px -22px;
        }
        [data-dark='true'] .wrap .list-desc .wrap-grade .grade-bar > li {
            color: #141416;
        }
        [data-dark='true']
            .wrap
            .list-desc
            .wrap-grade
            .grade-bar
            > li:nth-child(1):hover {
            background-color: #b6b6c2;
        }
        [data-dark='true']
            .wrap
            .list-desc
            .wrap-grade
            .grade-bar
            > li:nth-child(2):hover {
            background-color: #6bd1f5;
        }
        [data-dark='true']
            .wrap
            .list-desc
            .wrap-grade
            .grade-bar
            > li:nth-child(3):hover {
            background-color: #ee73bd;
        }
        [data-dark='true']
            .wrap
            .list-desc
            .wrap-grade
            .grade-bar
            > li:nth-child(4):hover {
            background-color: #977efb;
        }
        [data-dark='true'] .wrap .list-desc .wrap-tbl {
            max-width: 100%;
            margin: 0;
        }
        [data-dark='true'] .wrap .list-desc .wrap-tbl .tbl .none:hover td {
            background-color: transparent;
        }
        .wrap .sect-detail .contents {
            display: flex;
            justify-content: space-between;
            padding-top: 60px;
            padding-bottom: 60px;
        }
        .wrap .sect-detail .btns-top {
            position: absolute;
            right: 80px;
            top: 60px;
            margin-bottom: 0;
            z-index: 1;
        }
        .wrap .sect-detail .btns-top button:hover {
            border-color: #cfd1d6;
        }
        .wrap .sect-detail .btns-top .more .submenu a:hover {
            background-color: #f6f7f9;
        }
        .wrap .sect-detail .wrap-thumb {
            width: 43.13%;
        }
        .wrap .sect-detail .wrap-thumb .slide-thumb {
            width: 100%;
            margin-left: 0;
            padding-bottom: 24px;
        }
        .wrap .sect-detail .wrap-thumb .slide-thumb .swiper-scrollbar {
            left: 0;
            right: 0;
            margin-top: 0;
        }
        .wrap .sect-detail .wrap-detail {
            width: 56.87%;
            margin-top: 0;
            padding-left: 80px;
        }
        .wrap .sect-detail .wrap-detail .artist .pic {
            width: 42px;
            height: 42px;
        }
        .wrap .sect-detail .wrap-detail .artist .name {
            max-width: calc(100% - 112px);
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-detail .wrap-detail .product {
            margin-top: 18px;
            font-size: 36px;
        }
        .wrap .sect-detail .wrap-detail .series {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-detail .wrap-detail .sales {
            padding: 30px 0 0;
        }
        .wrap .sect-detail .wrap-detail .sales [class^='list-'] {
            padding-bottom: 30px;
        }
        .wrap .sect-detail .wrap-detail .sales [class^='list-']:nth-child(odd) {
            width: 240px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-serial > dd {
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-serial > dd > span {
            font-size: 20px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-amount > dd {
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-amount > dd > span {
            font-size: 20px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-start:first-child {
            width: 100%;
        }
        .wrap .sect-detail .wrap-detail .sales .list-start > dd {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-price > dd {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-price > dd .usd {
            margin-bottom: 4px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-buying > dd {
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-buying > dd .usd {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-edit {
            width: 100% !important;
        }
        .wrap .sect-detail .wrap-detail .sales .list-edit > dd {
            margin-top: -10px;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-edit > dd .price {
            margin-top: 10px;
            margin-right: 10px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-edit > dd .usd {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-edit > dd .btn-edit {
            margin-top: 10px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-countdown dt .super {
            top: -3px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-countdown .countdown {
            margin-top: 10px;
        }
        .wrap .sect-detail .wrap-detail .sales .list-seller {
            width: 100% !important;
        }
        .wrap .sect-detail .wrap-detail .sales .list-selling {
            width: 100% !important;
        }
        .wrap .sect-detail .wrap-detail .sales .list-selling .convert {
            font-size: 14px;
            line-height: 20px;
        }
        .wrap
            .sect-detail
            .wrap-detail
            .sales
            .list-selling
            .sub-price
            > dt
            .tooltip
            > span:before {
            max-width: 340px;
            margin-left: 12px;
            transform: translateX(-50%);
        }
        .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price .usd {
            display: inline-block;
            vertical-align: middle;
        }
        .wrap .sect-detail .wrap-detail .sales .list-selling .sub-price .ust {
            display: inline-block;
            vertical-align: middle;
        }
        .wrap .sect-detail .wrap-detail .sales .list-date .input-date {
            width: 240px;
            font-size: 14px;
        }
        .wrap .sect-detail .wrap-detail .sales .agree {
            padding-bottom: 30px;
        }
        .wrap .sect-detail .wrap-detail .sales .agree label {
            padding-top: 2px;
        }
        .wrap .sect-detail .wrap-detail .sales .agree label > a:hover {
            text-decoration: underline;
        }
        .wrap .sect-detail .wrap-detail .wrap-desc {
            margin-top: 4px;
            margin-bottom: 0;
        }
        .wrap .sect-detail .wrap-detail .wrap-desc .list-desc > dt {
            font-size: 16px;
        }
        .wrap .sect-detail .wrap-detail .wrap-desc .list-desc > dd {
            padding-bottom: 24px;
            padding-top: 24px;
        }
        .wrap .sect-detail .wrap-detail .wrap-desc .list-require > li {
            margin-top: 20px;
            padding-right: 40px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-countdown {
            padding: 28px 28px 22px;
        }
        .wrap .sect-detail .wrap-detail .auction .countdown .time {
            width: 74px;
            height: 74px;
            padding-top: 12px;
            font-size: 30px;
        }
        .wrap .sect-detail .wrap-detail .auction .countdown .colon {
            width: 26px;
        }
        .wrap .sect-detail .wrap-detail .auction .duration {
            margin-top: 20px;
        }
        .wrap .sect-detail .wrap-detail .auction .wrap-price {
            padding: 30px 28px 28px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price {
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price > dt {
            font-size: 14px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price .usd {
            margin-top: 0;
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price .ust {
            font-size: 14px;
            line-height: 18px;
        }
        .wrap
            .sect-detail
            .wrap-detail
            .auction
            .list-price
            dd.has-tooltip
            .tooltip
            > span:before {
            max-width: 340px;
            margin-right: -30px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding {
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding > dt {
            width: auto;
            padding-top: 14px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding > dd {
            width: 260px;
            margin-top: 0;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding input {
            padding: 0 14px 0 42px;
            background: #fff
                url(https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ico_dollar_light.png)
                12px 50% no-repeat;
            background-size: 24px 24px;
            font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
            font-size: 16px;
            text-align: right;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding .convert {
            padding: 0 10px;
            font-size: 14px;
            line-height: 20px;
        }
        .wrap .sect-detail .wrap-detail .auction .list-price.bidding .minimum {
            padding: 0 10px;
        }
        .wrap .sect-detail .wrap-detail .deposit {
            margin: 0 0 10px;
        }
        .wrap .sect-detail .wrap-detail .fix-bot .viewing {
            margin-top: 0;
            padding: 10px 30px 20px;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .sect-detail .wrap-detail .fix-bot .viewing:before {
            width: 20px;
            height: 20px;
            margin: -1px 6px 0 0;
            background-size: 20px 20px;
        }
        .wrap
            .sect-detail
            .wrap-detail
            .fix-bot
            .wrap-btn.grid
            [class^='btn-'] {
            height: 64px;
        }
        .wrap
            .sect-detail
            .wrap-detail
            .fix-bot
            .wrap-btn.grid
            [class^='btn-']:only-child {
            font-size: 20px;
        }
        .wrap .sect-detail .wrap-detail .deposit ~ .fix-bot .viewing {
            padding-top: 0;
        }
        .wrap .sect-detail[data-type='deposit'] .contents {
            align-items: center;
            padding-bottom: 120px;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail {
            margin-top: 0;
            padding-bottom: 0;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .tit {
            font-size: 36px;
            line-height: 42px;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price {
            margin-top: 30px;
            padding: 0 20px;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .list-price > dt {
            padding-top: 4px;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .wrap-desc {
            overflow-y: auto;
            max-height: 400px;
            margin-top: 30px;
            padding-top: 0;
            padding-bottom: 30px;
            border-top: 0;
            border-bottom: 1px solid #e6e8ec;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .deposit {
            margin-top: 20px;
        }
        .wrap .sect-detail[data-type='deposit'] .wrap-detail .fix-bot {
            margin-top: 10px;
        }
        .wrap .layer-share .layer {
            width: 470px;
            padding: 60px 20px;
        }
        .wrap .layer-share .list-share {
            margin-top: 30px;
        }
        .wrap .layer-share .desc-copy {
            margin-top: 30px;
        }
        .wrap .sect-coupon .contents {
            padding-top: 60px;
            padding-bottom: 120px;
        }
        .wrap .sect-coupon .tit:before {
            width: 160px;
            height: 160px;
        }
        .wrap .sect-coupon .desc {
            line-height: 24px;
        }
        .wrap .sect-coupon .wrap-coupon {
            width: 700px;
            margin: 30px auto;
            padding: 30px 35px;
            border-radius: 20px;
        }
        .wrap .sect-coupon .wrap-coupon input {
            height: 62px;
            margin-top: 16px;
            padding: 0 22px;
            font-size: 18px;
        }
        .wrap .sect-coupon .wrap-btn {
            margin-top: 30px;
        }
        .wrap .sect-coupon .wrap-btn button {
            margin: 0 10px;
        }
        .wrap.market .sect-popular .sly-product {
            margin-top: 28px;
        }
        .wrap.market .sect-all .contents {
            padding-top: 77px;
        }
        .wrap .layer-history {
            padding: 80px 110px;
        }
        .wrap .layer-history .layer {
            max-width: 1220px;
            padding: 80px 60px 60px;
        }
        .wrap .layer-history .caption-tbl {
            margin: 16px 0 12px;
            text-align: right;
        }
        .wrap .layer-history .tbl th:nth-child(1) {
            width: 25.4%;
        }
        .wrap .layer-history .tbl th:nth-child(2) {
            width: 18.67%;
        }
        .wrap .layer-history .tbl th:nth-child(3) {
            width: 35.61%;
        }
        .wrap .layer-history .tbl th:nth-child(4) {
            width: 20.32%;
        }
        .wrap .layer-history.auction .tbl th {
            width: 25%;
        }
        .wrap .layer-send .layer {
            max-width: 620px;
            padding: 60px 60px 20px;
        }
        .wrap .layer-send .scroll {
            padding-bottom: 16px;
        }
        .wrap .layer-send .item {
            padding: 28px;
        }
        .wrap .layer-send .box-name {
            margin-top: 20px;
        }
        .wrap .layer-send .box-name .fee {
            margin-top: 20px;
        }
        .wrap .layer-send .box-name .fee > dd {
            font-size: 14px;
            line-height: 20px;
        }
        .wrap .layer-send .box-name .fee > dd .usd {
            display: inline-block;
            vertical-align: middle;
        }
        .wrap .layer-send .wrap-btn {
            margin-top: 0;
        }
        .wrap .layer-send .wrap-btn [class^='btn-'] {
            flex: unset;
            width: auto;
        }
        .wrap .layer-complete .layer {
            max-width: 620px;
            padding: 60px 25px;
        }
        .wrap .layer-complete .desc {
            line-height: 24px;
        }
        .wrap .layer-complete .desc:after {
            margin-top: 20px;
        }
        .wrap .layer-complete .desc > a:hover {
            text-decoration: underline;
        }
        .wrap .layer-complete .desc > a[target='_blank']:after {
            margin-top: 6px;
        }
        .wrap .layer-complete .wrap-btn {
            margin-top: 20px;
            margin-bottom: -10px;
        }
        .wrap .sect-purchase .contents {
            padding-top: 39px;
        }
        .wrap .sect-purchase .progress {
            margin-bottom: 39px;
        }
        .wrap .sect-purchase .desc {
            margin-top: 10px;
            margin-bottom: 40px;
            line-height: 24px;
        }
        .wrap .sect-purchase .purchase-item {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .wrap .sect-purchase .purchase-item .box-available {
            width: 680px;
        }
        .wrap .sect-purchase .purchase-item .box-available .wrap-tbl th {
            padding: 14px 20px 13px;
            line-height: 20px;
        }
        .wrap .sect-purchase .purchase-item .box-info {
            width: 680px;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-info
            .wrap-tbl.type-2
            .tbl
            th:nth-child(1) {
            width: 204px;
        }
        .wrap .sect-purchase .purchase-item .box-item {
            width: calc(100% - 720px);
            margin-top: 0;
        }
        .wrap .sect-purchase .purchase-item .box-item .item {
            padding: 28px 28px 24px;
        }
        .wrap .sect-purchase .purchase-item .box-item .wrap-thumb {
            margin: 0 auto;
        }
        .wrap .sect-purchase .purchase-item .box-item .wrap-detail {
            width: 100%;
            max-width: 100%;
            margin-top: 30px;
            padding-left: 0;
        }
        .wrap .sect-purchase .purchase-item .box-item .bot {
            margin-top: 20px;
            padding-top: 20px;
        }
        .wrap .sect-purchase .purchase-item .box-item .bot .list-price {
            margin-top: 16px;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-item
            .bot
            .list-price
            > dt
            .tooltip
            > span:before {
            max-width: 340px;
            margin-left: 12px;
            transform: translateX(-50%);
        }
        .wrap .sect-purchase .purchase-item .box-item .fix-bot .wrap-btn {
            flex-wrap: wrap;
            margin: 0;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-item
            .fix-bot
            .wrap-btn
            [class^='btn-'] {
            flex: auto;
            width: 100%;
            margin: 0;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-item
            .fix-bot
            .wrap-btn
            [class^='btn-']
            + [class^='btn-'] {
            margin-top: 10px;
        }
        .wrap .sect-purchase .box-purchase .subtit {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-purchase .box-purchase .list-purchase > li {
            padding: 18px 0;
        }
        .wrap .sect-purchase .box-purchase .list-purchase .tooltip {
            width: 366px;
        }
        .wrap
            .sect-purchase
            .box-purchase
            .list-purchase
            .tooltip
            > span:before {
            max-width: 100%;
            margin-left: 0;
        }
        .wrap .sect-purchase .box-purchase .list-total dl {
            padding: 20px 8px 20px 10px;
        }
        .wrap .sect-purchase .box-purchase .list-total dl > dd .usd {
            font-size: 16px;
        }
        .wrap .sect-purchase .box-purchase .list-total dl > dd .ust {
            font-size: 14px;
            line-height: 20px;
        }
        .wrap .sect-purchase .agree {
            margin-bottom: 20px;
        }
        .wrap .sect-purchase .note-purchase {
            margin: 0;
        }
        .wrap .sect-purchase .note-purchase > a:hover {
            text-decoration: underline;
        }
        .wrap .sect-purchase[data-type='card'] .contents {
            padding-bottom: 120px;
        }
        .wrap .sect-purchase[data-type='card'] .progress {
            margin-bottom: 79px;
        }
        .wrap .sect-purchase[data-type='card'] .desc {
            margin-top: 10px;
            padding-bottom: 190px;
            background-size: 160px 160px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='balance'] .progress {
            margin-bottom: 79px;
        }
        .wrap .sect-purchase[data-type='balance'] .desc {
            margin-top: 10px;
            padding-bottom: 190px;
            background-size: 160px 160px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='balance'] .box-purchase {
            margin-top: 40px;
        }
        .wrap .sect-purchase[data-type='balance'] .fix-bot {
            width: 500px;
            margin: 0 auto;
        }
        .wrap .sect-purchase[data-type='fin'] .contents {
            padding-bottom: 120px;
        }
        .wrap .sect-purchase[data-type='fin'] .progress {
            margin-bottom: 79px;
        }
        .wrap .sect-purchase[data-type='fin'] .desc {
            margin-top: 10px;
            margin-bottom: 20px;
            padding-bottom: 180px;
            background-size: 160px 160px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='fin'] .note {
            width: 560px;
            margin-bottom: 0;
            padding: 20px 20px 20px 40px;
            background-position: 16px 22px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='fin'] .note-dot {
            width: 610px;
            font-size: 14px;
            line-height: 20px;
        }
        .wrap .sect-purchase[data-type='fin'] .wrap-btn {
            width: 100%;
            margin-top: 40px;
        }
        .wrap .sect-purchase[data-type='error'] .contents {
            padding-bottom: 120px;
        }
        .wrap .sect-purchase[data-type='error'] .progress {
            margin-bottom: 79px;
        }
        .wrap .sect-purchase[data-type='error'] .desc {
            margin-top: 10px;
            padding-bottom: 190px;
            background-size: 160px 160px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='error'] .desc-help {
            margin-top: 60px;
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-purchase[data-type='error'] .desc-help > span {
            padding: 0 4px;
            box-shadow: inset 0 -10px 0 #ecf9ff, 0 2px 0 #ecf9ff;
        }
        .wrap .sect-purchase[data-type='error'] .list-help a:hover {
            text-decoration: underline;
        }
        .wrap .sect-purchase[data-type='error'] .wrap-btn {
            width: 100%;
            margin-top: 40px;
        }
        .wrap .layer-agree .layer {
            max-width: 620px;
            padding: 60px 0 30px;
        }
        .wrap .layer-agree .scroll {
            overflow-y: initial;
            padding: 0 60px;
        }
        .wrap .layer-agree .desc {
            line-height: 24px;
        }
        .wrap .layer-agree .agree {
            margin-top: 20px;
            padding-top: 20px;
        }
        .wrap .layer-agree .agree .box-agree ~ .box-agree {
            margin-top: 20px;
        }
        .wrap .layer-agree .agree .box-agree > label {
            padding: 0 10px 10px;
            line-height: 22px;
        }
        .wrap .layer-agree .agree .box-agree input[type='number'],
        .wrap .layer-agree .agree .box-agree input[type='text'] {
            height: 52px;
        }
        .wrap .layer-agree .agree .box-agree .msg + input {
            margin-top: 10px;
        }
        .wrap .layer-agree .agree .box-agree .note-agree {
            padding: 0 10px 10px;
            line-height: 20px;
        }
        .wrap .layer-agree .agree .box-agree .contact {
            display: flex;
            justify-content: space-between;
        }
        .wrap .layer-agree .agree .box-agree .contact .select-contact {
            width: 138px;
            height: 52px;
        }
        .wrap
            .layer-agree
            .agree
            .box-agree
            .contact
            .select-contact
            .btn-select {
            padding-right: 36px;
            font-size: 16px;
            line-height: 20px;
        }
        .wrap
            .layer-agree
            .agree
            .box-agree
            .contact
            .select-contact
            .btn-select:after {
            right: 18px;
        }
        .wrap
            .layer-agree
            .agree
            .box-agree
            .contact
            .select-contact
            .list-select {
            width: 360px;
            max-height: 200px;
        }
        .wrap .layer-agree .agree .box-agree .contact input {
            width: 352px;
            margin-top: 0;
        }
        .wrap .layer-agree .agree .terms {
            max-height: 140px;
            padding: 18px 32px 18px 18px;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .layer-agree .agree .desc-radio {
            margin-top: 10px;
            padding: 0 10px;
            line-height: 20px;
        }
        .wrap .layer-agree .agree .list-agree {
            padding: 0 10px;
        }
        .wrap .layer-agree .agree .list-agree > li > label {
            line-height: 24px;
        }
        .wrap .layer-agree .wrap-btn {
            margin: 20px 60px 0;
        }
        .wrap .layer-agree .wrap-btn [class^='btn-'] {
            flex: unset;
            width: auto;
            height: 52px;
            padding: 0 32px;
        }
        .wrap .sect-notice .contents {
            padding-top: 98px;
        }
        .wrap .sect-notice .head-sect {
            width: 630px;
            margin: 0 auto;
        }
        .wrap .sect-notice .head-sect:before {
            top: -98px;
            width: 100vw;
            max-width: 1440px;
            height: 430px;
        }
        .wrap .sect-notice .head-sect .tit {
            font-size: 40px;
            line-height: 48px;
        }
        .wrap .sect-notice .head-sect .desc {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-notice .head-sect .search-notice {
            height: 62px;
        }
        .wrap .sect-notice .head-sect .search-notice input {
            height: 62px;
            padding: 0 46px 0 52px;
            background-position: 18px 50%;
            background-size: 24px 24px;
            font-size: 16px;
        }
        .wrap .sect-notice .head-sect .search-notice input:hover {
            border-color: #c0c3cb;
        }
        .wrap .sect-notice .head-sect .search-notice .btn-del {
            right: 18px;
            width: 18px;
            height: 18px;
            margin-top: -9px;
        }
        .wrap .sect-notice .wrap-category {
            position: relative;
            width: calc(100% + 120px);
            margin: 80px 0 0 -60px;
            padding: 0 60px;
        }
        .wrap .sect-notice .wrap-category .slide-category {
            max-width: 100%;
            height: 90px;
            margin: 0;
            padding: 0;
            border-top: 2px solid #1a2b3b;
            background-color: #f6f7f9;
            white-space: normal;
        }
        .wrap .sect-notice .wrap-category .slide-category .swiper-scrollbar {
            display: none;
        }
        .wrap .sect-notice .wrap-category .slide-category .item-category {
            padding: 0;
        }
        .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .item-category.on
            .btn-category {
            background-color: #142b3d;
        }
        .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .item-category.on
            .btn-category:hover {
            background-color: #131c25;
        }
        .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .item-category.on
            .btn-category:before {
            content: none;
        }
        .wrap .sect-notice .wrap-category .slide-category .btn-category {
            width: 244px;
            height: 88px;
            border-radius: 0;
            border: 0;
            background-color: #f6f7f9;
            line-height: 20px;
        }
        .wrap .sect-notice .wrap-category .slide-category .btn-category:hover {
            background-color: #eeeff1;
        }
        .wrap .sect-notice .wrap-category .slide-category .btn-category:before {
            display: block;
            position: absolute;
            left: 0;
            top: 50%;
            width: 1px;
            height: 20px;
            margin-top: -10px;
            background-color: #d9dce3;
            z-index: 1;
            content: '';
        }
        .wrap .sect-notice .wrap-category [class^='swiper-button-'] {
            display: block;
            width: 50px;
            height: 50px;
            margin-top: -25px;
        }
        .wrap .sect-notice .wrap-category .swiper-button-prev {
            left: 0;
        }
        .wrap .sect-notice .wrap-category .swiper-button-next {
            right: 0;
        }
        .wrap .sect-notice .keyword {
            padding: 2px 0;
        }
        .wrap .sect-notice .desc-result {
            padding: 20px 0 120px;
            font-size: 32px;
            line-height: 36px;
        }
        .wrap .sect-notice .note-result {
            margin-top: -100px;
            line-height: 24px;
        }
        .wrap .sect-notice .wrap-btn {
            margin-top: 30px;
            padding-bottom: 60px;
        }
        .wrap .sect-notice .wrap-notice {
            margin-top: 40px;
        }
        .wrap .sect-notice .list-notice > li > a {
            padding: 29px 50px 30px;
            line-height: 1.5;
        }
        .wrap .sect-notice .list-notice > li > a:hover {
            background-color: #f6f7f9;
        }
        .wrap .sect-notice .list-notice > li.pin > a {
            padding-left: 50px;
            background-position: 15px 40px;
        }
        .wrap .sect-notice .list-notice .artist .pic {
            width: 42px;
            height: 42px;
        }
        .wrap .sect-notice .list-notice .artist .name {
            max-width: calc(100% - 52px);
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-notice .list-notice .date {
            padding-left: 52px;
        }
        .wrap .sect-notice .view-top {
            margin-top: -38px;
        }
        .wrap .sect-notice .tit-view {
            margin-top: 30px;
            font-size: 34px;
            line-height: 40px;
        }
        .wrap .sect-notice .view {
            margin-top: 50px;
            padding: 50px 50px 0;
            line-height: 24px;
        }
        .wrap .sect-notice .paging {
            margin-top: 60px;
        }
        .wrap .sect-notice .paging-view {
            height: 112px;
            margin-top: 60px;
            margin-bottom: 20px;
            padding-top: 40px;
        }
        .wrap .sect-notice .paging-view .btn-prev {
            width: calc((100% - 70px) / 2);
            padding: 0 50px;
        }
        .wrap .sect-notice .paging-view .btn-prev:hover .paging-txt:before {
            transform: translateX(-2px);
        }
        .wrap .sect-notice .paging-view .btn-list {
            width: 70px;
            height: 70px;
            background-size: 24px 24px;
        }
        .wrap .sect-notice .paging-view .btn-next {
            width: calc((100% - 70px) / 2);
            padding: 0 50px;
        }
        .wrap .sect-notice .paging-view .btn-next:hover .paging-txt:after {
            transform: rotate(180deg) translateX(-2px);
        }
        .wrap .sect-notice .paging-view .paging-txt {
            font-size: 18px;
        }
        .wrap .sect-notice .paging-view .paging-tit {
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            margin-top: 11px;
            font-family: 'Metropolis Regular', SUIT-Regular, sans-serif;
            white-space: nowrap;
        }
        .wrap .sect-notice .list-faq > li {
            margin-top: 20px;
            border-radius: 20px;
        }
        .wrap .sect-notice .list-faq .btn-faq {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-notice .list-faq .btn-faq:after {
            right: 38px;
            width: 40px;
            height: 40px;
            margin-top: -20px;
            background-size: 20px 20px;
        }
        .wrap .sect-notice .list-faq dd {
            line-height: 24px;
        }
        .wrap .sect-notice .contact {
            margin-top: 60px;
        }
        .wrap .sect-notice .contact .subtit {
            font-size: 32px;
            line-height: 36px;
        }
        .wrap .sect-notice .contact .desc {
            margin-top: 20px;
        }
        .wrap .sect-notice .contact .btn-contact {
            height: 52px;
            margin-top: 30px;
            padding: 0 34px;
            line-height: 52px;
        }
        .wrap .sect-notice .list-link {
            display: flex;
            justify-content: center;
            max-width: 100%;
        }
        .wrap .sect-notice .list-link > li {
            width: 300px;
            height: 72px;
            background-position: 22px 50%;
            background-size: 32px 32px;
        }
        .wrap .sect-notice .list-link > li > a {
            padding-left: 68px;
            font-size: 15px;
        }
        .wrap .sect-notice .list-link > li:nth-child(n + 2) {
            margin-top: 0;
            margin-left: 30px;
        }
        .wrap .sect-notice .wrap-faq {
            margin-top: 50px;
        }
        .wrap .sect-notice .wrap-faq .list-faq .btn-faq {
            padding: 38px 98px 38px 48px;
        }
        .wrap .sect-notice .wrap-faq .list-faq > li.on .btn-faq {
            padding-bottom: 20px;
        }
        .wrap .sect-notice .wrap-faq .list-faq > li.on .btn-faq:after {
            margin-top: -11px;
        }
        .wrap .sect-notice .wrap-faq .list-faq dd {
            padding: 0 98px 38px 48px;
            line-height: 24px;
        }
        .wrap .sect-notice .list-file {
            margin-left: -10px;
        }
        .wrap .sect-notice .list-file > li {
            margin: 10px 0 0 10px;
            padding: 14px 48px 14px 50px;
            background-position: 16px 50%;
            background-size: 24px 24px;
        }
        .wrap .sect-notice .list-file .file {
            font-size: 14px;
        }
        .wrap .sect-notice .list-file .btn-del {
            right: 11px;
            top: 50%;
        }
        .wrap .sect-notice .inquiry {
            max-width: 880px;
        }
        .wrap .sect-notice .inquiry-note {
            width: 700px;
            margin: 0 auto;
            padding: 10px 30px;
            border-radius: 20px;
            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
            line-height: 22px;
        }
        .wrap .sect-notice .inquiry-note > li {
            padding: 30px 0 30px 16px;
        }
        .wrap .sect-notice .inquiry-note > li:before {
            top: 38px;
        }
        .wrap .sect-notice .inquiry .list-form {
            margin-top: 20px;
            padding: 28px 38px;
            border-radius: 20px;
        }
        .wrap .sect-notice .inquiry .list-form > li:nth-child(n + 2) {
            margin-top: 20px;
        }
        .wrap .sect-notice .inquiry .list-form label {
            margin-bottom: 10px;
            padding: 0 10px;
        }
        .wrap .sect-notice .inquiry .list-form .btn-select {
            font-size: 16px;
        }
        .wrap .sect-notice .inquiry .list-form .list-select {
            max-height: 244px;
        }
        .wrap .sect-notice .inquiry .list-form .select-category {
            width: 530px;
            height: 52px;
        }
        .wrap .sect-notice .inquiry .list-form .wrap-select {
            display: flex;
        }
        .wrap .sect-notice .inquiry .list-form .wrap-select .select {
            width: 260px;
            height: 52px;
            margin-top: 0;
            margin-left: 10px;
        }
        .wrap
            .sect-notice
            .inquiry
            .list-form
            .wrap-select
            .select:first-child {
            margin-left: 0;
        }
        .wrap .sect-notice .inquiry .list-form input {
            height: 52px;
        }
        .wrap .sect-notice .inquiry .list-form input + input {
            margin-top: 10px;
        }
        .wrap .sect-notice .inquiry .list-form textarea {
            height: 130px;
            margin-top: 10px;
            padding: 14px 18px;
        }
        .wrap .sect-notice .inquiry .list-form .attachment {
            flex-wrap: nowrap;
            margin-top: -10px;
        }
        .wrap .sect-notice .inquiry .list-form .attachment label {
            margin-top: 0;
        }
        .wrap .sect-notice .inquiry .list-form .attachment small {
            margin-top: 0;
        }
        .wrap .sect-notice .inquiry .list-form .list-file {
            margin-top: 4px;
        }
        .wrap .sect-notice .inquiry .recapcha {
            margin-left: 10px;
        }
        .wrap .sect-notice .inquiry .note-withdrawal {
            padding: 0 20px;
        }
        .wrap .sect-notice .inquiry .agree {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0 10px 0 44px;
        }
        .wrap .sect-notice .inquiry .agree label {
            padding-top: 2px;
        }
        .wrap .sect-notice .inquiry .fix-bot .box-bot {
            max-width: 100%;
        }
        .wrap .sect-notice .inquiry .fix-bot .box-bot .wrap-btn {
            margin-top: 0;
            padding-bottom: 0;
        }
        .wrap .sect-notice .inquiry .wrap-btn {
            margin-top: 40px;
        }
        .wrap .sect-notice .inquiry-mine .wrap-tab {
            margin-top: 60px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq .btn-faq {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 32px 98px 24px 38px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .question-tit {
            flex: 1;
            padding-left: 0;
            padding-right: 20px;
            -webkit-line-clamp: 1;
        }
        .wrap .sect-notice .inquiry-mine .list-faq .btn-faq [class^='ico-'] {
            margin-top: 7px;
            margin-bottom: -17px;
            padding: 0 14px;
            font-size: 13px;
            line-height: 32px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq .btn-faq .date {
            width: 100%;
            margin: 10px 0 0;
            font-size: 16px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq > li.on {
            padding-bottom: 38px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq > li.on .btn-faq {
            padding-bottom: 20px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq > li.on .btn-faq:after {
            margin-top: -18px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd {
            padding: 0 108px 0 38px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .profile {
            display: flex;
            align-items: center;
            height: 44px;
            padding: 0 0 0 58px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .profile .pic {
            width: 44px;
            height: 44px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .profile .name {
            font-size: 18px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .profile .date {
            font-size: 14px;
            margin-left: 10px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .faq {
            margin: 0 0 0 21px;
            padding-left: 35px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .faq:before {
            top: 10px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .faq .btn-zoom {
            max-width: 600px;
            margin-bottom: 10px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .faq .list-file {
            margin-top: -10px;
        }
        .wrap
            .sect-notice
            .inquiry-mine
            .list-faq
            dd
            .faq
            .list-file
            > li
            > button {
            padding: 16px 20px 16px 50px;
        }
        .wrap .sect-notice .inquiry-mine .list-faq dd .faq .answer {
            margin-top: 40px;
        }
        .wrap
            .sect-notice
            .inquiry-mine
            .list-faq
            dd
            .faq
            .answer
            .support-txt {
            margin-top: 0;
            padding-left: 58px;
        }
        .wrap .sect-notice .inquiry-none {
            margin-top: 100px;
            padding-bottom: 100px;
        }
        .wrap .sect-notice .inquiry-none .tit {
            font-size: 30px;
        }
        .wrap .sect-notice .inquiry-none .tit:after {
            width: 160px;
            height: 160px;
            margin-top: 0;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .head-sect
            .search-notice
            input:hover {
            border-color: #717580;
        }
        [data-dark='true'] .wrap .sect-notice .wrap-category .slide-category {
            border-color: #d0d0d0;
            background-color: #1c1d21;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .item-category.on
            .btn-category {
            background-color: #d0d0d0;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .item-category.on
            .btn-category:hover {
            background-color: #fff;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .btn-category {
            background-color: #1c1d21;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .btn-category:hover {
            background-color: #212226;
        }
        [data-dark='true']
            .wrap
            .sect-notice
            .wrap-category
            .slide-category
            .btn-category:before {
            background-color: #2e2f34;
        }
        [data-dark='true'] .wrap .sect-notice .list-notice > li > a:hover {
            background-color: #1c1d21;
        }
        .wrap .sect-profile .contents {
            padding-top: 30px;
            padding-bottom: 31px;
        }
        .wrap .sect-profile .btn-edit {
            justify-content: center;
            align-items: center;
            background-image: none;
            color: #1a2b3b;
            font-size: 14px;
        }
        .wrap .sect-profile .btn-edit:before {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 4px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E")
                50% 50% no-repeat;
            background-size: 18px 18px;
            vertical-align: middle;
            content: '';
        }
        .wrap .sect-profile .profile-bg {
            height: 260px;
        }
        .wrap .sect-profile .profile-bg .btn-edit {
            right: 10px;
            bottom: 10px;
            width: auto;
            height: 42px;
            padding: 0 14px 0 12px;
            border-radius: 21px;
            background-position: 12px 50%;
        }
        .wrap .sect-profile .profile-bg .btn-edit:hover {
            border-color: #cfd1d6;
        }
        .wrap .sect-profile .profile-bg:hover .btn-edit {
            display: flex;
        }
        .wrap .sect-profile .profile-pic {
            width: 120px;
            height: 120px;
            margin-top: -80px;
        }
        .wrap .sect-profile .profile-pic:hover .btn-edit {
            display: flex;
        }
        [data-dark='true'] .wrap .sect-profile .btn-edit {
            color: #fff;
            background-image: none;
        }
        [data-dark='true'] .wrap .sect-profile .btn-edit:before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFFFFF' fill-rule='nonzero' d='m5.345 13.333 8.452-8.451-1.179-1.179-8.451 8.452v1.178h1.178zM6.035 15H2.5v-3.536l9.53-9.529a.833.833 0 0 1 1.178 0l2.357 2.358a.833.833 0 0 1 0 1.178L6.035 15zM2.5 16.667h15v1.666h-15v-1.666z'/%3E%3C/g%3E%3C/svg%3E");
        }
        [data-dark='true'] .wrap .sect-profile .profile-bg .btn-edit:hover {
            border-color: #717580;
        }
        .wrap .sect-coll .slide-menu {
            margin-left: 0;
            padding: 0;
        }
        .wrap .sect-coll .slide-menu .swiper-scrollbar {
            display: none;
        }
        .wrap .sect-coll .slide-menu a {
            padding: 0 8px 9px;
            font-size: 16px;
            line-height: 24px;
        }
        .wrap .sect-coll .slide-menu a .count {
            line-height: 24px;
        }
        .wrap .sect-coll .coll-none {
            width: 100%;
            margin-top: 100px;
            padding-bottom: 100px;
        }
        .wrap .sect-coll .coll-none .tit {
            padding-bottom: 160px;
            background-size: 160px 160px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-coll .coll-none .wrap-btn [class^='btn'] {
            width: auto;
            margin: 0 10px;
        }
        .wrap .sect-coll .coll-none .wrap-btn [class^='btn'] + [class^='btn'] {
            margin-top: 0;
        }
        .wrap .sect-coll .btns-more {
            padding: 0 20px;
        }
        .wrap .sect-coll .btns-filter {
            padding: 0 20px;
        }
        .wrap .sect-coll .wrap-filter {
            margin: 0 0 20px;
        }
        .wrap .sect-coll .refresh .tooltip > span:before {
            max-width: 340px;
        }
        .wrap .sect-open .contents {
            padding-top: 120px;
            padding-bottom: 120px;
        }
        .wrap .sect-open .tit-open {
            max-width: 100%;
            padding: 0 86px;
            font-size: 32px;
            line-height: 36px;
        }
        .wrap .sect-open .tit-open > span {
            padding: 0 4px;
            box-shadow: inset 0 -10px 0 #ecf9ff, 0 2px 0 #ecf9ff;
        }
        .wrap .sect-open .list-open {
            margin-top: 60px;
            margin-bottom: -20px;
        }
        .wrap .sect-open .list-open > li {
            margin: 20px;
        }
        .wrap .sect-open .wrap-btn {
            width: 100%;
            margin-top: 100px;
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
        .wrap.account .contents {
            max-width: 1380px;
        }
        .wrap.account .sect-login .contents {
            max-width: 660px;
        }
        .wrap.account .sect-login[data-type='login'] .contents {
            max-width: 560px;
        }
        .wrap .sect-account .contents {
            display: flex;
            align-items: flex-start;
            padding-top: 60px;
            padding-bottom: 120px;
        }
        .wrap .sect-account .select-nav {
            display: none;
        }
        .wrap .sect-account .account-nav {
            display: block;
            width: 250px;
        }
        .wrap .sect-account .account-nav .list-menu {
            padding: 20px 10px;
            border-radius: 11px;
            background-color: #f6f7f9;
        }
        .wrap .sect-account .account-nav .list-menu > li {
            overflow: hidden;
            margin-top: 16px;
            border-radius: 8px;
        }
        .wrap .sect-account .account-nav .list-menu > li:first-child {
            margin-top: 0;
        }
        .wrap .sect-account .account-nav .list-menu a {
            position: relative;
            display: block;
            width: 100%;
            padding: 11px 14px 11px 44px;
            font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
            font-size: 14px;
            transition: background-color 0.2s;
        }
        .wrap .sect-account .account-nav .list-menu a:before {
            display: block;
            position: absolute;
            left: 14px;
            top: 50%;
            width: 20px;
            height: 20px;
            background-color: #67737f;
            transform: translateY(-50%);
            content: '';
        }
        .wrap .sect-account .account-nav .list-menu a:hover {
            background-color: #fff;
        }
        .wrap .sect-account .account-nav .list-menu .on {
            background-color: #fff;
            color: #1a2b3b;
        }
        .wrap .sect-account .account-nav .list-menu .on > a:before {
            background-color: #1a2b3b;
        }
        .wrap .sect-account .account-nav .list-go {
            margin-top: 6px;
            padding: 0 10px;
        }
        .wrap .sect-account .account-nav .list-go > li {
            border-bottom: 1px solid #ebedf2;
        }
        .wrap .sect-account .account-nav .list-go a {
            display: block;
            padding: 14px 6px;
            font-family: 'Metropolis Bold', SUIT-ExtraBold, sans-serif;
            font-size: 14px;
            transition: color 0.2s;
        }
        .wrap .sect-account .account-nav .list-go a:hover {
            color: #1a2b3b;
        }
        .wrap .sect-account .account-nav .list-go a[target='_blank']:after {
            position: static;
            display: inline-block;
            margin-top: -2px;
            vertical-align: middle;
        }
        .wrap .sect-account .account-cont {
            width: 600px;
            padding-left: 80px;
        }
        .wrap .sect-account .account-cont[data-type='history'] {
            width: calc(100% - 250px);
        }
        .wrap
            .sect-account
            .account-cont[data-type='history']
            .swiper-scrollbar-lock
            + .swiper-wrapper {
            justify-content: center;
        }
        .wrap .sect-account .tooltip > span:before {
            left: 0;
            margin-left: 12px;
            transform: translateX(-50%);
        }
        .wrap .sect-account .tooltip > span:after {
            left: 7px;
        }
        .wrap .sect-account .tit {
            margin: 0 0 60px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-account .tit.home {
            min-height: 48px;
            margin: -6px 0 54px;
            padding-top: 6px;
            padding-left: 50px;
            background-position: 0 3px;
            background-size: 40px 40px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-account .list-account input {
            height: 52px;
        }
        .wrap .sect-account .list-account .cscode {
            width: 250px;
        }
        .wrap .sect-account .list-account .join {
            width: 250px;
        }
        .wrap .sect-account .list-account .box-name {
            position: relative;
        }
        .wrap .sect-account .list-account .box-name .input-name {
            padding-right: 150px;
        }
        .wrap .sect-account .list-account .box-name .length {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: absolute;
            right: 6px;
            top: 6px;
        }
        .wrap .sect-account .list-account .box-name .count {
            position: static;
            margin-right: 10px;
        }
        .wrap .sect-account .list-account .box-name .btn-save {
            height: 40px;
            margin-top: 0;
        }
        .wrap .sect-account .list-account .input-area {
            width: 250px;
        }
        .wrap .sect-account .list-account .box-prof .pic {
            width: 112px;
            height: 112px;
        }
        .wrap .sect-account .list-account .box-bg {
            height: 148px;
        }
        .wrap .sect-account .btns-change {
            margin-top: 20px;
        }
        .wrap .sect-account .btns-change .box-bot {
            max-width: 100%;
        }
        .wrap .sect-account .btns-change .wrap-btn {
            justify-content: flex-start;
        }
        .wrap .sect-account .btns-change [class^='btn-'] {
            flex: none;
            width: auto;
            padding: 0 32px;
        }
        .wrap .sect-account .top-search {
            display: flex;
            justify-content: space-between;
            margin-top: 0;
        }
        .wrap .sect-account .top-search .wrap-type {
            margin-top: 26px;
        }
        .wrap .sect-account .top-type {
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
        }
        .wrap .sect-account .top-type .note {
            flex: 1;
            margin-bottom: 0;
            padding-right: 20px;
            padding-left: 10px;
        }
        .wrap .sect-account .top-type .note:before {
            left: 0;
            top: 8px;
        }
        .wrap .sect-account .wrap-tbl {
            max-width: 100%;
            margin-right: 0;
        }
        .wrap .sect-account .wrap-tbl .title.long span {
            max-width: 224px;
        }
        .wrap .sect-account .wrap-tbl .price .ust {
            font-size: 12px;
            line-height: 14px;
        }
        .wrap .sect-account .paging {
            margin-top: 40px;
        }
        .wrap .sect-account .wrap-none {
            padding-top: 100px;
        }
        .wrap .sect-account .wrap-none .desc-none {
            padding-bottom: 160px;
            background-size: 160px 160px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-account .top-inven {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e6e8ec;
        }
        .wrap .sect-account .top-inven .total {
            margin-bottom: 0;
        }
        .wrap .sect-account .top-inven [class^='select'] {
            width: 200px;
        }
        .wrap .sect-account .list-product {
            left: -21px;
            width: calc(100% + 21px);
        }
        .wrap .sect-account .list-product .item-product {
            width: 33.33%;
            padding: 0 0 0 21px;
        }
        .wrap .sect-account .list-product .item-product > a {
            padding: 14px 14px 20px;
        }
        .wrap .sect-account .btn-back {
            margin: 0 0 60px;
        }
        .wrap .sect-account .subtit-wallet {
            font-size: 18px;
        }
        .wrap .sect-account .list-total .list-balance {
            padding: 14px 0;
        }
        .wrap .sect-account .list-total .list-balance > li {
            margin: 0 20px;
            background-position: 28px 50%;
            background-size: 36px 36px;
        }
        .wrap .sect-account .list-total .list-balance label {
            padding-left: 68px;
            font-size: 16px;
            line-height: 36px;
        }
        .wrap .sect-account .list-total dl .tooltip {
            left: 10px;
            right: 8px;
            top: 20px;
        }
        .wrap .sect-account .list-total dl .tooltip > span:before {
            max-width: 340px;
            margin-left: 12px;
        }
        .wrap .sect-account .list-total dl > dd .ust {
            font-size: 14px;
            line-height: 20px;
        }
        .wrap .sect-account .list-total > li.full > dl .tooltip > span:before {
            margin-left: 0;
        }
        .wrap .sect-account .list-total .qrcode {
            width: 180px;
            height: 180px;
            margin: 30px auto;
            padding: 18px;
        }
        .wrap .sect-account .agree label > a:hover {
            text-decoration: underline;
        }
        .wrap .sect-account .btn-back ~ .list-account .tit-info {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap .sect-account .msg {
            padding-left: 34px;
            background-position: 10px 0;
        }
        .wrap .sect-account .list-total > li.full:last-child .msg:last-child {
            margin-bottom: -6px;
        }
        .wrap .sect-account .list-quantity {
            flex-wrap: nowrap;
            justify-content: space-between;
            margin-top: 9px;
        }
        .wrap .sect-account .list-quantity > li {
            width: 25%;
        }
        .wrap .sect-account .note-withdraw {
            max-height: 140px;
            padding: 20px 34px 20px 30px;
            font-size: 14px;
            line-height: 18px;
        }
        .wrap .sect-account .note-account {
            margin-top: 20px;
        }
        .wrap .sect-account .box-copy .btn-copy:before {
            right: auto;
            left: 50%;
            margin-left: -5px;
            transform: translateX(-50%);
        }
        .wrap .sect-account .btns-deposit .box-bot {
            padding-top: 30px;
        }
        .wrap .sect-account .btns-withdraw .box-bot {
            padding-top: 30px;
        }
        .wrap .sect-account .withdrawal {
            margin-top: 100px;
            margin-bottom: -60px;
        }
        .wrap .sect-account .account-cont[data-type='profile'] .btn-back {
            margin-bottom: 20px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .subtit-withdrawal {
            font-size: 18px;
            line-height: 22px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .subtit-withdrawal:before {
            width: 120px;
            height: 120px;
            margin-bottom: 10px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .note-withdrawal
            > li {
            padding: 20px 0 20px 12px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .note-withdrawal
            > li:before {
            top: 26px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .total-withdrawal {
            margin-top: 20px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .total-withdrawal
            .status {
            padding: 20px 8px 0 10px;
        }
        .wrap
            .sect-account
            .account-cont[data-type='profile']
            .total-withdrawal
            > li:last-child
            .go {
            padding-bottom: 20px;
        }
        [data-dark='true'] .wrap .sect-account .account-nav .list-menu {
            background-color: #1c1d21;
        }
        [data-dark='true']
            .wrap
            .sect-account
            .account-nav
            .list-menu
            a:before {
            background-color: #b1b5c3;
        }
        [data-dark='true'] .wrap .sect-account .account-nav .list-menu a:hover {
            background-color: #26272c;
        }
        [data-dark='true'] .wrap .sect-account .account-nav .list-menu .on {
            background-color: #26272c;
            color: #fff;
        }
        [data-dark='true']
            .wrap
            .sect-account
            .account-nav
            .list-menu
            .on
            > a:before {
            background-color: #fff;
        }
        [data-dark='true'] .wrap .sect-account .account-nav .list-go > li {
            border-color: #28282b;
        }
        [data-dark='true'] .wrap .sect-account .account-nav .list-go a:hover {
            color: #fff;
        }
        .wrap .sect-complete .contents {
            padding-top: 120px;
        }
        .wrap .sect-complete .tit {
            margin-bottom: 20px;
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-complete .tit:before {
            width: 160px;
            height: 160px;
            margin-bottom: 20px;
        }
        .wrap .sect-complete .desc {
            line-height: 24px;
        }
        .wrap .sect-complete .btn-go {
            margin-top: 60px;
        }
        .wrap .layer-detail {
            overflow-y: auto;
        }
        .wrap .layer-detail .layer {
            max-width: 830px;
            max-height: none;
            margin: auto;
            padding: 80px 60px 60px;
        }
        .wrap .layer-detail .tit-layer {
            margin-bottom: 30px;
        }
        .wrap .layer-detail .item {
            display: flex;
        }
        .wrap .layer-detail .item .wrap-thumb {
            width: 244px;
        }
        .wrap .layer-detail .item .wrap-detail {
            width: 466px;
            margin-top: 0;
            padding-left: 30px;
        }
        .wrap .layer-detail .item .tbl {
            table-layout: auto;
            width: 100%;
        }
        .wrap .layer-detail .item .tbl th {
            width: 160px;
        }
        .wrap .sect-error:first-child {
            margin-top: -20px;
        }
        .wrap .sect-error:first-child .contents {
            padding-bottom: 130px;
        }
        .wrap .sect-error .contents {
            max-width: 860px;
            padding-bottom: 120px;
        }
        .wrap .sect-error .logo {
            width: 250px;
            margin-bottom: 50px;
        }
        .wrap .sect-error .tit {
            font-size: 30px;
            line-height: 36px;
        }
        .wrap .sect-error .tit:before {
            width: 160px;
            height: 160px;
            margin-bottom: 20px;
        }
        .wrap .sect-error .desc {
            margin-top: 20px;
            font-size: 16px;
            line-height: 24px;
        }
        .wrap .sect-error .code {
            margin-top: 20px;
        }
        .wrap .sect-error .schedule + .desc {
            margin-top: 30px;
        }
        .wrap .sect-error .schedule {
            margin-top: 30px;
        }
        .wrap .sect-error .schedule > dt {
            font-size: 16px;
            line-height: 24px;
        }
        .wrap .sect-error .schedule > dd {
            font-size: 20px;
            line-height: 24px;
        }
        .wrap .sect-error[data-type='notice'] .contents {
            padding-top: 60px;
            padding-bottom: 130px;
        }
        .wrap .sect-error[data-type='notice'] .tit {
            margin-top: 60px;
        }
    }
    @media screen and (min-width: 1232px) {
        .wrap .sect-account .list-product {
            left: -20px;
            width: calc(100% + 20px);
        }
        .wrap .sect-account .list-product .item-product {
            width: 25%;
            padding: 0 0 0 20px;
        }
        .wrap .sect-account .loading {
            margin-top: 40px;
        }
    }
    @media screen and (min-width: 1380px) {
        .wrap .sect-game .desc-main {
            margin-left: 70px;
        }
        .wrap .sect-game .obj {
            top: auto;
            bottom: 40px;
            width: 1073px;
        }
        .wrap .sect-detail .wrap-thumb {
            width: 560px;
        }
        .wrap .sect-detail .wrap-detail {
            width: 660px;
        }
        .wrap .sect-purchase .purchase-item .box-item .wrap-thumb {
            margin: 0;
        }
        .wrap .sect-purchase .purchase-item .box-item .wrap-detail {
            width: calc(100% - 160px);
            max-width: 100%;
            margin-top: 0;
            padding-left: 20px;
        }
        .wrap .sect-purchase .purchase-item .box-item .fix-bot .wrap-btn {
            flex-wrap: nowrap;
            margin: 0 -10px;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-item
            .fix-bot
            .wrap-btn
            [class^='btn-'] {
            width: 0;
            margin: 0 10px;
        }
        .wrap
            .sect-purchase
            .purchase-item
            .box-item
            .fix-bot
            .wrap-btn
            [class^='btn-']
            + [class^='btn-'] {
            margin-top: 0;
        }
    }
    @media screen and (min-width: 1390px) {
        .wrap.main section .contents {
            max-width: 1750px;
        }
        .wrap .list-nft {
            grid-template-columns: repeat(4, 1fr);
        }
        .wrap .bnn-main .product {
            max-width: 1000px;
        }
        .wrap .bnn-main .desc {
            max-width: 1000px;
        }
    }
    @media screen and (max-width: 359px) {
        .wrap .contents {
            width: 310px;
            padding-right: 0;
            padding-left: 0;
        }
        .wrap .header .contents {
            padding: 0;
        }
        .wrap .header .nav--login {
            padding: 0;
        }
        .wrap .header .nav--user {
            padding: 0;
        }
        .wrap .bnn-store {
            width: 310px;
            margin: 0 auto;
            padding: 0 0 30px;
        }
        .wrap .fix-bot {
            left: 50%;
            width: 310px;
            padding: 0;
            transform: translateX(-50%);
        }
    }
`;
