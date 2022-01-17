import axios from "axios";


export async function addItem({ categoryField, taskField, completeField }) {
  const header = {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*"
  }

  const results = axios({
    method: "POST",
    data: {
      title: categoryField,
      description: taskField,
      completed: completeField
    },
    headers: header, 
    url: "https://todolist-django-assess-app.herokuapp.com/api/todos/",
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};