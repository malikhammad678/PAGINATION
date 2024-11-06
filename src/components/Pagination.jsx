import React, { useState } from 'react';
import './Pagination.css';

const Pagination = () => {
  const posts = [
    { _id: 1, name: "Hammad", role: "Software Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 20 },
    { _id: 2, name: "Ahmed", role: "Software Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 23 },
    { _id: 3, name: "Junaid", role: "CS Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 16 },
    { _id: 4, name: "Hassam", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 12 },
    { _id: 5, name: "Zaid", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 14 },
    { _id: 6, name: "Usman", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 9 },
    { _id: 7, name: "Hamza", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 16 },
    { _id: 8, name: "Anas", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 19 },
    { _id: 9, name: "Ahmed Ali", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 22 },
    { _id: 10, name: "Hamid", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 25 },
    { _id: 11, name: "Umer", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 13 },
    { _id: 12, name: "Waleed", role: "Engineer", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem.", age: 10 },
  ];

  const [currPage, setCurrPage] = useState(1);
  const postPerPage = 3;
  const totalPages = Math.ceil(posts.length / postPerPage);

  const start = (currPage - 1) * postPerPage;
  const end = start + postPerPage;
  const displayPosts = posts.slice(start, end);

  const changePage = (newPage) => {
    setCurrPage(newPage);
  }

  return (
    <div className='main'>
      <div className='container'>
        {
          displayPosts.map((item, index) => (
            <div key={index} className='post'>
              <span className='id'>{item._id}</span>
              <h2 className='name'><b>Name: </b>{item.name}</h2>
              <strong className='role'><b>Role</b> 🔥 {item.role}</strong>
              <h4 className='age'><b>Age:</b> {item.age}</h4>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>

      <div className='btns'>
        <button onClick={() => changePage(currPage - 1)} disabled={currPage === 1}>Prev</button>
        <button onClick={() => changePage(currPage + 1)} disabled={currPage === totalPages}>Next</button>
      </div>

      {/* Page Numbers Section */}
      <div className="pageNumbers">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pageButton ${currPage === index + 1 ? 'active' : ''}`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="credit">
        Pagination By <span className='dev_name'>Malik Hammad</span>
      </div>
    </div>
  );
}

export default Pagination;
