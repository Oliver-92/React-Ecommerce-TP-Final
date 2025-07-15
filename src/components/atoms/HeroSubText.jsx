// HeroSubText: Componente atómico que muestra el subtítulo animado en la sección hero, resaltando beneficios y promociones.
import { motion } from 'framer-motion';
import { slideIn } from '../../utility/animation';

const HeroSubText = () => (
  <div className="text-xl sm:text-2xl md:text-3xl text-white font-medium drop-shadow-md flex justify-center items-center gap-1 sm:gap-2">
    <motion.span className="animate-in-left"
      variants={slideIn("left", 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}>
      9 cuotas sin interés
    </motion.span>

    <motion.span
      aria-hidden="true"
      className="w-1 h-12 bg-white"
      variants={slideIn("down", 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}>
    </motion.span>

    <motion.span className="animate-in-right"
      variants={slideIn("right", 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}>
      10% off en transferencias
    </motion.span>
  </div>
);

export default HeroSubText;