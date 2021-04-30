import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faHome, faPlus, faList, faTasks, faComment} from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css';
import client1 from '../../../img/client1.jpg'
const Dashboard = () => {

    return (
        <div class="sidebar">
            <div>
                <img src={client1} alt="" className="img-style img-fluid rounded" />
                <h6 className="text mt-2">Km Rahat</h6>
                
            </div>
            <div className="mt-5 ">
                <a href="/"> <FontAwesomeIcon icon={faHome} /> Home</a>
                <a href="addReview"> <FontAwesomeIcon icon={faComment} /> Add Reviews</a>
                <a href="services"><FontAwesomeIcon icon={faList} /> Order list</a>
                <a href="addProduct"><FontAwesomeIcon icon={faPlus} /> AddProduct</a>
                <a href="clients"><FontAwesomeIcon icon={faUserPlus} /> Admin</a>
                <a href="contact"><FontAwesomeIcon icon={faTasks} /> Manage</a>
            </div>
        </div>
    );
};

export default Dashboard;