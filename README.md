        
## source flow
    *.decljson > build > release
    
./vendor/decljson/
        
## raw source   
```
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
```
<div class="modal-base" _:block="modal">
    <div class="modal-header modal-base__header">
        <ng-close-button ng-click="modalOptions.close('close')"></ng-close-button>
        <h4 class="modal-base__header-title" _:param="header">
            HEADER
        </h4>
    </div
    <div class="modal-body modal-base__body" _:param="content">
		<!-- Контент -->
        CONTENT
    </div>
</div>
```



## Form

```
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
```
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
