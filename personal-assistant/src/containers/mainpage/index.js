import React, { useReducer } from 'react';
import { StyledH1, Container, Background } from './styles';
import Table from '../../components/table/table';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Line from '../../components/line/line';
import { Center } from "../../components/center/center";
// import COMPONENT from 'FILEPATH'

const initialState = [
    {
        "Task Description": "",
        "Due Date": "",
        Complete: false
    }
];

const initialFormState = {
    search: "",
    description: "",
    duedate: "",
};

const MainPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    console.log(formState)
    function reducer(tasksState, action, testing) {
        switch (action.type) {
            case 'add':
                console.log(testing)
                const newTask = {
                    "Task Description": formState.description,
                    "Due Date": formState.duedate,
                    Complete: false
                }
                const tasks = tasksState.slice().concat(newTask)
                console.log(tasks)
                return tasks;
            case 'complete':
                return { /* some code to set complete to true */ };
            case 'delete':
                return { /* some code to delete the task */ };
            default:
                return tasksState;
        }
    }

    function formReducer(formState, action) {
        switch (action.type) {
            case 'textChange':
                return {
                    ...formState,
                    [action.field]: action.payload,
                };
            default:
                return formState;
        }
    };

    const handleTextChange = (e) => {
        formDispatch({
            type: 'textChange',
            field: e.target.name,
            payload: e.target.value,
        })
    }

    return (
        <Background>
            <Container>
                <StyledH1>Your to-do's!</StyledH1>
                <div>
                    <Input
                        name="search"
                        type='text'
                        value={formState.search}
                        onChange={(e) => handleTextChange(e)}
                        placeholder="Search for tasks..."
                    />
                </div>
                <Line />
                <div>
                    <Input
                        name="description"
                        type='text'
                        value={formState.description}
                        onChange={(e) => handleTextChange(e)}
                        placeholder="New task description..."
                    />
                    <Input
                        name="duedate"
                        type='date'
                        value={formState.duedate}
                        onChange={(e) => handleTextChange(e)}
                        placeholder="Select due date"
                    />
                    <Button
                        buttonText={"Create a task"}
                        onClick={() => dispatch({ type: 'add' }, formState)}></Button>
                </div>
                <Line />
                <Center V H>
                    <Table data={state} />
                </Center>
            </Container>
        </Background>
    );
}

export default MainPage
