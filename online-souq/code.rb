items_avail = ["old paperback book", "potato", "red onion", "dried lemon", "frankincense", "medicinal herbs", "saffron", "glass spice jar", "red fabric", "orange fabric", "handicrafts", "small persian rug", "medium persian rug", "large persian rug", "extra large persian rug"]


puts "Good Morning! What is your name?"
name = gets.chomp
input = ""
puts "Here is the List of Item you can buy!"
for item in items_avail do
  puts "#{item}"
end
  items = []
  not_av = []
while input != "finished" do
  puts ""
  puts "What do you want to add in your shopping cart?"

  input = gets.chomp.downcase
  if items_avail.include?(input)
    items.push(input)
  else
    puts "Item is not available.."
    if input == "finished"
      break
    else
    not_av.push(input)
    end
  end
end
puts "Available"
for item in items do
  puts "#{item}"
end
puts "Not Avaialble"
for item in not_av do
  puts "#{item}"
end
