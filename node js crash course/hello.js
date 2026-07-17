function sayHello(name) {
    console.log(`Hello ${name}`);
}
function saySalam(name) {
    console.log(`Aslam-o-Alaikum ${name}!`);
}

// Common JS
// module.exports=sayHello;
// module.exports = { sayHello, saySalam };

// EJS Modules
// export { sayHello };
// export { sayHello , saySalam };
export default sayHello;
export {saySalam}