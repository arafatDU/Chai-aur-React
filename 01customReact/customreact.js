console.log("Hello World!");

function customRender(reactElement, container) {
  const { type, props } = reactElement;
  const el = document.createElement(type);
  if (typeof props.children === 'string') {
    el.innerHTML = props.children;

  }else {
    props.children.forEach(child => {
      console.log(child);
      customRender(child, el);
    });
  }
  console.log(container, el);
  container.appendChild(el);
}


const reactElement = {
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hi there! I\'m Arafat Hussain'
        }
      },
      {
        type: 'div',
        props: {
          children: 'Chai aur code'
        }
      }
    ]
  }
}






const rootContainer = document.querySelector('#root')
console.log(rootContainer);
customRender(reactElement, rootContainer);