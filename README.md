# JavaScript Project
Witam!

Przedstawiam projekt aplikacji, która umożliwia użytkownikowi przebywającemu w terenie zorientowanie się względem stron świata. Odbywa się to w trzech prostych krokach:
1) Niezwłocznie po uruchomieniu aplikacji, przeglądarka wysyła do serwera żądanie z danymi dotyczącymi lokalizacji GPS urządzenia, z którego użytkownik aktualnie korzysta.
2) W odpowiedzi, skrypt otrzymuje i przetwarza informacje na temat godziny wschodu i zachodu słońca dla przesłanych wcześniej współrzędnych, obliczając azymut aktualnej pozycji słońca.
3) Po ułożeniu urządzenia tak, aby płaszczyzna ekranu była równoległa do powierzchni Ziemi i obróceniu urządzenia tak, aby ikona słońca z tarczy aplikacji skierowana była w kierunku słońca na niebie, strzałka na tarczy wskaże kierunek geograficznej północy.

Dodatkowo, aplikacja:
- przedstawia czas, który upłynął od początku dnia (wschodu słońca) oraz odlicza czas do końca dnia (zachodu słońca),
- informuje o aktualnej długości cienia (dla referencyjnego obiektu o wysokości równej 1,0 m),
- podmienia kolorystykę tła w zależności od pory dnia (22 kompozycje kolorystyczne),
- wykazuje się pełną responsywnością dla trzech typowych urządzeń (smartfon, tablet, komputer).

Zapraszam do korzystania!   

## Wykorzystane API
* [Sunrise Sunset](https://sunrise-sunset.org/api)

## Wykorzystane biblioteki
* [jquery](https://jquery.com/)

## Wykorzystane narzędzia
* [node](https://nodejs.org/en/)
* [webpack](https://webpack.js.org/)
* [babel](https://babeljs.io/)
* [sass](https://sass-lang.com/)
* [eslint](https://eslint.org/)
* [prettier](https://prettier.io/)
