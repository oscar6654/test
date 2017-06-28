lunch =
[
  {food: "Hamburger", price: 4.0},
  {food: "Hot Dog", price: 3.0},
  {food: "Fries", price: 2.0},
  {food: "Chips", price: 1.0},
  {food: "Water", price: 1.25},
  {food: "Soda", price: 1.50}
]

puts "Welcome to Goodburger, home of the Goodburger! Can I take your order?"
print ">"
input = gets.chomp.split(",")

total_price = 0
lunch.each do |items|
  if input.include?(items[:food])
    total_price+= items[:price]
  end
end
puts total_price
