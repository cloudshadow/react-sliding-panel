<p align="center"><img src="https://user-images.githubusercontent.com/1182967/34776160-d0cdee06-f650-11e7-8119-b42c0c324e8f.png"/></p>

# react-sliding-panel

> Simple [React](http://facebook.github.io/react/index.html) component for sliding panel on mobile. 

## Install

```bash
npm install react-sliding-panel --save
```

## Demo
  ![Demo](https://user-images.githubusercontent.com/1182967/54028168-16f24780-41df-11e9-833b-3ea2d1784e0b.gif)

## Example

```javascript
import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-panel';

const DemoComponent = React.memo((props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('bottom');
  return (
    <>
      <div>React Sliding Panel Demo</div>
      <div>
        <button className="btn btn-primary" onClick={() => {setType('bottom'); setIsOpen(true);}}>Bottom</button>
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => {setType('side'); setIsOpen(true);}}>left</button>
      </div>
      <SlidingPanel
        type={type}
        isOpen={isOpen}
        closeFunc={() => setIsOpen(false)}
      >
        <div>
          Your components here
        </div>
      </SlidingPanel>
    </>
  );
});

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
- 0.0.3

## License

[MIT License](LICENSE)
