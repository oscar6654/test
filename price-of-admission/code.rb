#Your code goes here!
puts "Piece of Admission"
# puts "How many adults in the group?"
# adults = gets.chomp
# puts "How many childrens in the group?"
# children = gets.chomp
adults = 4
children = 2
adult_price = 12.80
children_price = 4.00
sum_of_all = adults.to_f*adult_price + children_price*children.to_f
puts "Total Cost is $ #{sum_of_all}"
adult_split = sum_of_all/adults.to_i
puts "Adult should split evenly of $ #{adult_split}"
puts
puts "Combining Words"
one = "Hello"
two = "Oscar"
three = "How"
four = "Are"
five = "You"
six = "?"
puts one + two + three + four + five + six
puts
puts "Day At the Park"
size = "large"
puts "I got a " + size + " icecream"
who = "Oscar"
puts who + " screamed the loudest on the ride"
color = "blue"
puts color + " cotton candy is the best"
how_cold = 45
puts "The water is " + how_cold.to_s + " degrees fahrenheit"
crazy = "crazy"
puts "I like " + crazy + " rides"
