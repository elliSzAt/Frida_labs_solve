Java.perform(function () {
    let MainActivity = Java.use("com.ad2001.frida0x8.MainActivity");
    MainActivity.cmpstr.implementation = function (str) {
        console.log("so sanh luon true");
        return 1;
    }
});
