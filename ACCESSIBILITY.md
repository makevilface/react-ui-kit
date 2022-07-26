# Чек-лист доступности для фронтов

1. Для обозначения заголовков важно использовать только соответствующие теги `h1-h6`

2. Тег `h1` должен описывать текущее положение страницы для облегчения навигации

3. Для разметки областей страницы используйте теги `<header>`, `<main>`, `<article>`, `<nav>`, `<section>`, `<footer>`

4. В отличии от тега `<h1>` элемент `<header>` можно использовать несколько раз на странице, например, для заголовка модального окна. Так же, несколько раз можно использовать `<footer>`, `<article>`, `<section>`, `<main>`

5. В случае наличия нескольких тегов `section` на странице, хорошей практикой будет использование атрибута `aria-labelledby` для связывания разделов с их заголовками:
```html
<section aria-labelledby="sectionHeader1">
  <h2 id="sectionHeader1">Очень интересный раздел</h2>
</section>
<section aria-labelledby="sectionHeader2">
  <h2 id="sectionHeader2">Еще один интересный раздел</h2>
</section>
```

5. Добавляя атрибут `title` для страницы, помимо названия бренда рекомендуется добавлять описание страницы

6. Не скрывайте элементы при помощи `display:none`, а информативные элементы не добавляйте через `:before` или `:after` — скринридер не читает элементы скрытые через `display:none` или добавленные через стили. Для визуального скрытия элемента лучше используйте следующие стили:
```css
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

7. Если у `инпута` нет лейбла, необходимо задавать его через `aria-label`:
```html
<Input aria-label="Введите номер телефона (опционально)" />
```

8. Если нет возможности обернуть `<Input />` в `<label>`, используйте `aria-labeledby`:
```html
<label id="label">Введите ваше имя!</label>
<Input aria-labeledby="label" />
```

9. В случае если необходимо добавить описание элементу, используйте `aria-describedby`:
```html
<span id="button-description">По нажатию на кнопку...</span>
<button aria-describedby="button-description">Нажми!</button>
```

10. Для отключения элемента используйте `aria-disabled`, а визуально и интерактивно скрывайте элемент при помощи стилей (`.visually-hidden`)
```html
<Input aria-disabled="true"/>
```

11. Если элемент по умолчанию не имеет фокуса - можно сделать его фокусируемым при помощи атрибута `tabindex=”0”`.

12. При переключении клавишей `tab` элементы формы должны переключаться в нужной последовательности, один за одним. Не стоит менять порядок через `tabindex`
```html
<button tabindex=”3”>Нажми!</button>
<button tabindex=”1”>Нажми!</button>
<button tabindex=”2”>Нажми!</button>
```

13. Старайтесь чтобы визуальное расположение элементов на сайте повторялось в разметке, DOM-дереве. Есть стили (например, `position: absolute | sticky | fixed`), которые меняют визуальный порядок элементов на странице. При это в `DOM` порядок остаётся прежним, и скринридер прочитает его как в `DOM`, но на странице эти элементы будут расположены по-другому. 

14. Оставляйте пустой атрибут `alt` для декоративных картинок (также к таким изображениям рекомендуется добавлять атрибут `role` со значением `presentation`) и заполняйте его для информативных элементов. Не стоит писать в `alt` большие объёмы текста, в общих чертах описывайте самое важное.

15. Для сложных изображений\графиков дублируйте информацию в текстовом варианте.
```html
<picture>
  <img src=".../images/graph.png" alt="На графике изображено...">
</picture>
```
## Примеры доступных компонентов
1. В кнопку-иконку добавьте текст с описанием действия и скройте его с помощью специального класса. Этим же способом можно подписывать отдельно стоящие иконки.
```html
<Button>
  <Icon />
  <span className="visually-hidden">Нажми на меня!</span>
</Button>
```

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

2. Указывайте `<label>` для каждого поля формы. Если поле нельзя обернуть в `<label>`, используйте атрибуты `htmlFor` и `id`:
```html
<label htmlFor="input-id">Имя Фамилия</label>
<input id="input-id"/>
```

Либо используйте `aria-label`:
```html
<input aria-label="Имя Фамилия" id="input-id"/>
```

## Инструменты для проверки вёрстки
1. [Расширение браузера aXe](https://www.deque.com/axe/) 

2. [Расширение Lighthouse](https://developers.google.com/web/tools/lighthouse/)

3. [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y)
