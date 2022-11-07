document.addEventListener("DOMContentLoaded", () => {
  let currentResults = 0;
  let search = "";
  const usersContainer = document.getElementById("usersContainer");
  const searchBar = document.getElementById("searchBar");
  const searchButton = document.getElementById("searchButton");
  const prevUsersButton = document.getElementById("prevUsers");
  const nextUsersButton = document.getElementById("nextUsers");
  const closeModal = document.getElementById("closeModal");
  const userId = document.getElementById("userId");
  const userName = document.getElementById("userName");
  const userPhone = document.getElementById("userPhone");
  const userEmail = document.getElementById("userEmail");
  const userBalance = document.getElementById("userBalance");
  const userAge = document.getElementById("userAge");
  const userState = document.getElementById("userState");
  const saveUser = document.getElementById("saveUser");
  const deleteUser = document.getElementById("deleteUser");
  const modalErrors = document.getElementById("modalErrors");
  if (
    closeModal !== null &&
    userId !== null &&
    userName !== null &&
    userPhone !== null &&
    userEmail !== null &&
    userBalance !== null &&
    userAge !== null &&
    userState !== null &&
    usersContainer !== null &&
    searchBar !== null &&
    searchButton !== null &&
    prevUsersButton !== null &&
    nextUsersButton !== null &&
    saveUser !== null &&
    deleteUser !== null &&
    modalErrors !== null
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
    closeModal.addEventListener("click", () => {
      userId.value = "";
      userName.value = "";
      userPhone.value = "";
      userEmail.value = "";
      userBalance.value = "";
      userAge.value = "";
      userState.checked = false;
    });
    saveUser.addEventListener("click", (event) => {
      event.preventDefault();
      const id = withoutExtraSpaces(userId.value);
      const name = withoutExtraSpaces(userName.value);
      const phone = withoutExtraSpaces(userPhone.value);
      const email = withoutExtraSpaces(userEmail.value);
      const balance = withoutExtraSpaces(userBalance.value);
      const age = withoutExtraSpaces(userAge.value);
      const state = userState.checked;
      const [userFound, index] = findUser(id);
      if (
        name !== "" &&
        phone !== "" &&
        email !== "" &&
        balance !== "" &&
        age !== ""
      ) {
        modalErrors.innerText = "";
        if (userFound !== null) {
          objJson[index]._id = id;
          objJson[index].name = name;
          objJson[index].phone = phone;
          objJson[index].balance = balance;
          objJson[index].age = age;
          objJson[index].isActive = state;
          closeModal.click();
          currentResults = 0;
          renderUsers(usersPagination(objJson, currentResults), usersContainer);
        } else {
          const user = {
            _id: window.crypto.randomUUID(),
            name,
            phone,
            email,
            balance,
            age,
            isActive: state,
          };
          objJson.unshift(user);
          closeModal.click();
          currentResults = 0;
          renderUsers(usersPagination(objJson, currentResults), usersContainer);
        }
      } else {
        modalErrors.innerText = "** Quedan campos por llenar.";
      }
    });
    deleteUser.addEventListener("click", () => {
      const id = withoutExtraSpaces(userId.value);
      const [user, index] = findUser(id);
      if (user !== null) {
        objJson.splice(index, 1);
        closeModal.click();
        currentResults = 0;
        renderUsers(usersPagination(objJson, currentResults), usersContainer);
      }
    });
  }
});
