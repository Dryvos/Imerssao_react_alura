import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
    color: var(--white);
    border : 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 13px 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    width: 150px;

    &:hover,
    &:focus{
        opacity: .5;
    }
`;

export default Button;