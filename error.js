setTimeout(() => {
  throw new Error('Oops');
}, 300);


// When uncaught error
process.on('uncaughtException', () => {});

// When uncaught error in a promise
process.on('unhandledRejection', () => {});
