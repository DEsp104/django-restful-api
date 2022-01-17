import axios from "axios";


export async function editCurrentItem({ categoryField, taskField, completeField, id }) {
  const results = axios({
    method: "PUT",
    data: {
      title: categoryField,
      description: taskField,
      completed: completeField
    },
    
    url: `https://todolist-django-assess-app.herokuapp.com/api/todos/${id}/`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};