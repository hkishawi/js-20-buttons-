window.onload = function () {
  for (var i = 1; i < 21; i++) {
    var button = document.createElement('button')
    var text = document.createTextNode(i)
    button.className = 'pure-button pure-button-primary somemargin'
    button.appendChild(text)
    // element.classList.add('pure-button pure-button-primary')
    button.addEventListener('click', function () {
      // get the clicked on button with this
      window.alert(this.firstChild.nodeValue)
    })
    document.body.appendChild(button)
  }
}
