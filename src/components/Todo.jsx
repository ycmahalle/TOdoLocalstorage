import React, { useState , useEffect } from "react";
import note from "../image/note.jpg";
const Todo=()=>{

    const getLocalItems=()=>{
        let list=localStorage.getItem("taskList");

        if(list){
            return JSON.parse(localStorage.getItem("taskList"))
        }else{
            return [];
        }
    }
    
    const [inputtext , setInputText]= useState("");
    const [taskList , setTaskList] = useState(getLocalItems());
    const [toggleEdit , setToggleEdit]=useState(false);
    const [editId ,setEditId]=useState(null);

    const addTask=()=>{
        // alert();
               console.log(inputtext)
               if(!inputtext){
                alert("Enter Your Task Title");

                }else if(toggleEdit && editId){
                   setTaskList( taskList.map((elem)=>{
                        if(elem.id === editId){
                            return {...elem,title:inputtext}
                        }
                        return elem;
                    })
                    );
                    setToggleEdit(false);
                    setInputText("");
                    setEditId(null);
                }   
                else{
                    let task = {
                        id : new Date().getTime().toString(),
                        title : inputtext
                    }  
                    setTaskList([...taskList,task]); 
                    setInputText("");
                }
    }
   
    const editTask=(id)=>{
        let task=taskList.find((elem)=>{
            return elem.id === id;
        });
        setInputText(task.title);
        setEditId(id);
        setToggleEdit(true);
    }
    const deleteItem=(id)=>{
        // console.log(id);
       const updatedList= taskList.filter((elem)=>{
             return elem.id !== id ;
        });
        setTaskList(updatedList);
    }
    useEffect(() => {
        localStorage.setItem("taskList",JSON.stringify(taskList))
    }, [taskList]);
    return(
        <>
                <div className="maindiv  row d-flex justify-content-center col-lg-12 col-xs-12">
                    <div className="childdiv add-form   col-sm-8 col-md-5 col-xs-10 col-lg-3 p-4">
                        <figure className="img ">
                            <img src={note} alt="Notes" />
                            <figcaption>Add Your Tasks Here ✌️</figcaption>
                        </figure>
                        <div className="form">
                            <div className="input form-control ">
                                <input type="text" 
                                    placeholder=" Add Task" 
                                    value={inputtext}
                                    onChange={(event)=>{
                                        console.log("input = ",event.target.value);
                                        setInputText(event.target.value);
                                    }}
                                /> 
                                {
                                    toggleEdit ? 
                                    <button className="btn addBtn text-muted " onClick={addTask}> 
                                        <i className="fas fa-edit text-success "></i>
                                    </button> 
                                    :
                                    <button className="btn addBtn text-muted " onClick={addTask} > 
                                        <i className="fas fa-plus" ></i>
                                    </button>
                                }
                            </div>
                            
                        </div>
                        <div className="listItem mt-5">
                            {taskList.map((elem)=>{
                                return(
                                    <div key={elem.id} className="item  d-flex form-control d-flex align-items-baseline  mb-2  ">
                                        <div className="title w-75">
                                            <h5>{elem.title}</h5>
                                        </div>
                                        <div className="delBtn w-25 d-flex align-items-baseline justify-content-end">
                                            <i className="fas fa-edit text-success " 
                                                onClick={()=>editTask(elem.id) }
                                                ></i>
                                            <i className="fas btn fa-trash-alt  text-danger  remove" onClick={()=>{deleteItem(elem.id)}}></i>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
        </>
     
    );
}
export default Todo;

