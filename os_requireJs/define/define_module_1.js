define(function() {
    this.name = "Define Module 1";
    this.show = function() {
        alert("Load Define Module 1");
    };

    return {
        name: this.name,
        show: this.show
    };
});