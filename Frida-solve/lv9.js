Java.perform(function () {
    let MainActivity = Java.use("com.ad2001.a0x9.MainActivity");
    MainActivity["check_flag"].implementation = function () {
    return 1337;
};
});