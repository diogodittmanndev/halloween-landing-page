import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: #FFF;

    /* > div PEGA APENAS AS DIVS ABAIXO DO CONTAINER NA HIERARQUIA */
    > div {
        width: 50%;
    }

    h1 {
        
        font-size:64px; 
    }
    
    p {
        line-height: 24px;
        font-weight: normal;
    }

    image {
        animation: bounce; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 2s; /* don't forget to set a duration! */
    }
`