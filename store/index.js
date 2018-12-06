export function state() {
  return {
    currentPage: "/",
    isModalVisible: false
  };
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_MODAL_VISIBILITY(state, visibility) {
    state.isModalVisible = visibility;
  }
};
