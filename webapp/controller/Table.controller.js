sap.ui.define([
    './Formatter',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/library',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",

], function(Formatter, Controller, JSONModel, Filter, FilterOperator,FilterType){
"use strict";


var TableController = Controller.extend("project1.controller.Table", {

    onInit: function () {
        // set explored app's demo model on this sample
        var oJSONData = {
            busy : false,
            order : 0
        };
        var oModel = new JSONModel(oJSONData);
        this.getView().setModel(oModel);
    },

    downloadPDF : function (){

        window.open('../documento/Transacción.pdf','_blank');
    },
});


return TableController;

});