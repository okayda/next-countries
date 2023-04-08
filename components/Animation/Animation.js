export const parentStagger = {
  open: {
    transition: {
      staggerChildren: 0.14,
      staggerDirection: 1,
    },
  },
};

export const fadeStagger = {
  open: { opacity: 1 },

  closed: {
    opacity: 0,
  },
};

export const slideStagger = function (index) {
  return {
    hidden: {
      opacity: 0,
      translateX: -35,
    },

    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.45,
        delay: index * 0.2,
      },
    },
  };
};

export const slideImg = {
  hidden: {
    translateX: "-12vw",
    opacity: 0,
  },

  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
      delay: 1.5,
    },
  },
};

export const slideBorder = {
  hidden: {
    translateX: "12vw",
    opacity: 0,
  },

  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.3,
      delay: 2,
    },
  },
};
