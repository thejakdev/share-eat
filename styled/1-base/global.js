import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    }

    body {
    margin: 0;
    background-color: #292929;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    overscroll-behavior: contain;
}

span {
    line-height: 1.6;
}

ul {
    padding: 0;
    margin: 0;
}

ul li {
    list-style: none;
    padding: 0;
}

div, h1, h2, h3, h4, p {
    margin: 0;
}

a {
    color: #e3b487;
}

a:hover {
    text-decoration: none;
}

textarea:focus,
input:focus {
    outline: 0;
} //border: 1px solid #eaeaea !important;

.form-control:focus {
    outline: 0;
    box-shadow: none;
}

button,
div,
input {
    &:focus,
    &:active {
        outline: 0 !important;
    }
}

svg {
    path {
        fill: #333333;
    }
}

img {
    image-orientation: from-image !important;
} //from-image | unset

/*
    Remove Arrows Inputs Type Numbers on Chrome, Safari, Edge, Opera
*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="date"]::-webkit-inner-spin-button {
    opacity: 0;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: url(https:\/\/cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-256.png) center/80% no-repeat;
    color: rgba(0, 0, 0, 0);
    opacity: 0.5;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
    background: url(https\/\/cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-256.png) center/80% no-repeat;
    opacity: 0.8;
}

/*
    Remove Arrows Inputs Type Numbers on  Firefox
*/
input[type="number"] {
    -moz-appearance: textfield;
}

`;