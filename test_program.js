'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employee =
Employee
  .parseFromFilePath(
    path.resolve(__dirname, 'employee.json')
  )