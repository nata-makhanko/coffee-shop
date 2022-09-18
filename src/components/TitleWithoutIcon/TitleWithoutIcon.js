import { TitleWrapper } from '../titleWithIcon/titleWithIcon';



const TitleWithoutIcon = ({ text }) => {
    return (
        <TitleWrapper>
            <h2>{text}</h2>
        </TitleWrapper>
    );
}

export default TitleWithoutIcon;
