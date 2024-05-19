import { useRef } from "react"
import "./services.scss"
import { motion,useInView } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
const ref = useRef()
const isInView = useInView(ref, {margin:'-100px'})
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && 'animate'}>
            <motion.div className="textContainer">
                <p>
                    I focus on helping your brand grow
                    <br />and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt=""></img>
                    <h1>
                        <motion.b whileHover={{color:'orange'}}>
                            unique
                        </motion.b> ideas
                    </h1>
                </div>
                <div className="title">

                    <h1>
                        <motion.b whileHover={{color:'orange'}}>
                            for your
                        </motion.b>
                        Business.
                    </h1>
                    <button>What we DO</button>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }} variants={variants}>
                    <h2>
                        Branding

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et laborum vitae
                        cupiditate deleniti, minus quibusdam eaque, natus sint veritatis sed saepe ipsa
                        voluptatem facere corrupti itaque recusandae in nisi?</p>
                    <button> Go </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>
                        Branding

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et laborum vitae
                        cupiditate deleniti, minus quibusdam eaque, natus sint veritatis sed saepe ipsa
                        voluptatem facere corrupti itaque recusandae in nisi?</p>
                    <button> Go </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>
                        Branding

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et laborum vitae
                        cupiditate deleniti, minus quibusdam eaque, natus sint veritatis sed saepe ipsa
                        voluptatem facere corrupti itaque recusandae in nisi?</p>
                    <button> Go </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
                    <h2>
                        Branding

                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et laborum vitae
                        cupiditate deleniti, minus quibusdam eaque, natus sint veritatis sed saepe ipsa
                        voluptatem facere corrupti itaque recusandae in nisi?</p>
                    <button> Go </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}


export default Services


