import styled from 'styled-components';

export const Container  = styled.div`
    // https://css-tricks.com/snippets/css/complete-guide-grid/
    display: grid;
    // 3 columns of flexible size
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            // For the <strong> tag the default display is inline
            // therefore we have to change it to block for our
            // margin-top work
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        // sass-lang.com/documentation/style-rules/parent-selector
        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`