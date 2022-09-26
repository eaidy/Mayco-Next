import { GB, TR } from 'country-flag-icons/react/3x2'
import { useRouter } from 'next/router';

const LangSelect = ({ currentSite, currentLang}) => {

    const router = useRouter()

    return (
        <span className="langSelect">
            <GB 
                onClick={() => router.push(currentLang === 'tr' ? `/en/${router.pathname}` : router.pathname)}
                title="English" 
                className="flagIcon"
            />
            <TR 
                onClick={() => router.push(currentLang === 'en' ? router.pathname.replace('/en', '') : router.pathname)}
                title="Turkish" 
                className="flagIcon"
            />
        </span>
    );
}
 
export default LangSelect;