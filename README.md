<p align="center"><img src="https://user-images.githubusercontent.com/1182967/34776160-d0cdee06-f650-11e7-8119-b42c0c324e8f.png"/></p>

# react-sliding-panel

> Simple [React](http://facebook.github.io/react/index.html) component for sliding panel on mobile. 

## Install

```bash
npm install react-sliding-panel --save
```

## Example

```javascript
import SlidingPanel from 'react-sliding-panel';

const [isOpen, setIsOpen] = useState(false);
<SlidingPanel
  type="side"
  isOpen={isOpen}
  closeFunc={() => setIsOpen(false)}
>
  <YourComponent />
</SlidingPanel>

```

## Documentation - props

### Always required
#### type: string
- `bottom`
- `side`

Set sliding panel type.

#### isOpen: boolean

Save sliding panel state

#### closeFunc: function

Set sliding panel close function



## Changelog
- 0.0.1

## License

[MIT License](LICENSE)
