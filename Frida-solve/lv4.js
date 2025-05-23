Java.perform(function () {
    let Check = Java.use("com.ad2001.frida0x4.Check");

    let newCheck = Check.$new();
    let res = newCheck.get_flag(1337);
    console.log("flag:" + res);
});
