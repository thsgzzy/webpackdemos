/**
 * Created by a1 on 17/4/25.
 */
export default {
  SHOW_ALERT (state, data) {
    data.show = true
    state.alert = data
  },
  HIDE_ALERT (state) {
    state.alert.show = false
  }
}
