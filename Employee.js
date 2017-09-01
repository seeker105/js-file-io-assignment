 'use strict'

const fs = require('fs')

class Employee {
  constructor (dataOb, filePath) {
    this.name = dataOb.name
    this.title = dataOb.title
    this.salary = dataOb.salary
    this.filePath = filePath
  }

  static parseFromFilePath(filePath) {
    let dataOb = getObject(filePath)
    return new Employee(dataOb, filePath)
  }

  promote (titles, raise) {
    let titleArray = titles.split(' ')
    let index = titleArray.indexOf(this.title)
    if (index > 0)
      this.title = titleArray[index-1]
    this.salary += raise
    writeObject(this)
  }
}

const writeObject = (employeeOb) => {
  let rawData = JSON.stringify(employeeOb, ['name', 'title', 'salary'])
  fs.writeFileSync(employeeOb.filePath, rawData)
}
  
const getObject = (filePath) => {
   let rawData = fs.readFileSync(filePath)
   return JSON.parse(rawData)
}


module.exports = {
  Employee
}
