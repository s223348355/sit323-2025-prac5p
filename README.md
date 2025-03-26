# Calculator Microservice (SIT323/SIT737 4.1P)

## Overview
This project provides a simple microservice built with Node.js and Express, performing basic arithmetic operations (addition, subtraction, multiplication, division) via REST API endpoints.

## Requirements
- Node.js
- npm
- Git
- Visual Studio Code (recommended)

## Installation
1. Clone the repository:

```bash
git clone https://github.com/your-username/sit323-2025-prac4p.git
cd sit323-2025-prac4p
```

2. Install dependencies:

```bash
npm install
```

## Running the Microservice
Start the microservice:

```bash
node index.js
```

The service will start running at:
```
http://localhost:3000
```

## API Endpoints

The microservice supports the following endpoints:

### Addition
- **Endpoint:** `/add`
- **Method:** `GET`
- **Parameters:** `num1`, `num2`
- **Example:**

```
GET http://localhost:3000/add?num1=10&num2=5
```
- **Response:**
```json
{
  "operation": "addition",
  "result": 15
}
```

### Subtraction
- **Endpoint:** `/subtract`
- **Method:** `GET`
- **Parameters:** `num1`, `num2`
- **Example:**

```
GET http://localhost:3000/subtract?num1=10&num2=5
```
- **Response:**
```json
{
  "operation": "subtraction",
  "result": 5
}
```

### Multiplication
- **Endpoint:** `/multiply`
- **Method:** `GET`
- **Parameters:** `num1`, `num2`
- **Example:**

```
GET http://localhost:3000/multiply?num1=10&num2=5
```
- **Response:**
```json
{
  "operation": "multiplication",
  "result": 50
}
```

### Division
- **Endpoint:** `/divide`
- **Method:** `GET`
- **Parameters:** `num1`, `num2`
- **Example:**

```
GET http://localhost:3000/divide?num1=10&num2=5
```
- **Response:**
```json
{
  "operation": "division",
  "result": 2
}
```

## Error Handling
The microservice provides meaningful error messages in JSON format:

- **Invalid parameters:**
```json
{
  "status": "error",
  "message": "Both num1 and num2 must be valid numbers."
}
```

- **Division by zero:**
```json
{
  "status": "error",
  "message": "Division by zero is not allowed."
}
```

- **Invalid endpoint:**
```json
{
  "status": "error",
  "message": "Endpoint not found. Please check your request."
}
```



