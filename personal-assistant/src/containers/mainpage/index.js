import React, { useReducer, useState } from 'react';
import { StyledH1, Container, Background, MyTable, PrettyText } from './styles';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Line from '../../components/line/line';
import { Center } from '../../components/center/center';
import NavBar from '../../components/navBar/navBar';
import { faSearch, faCalendarAlt, faTasks } from '@fortawesome/free-solid-svg-icons';

const initialState = [];

const initialFormState = {
    search: "",
    description: "",
    duedate: "",
};

const MainPage = () => {
    // controls the state of the input fields when their text changes or they have to be reset
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

    const handleTextChange = (e) => {
        formDispatch({
            type: 'textChange',
            field: e.target.name,
            payload: e.target.value,
        })
    }

    // controls the state of the to-do's that are added and deleted
    const reducer = (tasksState, action, index) => {
        switch (action.type) {
            case 'add':
                // prevents the user from adding empty tasks
                if (!formState.description.trim()) {
                    alert("I can't add a task if you don't describe it!");
                    return tasksState;
                };
                if (!formState.duedate.trim()) {
                    alert('Please select a duedate');
                    return tasksState;
                };
                // adds a non-empty new task
                const newTask = {
                    description: formState.description,
                    duedate: formState.duedate,
                }
                const tasks = tasksState.slice().concat(newTask)
                formDispatch({ type: 'resetForms' });
                return tasks;
            case 'delete':
                // delete the task selected
                const remainingTasks = tasksState.slice();
                remainingTasks.splice(index, 1);
                return remainingTasks;
            default:
                return tasksState;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // controls the state of the search bar to display the tasks that are being searched
    const [searchState, setSearch] = useState([]);

    // functions that dynamically render a table with to-do's
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
                <Input
                    name="search" placeholder="Search for tasks..." icon={faSearch}
                    onChange={(e) => setSearch(state.filter(({ description }) => description.includes(e.target.value)))} />

                {/* conditionally renders the to-do's that match a concrete search */}
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
                <Line />
                <Input
                    name="description" placeholder="New task description..." icon={faTasks}
                    onChange={(e) => handleTextChange(e)} />
                <Input
                    name="duedate" type='date' placeholder="Select due date" icon={faCalendarAlt}
                    onChange={(e) => handleTextChange(e)} />
                <Button
                    buttonText={"Create a task"}
                    onClick={() => dispatch({ type: 'add' }, formState)}></Button>
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
