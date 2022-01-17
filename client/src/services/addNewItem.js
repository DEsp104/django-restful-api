import axios from "axios";


export async function addItem({ categoryField, taskField, completeField }) {


  const results = axios({
    method: "POST",
    data: {
      title: categoryField,
      description: taskField,
      completed: completeField
    },
    url: "https://todolist-django-assess-app.herokuapp.com/api/todos/",
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};