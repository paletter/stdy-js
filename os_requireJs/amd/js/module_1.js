define(function(){
    function fn1() {
        console.log("Load Module_1");
    }

    fn1();

    function Module() {
        this.name = "Module_1";
    }

    return new Module();
})