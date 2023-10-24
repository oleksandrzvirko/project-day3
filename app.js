var app = Vue.createApp({
    data() {
        return {
            students: [
                { id: 1, fullName: 'Петренко Олександр Васильович', group: 'Група 101', birthYear: 2000, passedPractical: true },
                { id: 2, fullName: 'Іванова Марія Володимирівна', group: 'Група 102', birthYear: 1999, passedPractical: false },
                { id: 3, fullName: 'Сидоренко Анна Ігорівна', group: 'Група 103', birthYear: 2001, passedPractical: true },
                { id: 4, fullName: 'Григорович Максим Олегович', group: 'Група 104', birthYear: 1998, passedPractical: false },
                { id: 5, fullName: 'Коваленко Юлія Сергіївна', group: 'Група 105', birthYear: 2000, passedPractical: true },
                { id: 6, fullName: 'Мельник Денис Михайлович', group: 'Група 106', birthYear: 1999, passedPractical: false },
                { id: 7, fullName: 'Павленко Олена Володимирівна', group: 'Група 107', birthYear: 2001, passedPractical: true },
                { id: 8, fullName: 'Козлов Віталій Станіславович', group: 'Група 108', birthYear: 1998, passedPractical: false },
                { id: 9, fullName: 'Даниленко Анастасія Ігорівна', group: 'Група 109', birthYear: 2000, passedPractical: true },
                { id: 10, fullName: 'Білозір Олександр Віталійович', group: 'Група 110', birthYear: 1999, passedPractical: false }
            ],
            searchQuery: '',
            newStudent: {
                fullName: '',
                group: '',
                birthYear: null,
                passedPractical: false,
            },
        };
    },
    computed: {
        filteredStudents() {
            const searchLowerCase = this.searchQuery.toLowerCase();
            return this.students.map(student => {
                const fullNameLowerCase = student.fullName.toLowerCase();
                student.highlighted = fullNameLowerCase.includes(searchLowerCase);
                return student;
            });
        }
    },
    methods: {
        deleteStudent(studentId) {
            const index = this.students.findIndex(student => student.id === studentId);
            if (index !== -1) {
                this.students.splice(index, 1);
            }
        },
        addStudent() {
            const newStudentWithId = { ...this.newStudent, id: this.students.length + 1 };
            this.students.push(newStudentWithId);
            this.newStudent = {
                fullName: '',
                group: '',
                birthYear: null,
                passedPractical: false,
            };
        }
    }
});

app.mount('#app');