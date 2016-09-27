define(["define_module_1.js"], function(defineModule1) {
    this.name = "Define Module 2";
    this.show = function() {
        alert("Load Define Module 2");
    };

    defineModule1.show();
    console.log(defineModule1.name);

    return {
        name: this.name,
        show: this.show
    };
});