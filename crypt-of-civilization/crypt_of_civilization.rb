# Your code, here.
#Crypt Filling
crypt_of_civilization = []
crypt_of_civilization.push("Comptometer")
crypt_of_civilization.push("Box of phonographic records")
crypt_of_civilization.push("Plastic savings bank")
crypt_of_civilization.push("Set of scales")
crypt_of_civilization.push("Toast-O-Lator")
crypt_of_civilization.push("Sample of aluminum foil")
crypt_of_civilization.push("Donald Duck doll")
#Crypt Combining
extra = ["Container of beer", "Lionel model train set", "Ingraham pocket watch"]
#Crypt Reference
crypt_of_civilization.concat(extra)
crypt_of_civilization.length
crypt_of_civilization.first
crypt_of_civilization.last
crypt_of_civilization[1]
crypt_of_civilization[2]
crypt_of_civilization[-2]
crypt_of_civilization.index("Toast-O-Lator")
#Crypt Checking
crypt_of_civilization.include?("Container of beer")
crypt_of_civilization.include?("Toast-O-Lator")
crypt_of_civilization.include?("Plastic bird")
#Crypt Sorting
crypt_of_civilization.sort_by{|x| x.length}
crypt_of_civilization.sort_by{|x| x.upcase}
crypt_of_civilization.sort{|a,b| b <=> a}
#Crypt Printing
current = 0
while current < crypt_of_civilization.length do
  puts crypt_of_civilization[current]
  current += 1
end

crypt_of_civilization.each do |items|
  puts items
end
#Crypt Deletion
crypt_of_civilization.shift
crypt_of_civilization.pop
crypt_of_civilization.delete("set of scales")
crypt_of_civilization.delete("sample of aluminum foil")
