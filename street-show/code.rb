#Street Show
sum_of_knife_juggling = 2.10 + 0.77 + 5.00 + 1.00 + 3.00
sum_of_torch_juggling = 6.00 + 3.50 + 7.00
sum_of_hand_balancing = 2.00 + 1.00
sum_of_human_blockhead = 0.75 + 0.43

puts "Knife Juggling:"
puts sum_of_knife_juggling.round(2)
puts "Torch Juggling:"
puts sum_of_torch_juggling
puts "Hand Balancing:"
puts sum_of_hand_balancing
puts "Humand Blockhead:"
puts sum_of_human_blockhead
puts "Total:"
sum_of_all = sum_of_knife_juggling + sum_of_torch_juggling + sum_of_human_blockhead + sum_of_hand_balancing
puts sum_of_all
puts "Average Tip Value:"
puts sum_of_all / 12

#Part 2
puts "Hello everybody! Today, my accomplice and I will be showing you acts of great daring. Can I have an audience volunteer?"
puts "There's our brave volunteer! What's your name?"
volunteer_name = gets.chomp
puts "Everyone give a big round of applauce for #{volunteer_name}"
puts "Now #{volunteer_name}, what's your favorite number?"
favorite_num = gets.chomp
puts "Alright #{volunteer_name}, my friend and I will be juggling these knives around you for #{favorite_num} seconds. Are you prepared to be amazed?"
