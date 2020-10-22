// import './index.scss';

export default function sayHello() {
  const body = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello, World!';
  body.appendChild(h1);
}

sayHello();
