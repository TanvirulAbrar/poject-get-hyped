import { useRef } from "react";
import { useScroll } from "framer-motion";
import Card from "./Card";

const cards = ["🍅", "🍊", "🍋", "🍏"];
const colors = ["bg-white", "bg-[#fcb8fa]", "bg-[#33c791]", "bg-[#0d8dff]"];

const StackedCards = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="justify-between mb-7 flex flex-col "
      ref={containerRef}
      style={{
        height: `${cards.length * 100}vh`,
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* scrollYProgress: {scrollYProgress} */}
      {cards.map((emoji, i) => (
        <Card
          key={i}
          i={i}
          total={cards.length}
          color={colors[i]}
          scrollYProgress={scrollYProgress}
          emoji={emoji}
        />
      ))}
    </div>
  );
};
export default StackedCards;
