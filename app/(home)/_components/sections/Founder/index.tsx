import { XschoolData } from "@/lib/xschool";
import FounderStyles from "./founder.module.scss";

interface FounderSectionProps {
    data: XschoolData;
}

const FounderSection = ({ data }: FounderSectionProps) => {
    const founder = data.founders[0];

    return (
        <div className={FounderStyles.founderSection}>
            <div className={FounderStyles.mainContent}>
                <div className={FounderStyles.imageContainer}>
                    <span className={FounderStyles.founderTitle}>FOUNDER</span>
                    <img src={founder.image} alt="founder" />
                    <div className={FounderStyles.imageText}>
                        <span>{founder.name}</span>
                        <span>-</span>
                        <span className={FounderStyles.position}>{founder.position}</span>
                    </div>
                </div>

                <div className={FounderStyles.textContainer}>
                    <span>{founder.title}</span>
                    <p>{founder.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FounderSection;