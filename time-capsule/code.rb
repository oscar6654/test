puts "Greetings! What is your name?"
name = gets.chomp
time_capsule = []
time_capsule_q = []
while true do
  puts "What do you want to add to the time Capsule? Type FINISHED to stop adding"
  input = gets.chomp
  if input.downcase == 'finished'
    break
  end
  puts "Please put number greater than 0"
  input_q = gets.chomp
  while input_q.to_i < 0 do
    input_q = gets.chomp
    if input_q.to_i > 0
      break
    end
  end
  time_capsule.push(input)
  time_capsule_q.push(input_q)
end
puts "#{name}, thanks for trying our Time Capsule maker. Here is a list of the items in your Time Capsule!:"
time_capsule.zip(time_capsule_q).each do |item, values|
  puts "#{item} (#{values})"
end
