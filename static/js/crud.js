document.addEventListener("DOMContentLoaded", () => {
  let currentResults = 0;
  let search = "";
  const usersContainer = document.getElementById("usersContainer");
  const searchBar = document.getElementById("searchBar");
  const searchButton = document.getElementById("searchButton");
  const prevUsersButton = document.getElementById("prevUsers");
  const nextUsersButton = document.getElementById("nextUsers");
  if (
    usersContainer !== null &&
    searchBar !== null &&
    searchButton !== null &&
    prevUsersButton !== null &&
    nextUsersButton !== null
  ) {
    searchButton.addEventListener("click", (event) => event.preventDefault());
    renderUsers(usersPagination(objJson, currentResults), usersContainer);
    searchBar.addEventListener("keyup", (event) => {
      search = event.currentTarget.value;
      if (search.length > 0) {
        currentResults = 0;
      }
      renderUsers(
        usersPagination(objJson, currentResults, search),
        usersContainer
      );
    });
    prevUsersButton.addEventListener("click", () => {
      if (currentResults > 0) {
        currentResults -= userPerPage;
        renderUsers(
          usersPagination(objJson, currentResults, search),
          usersContainer
        );
      }
    });
    nextUsersButton.addEventListener("click", () => {
      const usersList = usersPagination(
        objJson,
        currentResults + userPerPage,
        search
      );
      if (usersList.length > 0) {
        currentResults += userPerPage;
        renderUsers(usersList, usersContainer);
      }
    });
  }
});
