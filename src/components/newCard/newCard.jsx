import { useRef } from "react";
import { motion } from "framer-motion";

import "./style.scss";


const NewCard = () => {
    const constraintsRef = useRef(null);

  return (
    <>
      <div className="example-container h-full pb-2 pl-1 pr-1 relative bg-slate-700">
        <motion.div className="drag-area h-full w-full" ref={constraintsRef} />
        <motion.div className="drag-card" drag dragConstraints={constraintsRef} />
      </div>
    </>
  );
};

export default NewCard;