transactions = [50_000, -2_000, -25_000, 4_000, -12_000, 5_000, -800, -900, 43_000, -30_000, 15_000, 62_000, -50_000, 42_000]

# Write Ruby code to find out the answers to the following questions:

# * What is the value of the first transaction?
puts transactions[0]
# * What is the value of the second transaction?
puts transactions[1]
# * What is the value of the fourth transaction?
puts transactions[3]
# * What is the value of the last transaction?
puts transactions[-1]
# * What is the value of the second from last transaction?
puts transactions[-2]
# * What is the value of the 5th from last transaction?
puts transactions[-5]
# * What is the value of the transaction with index 5?
puts transactions[5]
# * How many transactions are there in total?
puts transactions.length
# * How many positive transactions are there in total?
sum = 0
transactions.each do |transaction|
  if transaction >= 0
    sum+= 1
  end
end
puts sum
# * How many negative transactions are there in total?
sum = 0
transactions.each do |transaction|
  if transaction < 0
    sum+= 1
  end
end
puts sum
# * What is the largest withdrawal?
puts transactions.min
# * What is the largest deposit?
puts transactions.max
# * What is the small withdrawal?
withdrawal = []
transactions.each do |transaction|
  if transaction < 0
    withdrawal << transaction
  end
end
puts withdrawal.max
# * What is the smallest deposit?
deposit = []
transactions.each do |transaction|
  if transaction > 0
    deposit << transaction
  end
end
puts deposit.min
# * What is the total value of all the transactions?
sum = 0
transactions.each do |transaction|
  sum+= transaction
end
puts sum
# * If Dr. Dre's initial balance was $239,900 in this account, what is the value of his balance after his last transaction?
current_balance = 239_000
puts current_balance + transactions[-1]

best_records = {
 "Tupac"=>"All Eyez on Me",
 "Eminem"=>"The Marshall Mathers LP",
 "Wu-Tang Clan"=>"Enter the Wu-Tang (36 Chambers)",
 "Led Zeppelin"=>"Physical Graffiti",
 "Metallica"=>"The Black Album",
 "Pink Floyd"=>"The Dark Side of the Moon",
 "Pearl Jam"=>"Ten",
 "Nirvana"=>"Nevermind"
 }

# Write Ruby code to find out the answers to the following questions:

# * How many records are in `best_records`?
puts best_records.length
# * Who are all the artists listed?
puts best_records.keys
# * What are all the album names in the hash?
puts best_records.values
# * Delete the `Eminem` key-value pair from the list.
best_records.delete("Eminem")
puts best_records
# * Add your favorite musician and their best album to the list.
best_records["Oscar"] = "Random Album!"
puts best_records
# * Change `Nirvana`'s album to another.
best_records["Nirvana"] = "Another"
puts best_records
# * Is `Nirvana` included in `best_records`?
puts best_records.keys.include?("Nirvana")
# * Is `Soundgarden` included in `best_records`?
puts best_records.keys.include?("Soundgarden")
# * If `Soundgarden` is not in `best_records` then add a key-value pair for the band.
if !best_records.keys.include?("Soundgarden")
  best_records["Soundgarden"] = "An Album"
end
# * Which key-value pairs have a key that has a length less than or equal to 6 characters?
best_records.each do |key,value|
  if key.length <= 6
    puts "Artist #{key} have less than or equal to 6 characters. Their Album is #{value}"
  end
end
# * Which key-value pairs have a value that is greater than 10 characters?
best_records.each do |key,value|
  if value.length > 10
    puts "#{key} Artist and #{value} Album have a value that is greater than 10 characters"
  end
end
