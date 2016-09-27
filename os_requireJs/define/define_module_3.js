define(["jquery"], function($) {
    this.name = "Define Module 3";
    this.show = function() {
        alert("Load Define Module 3");
        alert($("#jqueryDiv").text());
    };

    return {
        name: this.name,
        show: this.show
    };
});