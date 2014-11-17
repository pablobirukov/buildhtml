### Структура
##### blocks - файлы блоков buildhtml с описанием каждого параметра.
###### Например modal.html включает в себя разметку типового модального окна, а так же информацию для документации. Обязательно нужно документировать каждый блок и каждый параметр. Для этого нужно использовать конструкцию комментария ```<!-- Описание блока или параметра -->``` сразу же после определения блока или параметра.
### 
```html
<!-- Обязательно документировать каждый блок или параметр -->
<div class="modal-base" block="modal">
<!-- Блок для отображения модального окна (этот комментарий станет названием блока в документации) -->
    <div class="modal-header modal-base__header">
        <h4 class="modal-base__header-title" param="head" type="string">
            <!-- Заголовок окна. Ждем текст-->
        </h4>
    </div>
    <div class="modal-body modal-base__body" param="body" type="">
        <!-- Контент модалки. Ждем HTML -->
    </div>
        <div class="modal-footer modal-base__footer" param="footer">
        <!-- Контент модалки. Ждем HTML -->
    </div>
</div>
```



## Define a buildhtml block in HTML template, modal window for example.

```xml


<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<div class="header">
    ...
</div>

<buildhtml block="modal">
    <head>
        Header text.
    </head>
    <body>
    <div>
        <p>Some custom HTML or another buildhtml block</p>

        <buildhtml block="form">
            <buildhtml block="form-row">
                <buildhtml block="form-label">Label text</buildhtml>
                <buildhtml block="form-control_input"
                           id="1"
                           placeholder="Any placeholder"></buildhtml>
            </buildhtml>
        </buildhtml>
    </div>
    </body>
    <footer>
        Some footer stuff, buttons, etc.
    </footer>
</buildhtml>

<div class="footer">
    ...
</div>

</body>
</html>


```

## Maybe form?

```xml
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<div class="header">
    ...
</div>

        <buildhtml block="form">
            <buildhtml block="form-row">
                <buildhtml block="form-label">Label text</buildhtml>
                <buildhtml block="form-control_input"
                           id="1"
                           placeholder="Placeholder"></buildhtml>
            </buildhtml>

            <buildhtml block="form-row">
                <buildhtml block="form-label">Label 2 text</buildhtml>
                <buildhtml block="form-control_select"
                           id="2"
                            placeholder="Another placeholder"></buildhtml>
            </buildhtml>
        </buildhtml>

<div class="footer">
    ...
</div>

</body>
</html>


```


## Content
```json
{
	'block-name': {
		tpl: '<some-html><div>_:param:header</div></some-html>',
		descr: 'comment text'
		params: {
			header: {
				descr: 'param comment '	
			}, 
			content: {
				descr: 'param comment'
			}
		}
	}
}
```
