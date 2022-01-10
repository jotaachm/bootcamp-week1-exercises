import React, { useReducer, useState } from 'react';
import { StyledH1, Container, Background, MyTable, PrettyText } from './styles';
// import Table from '../../components/table/table';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
// import Task from '../../components/task/task';
import Line from '../../components/line/line';
import { Center } from "../../components/center/center";
import NavBar from '../../components/navBar/navBar';
// import COMPONENT from 'FILEPATH'

const initialState = [];

const initialFormState = {
    search: "",
    description: "",
    duedate: "",
};

const MainPage = () => {
    const formReducer = (formState, action) => {
        switch (action.type) {
            case 'textChange':
                return {
                    ...formState,
                    [action.field]: action.payload,
                };
            case 'resetForms':
                return initialFormState;
            default:
                return formState;
        }
    };

    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    const reducer = (tasksState, action, index) => {
        switch (action.type) {
            case 'add':
                if (!formState.description.trim()) {
                    alert("I can't add a task if you don't describe it!");
                    return tasksState;
                };
                if (!formState.duedate.trim()) {
                    alert('Please select a duedate');
                    return tasksState;
                };
                const newTask = {
                    description: formState.description,
                    duedate: formState.duedate,
                }
                const tasks = tasksState.slice().concat(newTask)
                formDispatch({ type: 'resetForms' });
                return tasks;
            case 'delete':
                const remainingTasks = tasksState.slice();
                remainingTasks.splice(index, 1);
                return remainingTasks;
            default:
                return tasksState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const [searchState, setSearch] = useState([]);

    const handleTextChange = (e) => {
        formDispatch({
            type: 'textChange',
            field: e.target.name,
            payload: e.target.value,
        })
    }

    const tableHeader = () => {
        let headerElement = ['Task Description', 'Duedate', 'Delete']
        if (state === initialState) {
            return <PrettyText>Nothing on your schedule! <span role={"img"} aria-label={"party emoji"}>🥳</span></PrettyText >
        }
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const tableBody = (array) => {
        return array.map(({ description, duedate }, index) => {
            return (
                <tr key={index}>
                    <td>{description}</td>
                    <td>{duedate}</td>
                    <td>
                        <Button
                            onClick={() => dispatch({ type: 'delete' }, index)}
                            buttonText={'Delete'}>
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <Background>
            <NavBar></NavBar>
            <Container>
                <StyledH1>Your to-do's!</StyledH1>
                <div>
                    <Input
                        name="search"
                        type='text'
                        onChange={(e) => setSearch(state.filter(({ description }) => description.includes(e.target.value)))}
                        placeholder="Search for tasks..."
                    />
                    {searchState.length > 0 &&
                        <Center V H>
                            < MyTable >
                                <thead>
                                    <tr>{tableHeader()}</tr>
                                </thead>
                                <tbody>
                                    {tableBody(searchState)}
                                </tbody>
                            </MyTable >
                        </Center>}
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
                    <MyTable>
                        <thead>
                            <tr>{tableHeader()}</tr>
                        </thead>
                        <tbody>
                            {tableBody(state)}
                        </tbody>
                    </MyTable>
                </Center>
            </Container>
        </Background >
    );
}

export default MainPage
