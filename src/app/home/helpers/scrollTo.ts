const scrollTo = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    const valueScroll = el.offsetTop;

    window.scrollTo({
      top: valueScroll + 25,
      behavior: "smooth",
    });
  }
};

export default scrollTo;
