# Week 2 Exercise - MongoDB & Node.js (Driver Data Management)

## 📄 Overview
This project is part of the Week 2 Exercise for the Database Programming subject. It demonstrates how to perform basic **CRUD operations** (Create, Read, Update, Delete) using **Node.js** and **MongoDB** to manage driver data.

---

## 🚀 Tasks Completed

### ✅ Task 1
**Define Drivers as a JavaScript Variable**
- An array of driver objects is created in `index.js`.

### ✅ Task 2
**Manipulate the Drivers Array**
- Task 2.1: Display all driver names using `.forEach()`.
- Task 2.2: Add a new driver to the array.

### ✅ Task 3
**Insert Drivers into MongoDB**
- The driver data is inserted into the `drivers` collection in MongoDB.

### ✅ Task 4
**Query Available Drivers**
- Query drivers with `isAvailable: true` and `rating >= 4.5`.

### ✅ Task 5
**Update Driver Data**
- Increase John Doe’s rating by `0.1` using `.updateOne()`.

### ✅ Task 6
**Delete Driver Data**
- Delete drivers based on `isAvailable` condition using `.deleteOne()`.

---

## 💡 Lab Report

### 1. Explain what is CRUD operations and how it is relates to the mongo functions in
the exercise.
### 2. Identify all the mongo operators used in the exercise, then explain the usage for
each.
### 3. Replace the mongo functions in Task 5 to updateMany instead of updateOne,
compare the diFerence based on the result in console and the mongo compass.
### 4. Replace the mongo functions in Task 6 to deleteMany instead of deleteOne,
compare the diFerence based on the result in console and the mongo compass.

Submission Requirements
1. GitHub repository with:
o Node.js scripts.
o Screenshots of MongoDB operations.
2. Lab report with answers to all questions.

