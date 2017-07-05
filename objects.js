let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i = 0; i< students.length; i++){
  // console.log(student[i]); gives us an objects!
  let student = students[i];
  let new_string =`Name:${students[i].name}, Cohort: ${students[i].cohort}`;
  console.log(new_string);
}



let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for(let objects in users){
  console.log(objects.toUpperCase());
    for(let i = 0; i< users[objects].length; i++){
      add = users[objects][i].last_name.length + users[objects][i].first_name.length;
      lastname = users[objects][i].last_name;
      firstname = users[objects][i].first_name;
      console.log(`${i+1} - ${lastname},${firstname} - ${add}`);
  }
}
