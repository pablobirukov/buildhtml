##### В папке blocks находятся файлы блоков buildhtml с описанием каждого параметра.
###### Например modal.html включает в себя разметку типового модального окна, а так же информацию для документации. Обязательно нужно документировать каждый блок и каждый параметр. Для этого нужно использовать конструкцию комментария ```<!-- Описание блока или параметра -->``` сразу же после определения блока или параметра.
### 
```html
<div class="modal-base" block="modal">
<!-- Блок для отображения модального окна (этот комментарий станет названием блока в документации) -->
    <div class="modal-header modal-base__header">
        <h4 class="modal-base__header-title" param="head">
            <!-- Заголовок окна. -->
        </h4>
    </div>
    <div class="modal-body modal-base__body" param="body">
        <!-- Контент модалки. Ждем HTML -->

    </div>
    <div class="modal-footer modal-base__footer" param="footer">
        <!-- Контент модалки. Ждем HTML -->
    </div>
</div>
```



## Объявляем блок buildhtml в шаблоне. Например, пусть это типовое модальное окно.

```html


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
            <p>Some custom HTML</p>
        </div>
    </body>
    <footer>
        <button>Cancel</button>
        <button>Apply</button>
    </footer>
</buildhtml>

<div class="footer">
    ...
</div>

</body>
</html>


```

## После препроцессинга шаблона получим:

```html 

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


<div class="modal-base">
    <div class="modal-header modal-base__header">
        <h4 class="modal-base__header-title">
            Header text.      
        </h4>
    </div>
    <div class="modal-body modal-base__body">
        <div>
            <p>Some custom HTML</p>
        </div>
    </div>
    <div class="modal-footer modal-base__footer">
        <button>Cancel</button>
        <button>Apply</button>
    </div>
</div>


<div class="footer">
    ...
</div>

</body>
</html>

```



## На примере формы разберемся с пропертями.
#### На мой взгляд ннужно прокидывать все проперти из объявления

```html
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
