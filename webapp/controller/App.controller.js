sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.ui.demo.practice.controller.App", {
        onShowHello() {
            alert("Hello World");
        }
    })
})