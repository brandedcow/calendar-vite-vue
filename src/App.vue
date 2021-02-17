<template>
  <div class="fullScreen flex flex-col relative">
    <Header
      :date="currDate"
      :inc="inc"
      :dec="dec"
      :calendarViewOptions="calendarViewOptions"
      :onViewSelection="handleViewSelection"
      :calendarView="view"
      :onLoginClick="handleLoginClick"
      :onLogoutClick="handleLogoutClick"
      :isLoggedIn="isLoggedIn"
    />
    <router-view :currDate="currDate" :onSetDate="handleSetDate"></router-view>
    <Modal />
  </div>
</template>

<script>
import { computed } from "vue";

import firebase from "../src/firebase";
import Header from "./components/Header.vue";
import MonthCalendar from "./components/MonthCalendar.vue";
import Modal from "./components/Modal.vue";
import store from "./store";
import router from "./router";

export default {
  components: {
    Header,
    MonthCalendar,
    Modal,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch("user/setUser", user);
        store.dispatch("tasks/getItems");
      } else {
        store.dispatch("user/setUser", {});
      }
    });
  },
  methods: {
    handleLoginClick() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          const { additionalUserInfo } = res;
          if (additionalUserInfo.isNewUser) {
            var db = firebase.firestore();

            db.collection("users")
              .doc(res.user.uid)
              .set({ id: res.user.uid })
              .then((ref) => {
                console.log("user added to firebase", ref);
              })
              .catch(console.log);
          }
          console.log(res);
        })
        .catch(console.log);
    },
    handleLogoutClick() {
      firebase
        .auth()
        .signOut()
        .then(() => {})
        .catch(console.log);
    },
  },
  setup() {
    const calendarViewOptions = ["Day", "Week", "Month", "Year"];
    const currDate = computed(() => store.state.calendar.currDate);
    const view = computed(() => store.state.calendar.calendarView);
    const isLoggedIn = computed(() => !!!store.state.user.user.uid);

    function inc() {
      switch (view.value) {
        case 0:
          store.dispatch("calendar/incrementDay");
          break;
        case 1:
          store.dispatch("calendar/incrementWeek");
          break;
        case 2:
          store.dispatch("calendar/incrementMonth");
          break;
        case 3:
          store.dispatch("calendar/incrementYear");
          break;

        default:
          break;
      }
    }
    function dec() {
      switch (view.value) {
        case 0:
          store.dispatch("calendar/decrementDay");
          break;
        case 1:
          store.dispatch("calendar/decrementWeek");
          break;
        case 2:
          store.dispatch("calendar/decrementMonth");
          break;
        case 3:
          store.dispatch("calendar/decrementYear");
          break;

        default:
          break;
      }
    }

    function handleViewSelection(selection) {
      store.dispatch("calendar/setCalendarView", selection);
      router.push(`/${calendarViewOptions[selection].toLowerCase()}`);
    }

    function handleSetDate(date) {
      store.dispatch("calendar/setDate", date);
    }

    return {
      currDate,
      view,
      isLoggedIn,
      inc,
      dec,
      calendarViewOptions,
      handleViewSelection,
      handleSetDate,
    };
  },
};
</script>

<style scoped>
.fullScreen {
  @apply w-screen h-screen;
}
</style>