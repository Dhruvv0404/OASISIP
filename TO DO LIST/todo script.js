/* General styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 2rem;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
}

.container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.task-input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;
    text-align: center;
}

input, select, button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    width: 100%;
    max-width: 380px;
    font-size: 1rem;
}

button {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#clearTasksButton {
    background-color: #f44336;
    margin-top: 20px;
    width: 100%;
    max-width: 380px;
}

#clearTasksButton:hover {
    background-color: #e53935;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 400px;
    text-align: left;
}

li {
    padding: 10px;
    margin: 5px 0;
    background-color: #f9f9f9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

li.completed {
    text-decoration: line-through;
    background-color: #d3ffd3;
}

li.low {
    border-left: 5px solid #4CAF50;
}

li.medium {
    border-left: 5px solid #FFEB3B;
}

li.high {
    border-left: 5px solid #F44336;
}

.deleteButton, .editButton {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 5px;
}

.deleteButton:hover, .editButton:hover {
    background-color: #e53935;
}
