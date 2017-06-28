# YOUR CODE HERE
require 'pry'
train_time = [2, 5, 7.5, 8.5, 9, 10, 11.5, 13.5, 14.5, 17, 18, 19, 24]

puts "What time are you leaving?"
print ">"
input = gets.chomp.to_i

while input > 25 || input.class != Fixnum || input < 0 || input == 0 do
  puts "Sorry, I don't understand that time."
  puts ""
  puts "What time are you leaving?"
  print ">"
  input = gets.chomp.to_i
end
train_time.each_with_index do |time,train|
  if input <= time
    puts "You should catch Train #{train+1} leaving at #{time}"
    if time == 24
      puts "\n***DON'T STOP...BELIEVIN'!***\n"
      puts "\nJust a small town girl
Living in a lonely world
She took the midnight train going anywhere
Just a city boy
Born and raised in South Detroit
He took the midnight train going anywhere\n
A singer in a smoky room
A smell of wine and cheap perfume
For a smile they can share the night
It goes on and on and on and on\n
Strangers waiting, up and down the boulevard
Their shadows searching in the night
Streetlights people, living just to find emotion
Hiding, somewhere in the night."
    end
    break
  end
end
