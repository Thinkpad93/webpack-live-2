export default {
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // let frosted = document.querySelector('.frosted');
      let pageHd = document.querySelector('.page-hd');
      window.addEventListener('scroll', (e) => {
        // let rectObject = room.getBoundingClientRect();
        let top;
        if (document.documentElement && document.documentElement.scrollTop) {
          top = document.documentElement.scrollTop;
        } else if (document.body) {
          top = document.body.scrollTop;
        }
        if (top > 160) {
          pageHd.classList.remove('enter');
        } else {
          pageHd.classList.add('enter');
        }
      });
    }
  }
};
