let api = "http://localhost:3000/data";
import { getList, searchForm } from "./dom.js";
async function get() {
  try {
    let { data } = await axios.get(api);

    getList(data);
    searchForm.onsubmit = (event) => {
      event.preventDefault();
      let value = searchForm["search"].value.toLowerCase().trim();
      let filterData = data.filter((user) => {
        return (
          user.name.toLowerCase().includes(value) ||
          user.city.toLowerCase().includes(value)
        );
      });
      getList(filterData);
    };
  } catch (error) {
    console.error(error);
  }
}
async function edit(id, user) {
  try {
    console.log(user);
    let { data } = await axios.put(`${api}/${id}`, user);
    get();
  } catch (error) {
    console.error(error);
  }
}
async function addUser(user) {
  try {
    let { data } = await axios.post(api, user);
  } catch (error) {
    console.error(error);
  }
}
async function delted(id) {
  try {
    let { data } = await axios.delete(`${api}/${id}`);
    get();
  } catch (error) {
    console.error(error);
  }
}

export { get, edit, addUser, delted };
