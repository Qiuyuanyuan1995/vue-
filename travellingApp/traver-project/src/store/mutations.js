export default {
  gaiBianCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {

    }

  }
}
