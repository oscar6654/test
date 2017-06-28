# YOUR CODE HERE
beer = 99
while beer >= 1 do
  if beer >= 2
    if beer % 10 != 0
      puts "#{beer} bottles of beer on the wall, #{beer} bottles of beer."
      beer -= 1
      if beer  == 1
        puts "Take one down and pass it around, #{beer} bottle of beer on the wall."
        puts ""
      else
        puts "Take one down and pass it around, #{beer} bottles of beer on the wall."
        puts ""
      end
    else
      puts "#{beer} bottles of beer on the wall, #{beer} bottles of beer!"
      beer -= 1
      puts "Take one down and pass it around, #{beer} bottles of beer on the wall."
      puts ""
    end
  else
    puts "#{beer} bottles of beer on the wall, #{beer} bottle of beer."
    puts "Take one down and pass it around, no more bottles of beer on the wall."
    puts ""
    beer -= 1
    puts "No more bottles of beer on the wall, no more bottles of beer."
    puts "Go to the store and buy some more, 99 bottles of beer on the wall."
    #break
  end
end
