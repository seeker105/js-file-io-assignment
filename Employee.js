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
    let rawData = getFile(filePath)
    let dataOb = JSON.parse(rawData)
    let newEmployee = new Employee(dataOb, filePath)
    return newEmployee
  }

  promote (titles, raise) {
    let titleArray = titles.split(' ')
    let index = titleArray.indexOf(this.title)
    if (index > 0)
      index = index-1
    this.title = titleArray[index]
    this.salary += raise
    writeToFile(this)
  }

}

const writeToFile = (employeeOb) => {
  let rawData = JSON.stringify(employeeOb, ['name', 'title', 'salary'])
  fs.writeFileSync(employeeOb.filePath, rawData)
}

const getFile = (filePath) => {
  return fs.readFileSync(filePath)
}

module.exports = {
  Employee
}
