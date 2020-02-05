import React from 'react';
import './../styles/pagination.scss';

const Pagination = (props) => {

  return (
    <ul className="pagination">
      { props.currentPage > 1 
        ? <li><button onClick={() => props.nextPage(props.currentPage-1)}>Previous</button></li>
        : <li><button>Previous</button></li>
      }
      <li>{props.currentPage} / {props.numPages}</li>
      { props.currentPage < props.numPages
        ? <li><button onClick={() => props.nextPage(props.currentPage+1)}>Next</button></li>
        : <li><button onClick={() => props.nextPage(props.currentPage+1)}>Next</button></li>
      }
      
    </ul>
  )
}

export default Pagination;