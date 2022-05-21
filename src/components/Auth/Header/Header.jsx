import s from "./Header.module.scss";
import eye from "../../../assets/icon/eye.svg";

const Header = (props) => {
    return (
        <header className={s.header__wrapper}>
            <div className={s.header__content}>
                <span className={s.header__patient}>Портал пациента</span>
                <div>
                    <img src={eye} alt="" className={s.header__eye} />
                    <span className={s.header__eyespan}>
                        Версия для слабовидящих
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
