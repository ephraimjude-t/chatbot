import {motion} from 'motion/react';
import Chat from './components/chat';

const App = () => {
  return (
    <div className="h-screen w-full bg-[#383737] text-[#D9D9D9] ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center h-full"
      >
        <Chat />
      </motion.div>
     
      
    </div>
    
    
  );
};

export default App;
