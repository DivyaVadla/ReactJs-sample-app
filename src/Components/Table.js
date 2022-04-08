import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, name: 'Abc', age: 21, email: 'Abc@email.com' },
            { id: 2, name: 'Efg', age: 19, email: 'Efg@email.com' },
            { id: 3, name: 'Hijk', age: 16, email: 'Hijk@email.com' },
            { id: 4, name: 'Lmno', age: 25, email: 'Lmno@email.com' }
         ]
      }
   }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }

}

export default Table 