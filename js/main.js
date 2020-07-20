const removeNoPreloadTransitionClasses = () => {
  const npt = "no-preload-transition";
  const elements = document.getElementsByClassName(npt);
  Array.from(elements).forEach((e) => e.classList.remove(npt));
};

const fetchContent = async () => {
  let response = await fetch("data.json");
  let result = await response.json();
  return result;
};

const app = new Vue({
  el: "#app",
  data: {
    education: null,
    workExperience: null,
    projects: null,
  },
  created() {
    fetchContent().then((result) => {
      this.education = result.education;
      this.workExperience = result.work_experience;
      this.projects = result.projects;
    });
  },
});
window.onload = () => removeNoPreloadTransitionClasses();
