const obj1 = [
    {
        "name": "Harish",
        "Age": 32,
        "Gender": "Male"
    },
    {
        "name": "Sumit",
        "Age": 33,
        "Gender": "Male"
    },
    {
        "name": "Suresh",
        "Age": 31,
        "Gender": "Male"
    },
    {
        "name": "Arpan",
        "Age": 30,
        "Gender": "Male"
    },
    {
        "name": "Desh",
        "Age": 29,
        "Gender": "Male"
    },
    {
        "name": "Sourav",
        "Age": 27,
        "Gender": "Male"
    },
    {
        "name": "Ritesh",
        "Age": 25,
        "Gender": "Male"
    }
]

const obj2 = obj1.reduce((p,c) => {
     const temp_val = parseInt(c.Age/10)*10;
     const temp_key = `${temp_val}-${(temp_val+9)}`;
     if(!p[temp_key]){p[temp_key] = [];}
     p[temp_key] = [...p[temp_key],c];
     return p;
},{});
console.log(obj2);