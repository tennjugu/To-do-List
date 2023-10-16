# ToDo List App

This is a simple ToDo list app created as part of the Odin Project curriculum. The main focus of this project is to learn and practice the concept of Single Responsibility in web development. The app is built using HTML, CSS, JavaScript, and Webpack.

**Preview :**
![ToDo List App Demo](./src/preview/Todo-List-app-preview.gif)

## Features

- **Add Tasks**: You can easily add tasks to your ToDo list by typing them in the input field and pressing the "Add" button.

- **Remove Completed Tasks**: Once you've completed a task, you can mark it as complete, which is followed by a message asking you to remove task since it has been completed.

- **Task Sorting**: You can sort tasks based on dates, times, and priorities. By clicking on the **Due date** header, you toggle between sorted states and the default input state. Once clicked, it sorts according to due dates and when the dates are the same it sorts based on due time and when the time is the same is sorts based on the level of priority.

- **Local Storage**: Your tasks are saved using local storage, so you don't have to worry about losing them when you refresh the page or close the browser.

## Future Enhancements

I have plans to further improve this ToDo list app by adding the following features:

- **Today's Tasks**: Create a section specifically for tasks that need to be completed today, helping you prioritize your day.

- **Task Groups**: Implement the ability to categorize your tasks into groups or projects, making it easier to organize and manage your tasks.

- **Enhanced Aesthetics**: Improve the overall look and feel of the app to make it more visually appealing and user-friendly.

## Getting Started

If you want to run this project locally or contribute to its development, follow these steps:

1. Clone this repository to your local machine by running this command on your terminal.

```bash
git clone git@github.com:tennjugu/To-do-List.git
```

2. Install the required dependencies as contained in the package.json file by running the following commands.

```bash
cd todo-list-app 
npm install
```

3. Build the project using Webpack.

```bash
npm run build
```

4. Start the App: Start the development server with the following command (assuming you're using npm and Webpack Dev Server):

```bash
npm start -- --open
```

The --open flag will automatically open the app in your default web browser.

6. You can now access the app in your browser at http://localhost:8080.

## Contributions

Contributions are welcome! If you have any suggestions, bug reports, or would like to contribute to the project, please feel free to create issues or submit pull requests on the [GitHub repository](https://github.com/tennjugu/To-do-List).
