import { useDispatch } from "react-redux";
import { deleteCurrentItem } from "../redux/deleteItemSlice";
import Edit from "./Edit.js"




function Item(props) {
  const dispatch = useDispatch();


  const deleteItem = (id) => {
    console.log(id)
    dispatch(deleteCurrentItem(id));
  }
 
  

  const crossLine = (e) => {
    e.preventDefault();
    const element = e.target
    element.classList.toggle("line-through");
  }



  return (
       <div className="p-10 shadow">
          <div className="flex justify-between mb-4 items-center">
             <div>
                    <p className="font-bold text-sm">Category: <span className="text-vin-rouge-500 font-bold text-sm">{props.title}</span></p>
                    <p onClick={(e) => crossLine(e)} className={"w-full text-grey-500 cursor-pointer"}>{props.description}</p>
                    <p className="text-sm">Completed: {props.completed ? <span className="text-teal-500 font-bold text-sm">Yes</span> : <span className="text-red-500 font-bold text-sm">No</span>}</p>
                  </div>
        
                  <div>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500"
                      onClick={
                        () => {
                          deleteItem(props.id)
                        }
                      } >
                        Remove
                      </button>
                      <Edit {...props} />
                    </div>  
                </div>
        </div>
  )
}

export default Item