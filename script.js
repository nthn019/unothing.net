console.log('lol');

var countries = [
    {'country': 'Абхазия'},
    {'country': 'Австралия'},
    {'country': 'Австрия'},
    {'country': 'Азербайджан'},
    {'country': 'Албания'},
    {'country': 'Алжир'},
    {'country': 'Ангола'},
    {'country': 'Андорра'},
    {'country': 'Антигуа и Барбуда'},
    {'country': 'Аргентина'},
    {'country': 'Армения'},
    {'country': 'Аруба'},
    {'country': 'Афганистан'},
    {'country': 'Багамские Острова'},
    {'country': 'Бангладеш'},
    {'country': 'Барбадос'},
    {'country': 'Бахрейн'},
    {'country': 'Беларусь'},
    {'country': 'Белиз'},
    {'country': 'Бельгия'},
    {'country': 'Бенин'},
    {'country': 'Бермудские Острова'},
    {'country': 'Болгария'},
    {'country': 'Боливия'},
    {'country': 'Босния и Герцеговина'},
    {'country': 'Ботсвана'},
    {'country': 'Бразилия'},
    {'country': 'Бруней'},
    {'country': 'Буркина-Фасо'},
    {'country': 'Бурунди'},
    {'country': 'Бутан'},
    {'country': 'Вануату'},
    {'country': 'Великобритания'},
    {'country': 'Венгрия'},
    {'country': 'Венесуэла'},
    {'country': 'Восточное Самоа'},
    {'country': 'Вьетнам'},
    {'country': 'Габон'},
    {'country': 'Гаити'},
    {'country': 'Гайана'},
    {'country': 'Гамбия'},
    {'country': 'Гана'},
    {'country': 'Гватемала'},
    {'country': 'Гвиана (фр.)'},
    {'country': 'Гвинея'},
    {'country': 'Гвинея-Бисау'},
    {'country': 'Германия'},
    {'country': 'Гондурас'},
    {'country': 'Гонконг (Китай)'},
    {'country': 'Гренада'},
    {'country': 'Гренландия'},
    {'country': 'Греция'},
    {'country': 'Грузия'},
    {'country': 'Гуам'},
    {'country': 'Дания'},
    {'country': 'Демократическая Республика Конго'},
    {'country': 'Джибути'},
    {'country': 'Доминика'},
    {'country': 'Доминиканская Республика'},
    {'country': 'Египет'},
    {'country': 'Замбия'},
    {'country': 'Западная Сахара'},
    {'country': 'Зимбабве'},
    {'country': 'Израиль'},
    {'country': 'Индия'},
    {'country': 'Индонезия'},
    {'country': 'Иордания'},
    {'country': 'Ирак'},
    {'country': 'Ирландия'},
    {'country': 'Исландия'},
    {'country': 'Испания'},
    {'country': 'Италия'},
    {'country': 'Йемен'},
    {'country': 'Кабо-Верде'},
    {'country': 'Казахстан'},
    {'country': 'Камбоджа'},
    {'country': 'Камерун'},
    {'country': 'Канада'},
    {'country': 'Катар'},
    {'country': 'Кения'},
    {'country': 'Кипр'},
    {'country': 'Киргизия'},
    {'country': 'Кирибати'},
    {'country': 'Китай'},
    {'country': 'Китай'},
    {'country': 'КНДР'},
    {'country': 'Колумбия'},
    {'country': 'Коморские Острова'},
    {'country': 'Конго'},
    {'country': 'Королевство Эсватини'},
    {'country': 'Коста-Рика'},
    {'country': 'Кот-д\'Ивуар'},
    {'country': 'Куба'},
    {'country': 'Кувейт'},
    {'country': 'Кюрасао'},
    {'country': 'Лаос'},
    {'country': 'Латвия'},
    {'country': 'Лесото'},
    {'country': 'Либерия'},
    {'country': 'Ливан'},
    {'country': 'Ливия'},
    {'country': 'Литва'},
    {'country': 'Лихтенштейн'},
    {'country': 'Люксембург'},
    {'country': 'Маврикий'},
    {'country': 'Мавритания'},
    {'country': 'Мадагаскар'},
    {'country': 'Макао (Китай)'},
    {'country': 'Македония'},
    {'country': 'Малави'},
    {'country': 'Малайзия'},
    {'country': 'Мали'},
    {'country': 'Мальдивы'},
    {'country': 'Мальта'},
    {'country': 'Марокко'},
    {'country': 'Маршалловы Острова'},
    {'country': 'Мексика'},
    {'country': 'Мозамбик'},
    {'country': 'Молдавия'},
    {'country': 'Монголия'},
    {'country': 'Мьянма'},
    {'country': 'Намибия'},
    {'country': 'Непал'},
    {'country': 'Нигер'},
    {'country': 'Нигерия'},
    {'country': 'Нидерланды'},
    {'country': 'Никарагуа'},
    {'country': 'Новая Зеландия'},
    {'country': 'Новая Каледония'},
    {'country': 'Норвегия'},
    {'country': 'ОАЭ'},
    {'country': 'Оман'},
    {'country': 'Пакистан'},
    {'country': 'Палестина'},
    {'country': 'Панама'},
    {'country': 'Папуа – Новая Гвинея'},
    {'country': 'Парагвай'},
    {'country': 'Перу'},
    {'country': 'Польша'},
    {'country': 'Португалия'},
    {'country': 'Пуэрто-Рико (США)'},
    {'country': 'Республика Корея'},
    {'country': 'Руанда'},
    {'country': 'Румыния'},
    {'country': 'Сальвадор'},
    {'country': 'Самоа'},
    {'country': 'Сан-Томе и Принсипи'},
    {'country': 'Саудовская Аравия'},
    {'country': 'Сейшельские Острова'},
    {'country': 'Сенегал'},
    {'country': 'Сент-Винсент и Гренадины'},
    {'country': 'Сент-Китс и Невис'},
    {'country': 'Сент-Люсия'},
    {'country': 'Сербия'},
    {'country': 'Сингапур'},
    {'country': 'Сирия'},
    {'country': 'Словакия'},
    {'country': 'Словения'},
    {'country': 'Соломоновы Острова'},
    {'country': 'Сомали'},
    {'country': 'Судан'},
    {'country': 'Суринам'},
    {'country': 'США'},
    {'country': 'Сьерра-Леоне'},
    {'country': 'Таджикистан'},
    {'country': 'Таиланд'},
    {'country': 'Тайвань (Китай)'},
    {'country': 'Танзания'},
    {'country': 'Тимор-Лесте'},
    {'country': 'Того'},
    {'country': 'Тонга'},
    {'country': 'Тринидад и Тобаго'},
    {'country': 'Тунис'},
    {'country': 'Туркмения'},
    {'country': 'Турция'},
    {'country': 'Уганда'},
    {'country': 'Узбекистан'},
    {'country': 'Украина'},
    {'country': 'Уругвай'},
    {'country': 'Фарерские острова'},
    {'country': 'Федеративные Штаты Микронезии (ФШМ)'},
    {'country': 'Фиджи'},
    {'country': 'Филиппины'},
    {'country': 'Финляндия'},
    {'country': 'Франция'},
    {'country': 'Французская Полинезия'},
    {'country': 'Хорватия'},
    {'country': 'ЦАР (Центральноафриканская Республика)'},
    {'country': 'Чад'},
    {'country': 'Черногория'},
    {'country': 'Чехия'},
    {'country': 'Чили'},
    {'country': 'Швейцария'},
    {'country': 'Швеция'},
    {'country': 'Шри-Ланка'},
    {'country': 'Эквадор'},
    {'country': 'Экваториальная Гвинея'},
    {'country': 'Эритрея'},
    {'country': 'Эстония'},
    {'country': 'Эфиопия'},
    {'country': 'ЮАР'},
    {'country': 'Южная Осетия'},
    {'country': 'Южный Судан'},
    {'country': 'Ямайка'},
    {'country': 'Япония'},
];

countries.forEach(element => {
    document.querySelector('.countries_list').insertAdjacentHTML('beforeend', '<li class="countries_list-element">'+element['country']+'</li>');
});