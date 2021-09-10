import React from 'react';

const TodoHeader = ({value, addTodo, handleKeyPress, handleInput, lenght, todos}) => {


    const filterDate =(type) => {
        console.log(type)
        const time ={
            Day: 24* 60* 60* 1000,
            Week: 24* 60 * 60* 1000* 7,
            Month: 24*60*60* 1000 * 30
        }

    }
    return (
       <div >
         <div className="d-flex align-items-center justify-content-between"  >
             <h1>TodoList</h1>
             <span>Items:{lenght} </span>
         </div>
           <div className="d-flex align-items-center justify-content-between mb-4" >
               <h6>View for:</h6>
               <div  >
                   <button  className="btn btn-secondary me-2 btn-sm"  onClick={()=>filterDate("Day")}>Day</button>
                   <button className="btn btn-secondary me-2 btn-sm" onClick={()=>filterDate("Week")} >Week</button>
                   <button className="btn btn-secondary btn-sm" onClick={()=>filterDate("Month")} >Month</button>
               </div>
           </div>
           <div className="d-flex mb-4">
               <input type="text" className="form-control me-2"  onKeyPress={handleKeyPress} value={value} onChange={handleInput}/>
               <button type="button" className="btn btn-primary" disabled={!value.trim()} onClick={addTodo}>Add </button>
           </div>
       </div>
    );
};

export default TodoHeader;