import React from 'react'
import Header from './Header'
import Content from './Content'
import Sum from './Sum'

const Course = ({courses}) => {
    return(
      <div>
        {courses.map(course =>
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Sum parts={course.parts} />
          </div>
          )}
      </div>
      
    )
  }

  export default Course 