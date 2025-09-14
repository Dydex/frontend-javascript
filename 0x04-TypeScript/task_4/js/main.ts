// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC: number;
}

// Teacher object
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp Subject
export const cpp = {
  subjectName: 'C++',
  teacher: null as Teacher | null,
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  },
  getRequirements() {
    return 'Here is the list of requirements for C++: Basic understanding of programming concepts, knowledge of data structures, and familiarity with object-oriented programming.';
  },
  getAvailableTeacher() {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  },
};

// Java Subject
export const java = {
  subjectName: 'Java',
  teacher: null as Teacher | null,
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  },
  getRequirements() {
    return 'Here is the list of requirements for Java: Understanding of OOP principles, basic programming knowledge, and familiarity with Java syntax.';
  },
  getAvailableTeacher() {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  },
};

// React Subject
export const react = {
  subjectName: 'React',
  teacher: null as Teacher | null,
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  },
  getRequirements() {
    return 'Here is the list of requirements for React: Knowledge of JavaScript, understanding of HTML/CSS, and familiarity with React components.';
  },
  getAvailableTeacher() {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  },
};

// Cpp operations
console.log(cpp.subjectName);
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java operations
console.log(java.subjectName);
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React operations
console.log(react.subjectName);
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
