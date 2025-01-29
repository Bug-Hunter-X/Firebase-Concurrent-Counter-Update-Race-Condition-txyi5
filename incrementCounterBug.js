function incrementCounter(userId) {
  const userRef = db.ref(`users/${userId}/counter`);
  userRef.once('value', (snapshot) => {
    let count = snapshot.val() || 0; // Handle initial value of null
    count++;
    userRef.set(count);
  });
}

//The above function may fail to update counter properly if multiple users call it concurrently.
//This is because of the asynchronous nature of Firebase's once method. Multiple calls may read the same value and increment it, and only the last write will succeed.