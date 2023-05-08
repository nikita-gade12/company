import React from 'react'
import Layout from '../components/Layout/Layout'


const About = () => {
  return (
    <Layout  >
        <h1> About page</h1>
        <h2 >IMFO</h2>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Employee Id</th>
              <th>Employee Role</th>
            </tr>
            <br/>
        </thead>
        <tr>
          <td>Reva</td>
          <td>76598</td>
          <td>Web developer</td>
          </tr>
          <tr>
          <td>sakshi</td>
          <td>99553</td>
          <td>programmer</td>
          </tr>
          <tr>
          <td>nil</td>
          <td>34210</td>
          <td>java Expert</td>
          </tr>
          <tr>
          <td>shubham </td>
          <td>74492</td>
          <td>Android developer</td>
          </tr>
          <tr>
          <td>Ravi</td>
          <td>54891</td>
          <td> React Expert</td>
          </tr>
        <tbody>

           
        </tbody>
      </table>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWSukKRk9gAAlFThNlME_e9u0mi4DJNd6Pg&usqp=CAU'/>
    </Layout>
  )
}

export default About