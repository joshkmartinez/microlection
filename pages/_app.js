import App from 'next/app'

//for the flash of unstyled content (FOUC)
export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }
}
