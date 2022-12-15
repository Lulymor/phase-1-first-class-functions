function spy() {
    return "Hello world"
}
function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    function namedFunction() { console.log ("Hello")  }
    return namedFunction;
}

const x = function returnsAnAnonymousFunction() {
    console.log("Hello");
    
}
