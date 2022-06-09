import React, {FC} from 'react';
import classes from "../../scss/Information.module.scss";
import logoName from '../../assets/Logo/logoName.webp'
import wand from '../../assets/Static/wand.svg'
import diamond from '../../assets/Static/diamond.svg'
import gif from '../../assets/Static/lx450.gif'

const Information:FC = () => {
    return (
        <div className={classes['Information']}>
            <div className={classes['Information__logo']}>
                <img src={gif} alt=""/>
            </div>
            <div className={classes['Information__description']}>
                <div className={classes['Information__description-name']}>
                    <img src={logoName} alt="" width={450}/>
                </div>
                <div className={classes['Information__description-info']}>
                    <p>
                        Подберем идеальный вариант детейлинга для вашего автомобиля!
                        Выполним все процедуры по уходу и защите за авто.
                        Бесплатный осмотр и консультация. Звоните!
                    </p>
                </div>
                <div className={classes['Information__description-details']}>
                    <div className={classes['Information__description-details-paragraph']}>
                        <p>Индивидуальный подход</p>
                        <div className={classes['Information__description-details-paragraph-text']}>
                            <img src={wand} alt=""/>
                            <p>Мы разрабатывает стратегию работы на <br/> этапе осмотра машины,
                                таким образом мы <br/> пытаемся максимально улучшить внешний <br/>
                                вид вашего любимого автомобиля.</p>
                        </div>
                    </div>
                    <div className={classes['Information__description-details-paragraph']}>
                        <p>Цена / Качество</p>
                        <div className={classes['Information__description-details-paragraph-text']}>
                            <img src={diamond} alt=""/>
                            <p>Наработанный нами опыт и большое число <br/> лояльных партнеров,
                                позволяют нам оказывать <br/> услуги на высоком уровне за разумную стоимость.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;