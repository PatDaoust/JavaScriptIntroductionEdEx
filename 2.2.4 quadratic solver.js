//params = a, b, c
//delta = b2 - 4a*c. 
//return 2 ints: roots of the equation
function quadraticSolverReal (a, b, c){
    //calc delta
    let delta = (b*b) - (4*a*c);
    //calc + root
    let rootPos = (-b + Math.sqrt(delta)) / (2*a);
    //calc - root
    let rootNeg = (-b - Math.sqrt(delta)) / (2*a);
    //create 2-tuple with both roots
    let roots = [rootNeg, rootPos];
    //return 2-tuple
    return roots;
}

console.log(quadraticSolverReal (1, -3, -10));
//expect x=5 and x=−2
console.log(quadraticSolverReal (1, -8, 5));
//expect x=7.31662 and x=0.683375
console.log(quadraticSolverReal (1, 2, 3));
//expect imaginary
