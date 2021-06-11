import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; // always centralized

    // since we are using the default font-size (16 px)
    // this is a padding of 32px top, 16px on both left and right
    // and 160px in the bottom
    padding: 2rem 1rem 12rem;
    // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        // sass-lang.com/documentation/style-rules/parent-selector
        &:hover {
            filter: brightness(0.9);
        }
    }
`