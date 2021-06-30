import { v4 as uuidv4 } from "uuid";

const todos = [
    {id: uuidv4(), text: "Take kids to school.", isComplete: false},
    {id: uuidv4(), text: "Wash the dishes.", isComplete: false},
    {id: uuidv4(), text: "Fill car with gas.", isComplete: false},
    {id: uuidv4(), text: "Workout at gym.", isComplete: false}
];

export default todos;