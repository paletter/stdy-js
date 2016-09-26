define(function(){
    function fn1() {
        console.log("Load Module_2");
    }

    fn1();

    function Module() {
        this.name = "Module_2";
    }

    return new Module();
})