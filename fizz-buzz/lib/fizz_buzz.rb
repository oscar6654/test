# YOUR CODE HERE
num = 0
while num < 100 do
  num += 1
  if num % 5 == 0 && num % 3 == 0
    puts "FizzBuzz"
  elsif num % 3 == 0
    puts "Buzz"
  elsif num % 5 == 0
    puts "Fizz"
  else
    puts "#{num}"
  end
end
