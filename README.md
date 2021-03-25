# JavaScript Project

### Instalacja Zależności

```shell
npm install
```

### Uruchomienie serwera deweloperskigo

```shell
nmp start
```

### Budowanie w trybie produkcyjnym

```shell
npm run production
```

## Wykorzystane narzędzia

- [node](https://nodejs.org/en/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [eslint](https://eslint.org/)
- [sass](https://sass-lang.com/)
- [stylelint](https://stylelint.io/)
- [prettier](https://prettier.io/)

## Wykorzystane biblioteki

- [chart.js](https://www.chartjs.org/)

## API

- [api.nbp.pl](http://api.nbp.pl/)

## GitHub Pages

1. Wyrzucenie `dist` z `.gitignore`
2. `git add dist`
3. `git commit`
4. `git subtree push --prefix dist origin gh-pages`

## Opis

Projekt polegał na stworzeniu strony, dającej możliwość symulowania inwestycji na giełdzie (w bardzo ograniczonych warunkach). Strona updatuje codzienne kursy z API podanym w opisie wyżej.  
  
Strona przechowuje dane logowania w sessionStorage.  
Istnieje możliwość dodania nowego konta (symulacja bazy danych w zmiennej "accounts".  
Api pobierane jest za pomoca funkcji asynchronicznej.  
Istnieje możliwość doładowania konta oraz dodania zdjęcia profilowego w sekcji "profile".  
