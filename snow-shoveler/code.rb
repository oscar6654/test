#CUBIC FEET SNOW BUISNESS
# 0 - 49 cubic ft:  $20
# 50 - 149 cubic ft: $50
# 150 - 299 cubic ft: $100
# 300+ cubic ft: $150

length = 20
width = 8
height = 8
in_to_feet = 12
height_in_feet = height.to_f/in_to_feet
cubic_feet = length * width * height_in_feet
puts "Cubic Feet: #{cubic_feet}"

if cubic_feet <= 49
  puts "Quote Price: $20"
elsif cubic_feet <= 149
  puts "Quote Price: $50"
elsif cubic_feet <= 299
  puts "Quote Price: $100"
else
  puts "Quote Price: $150"
end
