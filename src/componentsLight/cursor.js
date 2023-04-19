// import React, { useState, useEffect } from "react";

// import { motion } from "framer-motion";
// import "../styles/about.css";

// function Cursor() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   console.log(mousePosition);

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };
//     window.addEventListener("mousemove", mouseMove);
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 10,
//       y: mousePosition.y - 10,
//     },
//   };

//   return (
//     <div>
//       <motion.div className="cursor" variants={variants} animate="default" />
//     </div>
//   );
// }

// export default Cursor;
