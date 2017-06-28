# Write Ruby<->English answers here as comments in your code
#1. For every element called 'number' in the array 'numbers', print out 3 multiple the 'number'
#2. For every element called 'name' in the array 'names', print out the length of the 'name'
#3. Lets initialize a variable called 'sum' with a value of zero,
#for every element called 'number' in the array 'numbers', increment the sum by the 'number' and print out the 'sum' total.
#4. For each name-age pair in hash, print out the name and the age. Print it out in the form of 'name' is 'age' years old.
#5. Intialize a variable called 'sum' with a value of zero, for each transaction-value in accounts. Increment the sum with all the values and print out the value of the account in 'sum'
#6. For each name-address pair in addresses, print out the name and the address. Print it out in the form of 'name' lives on 'address'.
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]

# Write Ruby code to find out the answers to the following questions:
# For every element 'word' in the array 'sentences' print out the word.
setences.each do |word|
  puts word
end
# For every element 'phone_number' in the array 'numbers' print out the phone number if it is a MA area code.
numbers.each do |phone_number|
  if phone_number.include?("INSERT MA AREA CODE || MORE AREA CODE")
    puts phone_number
  end
end
# For every element number in the array 'numbers' print out every odd number.
numbers.each do |phone_number|
  if phone_number % 2 != 0
    puts phone_number
  end
end
# For every name-age pair in the hash 'ages', print out each pair.
ages.each do |name,age|
  puts "#{name}, #{age}"
end
# For every name-age pair in the hash 'ages', print out a pair if the age is > 10.
ages.each do |name,age|
  if age > 10
    puts "#{name}, #{age}"
  end
end
# For every name-age pair in the hash 'ages', print out a pair if the age is even.
ages.each do |name,age|
  if age % 2 == 0
    puts "#{name}, #{age}"
  end
end
puts "What is the sum of all the numbers in `array`?"
sum = 0
array.each do |num|
  sum+= num
end
puts sum
puts "How would you print out each value of the array?"
array.each do |num|
  puts num
end
puts "What is the sum of all of the even numbers?"
sum = 0
array.each do |num|
  if num % 2 == 0
    sum += num
  end
end
puts sum
puts "What is the sum of all of the odd numbers?"
sum = 0
array.each do |num|
  if num % 2 != 0
    sum += num
  end
end
puts sum
puts "What is the sum of all the numbers divisble by 5?"
sum = 0
array.each do |num|
  sum+= num
end
puts sum/5.to_f
puts "What is the sum of the squares of all the numbers in the array?"
sum = 0
array.each do |num|
  sum+= num * num
end
puts sum

array = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]

# Write Ruby code to find out the answers to the following questions:

puts "How would you print out each name backwards in `array`?"
array.each do |name|
  puts name.reverse
end
puts "What are the total number of characters in the names in `array`?"
sum = 0
array.each do |name|
  sum += name.length
end
puts sum
puts "How many names in `array` are less than 5 characters long?"
sum = 0
array.each do |name|
  if name.length < 5
    sum+= 1
  end
end
puts sum
puts "How many names in `array` end in a vowel?"
sum = 0
vowel = 'aeiou'
array.each do |name|
  sum+= name.count(vowel)
end
puts sum
puts "How many names in `array` are more than 5 characters long?"
sum = 0
array.each do |name|
  if name.length > 5
    sum+= 1
  end
end
puts sum
puts "How many names in `array` are exactly 5 characters in length?"
sum = 0
array.each do |name|
  if name.length  == 5
    sum+= 1
  end
end
puts sum
