// Remark

window.onload = function() {

    console.log("-- Run onload()");

    // Case 1
    console.log("================= Case 1");
    
    var task1 = function(callback) { console.log("-- ==== Run Task1"); if(callback) {callback();} };
    var task2 = function(callback) { console.log("-- ==== Run Task2"); if(callback) {callback();} };
    var task3 = function(callback) { console.log("-- ==== Run Task3"); if(callback) {callback();} };
    var task4 = function(callback) { console.log("-- ==== Run Task4"); if(callback) {callback();} };
    
    series([task1, task2, task3, task4]
        , function(totalCount, doneCount) {
            console.log("-- Run progressCallBack(), totalCount: " + totalCount + ", doneCount: " + doneCount);
        }
    );

    // Case 2
    console.log("================= Case 2");
    
    var func1 = applyFunc(function() { console.log("-- ==== Run Func1"); arguments[2](); }, 1, 2);
    var func2 = applyFunc(function() { console.log("-- ==== Run Func2"); arguments[2]()}, 3, 4);
    var func3 = applyFunc(function() { console.log("-- ==== Run Func3"); arguments[2]()}, 5, 6);

    series([func1, func2, func3]
        , function(totalCount, doneCount) {
            console.log("-- Run progressCallBack(), totalCount: " + totalCount + ", doneCount: " + doneCount);
        }
    );
}

function series(taskArr, progressCallBack) {

    console.log("-- Run series()");

    var totalCount = taskArr.length;
    var func = taskArr.shift();
    var callback = applyFunc(seriesCallBack, taskArr, progressCallBack, totalCount);
    func(callback);
}

function applyFunc(fn) {

    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
//        fn.apply(null, args.concat(arguments));
        fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    };
}

function seriesCallBack(taskArray, progressCallBack, totalCount) {

    console.log("-- Run seriesCallBack()");

    if(progressCallBack) {
        progressCallBack(totalCount, totalCount - taskArray.length);
    }

    var func = taskArray.shift();
    if(func) {
        var callback = applyFunc(seriesCallBack, taskArray, progressCallBack, totalCount);
        func(callback);
    }
}
