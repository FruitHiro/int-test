# Instructions

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
npm run dev:ssr - для ssr
npm run dev:spa - для spa
```

## Production

Build the application for production:

```bash
# npm
npm run build
npm run build:ssr - для ssr
npm run build:spa - для spa
```
## Что сделано

```bash
# npm
- страница со списоком автомобилей, данные получают из json возвращемого в api carslist
- фильтр на странице списка автомобилей через поисковую строку, ищет совпадения в make и model полях автомобиля
- клик по названию автомобиля на странице списка, направляет на детальную страницу автомобиля
- для детальной информации используется Car API
- добавленно 5 минутное кэширование запроса
- добаленна pinia для хранения данных
- В случае ошибки загрузки данных отображается сообщение
```
