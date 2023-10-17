const skills = [
    {id: 123, skill: 'HTML', learned: true},
    {id: 456, skill: 'CSS', learned: true},
    {id: 789, skill: 'Javascript', learned: true},
    {id: 159, skill: 'C++', learned: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }