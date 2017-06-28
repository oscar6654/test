REQUIRED_BAG_SIZE = 10

available_clubs = [
  :two_iron,
  :three_iron,
  :four_iron,
  :five_iron,
  :six_iron,
  :seven_iron,
  :eight_iron,
  :nine_iron,
  :pitching_wedge,
  :sand_wedge,
  :driver,
  :three_wood,
  :five_wood,
  :seven_wood,
  :putter
]

possible_club_selections = available_clubs.sample(REQUIRED_BAG_SIZE)

# YOUR CODE GOES BELOW
puts "***Automated Golf Club Advice***"
possible_club_selections.each do |clubs|
  puts "Use the #{clubs.to_s.sub("_"," ")}!" 
end

if !possible_club_selections.include?(:putter)
  puts "WARNING! You will be without a putter"
end
if !possible_club_selections.include?(:pitching_wedge)
  puts "WARNING! You will be without a pitching wedge"
end
if !possible_club_selections.include?(:driver)
  puts "WARNING! You will be without a driver"
end
