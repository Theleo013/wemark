import ProgramStyles from "./program.module.scss"
import { XschoolData } from "@/lib/xschool";
import parse from "html-react-parser";

interface ProgramSectionProps {
    data: XschoolData;
}

const ProgramSection = ({ data }: ProgramSectionProps) => {
    const program = data.programs[0]

    return (
        <div className={ProgramStyles.programSection}>
            <span className={ProgramStyles.programTitle}>{program.title}</span>
            <div className={ProgramStyles.programDescription}>
                {parse(program.description)}
            </div>
        </div>
    )
}

export default ProgramSection