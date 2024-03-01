import Vue from 'vue';
import education from './../data/education';
import projects from './../data/projects';
import workExperience from '../data/work_experience';
import './../css/style.css';

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
    h1Background: "blue"
  },
  created() {
    this.education = education;
    this.workExperience = workExperience;
    this.projects = projects;
  },
  methods: {
    setH1Background: (color) => this.h1Background = color,
    getCurrentYear: () => {
      const date = new Date();
      return date.getFullYear();
    }
  }
});
window.onload = () => removeNoPreloadTransitionClasses();
window.onscroll = () => {
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const currentScrollPosition = window.scrollY;
  const scrollProgress = currentScrollPosition / scrollHeight;
  console.log(scrollProgress);
  if (scrollProgress < 1/3) {
    app.$data.h1Background = "blue";
  } else if (scrollProgress >= 1/3 && scrollProgress < 2/3) {
    app.$data.h1Background = "violet";
  } else {
    app.$data.h1Background = "red";
  }
};
