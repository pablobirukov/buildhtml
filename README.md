        
## source flow
    *.decljson > build > release
    
./vendor/decljson/
        
## raw source   
```html
<div class="modal-base">
    <div class="modal-header modal-base__header">
        <ng-close-button ng-click="modalOptions.close('close')"></ng-close-button>
        <h4 class="modal-base__header-title">
            **HEADER **
        </h4>
    </div>
    <div class="modal-body modal-base__body">
    		**CONTENT**
    </div>
</div>
```

## New block
```html
<!-- Обязательно документировать каждый блок или параметр -->
<div class="modal-base" _:block="modal">
    <!-- Блок для отображения модального окна -->
    <div class="modal-header modal-base__header">
        <ng-close-button ng-click="modalOptions.close('close')"></ng-close-button>
        <h4 class="modal-base__header-title" _:param="header">
            <!-- Заголовок окна. Ждем текст-->
        </h4>
    </div>
    <div class="modal-body modal-base__body" _:param="content">
        <!-- Контент модалки. Ждем HTML -->
    </div>
</div>
```



## Define block in HTML template.

```xml
<html>
<head></head>
<body>

...

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
					<buildhtml block="form-control_input" id="1" placeholder="Any placeholder">	</buildhtml>
				</buildhtml>
			</buildhtml>
		</div>
	</body>
	<footer>
		Some footer stuff, buttons, etc.
	</footer>
</buildhtml>

...

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
