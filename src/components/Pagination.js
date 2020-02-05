import React from 'react';
import './../styles/pagination.scss';

const Pagination = (props) => {
  let currentPage = props.currentPage;
  if(props.numPages === 0) currentPage = 0;
  if(currentPage > props.numPages) currentPage = 1;
  return (
    <ul className="pagination">
      { currentPage > 1 
        ? <li><button onClick={() => props.nextPage(currentPage-1)}>Previous</button></li>
        : <li><button>Previous</button></li>
      }
      <li>{currentPage} / {props.numPages}</li>
      { currentPage < props.numPages
        ? <li><button onClick={() => props.nextPage(currentPage+1)}>Next</button></li>
        : <li><button>Next</button></li>
      }
      
    </ul>
  )
}

export default Pagination;