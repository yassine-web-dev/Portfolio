import Helper from "./Helper";
import { CollapsibleDemo } from "./ProjectsHelper";
import Repos from "./Repos";

interface ProjectsProps {

}

const Projects: React.FunctionComponent<ProjectsProps> = async () => {

    const repos = await Repos()

    return (

        <div id='projects' className="projects px-5 py-10 scroll-mt-60 bg-gray-200 dark:bg-slate-800 rounded-xl">
            <div className="heading flex justify-center">
                <div className="heading-container">
                    <h2 className="text-xl pb-2">Projects</h2>
                    <div>
                        <div className="border-bottom transition-all duration-300 bg-black dark:bg-white rounded w-8 h-1"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <CollapsibleDemo repos={repos} />
            </div>
            {/* <Helper /> */}
        </div>
    )
}

export default Projects;