/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primaryColor: #ebebeb;
    --secondaryColor: #d85a94;
    --fontStack: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontMono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

  html {
    font-size: 112.5%;
    text-size-adjust: 100%;
    cursor: inherit;
  }

  ::selection {
    color: white;
    background-color: var(--secondaryColor);
  }

  body {
    font-size: 18px;
    line-height: 1.45;
    font-weight: 400;
    font-style: normal;
    font-family: var(--fontStack);
    color: var(--primaryColor);
    letter-spacing: -.021em;
    background-color: #162636;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-synthesis: none;
    direction: ltr;
    text-align: left;
  }

  p {
    font-size: 18px;
    margin: 1em 0 0;
    margin-top: 13px;
    line-height: 1.45;
    font-weight: 400;
    letter-spacing: -.021em;
  }

  a {
    padding-bottom: 2px;
    color: #c9abf8;
    text-decoration: none;
    text-decoration-skip: objects;
    border-bottom: 1px solid transparent;
    transition: color .15s, border .15s;

    &:link,
    &:visited {
      color: #c9abf8;
    }

    &:hover {
      color: var(--secondaryColor);
      border-bottom: 1px solid var(--secondaryColor);
      transition: color .15s, border .15s;
    }

    &:focus {
      outline: 0;
    }
  }

  .hidden {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0 0 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }
`;
