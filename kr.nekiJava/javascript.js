const names = ["John", "Alice", "Jack", "Bob", "James", "Sarah", "Michael"];

names.forEach(name => {

    if (name.charAt(0).toLowerCase() === 'j') {
        console.log(`Goodbye ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
});