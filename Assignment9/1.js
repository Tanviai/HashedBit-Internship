function variableScopeExample() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("var:", a);
    console.log("let:", b);
    console.log("const:", c);

    if (true) {
        var x = 100;
        let y = 200;
        const z = 300;

        console.log("Inside block:");
        console.log(x); // 100
        console.log(y); // 200
        console.log(z); // 300
    }

    console.log("Outside block:");
    console.log(x); // 100
    // console.log(y); // Error: y is not defined
    // console.log(z); // Error: z is not defined
}

variableScopeExample();