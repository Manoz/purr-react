/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primaryColor: #555;
    --secondaryColor: #f36;
    --fontStack: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontMono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

  html {
    text-size-adjust: 100%;
    cursor: inherit;
  }

  ::selection {
    color: white;
    background-color: var(--secondaryColor);
  }

  body {
    font-size: 1.0625rem;
    line-height: 1.52947;
    font-weight: 400;
    font-style: normal;
    font-family: var(--fontStack);
    color: #555;
    letter-spacing: -.021em;
    background-color: white;
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
    font-size: 1.0625rem;
    margin: 1em 0 0;
    margin-top: 13px;
    line-height: 1.52947;
    font-weight: 400;
    letter-spacing: -.021em;
  }

  a {
    color: var(--secondaryColor);
    text-decoration: none;
    text-decoration-skip: objects;
    border-bottom: 1px solid transparent;
    transition: color .15s, border .15s;

    &:link,
    &:visited {
      color: var(--secondaryColor);
    }

    &:hover {
      color: var(--primaryColor);
      border-bottom: 1px solid var(--primaryColor);
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
