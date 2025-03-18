function delayCallback(callback) {
    setTimeout(() => {
      callback();  
    }, 2000); 
  }
  
 
  delayCallback(() => {
    console.log('Callback');
  });