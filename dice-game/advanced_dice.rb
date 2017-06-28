# YOUR ADVANCED CODE, HERE
puts "How many sides does your dice have?"
sides = gets.chomp.to_i
puts "How many times would you like to roll your pair of dice?"
count = gets.chomp.to_i
input = ""
while input != "n" do
  count.times do
    dice1 = rand(1..sides)
    dice2 = rand(2..sides)
    puts "You rolled a #{dice1} and a #{dice2}. Total: #{dice1+dice2}"
  end
  print "Roll Again? (Y/n)>"
  input = gets.chomp
end
