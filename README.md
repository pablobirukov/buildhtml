        
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



## Form

```xml
<_:modal>
	<header>
		Заголовок окна
	</header>
	<content>
		HTML
	</content>
</_:modal>
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
