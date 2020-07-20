import Vue from 'vue';
import data from './../data.json'

const removeNoPreloadTransitionClasses = () => {
  const npt = "no-preload-transition";
  const elements = document.getElementsByClassName(npt);
  Array.from(elements).forEach((e) => e.classList.remove(npt));
};

const app = new Vue({
  el: "#app",
  data: {
    education: null,
    workExperience: null,
    projects: null,
  },
  created() {
      this.education = data.education;
      this.workExperience = data.work_experience;
      this.projects = data.projects;
  },
});
window.onload = () => removeNoPreloadTransitionClasses();
