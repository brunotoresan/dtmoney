import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // The default font-size is 16px (great for desktop)
    // Unit of Measure REM => 1 rem = font-size

    // We will use rem to define the size of buttons, images, etc.
    // Therefore, we will adapt both the font-size and other elements
    // according to the user's screen

    // We will use percentages because it will adapt to the user's
    // font-size preferences (e.g. zoom-in and zoom-out)

    html {
        // If the user has a screen up to 1080px
        @media (max-width: 1080px) {
            // We reduce the font-size to 93.75%
            // 16px * 0.9375 = 15px
            font-size: 93.75%;
        }

        // If the user has a screen yp to 720px
        @media (max-width: 720px) {
            // We reduce the font-size to 87.50%
            // 16px * 0.875 = 14px
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        // always in the same position, even if the user scrolls the page
        position: fixed;
        // occupies the entire screen
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        // the width is the max(pageWidth, 576pc)
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`