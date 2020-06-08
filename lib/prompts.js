module.exports = {
    manager: [{
        type: "input",
        name: "name",
        message: "Enter the managers name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the managers ID: "

    },
    {
        type: "input",
        name: "email",
        message: "Enter the managers Email: "
    },
    {
        type: "input",
        name: "office",
        message: "Enter the managers office number: "
    }],
    intern: [{
        type: "input",
        name: "name",
        message: "Enter the intern name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern ID: "

    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern Email: "
    },
    {
        type: "input",
        name: "school",
        message: "Enter the interns school: "
    }],
    engineer: [{
        type: "input",
        name: "name",
        message: "Enter the engineers name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineers ID: "

    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineers Email: "
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter the engineer GitHub: "
    }],
    select: {
        name: 'select',
        type: 'list',
        choices: ['Intern', 'Engineer', 'Done'],
        message: 'Who would you like to add?'
    }
}