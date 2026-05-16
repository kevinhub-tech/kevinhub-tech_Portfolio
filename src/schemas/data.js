import html from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import express from "../images/express.png";
import react from "../images/structure.png";
import php from "../images/PHP.png";
import wordpress from "../images/wordpress.png";
import laravel from "../images/laravel.png";

function data(schema) {
    if(schema === "skills") {
        return skills;
    }
}

const skills = [
    {
        image: html,
        label: "HTML",
    },
    {
        image: css,
        label: "CSS",
    },
     {
        image: js,
        label: "JAVASCRIPT",
    },
    {
        image: php,
        label: "PHP",
    },
    {
        image: wordpress,
        label: "WORDPRESS",
    },
    {
        image: laravel,
        label: "LARAVEL",
    },
    {
        image: react,
        label: "REACT",
    },
    {
        image: express,
        label: "EXPRESS",
    },
]

export default data;