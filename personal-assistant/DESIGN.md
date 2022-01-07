I have included in the public directory a rough first diagram of how my To-do list app could look like.

Right now, I plan on having a tasks-viewer (parent) component that controls the state of the tasks and renders the rest of its child components.

Each task will be an object containing a unique id, a short-description of the task, its due date, and whether or not the task is completed/deleted.
Tasks will be displayed in a table that shows their description, due date, and allows the user to delete them by accessing the array of objects in the state of the tasks-viewer component.

There will be an input tag (controlled component) that allows the user to search and filter tasks by accessing the array of objects in the state of the tasks-viewer component.

When the user starts to search something, the relevant tasks that match the user's search will render in a table.

We will also gather input from the user to create a new task. The user will type its description, select its due date, and click Add Task so that it immediately appears below.
