import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clark','Diana','Bruce']
    const persons =[
        {
            id:1,
            name:'Bruce',
            age: 30,
            skill:'React'
        },
        {
            id:2,
            name:'Lucy',
            age: 20,
            skill:'MongoDB'
        },
        {
            id:3,
            name:'Clark',
            age: 10,
            skill:'Python'
        }
    ]
    const namelist = names.map((name, index)=><h2 key={index}>{index}  {name}</h2>)
    // const personlist = persons.map(person=>(
    //     <Person key={person.name}  person={person}/>
    // ))
  return (
    <div>
      {namelist}
      {/* {personlist} */}
    </div>  
  )
}

export default NameList
