
const
  id = "",
  desc = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quam molestias repudiandae porro saepe deserunt ducimus</p>",
  marquee = null,
  svg = null,
  attachments:[] = [],
  more = null,
  labels = [{ name: "personal", color: "grey" }],
  start = "",
  due = "",
  dueComplete = false;

export const initial = {
  list: {
    id: "",
    name: ""
  },
  projects: {
    card: {
      name: "Hero: Full Stack Designer working in React & Vue.js",
      id: "000000",
      marquee: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
      attachments,
      more,
      labels,
      desc,
      start,
      due,
      dueComplete,
    }
  },
  roles: {
    card: {
      name: "Full Stack Designer",
      start: "2019-12-02T08:00:00.000Z",
      desc,
      marquee,
      svg,
      id,
      attachments,
      more,
      labels,
      due,
      dueComplete,
    }
  },
  education: {
    card: {
      name: "Full-Stack Javascript Techdegree",
      due: "2020-10-02T08:00:00.000Z",
      dueComplete: true,
      desc,
      marquee,
      svg,
      id,
      attachments,
      more,
      labels,
      start,
    }
  }
}

