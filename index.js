function receivesAFunction(add){
    return add()
}

function add(a,b){
    return a + b
}

function returnsANamedFunction(){
    return function doMath(){
        console.log(1 + 1)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Hi there!')
    }
}