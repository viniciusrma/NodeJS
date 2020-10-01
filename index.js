/*
The Node REPL

REPL is an abbreviation for read–eval–print loop. 
It’s a program that loops, or repeatedly cycles, through three different states: 

A read state where the program reads input from a user, 
The eval state where the program evaluates the user’s input, 
And the print state where the program prints out its evaluation to a console. 

Then it loops through these states again.

With node you run a program with the command:

$ node myProgram.js

*/ 

/*
The process.env property is an object which stores and controls information about the environment in which the process is currently running. 
For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. 
It can be useful to have some if/else logic in a program depending on the current environment
— a web application in a development phase might perform different tasks than when it’s live to users. 
We could store this information on the process.env. 
One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.
*/

if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}

/*
The process.memoryUsage() returns information on the CPU demands of the current process. 
It returns a property that looks similar to this:
*/

{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }
