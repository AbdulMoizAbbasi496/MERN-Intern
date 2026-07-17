var str = prompt("Enter a string: ")
function rev_str(str){
    return str.split("").reverse().join("")
}
console.log(`Reversed String is : ${rev_str(str)}`);
alert(`Reversed String is : ${rev_str(str)}`);
