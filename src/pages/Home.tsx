import { motion, AnimatePresence } from "framer-motion";
import useAnimations from "../hooks/useAnimations";

const Home = () => {
    const { pageAnimation } = useAnimations();
    
    return (
        <motion.div variants={ pageAnimation } initial="begin" animate="enter" exit="exit">
            <div>Home</div>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero accusamus vel temporibus, maiores earum fugit tempora voluptate magni praesentium, quia consequuntur. Doloribus ad deleniti consectetur neque vel est fugit?</p>
        </motion.div>
    );
}

export default Home;