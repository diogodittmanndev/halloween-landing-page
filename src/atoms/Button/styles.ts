import styled from "styled-components";

export const Button = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    background: transparent;
    margin-left: 30px;
    transition: .5s ease-out;
    
    

    a {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
    }

    &:hover {
        background-color: #FDA543;
        cursor: pointer;
        letter-spacing: .2rem;
    }


`