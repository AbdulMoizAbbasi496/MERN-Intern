(function calculator(){
    const n1 = parseFloat(prompt("Enter first value: "))
    const n2 = parseFloat(prompt("Enter second value: "))
    const op = parseInt(prompt("Enter operation:\n\t1.Addition\n\t2.Subtraction\n\t3.Multiplication\n\t4.Division\n"))
    if (op==1) {
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
    } else if(op==2){
        console.log(`${n1} - ${n2} = ${n1 - n2}`)
    }
    else if(op==3){
        console.log(`${n1} X ${n2} = ${n1 * n2}`)
    }
    else if(op==4){
        console.log(`${n1} / ${n2} = ${n1 / n2}`)
    } else{
        alert("Invalid option.")
    }
})();