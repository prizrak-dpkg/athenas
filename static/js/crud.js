document.addEventListener("DOMContentLoaded", () => {
  /**
   * Declaración de variables y captura de elementos necesarios del DOM.
   */
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
  /**
   * Comprobación de que los elementos capturados no contengan un valor **null**.
   */
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
    /**
     * Se agrega evento **click** al botón que envía el formulario de búsqueda.
     */
    searchButton.addEventListener("click", (event) => event.preventDefault());
    /**
     * Se renderiza por primera vez el listado de usuarios y se agrega evento
     * **keyup** a la barra de búsqueda.
     */
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
    /**
     * Se agrega evento **click** al botón que regresa el paginador.
     * Válida que los resultados mostrados sean mayores que 0 para poder
     * regresar
     */
    prevUsersButton.addEventListener("click", () => {
      if (currentResults > 0) {
        currentResults -= userPerPage;
        renderUsers(
          usersPagination(objJson, currentResults, search),
          usersContainer
        );
      }
    });
    /**
     * Se agrega evento **click** al botón que avanza el paginador.
     * Válida que existan más resultados para mostrar y así poder avanzar.
     */
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
    /**
     * Se agrega evento **click** al botón que cierra el modal.
     * Al cerrar el modal, el formulario será vaciado.
     */
    closeModal.addEventListener("click", () => {
      userId.value = "";
      userName.value = "";
      userPhone.value = "";
      userEmail.value = "";
      userBalance.value = "";
      userAge.value = "";
      userState.checked = false;
    });
    /**
     * Se agrega evento **click** al botón que guarda los usuarios.
     */
    saveUser.addEventListener("click", (event) => {
      event.preventDefault();
      /**
       * Se formatean los valores de cada input del formulario de usuarios,
       * Se retiran los excesos de espacios.
       */
      const id = withoutExtraSpaces(userId.value);
      const name = withoutExtraSpaces(userName.value);
      const phone = withoutExtraSpaces(userPhone.value);
      const email = withoutExtraSpaces(userEmail.value);
      const balance = withoutExtraSpaces(userBalance.value);
      const age = withoutExtraSpaces(userAge.value);
      const state = userState.checked;
      const [userFound, index] = findUser(id);
      /**
       * Se válida que los campos no estén vacíos, de lo contrario se
       * mostrará un mensaje al usuario notificando de lo sucedido.
       */
      if (
        name !== "" &&
        phone !== "" &&
        email !== "" &&
        balance !== "" &&
        age !== ""
      ) {
        modalErrors.innerText = "";
        /**
         * Se válida que los datos ingresados correspondan a un usuario registrado,
         * en ese caso se actualiza la información, en caso contrario se creara un
         * nuevo registro.
         */
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
    /**
     * Se agrega evento **click** al botón que elimina los usuarios.
     */
    deleteUser.addEventListener("click", () => {
      /**
       * Se busca el usuario que se desea eliminar a través de su **id** y se procede a eliminar.
       */
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
