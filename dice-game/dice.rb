# YOUR CODE, HERE
input = ""
while input != 'S' do
  dice1 = rand(1..6)
  dice2 = rand(1..6)
  puts "You rolled a #{dice1} and a #{dice2}"
  puts "Total: #{dice1+dice2}"
  puts "Press 'Enter' to roll again, 'S' to stop"
  input = gets.chomp
end
