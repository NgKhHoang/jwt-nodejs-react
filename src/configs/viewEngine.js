import express from "express";
/**
 * 
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs"); // con nghe gi de viet html
    app.set("views", "./src/views"); //noi luu tru file
}

export default configViewEngine;
