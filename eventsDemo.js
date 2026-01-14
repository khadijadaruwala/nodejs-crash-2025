import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
   console.log('Hello ' + name);
}

function goodbyeHandler(name){
    console.log('Good Bye ' + name);
}

// Register event listener
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'Jane')

// Error handling 
myEmitter.on('error', (err) => {
    console.log('An error occured', err)
})

//Simulate error
myEmitter.emit('error', new Error('Something went wrong'))