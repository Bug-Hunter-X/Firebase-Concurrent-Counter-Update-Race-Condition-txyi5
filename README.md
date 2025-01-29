# Firebase Concurrent Counter Update Race Condition

This repository demonstrates a race condition that can occur when multiple clients concurrently attempt to increment a counter in Firebase.  The provided code implements a solution using Firebase transactions to ensure atomicity. 

## Bug

The `incrementCounter.js` file contains a function that attempts to increment a counter in Firebase.  However, due to the asynchronous nature of Firebase operations, if multiple clients call this function simultaneously, the counter may not be incremented correctly.  This is because each client reads the current value, increments it locally, and then writes the updated value back to Firebase.  If two clients read the same value, they will both write the same incremented value, resulting in one update being overwritten.

## Solution

The `incrementCounterSolution.js` file contains a corrected implementation that uses Firebase transactions to solve this race condition.  A transaction ensures that the increment operation is atomic; it is either executed completely or not at all. This guarantees that the counter will always be updated correctly, even with concurrent calls.

## Setup

1.  Initialize a Firebase project.
2.  Install the Firebase JavaScript SDK: `npm install firebase`
3.  Replace placeholders in the code with your Firebase configuration.
4.  Run the code.