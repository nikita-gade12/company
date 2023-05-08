import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom'
import comp from "../images/comp.jpg";
import emp from "../images/emp 3.jpg"

import"../styles/HomeStyles.css";



const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${comp})`}}>
          <div className='headerContainer'>
              <h1> Company Website</h1>
              <p>Best Company</p>
              <Link to="/menu" >
              <button>
                SUBMIT
              </button>
              </Link>
            

             
          </div>
        </div>
    </Layout>
  )
};

export default Home