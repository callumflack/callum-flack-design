export default function(context) {
  context.store.commit("SET_CURRENT_PAGE", context.route.path);
}
