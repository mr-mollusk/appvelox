import s from "./Auth.module.scss";
import Header from "./Header/Header";

const Auth = (props) => {
    return (
        <section className={s.Auth__wrapper}>
            <section className={s.Auth__form}>
                <section className={s.Auth__header}>
                    <Header />
                </section>
                <section className={s.Auth__content}></section>
                <section className={s.Auth__footer}></section>
                <section className={s.Auth__column}></section>
            </section>
            <section className={s.Auth__img}></section>
        </section>
    );
};

export default Auth;
