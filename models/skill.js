const skills = [
    {id: 123, skill: 'HTML', learned: true},
    {id: 456, skill: 'CSS', learned: true},
    {id: 789, skill: 'Javascript', learned: true},
    {id: 159, skill: 'C++', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
 
  function create(skill) {
    skill.id = Date.now() % 1000
    skill.done = false; 
    skills.push(todo)
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id); 
    return skills.find(skill => skill.id === id);
  }