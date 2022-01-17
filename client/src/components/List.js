import React, { useEffect, useState } from 'react';
import Item from "../components/Item.js";
import { useSelector, useDispatch } from "react-redux";
import { createNewItem } from "../redux/addItemSlice";
import { fetchItems } from "../redux/getItemsSlice";





function List() {
  const dispatch = useDispatch();
  const [taskField, setTaskField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [completeField, setCompleteField] = useState(false);
  
  const newItemStatus = useSelector((state) => state.addItem.status)
  // const deleteItemstatus = useSelector((state) => state.deleteItem.status);
  // const editStatus = useSelector((state) => state.editItem.status);


  const items = useSelector((state) => state?.getItems?.items);

  
  const addItem = (e) => {
    e.preventDefault()
    if (taskField.length > 0 && categoryField.length > 0) {
      dispatch(createNewItem({ categoryField, taskField, completeField }))
    }
    setCategoryField("");
    setTaskField("");
  }


  const showItems = () => {
    return items?.map((item, index) => {
      return <Item {...item} key={index} />
    })
  }

   useEffect(() => {
    dispatch(fetchItems());
   }, [])
  
  //  useEffect(() => {
  //   dispatch(fetchItems());
  //  }, [newItemStatus])
  
  //  useEffect(() => {
  //   dispatch(fetchItems());
  //  }, [deleteItemstatus])

  //  useEffect(() => {
  //   dispatch(fetchItems());
  //  }, [editStatus])

  
  return (
    <div className="h-100 w-full  items-center justify-center font-sans">
      <div className="flex flex-col justify-center items-center bg-white-500 rounded shadow w-full mt-6">
        
        <form className="mb-4" action="#" method="POST">
          <div className="mt-4">
            {/* <input className="shadow rounded-md shadow-sm border-gray-300 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500 sm:text-sm" placeholder="Name" /> */}
           
            <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) => setCategoryField(e.target.value)}
                          id="category"
                          name="category"
                          type="category"
                          value={categoryField}
                        >
                        <option value="" disabled>--Category--</option>
                        <option value="Chores">Chores</option>
                        <option value="Study">Study</option>
                        <option value="Learning">Learning</option>
                        <option value="Health">Health</option>
                        <option value="Care">Care</option>
                        <option value="Meeting">Meeting</option>
                      </select>
                    </div>  
            </div>
            
            <div className="mt-1">
              <textarea id="instruction" name="instruction" placeholder="Add Todo" rows="3" cols="40" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setTaskField(e.target.value)
                }
                value={taskField}
                        ></textarea>
            </div>
            <div className="mt-4">
              <span className="text-gray-700">Completed</span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="completedTask"
                    value={true}
                    onChange={() => setCompleteField(true)}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="completedTask"
                    value={false}
                    onChange={() => setCompleteField(false)}
                  />
                  <span className="ml-2">No</span>
                </label>
            </div>
            </div>
            <button
              className="flex-no-shrink mt-2 p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white-500 hover:bg-teal-500"
              onClick={ addItem }
            >Add</button>
          </div>
        </form>
        <div className="w-full">
          {showItems()}
        </div>
      </div>
    </div>
  )
}

export default List
