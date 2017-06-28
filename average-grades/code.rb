jane_scores = [98,95,88,97,74]
samantha_scores = [85,93,98,88,49]
matt_scores = [87,93,89,97,65]

def averages(scores)
  sum = 0.0
  scores.each do |score|
    sum+= score
  end
  sum/5
end

puts "Janes average is #{averages(jane_scores)}"
puts "Samantha average is #{averages(samantha_scores)}"
puts "Matt average is #{averages(matt_scores)}"

def letter_grade(grade)
  if grade > 90
    puts "A"
  elsif grade > 80
    puts "B"
  elsif grade > 70
    puts "C"
  elsif grade > 60
    puts "D"
  else
    puts "F"
  end
end

puts "Janes letter grade is #{letter_grade(averages(jane_scores))}"
puts "Samantha letter grade is #{letter_grade(averages(samantha_scores))}"
puts "Matt letter grade is #{letter_grade(averages(matt_scores))}"

def rankings(students)
  students.each_with_index do |student, index|
    puts "#{index + 1}. #{student}"
  end
end

rankings(['Johnny', 'Jane', 'Sally', 'Elizabeth', 'Michael'])
