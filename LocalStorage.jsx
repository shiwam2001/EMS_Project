const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Task 1",
                "taskDescription": "Complete project documentation.",
                "taskDate": "2025-01-01",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Task 2",
                "taskDescription": "Design user interface layout.",
                "taskDate": "2025-01-02",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Rahul",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Task 1",
                "taskDescription": "Write test cases for module A.",
                "taskDate": "2025-01-01",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Task 2",
                "taskDescription": "Fix bugs in authentication module.",
                "taskDate": "2025-01-03",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Task 1",
                "taskDescription": "Optimize database queries.",
                "taskDate": "2025-01-04",
                "category": "Optimization",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Task 2",
                "taskDescription": "Prepare API documentation.",
                "taskDate": "2025-01-05",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Arjun",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Task 1",
                "taskDescription": "Implement user authentication.",
                "taskDate": "2025-01-06",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Task 2",
                "taskDescription": "Test security vulnerabilities.",
                "taskDate": "2025-01-07",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Rajesh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Task 1",
                "taskDescription": "Deploy application to production.",
                "taskDate": "2025-01-08",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Task 2",
                "taskDescription": "Monitor server logs.",
                "taskDate": "2025-01-09",
                "category": "Monitoring",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = {
    "id": 1,
    "firstName":"suresh",
    "email": "admin@me.com",
    "password": "123"
};



export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage =()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
    
}