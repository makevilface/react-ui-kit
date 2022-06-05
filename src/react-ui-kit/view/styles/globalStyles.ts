import { css } from '@linaria/core';

import { sharedPreferences } from './sharedPreferences';

export const GlobalStyles = css`
  :global() {
    // Normalize styles
    html,
    body,
    div,
    span,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
      display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
      display: none;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }
    nav,
    footer,
    header,
    aside {
      display: block;
    }
    html,
    body {
      height: 100%;
      width: 100%;
    }
    input,
    button,
    textarea {
      font-family: inherit;
    }
    a,
    a:visited {
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
    }
    ul li {
      list-style: none;
    }
    img {
      vertical-align: top;
    }
    // Global styles
    * {
      box-sizing: border-box;
    }

    html {
      width: 100%;
      height: 100%;
    }

    // https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
    .visually-hidden:not(:focus):not(:active) {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      border: 0 !important;
    }

    body {
      --page-width: 62.5rem;
      --page-radius: 1rem;
      --header-height: 4rem;
      --footer-height: 7.5rem;

      --page-module: 16px;

      --warning-color: #bf3100;

      --primary-color-0: #222222;
      --primary-color-10: #858585;
      --primary-color-20: #adadad;
      --primary-color-30: #ccc;

      --grey-0: #222222;

      --button_primary_background: #fff;
      --button_primary_foreground: #000;
      --button_primary-border: #ccc;

      //rgba(0, 0, 0, 0.48);
      --overlay-bg-color: rgba(91, 112, 131, 0.4);

      --button_disabled_background: #e6ebf4;
      --button_disabled_foreground: #bdc0cf;

      --primary-color: #494949;
      --secondary-color: #c0c0c0;
      --bg-color: rgba(0, 0, 0, 0.8);

      min-width: 320px;
      height: 100%;
      margin: 0;
      padding: 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      font-family: ${sharedPreferences.fontsFamilies.primaryFont};
      font-weight: 400;
      font-style: normal;
      font-display: fallback;
      background-color: #f5f5f7;
    }

    button:focus:not(:focus-visible) {
      outline: 0;
    }

    button:focus-visible {
      outline: 1px dashed red;
      outline-offset: 0px;
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      cursor: pointer;
      &:hover,
      &:focus {
        outline: 0;
      }
    }
  }
`;
