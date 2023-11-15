sap.ui.define(function() {
	"use strict";

	var Formatter = {

		weightState :  function (fMeasure, sUnit) {
				console.log ('data traida eg : ' + fMeasure);
				console.log ('data traida eg1 : ' + sUnit);
			// Boarder values for different status of weight
			
			var fMaxWeightSuccess = sUnit;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			if (fMaxWeightSuccess === "") {
				return "None";
			} else if (fMaxWeightSuccess === "C") {
				return "Success";
			} else if (fMaxWeightSuccess === "D") {
				return "Warning";
			} else {
				return "Error";
			}
		}
	};

	return Formatter;

}, /* bExport= */ true);
