# Your code, here.
sum = 0
puts "Enter your values here!"
while sum < 100 do
  input = gets.chomp.to_f
  sum += input
  if sum >= 100
    puts "You've reached 100!"
  end
end
