'hello'
alert('hello');

'some' + 'text' //= 'sometext'
'some' + 'more' + 'text' //= 'somemoretext'

typeof 2 //= 2 is a number
typeof 'hello' //= hello is a string

'hello' + 3 //= 'hello3'

'$' + 20.95 + 7.99
'$' + (20.95 + 7.99)
'$' + (2095 + 799) / 100

//Concatenation
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100 //= 'Items (2): $28.94'
'Items (' + 2 + '): $' + 2894 / 100

//Interpelation (cleaner way of inserting values into a string)
`hello`
`Items (${1 + 1}): $${(2095 + 799) / 100}` //= 'Items (2): $28.94'
`some
text`