import axios from "axios";


export async function removeItem(id) {
  const results = axios({
    method: "DELETE",  
    url: `https://todolist-django-assess-app.herokuapp.com/api/todos/${id}/`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};