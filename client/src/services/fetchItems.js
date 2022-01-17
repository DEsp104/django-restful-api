import axios from "axios";


export async function getItems () {
  const results = await axios.get("https://todolist-django-assess-app.herokuapp.com/api/todos/").then((res) => {
    return res.data;
  });
  
  return results;
};