(function() {

var styles = window.styles = {}

var button1 = {
    padding: '20px',
    background: 'blue'
}

styles['.button-1'] = button1

styles['.button-2'] = {
    extend: button1,
    padding: '30px'
}

}())
