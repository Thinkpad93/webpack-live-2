console.log(["Another", "module", "loaded!"]);

let sayHello = (name) => {
     console.log(`Hello, ${name}`);
}

sayHello("Linchang");

["Another", "module", "loaded!"].forEach(item => {
    console.log(item.toLowerCase());
});