
app = app || {}


app.questions_raw = `

# round: 1

# topic: "Полосатый рейс"
# 100: После проказ шимпанзе в борще обнаружились гайки, болты, и этот предмет, принадлежащий старпому.
       [Личный хронометр]
# 100: Какое занятие членов экипажа спровоцировало шимпанзе открыть клетки?
       [Чечётка]
# 100: Отдыхающий на пляже отметил, что тигры красиво плывут и описал их именно так
       [Вон та группа в полосатых купальниках]
# 100: Вопреки открывшемуся таланту буфетчица Марианна так и не стала укротительницей тигров. Но всё же она нашла своё
       призвание в такой профессии.
       [Ветеринар]
# 100: Когда всех тигров всё-таки загнали обратно в клетки, выяснилось, что не зватает льва, а в его клетке сидит
       фальшивый укротитель Шулейкин. Где же в итоге нашёлся лев?
       [В каюте Шулейкина]

# topic: "Ширли-мырли"
# 100: Алмаз имел такую стоимость, что продав его страна могла выплатить весь внешний долг, да ещё осталось бы и на это.
       [Все жители России могли бы три года жить на Канарах]
# 100: По словам мафиози Козюльского японцы предлагали ему за алмаз на три миллиарда больше, но продать алмаз он
       всё-таки решил американцам по этой причине.
       ["Не доверяю я этим йенам."]
# 100: Во время задержания в ЗАГСе следователь Пискунов предупредил, что "шаг влево, шаг вправо считаются попыткой побега",
       а прыжок на месте он будет расценивать именно так.
       [Как попытку улететь]
# 100: Как умер отец близнецов Иван Израилевич?
       ["А Иван Израилевич - в соседней комнате, роялем придавленный."]
# 100: Изначально алмаз планировали назвать в честь третьей годовщины образования СНГ. Но в итоге он получил такое название.
       [спаситель России]

# topic: "Кавказская пленница"
# 100: Когда Шурик впервые встретил Нину, он попросил её идти прямо по шоссе, не сворачивая. А зачем?
       ["Мой осёл идёт за вами как привязанный"]
# 100: Администратору гостиницу Шурик сказал "Я совершенно не пью! Не имею физической возможности". На что администратор
       ответил: "Вот по этому поводу первый тост!". Какой тост он рассказал?
       [Про козу, дом, и то, чтобы возможности совпадали с желаниями]
# 100: "И принцесса от злости повесилась на собственной косе. Потому что он совершенно точно сосчитал сколько зёрен
       в мешке, сколько капель в море и сколько звёзд на небе." А за кого предлагалось выпить в этом тосте?
       [За кибернетиков]
# 100: Дядя Джабраил за Нину получил в качестве выкупа 25 баранов и этот полезный в хозействе агрегат
       [Холодильник]
# 100: Чтобы проникнуть на дачу Саахова, Шурик и Эдик выдумали эпидемею именно этого заболевания.
       [Ящур]

# topic: Кто говорит?
# 100: "- Опять ты мне эту икру поставила! Не могу я ее каждый день, проклятую, есть. Хоть бы хлеба достала."
       [Верещагин, "Белое солнце пустыни"]
# 100: "Нет денег. И деньги, и документы, и валюта - все осталось у экскурсовода. Ну, так получилось. Отошли на секундочку и затерялись в песках."
       [Дядя Вова, "Кин-дза-дза"]
# 100: "День взятия Бастилии впустую прошёл"
       [Дядя Митя, "Любовь и голуби"]
# 100: "Ой, как я это багатство люблю и уважаю!"
       [Мужик, "Падал прошлогодний снег"]
# 100: "Мы строили-строили и наконец построили!"
       [Чебурашка]

# topic: Анонсы
# 100: Фильм в жанре фэнтези, который повествует о войне двух государств в которой агрессор применяет огромного боевого
       робота, а обороняющиеся применяют лучевое оружие ближнего действия.
       [Раз, два, горе не беда]

# topic: Кто во что одет
# 100: Шерстяной плащ-крылатка и охотничья шапка с двумя козырьками
       [Шерлок Холмс]
# 100: Спортивное тёмно-синее трико с эмблемой "Динамо", и пояс расшитый золотом
       [Иван Грозный]
# 100: "В город молодой человек вошел в зеленом в талию костюме. Его могучая шея была несколько раз обернута старым
        шерстяным шарфом, ноги были в лаковых штиблетах с замшевым верхом апельсинного цвета. Носков под штиблетами не было."
       [Остап Бендер]
# 100: Этот персонаж "носил яркую голубую шляпу, желтые, канареечные, брюки и оранжевую рубашку с зеленым галстуком."
       [Незнайка]
# 100: «… в бумажную курточку из коричневой бумаги и ярко – 
зелёные штанишки. Туфли из старого голенища и шапочку – колпачок 
 с кисточкой из старого носка»
       [Буратино]


`
