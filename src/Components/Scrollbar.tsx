import next from '../assets/images/next.jpg'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import node from '../assets/images/node.png'
import sparkel from '../assets/images/sparkel.jpg'
import vscode from '../assets/images/vscode.png'

const techStack = [
    { name: "Next.js", image: next },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
    { name: "Node.js", image: node },
      { name: "shadcn/ui", image: sparkel },
      { name: "vscode", image: vscode },
];

export default function Scrollbar() {
    return (
        <div className="relative w-full overflow-hidden bg-background py-6 mask-fade">

            {/* Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-15" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max animate-scroll gap-20">
                {[...techStack, ...techStack].map((tech, index) => {

                    return (
                        <div
                            key={index}
                            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-100"
                        >
                            <img
                                src={tech.image}
                                alt={tech.name}
                                className="w-13 h-13 object-contain"
                            />
                        </div>  
                    );
                })}
            </div>
        </div>
    );
}