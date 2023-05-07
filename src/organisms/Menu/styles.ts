import styled from "styled-components";

export const MenuList = styled.ul `
    margin-left: auto;
`


export const ItemList = styled.li `
    display: inline-block;
    margin-left: 50px;
    font-size: 14px;
    font-weight: 500;

    a {
        color: #FFFFFF;
        transition: color .25s ease;
    }

    &:hover {
        a {
            color: #FDA543
        }
    }

`