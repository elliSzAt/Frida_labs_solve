Java.perform(function () {
    Java.use("com.ad2001.frida0x5.MainActivity").onCreate.implementation = function (bundle) {
    this.onCreate(bundle);
    console.log("onCreate hooked");

    Java.choose("com.ad2001.frida0x5.MainActivity", {
        onMatch: function(instance) {
            instance.flag(1337);
        },
        onComplete: function() {}
    });
};
});