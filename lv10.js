Java.perform(function () {
    var getFlag = Module.findExportByName("libfrida0xa.so", "_Z8get_flagii");
    if (getFlag) {
        console.log("found");
        var get_flag = new NativeFunction(getFlag, 'int', ['int', 'int']);
        var res = get_flag(1, 2);
        console.log(res);
    }
    else {
        console.log("not found");
    }
});