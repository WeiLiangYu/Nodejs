class human{
    constructor(gender){
        this.gender = gender;
    }
};

class person extends human{
    constructor(gender, name) {
        super(gender);
        this.name = name;
    };

    helloMessage() {
        console.log(`Hello ${this.name}`);
        console.log(`Gender ${this.gender}`);
    };
};

const p = new person('Male', 'Peter');
p.helloMessage();