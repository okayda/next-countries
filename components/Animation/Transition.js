import { motion } from "framer-motion";
import Applied from "./Applied";
import {
  parentStagger,
  fadeStagger,
  slideStagger,
  slideImg,
  slideBorder,
} from "./Animation";

export const ListAnimate = function ({ children, id, className = null }) {
  return (
    <motion.ul
      {...Applied(parentStagger)}
      className={className}
      id={id}
      initial="closed"
      animate="open"
    >
      {children}
    </motion.ul>
  );
};

export const FadeList = function ({ children }) {
  return <motion.li variants={fadeStagger}>{children}</motion.li>;
};

export const SlideList = function ({ children, delay }) {
  return <motion.li {...Applied(slideStagger(delay))}>{children}</motion.li>;
};

export const SlideImage = function ({ src, alt }) {
  return <motion.img {...Applied(slideImg)} src={src} alt={alt} />;
};

export const SlideBorder = function ({ children }) {
  return <motion.ul {...Applied(slideBorder)}>{children}</motion.ul>;
};
