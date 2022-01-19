import React from 'react';
import Nav from "./Nav"

const Home = () => {
    return (
        <div>
            <Nav/>
            <h1>
                TYPE of Animals
            </h1>
            <div className='home-body'>
            <img src="https://image.freepik.com/free-vector/large-set-wildlife-with-many-types-animals_1308-38294.jpg" />
            <div>
                <h3>Animal Kingdom</h3>
                <p>
                rom the biological classification perspective, animals belong to the kingdom called Animalia. They are eukaryotes and multi-cellular living organisms. Animals are locomotive (i.e., ability to move around), heterotrophic (i.e., consume organic material as a source of food), and reproduce sexually (with the exceptions of asexual organisms). The study of animals is called Zoology.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Home;