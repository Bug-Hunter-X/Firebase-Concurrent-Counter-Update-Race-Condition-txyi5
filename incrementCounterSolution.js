function incrementCounterTransaction(userId) {
  const userRef = db.ref(`users/${userId}/counter`);
  userRef.transaction((currentCount) => {
    return (currentCount || 0) + 1;
  });
}

//The transaction method ensures that the increment operation is atomic, preventing the race condition.