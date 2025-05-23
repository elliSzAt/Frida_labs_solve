Java.perform(function () {
    let Check = Java.use("com.ad2001.frida0x7.Checker");
    let newCheck = Check.$new(1234, 4321);
    let MainActivity = Java.choose("com.ad2001.frida0x7.MainActivity", {
        onMatch: function(instance) {
            console.log("found");
            instance.flag(newCheck);
        },
        onComplete: function() {}
    });
}
);