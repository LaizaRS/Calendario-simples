const months = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ]
let year = document.querySelector('header span').innerHTML = new Date().getFullYear()

function render() {
  let output = ''

  const thisMonth = months[new Date().getMonth()]

  for(let month of months) {
    const active = thisMonth == month ? 'active' : ''
    //output = output + '<div>' + month + '</div>'
    output += `<div class="${active}">${month}</div> `
  }
  return output
}

const leftCaret = document.querySelector('#app .ph-caret-left')
const rightCaret = document.querySelector('#app .ph-caret-right')

leftCaret.addEventListener('click', function(){
year--
document.querySelector('header span').innerHTML = year
})

rightCaret.addEventListener('click', function(){
year++
document.querySelector('header span').innerHTML = year
})

app.querySelector('main').innerHTML = render()

app.querySelector('header span').innerHTML = new Date().getFullYear()