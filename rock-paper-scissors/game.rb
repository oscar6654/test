# YOUR CODE GOES HERE
#ROCK-PAPER-SCISSORS
puts "Choose rock (r), paper (p), scissors (s):"
pick = gets.chomp

if pick == "r"
  input = "rock"
elsif pick == "p"
  input = "paper"
elsif pick == "s"
  input = "scissor"
else
  puts "Invalid Shape"
end

#SET RANDOM FROM 1-3
#ASSIGNING NUMBER TO A CHOICE OF ROCK-PAPER-SCISSORS
computer_choice = rand(3)+1
if computer_choice == 1
  cmp = "rock"
elsif computer_choice == 2
  cmp = "paper"
else
  cmp = "scissor"
end


if input == "rock" && cmp == "rock" || input == "scissor" && cmp == "scissor" || input == "paper" && cmp == "paper"
  puts "Player chose #{input}."
  puts "Computer chose #{cmp}."
  puts "Tie!"
elsif input == "rock" && cmp == "paper" || input == "paper" && cmp == "scissor" || input == "scissor" && cmp == "rock"
  puts "Player chose #{input}."
  puts "Computer chose #{cmp}."
  puts "#{cmp} beats #{input}, Computer wins!"
elsif input == "paper" && cmp == "rock" || input == "rock" && cmp == "scissor" || input == "scissor" && cmp == "paper"
  puts "Player chose #{input}."
  puts "Computer chose #{cmp}."
  puts "#{input} beats #{cmp}, Player wins!"
end


##COMMENT
#Could be longer if statements if I do not use the OR clause
#Was going to use <,> it could work by doing the string heiarchy
#of "r" < "p" which is returns false then "r" < "s" returns true
