import {IService} from "../../models/IService";
import image1 from '../../assets/Temp/car2.png'
import image2 from '../../assets/Temp/introcar.png'
const stock = 'индивидуальная'
const servicesInfo: IService[] = [
    {
        //TODO: same as default state in slice
        id: 1,
        title: 'Услуга',
        subtitle: 'Категория',
        price: 'цена',
        description: 'Описание услуги',
        image: image1
    },
    {
        id: 2,
        title: 'Кузов',
        subtitle: 'Кузовные работы',
        price: stock,
        description: 'Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!',
        image: image2
    },
    {
        id: 3,
        title: 'Пленки',
        subtitle: 'Кузов',
        price: stock,
        description: 'Антихром, антигравийная пленка, винил, тонировка, бронирование лобового.',
        image: image1
    },
    {
        id: 4,
        title: 'Антихром',
        subtitle: 'Пленки',
        price: stock,
        description: 'На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля.',
        image: image1
    },
    {
        id: 5,
        title: 'Антихром',
        subtitle: 'Частичный пакет',
        price: 'от 2.000 руб.',
        description: 'На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля.',
        image: image1
    },
    {
        id: 6,
        title: 'Антихром',
        subtitle: 'Полный пакет',
        price: 'от 25.000 руб.',
        description: 'На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля.',
        image: image1
    },
    {
        id: 7,
        title: 'Антигравийная',
        subtitle: 'Пленки',
        price: stock,
        description: 'Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди.',
        image: image1
    },
    {
        id: 8,
        title: 'Антигравийная',
        subtitle: 'Полная оклейка',
        price: 'от 170.000 руб.',
        description: 'Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди.',
        image: image1
    },
    {
        id: 9,
        title: 'Антигравийная',
        subtitle: 'Зоны риска',
        price: 'от 65.000 руб.',
        description: 'Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди.',
        image: image1
    },
    {
        id: 10,
        title: 'Винил',
        subtitle: 'Пленки',
        price: stock,
        description: 'Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины.',
        image: image1
    },
    {
        id: 11,
        title: 'Винил',
        subtitle: 'Частичная оклейка',
        price: 'от 2.000 руб.',
        description: 'Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины.',
        image: image1
    },
    {
        id: 12,
        title: 'Винил',
        subtitle: 'Полная оклейка',
        price: 'от 135.000 руб.',
        description: 'Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины.',
        image: image1
    },
    {
        id: 13,
        title: 'Тонировка',
        subtitle: 'Пленки',
        price: 'от 500 руб.',
        description: 'Тонировка стекол автомобиля является одной из наиболее популярных услуг. В зависимости от ваших предпочтений по тонировке стекол мы подберем наиболее подходящую светопропускаемость и оттенок пленки, который будет максимально дополнять внешний вид вашего автомобиля.',
        image: image1
    },
    {
        id: 14,
        title: 'Бронирование лобового стекла',
        subtitle: 'Пленки',
        price: 'от 16.000 руб.',
        description: 'Пленка для бронирования имеет очень интересные свойства. Например, энергия от удара равномерно распределится по всей поверхности пленки, сила удара уже влияет не на определенный участок, а на площадь всего стекла и риск того, что стекло треснет, становится минимальным. Так же стекло с подобными свойствами может защитить вас от вандализма.',
        image: image1
    },
    {
        id: 15,
        title: 'Полировка',
        subtitle: 'Кузов',
        price: stock,
        description: 'Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов.',
        image: image1
    },
    {
        id: 16,
        title: 'Полировка',
        subtitle: 'Предпродажная',
        price: 'от 10.000 руб.',
        description: 'Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов.',
        image: image1
    },
    {
        id: 17,
        title: 'Полировка',
        subtitle: 'Детейлинг',
        price: 'от 15.000 руб.',
        description: 'Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов.',
        image: image1
    },
    {
        id: 18,
        title: 'Защитное покрытие',
        subtitle: 'Кузов',
        price: stock,
        description: 'Керамика, жидкое стекло, антидождь, покрытие дисков.',
        image: image1
    },
    {
        id: 19,
        title: 'Защитное покрытие',
        subtitle: 'Керамика',
        price: 'от 7.000 руб.',
        description: 'Керамика – это сочетание песка кварца, полимеров и природных минералов. Для эффекта антистатики и равномерного нанесения, в раствор также подмешивают органический растворитель кремния. Другие ингредиенты смеси –  поверхностно-активные вещества и оксида алюминия усиливают водоотталкивающие и термостойкие свойства деталей машины, а диоксид титана обеспечивает ослепительное сияние.',
        image: image1
    },
    {
        id: 20,
        title: 'Защитное покрытие',
        subtitle: 'Жидкое стекло',
        price: 'от 5.000 руб.',
        description: 'Жидкое стекло для автомобиля, безусловно, лучшее на сегодняшний день средство для защиты лакокрасочного покрытия. После того, как работы выполнены, машина выглядит безупречно, будто только что сошла с конвейера. Об этом говорят многочисленные отзывы тех, кто успел опробовать жидкое стекло.',
        image: image1
    },
    {
        id: 21,
        title: 'Защитное покрытие',
        subtitle: 'Антидождь',
        price: 'от 3.000 руб.',
        description: 'Покрытие антидождь - эффективное средство для защиты стекла и придания ему эффекта гидрофобного схода воды – когда вода собирается в капельки и стекает ручейками.',
        image: image1
    },
    {
        id: 22,
        title: 'Защитное покрытие',
        subtitle: 'Диски',
        price: 'от 4.000 руб.',
        description: 'Полимерное покрытие – это прекрасная защита автомобильных дисков. Их не нужно менять, если возникнут повреждения, так как этот вид покрытия выдерживает даже удары камней. Полимерное покрытие способно выдержать перепады температуры.',
        image: image1
    },
    {
        id: 23,
        title: 'Дооснащение',
        subtitle: 'Кузов',
        price: stock,
        description: 'Дооснащение автомобиля – это комплекс работ по установке доп. опций, которые не были установлены автопроизводителем. Грамотное дооснащение расширяет возможности автомобиля и обеспечивает максимальный комфорт водителю и пассажирам.',
        image: image1
    },
    {
        id: 24,
        title: 'Дооснащение',
        subtitle: 'Тюнинг оптики',
        price: stock,
        description: 'Тюнинг оптики направлен на изменение внешнего вида и модернизацию осветительного оборудования автомобиля с целью улучшения его технических характеристик. Улучшение освещенности и видимости в темное время суток и при неблагоприятных погодных условиях (туман, дождь, снегопад, запыленность) повышает безопасность всех участников дорожного движения.',
        image: image1
    },
    {
        id: 25,
        title: 'Дооснащение',
        subtitle: 'Доводчики дверей',
        price: 'от 65.000 руб.',
        description: 'Автодоводчик притягивает неплотно закрытую дверь до полного закрытия. С использованием доводчика пользователю автомобиля не придется вновь открыть дверь и захлопывать ее с силой.',
        image: image1
    },
    {
        id: 26,
        title: 'Дооснащение',
        subtitle: 'Ветровики',
        price: stock,
        description: 'Ветровики для автомобиля представляют собой пластиковые полоски, согнутые под определенным углом (с вырезом для зеркала или без него), которые исполняют роль «щита». Они отсекают поток загрязненного дорожного воздуха от стекол и кузова, препятствуя их порче, а значит, вы экономите на ремонте. Ветровики на двери автомобиля повышают аэродинамические характеристики транспортного средства.',
        image: image1
    },
    {
        id: 27,
        title: 'Дооснащение',
        subtitle: 'Автосигнализация',
        price: stock,
        description: 'Автосигнализация — одно из главных средств защиты автомобиля от угона. Современная сигнализация — это комплексная система различных датчиков, электроники и дополнительных устройств, которые затрудняют угон авто. В базовой комплектации автосигнализация только извещает владельца о попытке проникновения в автомобиль включением звукового сигнала. Более продвинутые модели могут быть снабжены блокировкой замка зажигания, различными реле для управления дверьми и окнами, а также защитой от ложных срабатываний и обратной связью.',
        image: image1
    },
    {
        id: 28,
        title: 'Салон',
        subtitle: 'Работы по салону автомобиля',
        price: stock,
        description: 'Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!',
        image: image1
    },
    {
        id: 29,
        title: 'Химчистка',
        subtitle: 'Салон',
        price: 'от 10.000 руб.',
        description: 'Элементы внутренней отделки автомобиля спустя какое-то время теряют свой лоск и привлекательность. Салон выцветает под действием солнечных лучей, пролитая жидкость, пыль, грязь, сигаретный дым и пепел - всё это со временем сказывается на состоянии материала обивки салона автомобиля. Для того чтобы вернуть обивке авто первозданный вид, необходимо провести качественную профессиональную химчистку салона. Благодаря современным технологиям и гипоаллергенными чистящим средствам даже самые застарелые загрязнения исчезают без следа, и внутри машины снова становится чисто и уютно.',
        image: image1
    },
    {
        id: 30,
        title: 'Пленки',
        subtitle: 'Салон',
        price: stock,
        description: '',//TODO
        image: image1
    },
    {
        id: 31,
        title: 'Пленки',
        subtitle: 'Ковролин',
        price: stock,
        description: 'Автомобильный ковролин – это покрытие, которое укладывают на пол машины для придания ей привлекательного внешнего вида и обеспечения комфорта. При этом салон получает дополнительную защиту от пыли и грязи, что тоже является важным фактором в эксплуатации.',
        image: image1
    },
    {
        id: 32,
        title: 'Пленки',
        subtitle: 'Оклейка багажника',
        price: stock,
        description: 'Покрытие прозрачной, защитной пленкой обшивки багажника в салоне автомобиля. Защищает от обшивку багажника от прямых, грубых воздействий, царапин, грязи и пыли.',
        image: image1
    },
    {
        id: 33,
        title: 'Чистка и защита кожи',
        subtitle: 'Салон',
        price: stock,
        description: 'Кожаный салон требует регулярное увлажнение и уход. Качественная обработка кожи гарантирует презентабельный вид салона автомобиля на долгое время. ',
        image: image1
    },
    {
        id: 34,
        title: 'Чистка и защита кожи',
        subtitle: 'Керамика сидений и дверных карт',
        price: 'от 10.000 руб.',
        description: 'В теплое время года керамика создает защиту поверхностей внутри салона, деталей из пластика и кожи от солнца, предупреждает выцветание твердых и мягких материалов. В холодный сезон керамика не допускает наступления обледенения и разрыва ткани. Все микротрещины устраняются защитным покрытием.',
        image: image1
    },
    {
        id: 35,
        title: 'Чистка и защита кожи',
        subtitle: 'Чистка кожи',
        price: 'от 5.000 руб.',
        description: 'Если вы хотите, чтобы ваша машина выглядела роскошно не только снаружи, но и внутри, стоит уделять особое внимание на состояние кожи вашего любимого автомобиля. После проведения данной услуги, ваш салон преобразиться до состояния "Только из салона".',
        image: image1
    },
    {
        id: 36,
        title: 'Шумоизоляция',
        subtitle: 'Салон',
        price: 'от 2.500 руб.',
        description: 'Подавление внешних шумов – одна из важных составляющих комфорта и безопасности поездок в автомобиле. Это не модный тренд, а насущная необходимость.',
        image: image1
    }
]

export default servicesInfo