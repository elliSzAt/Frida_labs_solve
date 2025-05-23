Java.perform(function () {
    let MainActivity = Java.use("com.ad2001.frida0x1.MainActivity");
MainActivity["get_random"].implementation = function () {
    console.log(`MainActivity.get_random is called`);
    var i = 5;
    console.log(`input 14`);
    return i;
};
});