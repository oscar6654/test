# YOUR CODE HERE
def plus_two(number)
  result = number + 2
  return result
end

def subtract_or_multiply_by_two(number)
  if number < 0
    result = number - 2
  elsif number >= 0
    result = number * 2
  end
  return result
end

def repeat_last_word(word)
  result = word.split(" ")
  return word + " " + result[-1]
end

def return_value_of_type(word)
  if word.include?('string')
    return "String to be a kind of String"
  elsif word.include?(':fixnum')
    return 2
  else
    return "input does not match any Ruby class"
  end
end

def add_five_and_ten(array)
  array << 5
  array << 10
  return array
end
