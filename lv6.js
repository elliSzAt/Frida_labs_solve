Java.perform(function () {
    let Checker = Java.use("com.ad2001.frida0x6.Checker");
    let newChecker = Checker.$new();
    newChecker.num1.value = 1234;
    newChecker.num2.value = 4321;
    let MainActivity = Java.choose("com.ad2001.frida0x6.MainActivity", {
        onMatch: function(instance) {
            console.log("found");
            instance.get_flag(newChecker);
        },
        onComplete: function() {}
    });
});